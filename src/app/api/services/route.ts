import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('fares-website');
    const services = await db.collection('services').find({}).toArray();
    return NextResponse.json(services);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to fetch services' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('fares-website');
    const body = await request.json();

    const service = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('services').insertOne(service);
    return NextResponse.json(result, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to create service' }, { status: 500 });
  }
}
