import { MongoClient, ObjectId } from 'mongodb';
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
    // Parse the request body
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    const client = await connectToDatabase();
    const db = client.db('client-1');
    const collection = db.collection('messages');

    // Convert id to ObjectId and delete the document
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Message not found or already deleted' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Your message has been deleted!', ok: true },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: 'Unable to delete message', details: e.message },
      { status: 500 }
    );
  }
}
