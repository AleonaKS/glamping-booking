import { z } from 'zod';

export const bookingSchema = z.object({
  cottageId: z.number().min(1, 'Выберите коттедж'),
  guestName: z.string().min(2, 'Минимум 2 символа').max(100),
  guestEmail: z.string().email('Некорректный email'),
  guestPhone: z.string().min(11, 'Некорректный телефон').max(15),
  startDate: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: 'Некорректная дата начала'
  }),
  endDate: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: 'Некорректная дата окончания'
  }),
  adults: z.number().min(1).max(10),
  children: z.number().min(0).max(10),
  promoCode: z.string().optional()
}).refine(data => new Date(data.endDate) > new Date(data.startDate), {
  message: 'Дата окончания должна быть позже даты начала',
  path: ['endDate']
});
