import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db('fares-website');
    
    // Try to find by numeric ID first (for seeded data), then by ObjectId
    let service = await db.collection('services').findOne({ id: parseInt(id) });
    
    if (!service) {
      // If not found by numeric ID, try ObjectId
      try {
        service = await db.collection('services').findOne({ _id: new ObjectId(id) });
      } catch (objectIdError) {
        // If ObjectId conversion fails, service remains null
        console.log('ObjectId conversion failed, trying other methods');
      }
    }
    
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

    // Try to update by numeric ID first, then by ObjectId
    let result = await db.collection('services').updateOne(
      { id: parseInt(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      // If not found by numeric ID, try ObjectId
      try {
        result = await db.collection('services').updateOne(
          { _id: new ObjectId(id) },
          { $set: updateData }
        );
      } catch (objectIdError) {
        console.log('ObjectId conversion failed for update');
      }
    }

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

    // Try to delete by numeric ID first, then by ObjectId
    let result = await db.collection('services').deleteOne({ id: parseInt(id) });

    if (result.deletedCount === 0) {
      // If not found by numeric ID, try ObjectId
      try {
        result = await db.collection('services').deleteOne({ _id: new ObjectId(id) });
      } catch (objectIdError) {
        console.log('ObjectId conversion failed for delete');
      }
    }

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to delete service' }, { status: 500 });
  }
}
