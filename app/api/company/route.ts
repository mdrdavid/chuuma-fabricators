import { connectDB } from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'

export async function GET() {
  try {
    const db = await connectDB()
    const collection = db.collection('company_info')

    let companyInfo = await collection.findOne({})
    if (!companyInfo) {
      // Return default company info if not found
      companyInfo = {
        _id: new ObjectId(),
        companyName: 'Chuuma Fabricators',
        tagline: 'Your trusted metal workshop in Wabigalo, Mityana',
        mainDescription:
          'Chuuma Fabricators is a premier metal workshop located in Wabigalo, Mityana, specializing in custom metal fabrication for residential and commercial projects.',
        storyTitle: 'Quality Metalwork Since Day One',
        storyContent: [
          'Chuuma Fabricators is a premier metal workshop located in Wabigalo, Mityana, specializing in custom metal fabrication for residential and commercial projects.',
          'We pride ourselves on delivering high-quality gates, doors, windows, roofing, and custom metalwork that combines durability with aesthetic appeal.',
          'Every project is handled with precision and care, ensuring that our clients receive metalwork that stands the test of time.',
        ],
        mission:
          'To provide exceptional metal fabrication services that enhance the security, beauty, and value of properties throughout Mityana and beyond.',
        vision:
          'To be the most trusted and reliable metal fabrication workshop in the region, known for quality, innovation, and customer satisfaction.',
        values:
          'Quality craftsmanship, honest pricing, timely delivery, customer satisfaction, and continuous improvement in our work.',
        features: [
          {
            title: 'Expert Craftsmanship',
            description: 'Skilled artisans with years of metalworking experience',
            icon: 'Hammer',
          },
          {
            title: 'Quality Materials',
            description: 'We use only premium-grade steel and metals',
            icon: 'Award',
          },
          {
            title: 'Local Service',
            description: 'Based in Wabigalo, Mityana, serving the community',
            icon: 'MapPin',
          },
          {
            title: 'Customer Focus',
            description: 'Dedicated to exceeding client expectations',
            icon: 'Users',
          },
        ],
        workshopImages: ['/images/about-equipment.jpg', '/images/about-welding.jpg', '/images/about-products.jpg'],
        workshopDescription: 'Our state-of-the-art workshop equipped with modern tools and machinery',
        location: 'Wabigalo, Mityana',
      }
    }

    return NextResponse.json(companyInfo)
  } catch (error) {
    console.error('Failed to fetch company info:', error)
    return NextResponse.json({ error: 'Failed to fetch company info' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const db = await connectDB()
    const collection = db.collection('company_info')

    const data = await request.json()

    const result = await collection.updateOne(
      {},
      {
        $set: {
          ...data,
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    )

    return NextResponse.json(result)
  } catch (error) {
    console.error('Failed to update company info:', error)
    return NextResponse.json({ error: 'Failed to update company info' }, { status: 500 })
  }
}
