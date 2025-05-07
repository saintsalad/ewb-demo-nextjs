// app/api/surveys/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const surveys = await prisma.appSurvey.findMany({
      orderBy: { AccomplishedDate: 'desc' },
    //   select: {
    //     Id: true,
    //     AccomplishedDate: true,
    //   },
    });

    return NextResponse.json({ data: surveys });
  } catch (error) {
    console.error('Error fetching surveys:', error);
    return NextResponse.json(
      { error: 'Failed to fetch surveys' },
      { status: 500 }
    );
  }
}
