import { getDatabase } from '@/lib/mongodb';
import { Service } from '@/lib/models';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await getDatabase();
    const services = await db
      .collection('services')
      .find({})
      .sort({ order: 1 })
      .toArray();

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error('Get services error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDatabase();
    const service: Service = await request.json();

    service.createdAt = new Date();
    service.updatedAt = new Date();

    const result = await db.collection('services').insertOne(service);

    return NextResponse.json(
      { _id: result.insertedId, ...service },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create service error:', error);
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}
