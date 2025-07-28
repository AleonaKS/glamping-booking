// src/app/cottages/[id]/availability/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const cottageId = Number(params.id);
  
  //   const resolvedParams = await params;
  // const cottageId = Number(resolvedParams.id);
  if (isNaN(cottageId)) {
    return NextResponse.json({ error: 'Invalid cottage id' }, { status: 400 });
  }
    // Получаем все бронирования для коттеджа, кроме отмененных
    const bookings = await prisma.booking.findMany({
      where: {
        cottageId,
        status: { not: 'CANCELLED' },
      },
      select: {
        startDate: true,
        endDate: true,
      },
    });

    // Возвращаем массив интервалов с датами
    // Можно возвращать как есть, клиент обработает
    return NextResponse.json({ bookings });
  } catch (error) {
    console.error('Error fetching availability:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
