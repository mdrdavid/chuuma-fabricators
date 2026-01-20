import { getDatabase } from '@/lib/mongodb';
import { Project } from '@/lib/models';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await getDatabase();
    const projects = await db
      .collection('projects')
      .find({})
      .sort({ order: 1 })
      .toArray();

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Get projects error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDatabase();
    const project: Project = await request.json();

    project.createdAt = new Date();
    project.updatedAt = new Date();

    const result = await db.collection('projects').insertOne(project);

    return NextResponse.json(
      { _id: result.insertedId, ...project },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
