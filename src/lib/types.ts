import { Prisma } from '@prisma/client';

export type Cottage = Prisma.CottageGetPayload<{
  include: { reviews: true }
}>;

export interface BookingInterval {
  startDate: string;
  endDate: string;
}

export type Booking = Prisma.BookingGetPayload<{
  include: { cottage: true, promoCode: true }
}>;
