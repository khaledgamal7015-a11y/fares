import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { GridFSBucket } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db('fares-website');
    const bucket = new GridFSBucket(db, { bucketName: 'photos' });
    await bucket.delete(new ObjectId(id));
    return NextResponse.json({ message: 'File deleted successfully' });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to delete file' }, { status: 500 });
  }
}
