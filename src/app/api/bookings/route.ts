// src/app/api/bookings/route.ts 
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

import { Prisma } from '@prisma/client';
import { bookingSchema } from '@/lib/validators';
import { BookingStatus } from '@prisma/client';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const statusParam = searchParams.get('status');
    
    // Безопасное приведение типа статуса
    const status = statusParam as BookingStatus | null;
    
    const where: Prisma.BookingWhereInput = status 
      ? { status: { equals: status } } 
      : {};

    const [bookings, total] = await prisma.$transaction([
      prisma.booking.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        include: {
          cottage: { select: { title: true, price: true } },
          promoCode: { select: { code: true, discount: true } }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.booking.count({ where })
    ]);

    return NextResponse.json({
      data: bookings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Failed to fetch bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' }, 
      { status: 500 }
    );
  }
}



// src/app/api/bookings/route.ts (POST)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = bookingSchema.parse(body);

    // Проверка доступности дат (исключаем CANCELLED)
    const conflictingBooking = await prisma.booking.findFirst({
      where: {
        cottageId: validated.cottageId,
        status: { not: 'CANCELLED' },
        OR: [
          {
            startDate: { lte: new Date(validated.endDate) },
            endDate: { gte: new Date(validated.startDate) },
          }
        ]
      }
    });

    if (conflictingBooking) {
      return NextResponse.json(
        { error: 'Выбранные даты уже заняты' },
        { status: 409 }
      );
    }

    // Проверка коттеджа
    const cottage = await prisma.cottage.findUnique({
      where: { id: validated.cottageId }
    });

    if (!cottage) {
      return NextResponse.json(
        { error: 'Коттедж не найден' },
        { status: 404 }
      );
    }

    // Проверка промокода
    let promoCodeId: number | undefined;
    let totalPrice = cottage.price * (
      (new Date(validated.endDate).getTime() - new Date(validated.startDate).getTime()) / (1000 * 60 * 60 * 24)
    );

    if (validated.promoCode) {
      const promoCode = await prisma.promoCode.findFirst({
        where: {
          code: validated.promoCode,
          isActive: true,
          validFrom: { lte: new Date() },
          validUntil: { gte: new Date() }
        }
      });

      if (promoCode) {
        totalPrice = totalPrice * (1 - promoCode.discount / 100);
        promoCodeId = promoCode.id;
      }
    }

    // Создаем бронь
    const bookingData: Prisma.BookingCreateInput = {
      cottage: { connect: { id: validated.cottageId } },
      startDate: new Date(validated.startDate),
      endDate: new Date(validated.endDate),
      guestName: validated.guestName,
      guestEmail: validated.guestEmail,
      guestPhone: validated.guestPhone,
      adults: validated.adults,
      children: validated.children,
      totalPrice,
      status: 'PENDING',
      paymentStatus: 'UNPAID',
    };

    if (promoCodeId) {
      bookingData.promoCode = { connect: { id: promoCodeId } };
    }

    const booking = await prisma.booking.create({
      data: bookingData,
    });

    return NextResponse.json({ id: booking.id, message: 'Бронирование успешно создано' }, { status: 201 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Ошибка бронирования' },
      { status: 400 }
    );
  }
}







// // Добавьте в начало route.ts
// import { z } from 'zod';

// const bookingSchema = z.object({
//   cottageId: z.number(),
//   startDate: z.string().datetime(), // ISO строка
//   endDate: z.string().datetime(),
//   guestName: z.string().min(2),
//   guestEmail: z.string().email(),
// });

// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// // GET /api/bookings - Получить все бронирования
// export async function GET() {
//   try {
//     const bookings = await prisma.booking.findMany({
//       include: { cottage: true }, // Подгружаем связанный коттедж
//     });
//     return NextResponse.json(bookings);
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to fetch bookings' },
//       { status: 500 }
//     );
//   }
// }

// // POST /api/bookings - Создать новое бронирование
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const validatedData = bookingSchema.parse(body); // Валидация
    
//     const newBooking = await prisma.booking.create({
//       data: {
//         ...validatedData,
//         startDate: new Date(validatedData.startDate),
//         endDate: new Date(validatedData.endDate),
//       },
//     });
//     return NextResponse.json(newBooking, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: error instanceof Error ? error.message : 'Validation failed' },
//       { status: 400 }
//     );
//   }
// }

// // PATCH /api/bookings/:id - Обновить бронирование
// export async function PATCH(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const body = await request.json();
//     const updatedBooking = await prisma.booking.update({
//       where: { id: Number(params.id) },
//       data: body,
//     });
//     return NextResponse.json(updatedBooking);
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to update booking' },
//       { status: 500 }
//     );
//   }
// }

// // DELETE /api/bookings/:id - Удалить бронирование
// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await prisma.booking.delete({
//       where: { id: Number(params.id) },
//     });
//     return new NextResponse(null, { status: 204 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to delete booking' },
//       { status: 500 }
//     );
//   }
// }
