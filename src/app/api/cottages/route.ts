import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const cottages = await prisma.cottage.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        images: true,
        x: true,
        y: true,
      },
    });

    const housesWithCoords = cottages.map(house => ({
      ...house,
      coords: { x: house.x, y: house.y },
    }));

    return NextResponse.json(housesWithCoords);
  } catch (error) {
    console.error('Failed to fetch cottages:', error);
    return NextResponse.json({ error: 'Failed to fetch cottages' }, { status: 500 });
  }
}
