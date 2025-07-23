// src/app/api/bookings/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

import { Prisma } from '@prisma/client';

export async function POST(req: Request) {
  try {
    const { cottageId, guestName, guestEmail, startDate, endDate } = await req.json();

    // Проверка занятости дат
    const existingBooking = await prisma.booking.findFirst({
      where: {
        cottageId: Number(cottageId),
        OR: [
          { 
            startDate: { lte: new Date(endDate) }, 
            endDate: { gte: new Date(startDate) } 
          },
        ],
      },
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: "Домик уже занят на эти даты" },
        { status: 400 }
      );
    }

    // Создание брони с явным указанием типа
    const booking = await prisma.booking.create({
      data: {
        cottageId: Number(cottageId),
        guestName: String(guestName),
        guestEmail: String(guestEmail),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      } as Prisma.BookingUncheckedCreateInput,
    });

    return NextResponse.json(booking, { status: 201 });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: "Ошибка при бронировании" },
      { status: 500 }
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
