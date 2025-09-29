import { NextRequest, NextResponse } from 'next/server';
import { GridFSBucket } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
): Promise<NextResponse> {
  try {
    const client = await clientPromise;
    const db = client.db('fares-website');
    const bucket = new GridFSBucket(db, { bucketName: 'photos' });

    // Decode the filename in case it has special characters
    const filename = decodeURIComponent(params.filename);

    // Check if file exists first
    const files = await bucket.find({ filename }).toArray();
    if (files.length === 0) {
      return NextResponse.json({ error: 'Photo not found' }, { status: 404 });
    }

    const file = files[0];
    const downloadStream = bucket.openDownloadStreamByName(filename);

    // Convert the stream to buffer
    const chunks: Uint8Array[] = [];

    return new Promise<NextResponse>((resolve, reject) => {
      downloadStream.on('data', (chunk: Uint8Array) => {
        chunks.push(chunk);
      });

      downloadStream.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const contentType = file.contentType || 'image/jpeg';

        resolve(new NextResponse(buffer, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        }));
      });

      downloadStream.on('error', (error: Error) => {
        console.error('Download stream error:', error);
        reject(NextResponse.json({ error: 'Unable to fetch photo' }, { status: 500 }));
      });
    });
  } catch (e) {
    console.error('Photo API error:', e);
    return NextResponse.json({ error: 'Unable to fetch photo' }, { status: 500 });
  }
}