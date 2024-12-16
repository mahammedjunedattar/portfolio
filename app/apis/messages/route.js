import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI;

let cachedClient = null;

async function connectToDatabase() {
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }

  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = await client.connect();
  return cachedClient;
}

export async function POST(request) {
  try {
    const data = await request.json();
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db('client-1');
    const collection = db.collection('messages');

    await collection.insertOne({
      name: data.name,
      email: data.email,
      Number : parseInt(data.number),
      message: data.message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: 'Your message has been received!', ok: true },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: 'Unable to save message', details: e.message },
      { status: 500 }
    );
  }
}
