import { getDatabase } from '@/lib/mongodb';
import { Design } from '@/lib/models';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await getDatabase();
    const designs = await db
      .collection('designs')
      .find({})
      .sort({ order: 1 })
      .toArray();

    return NextResponse.json(designs, { status: 200 });
  } catch (error) {
    console.error('Get designs error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch designs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDatabase();
    const design: Design = await request.json();

    design.createdAt = new Date();
    design.updatedAt = new Date();

    const result = await db.collection('designs').insertOne(design);

    return NextResponse.json(
      { _id: result.insertedId, ...design },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create design error:', error);
    return NextResponse.json(
      { error: 'Failed to create design' },
      { status: 500 }
    );
  }
}
