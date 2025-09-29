import { NextResponse } from 'next/server';
import { GridFSBucket } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { Readable } from 'stream';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('fares-website');
    const bucket = new GridFSBucket(db, { bucketName: 'photos' });
    const files = await bucket.find().toArray();
    return NextResponse.json(files);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to fetch photos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('fares-website');
    const bucket = new GridFSBucket(db, { bucketName: 'photos' });
    const data = await request.formData();
    const file = data.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const stream = Readable.from(buffer);

    const uploadStream = bucket.openUploadStream(file.name, {
      contentType: file.type,
    });

    await new Promise((resolve, reject) => {
      stream.pipe(uploadStream).on('finish', resolve).on('error', reject);
    });

    return NextResponse.json({ 
      message: 'File uploaded successfully',
      filename: file.name,
      id: uploadStream.id.toString()
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to upload file' }, { status: 500 });
  }
}
