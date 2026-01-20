import { getDatabase } from '@/lib/mongodb';
import { Design } from '@/lib/models';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDatabase();

    const design = await db.collection('designs').findOne({
      _id: new ObjectId(id),
    });

    if (!design) {
      return NextResponse.json(
        { error: 'Design not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(design, { status: 200 });
  } catch (error) {
    console.error('Get design error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch design' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDatabase();
    const data: Partial<Design> = await request.json();

    data.updatedAt = new Date();

    const result = await db.collection('designs').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnDocument: 'after' }
    );

    if (!result.value) {
      return NextResponse.json(
        { error: 'Design not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(result.value, { status: 200 });
  } catch (error) {
    console.error('Update design error:', error);
    return NextResponse.json(
      { error: 'Failed to update design' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDatabase();

    const result = await db.collection('designs').deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Design not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Design deleted' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete design error:', error);
    return NextResponse.json(
      { error: 'Failed to delete design' },
      { status: 500 }
    );
  }
}
