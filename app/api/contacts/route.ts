import { getDatabase } from '@/lib/mongodb';
import { Contact } from '@/lib/models';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await getDatabase();
    const contacts = await db
      .collection('contacts')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error('Get contacts error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDatabase();
    const contact: Contact = await request.json();

    contact.createdAt = new Date();
    contact.status = 'new';

    const result = await db.collection('contacts').insertOne(contact);

    return NextResponse.json(
      { _id: result.insertedId, ...contact },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create contact error:', error);
    return NextResponse.json(
      { error: 'Failed to save contact' },
      { status: 500 }
    );
  }
}
