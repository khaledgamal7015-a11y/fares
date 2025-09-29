import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db('fares-website');
    const service = await db.collection('services').findOne({ _id: new ObjectId(id) });
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json(service);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to fetch service' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db('fares-website');
    const body = await request.json();

    const updateData = {
      ...body,
      updatedAt: new Date()
    };

    const result = await db.collection('services').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Service updated successfully' });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to update service' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db('fares-website');

    const result = await db.collection('services').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to delete service' }, { status: 500 });
  }
}
