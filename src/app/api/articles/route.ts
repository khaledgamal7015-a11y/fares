import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('fares-website');
    const articles = await db.collection('articles').find({}).toArray();
    return NextResponse.json(articles);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to fetch articles' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('fares-website');
    const body = await request.json();
    const result = await db.collection('articles').insertOne(body);
    return NextResponse.json(result, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to create article' }, { status: 500 });
  }
}
