import { Prisma } from '@prisma/client';

export interface Cottage extends Prisma.CottageGetPayload<{
  include: { reviews: true }
}> {}

export interface BookingInterval {
  startDate: string;
  endDate: string;
}

export interface Booking extends Prisma.BookingGetPayload<{
  include: { cottage: true, promoCode: true }
}> {}
