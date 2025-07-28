// src/app/cottages/[id]/page.tsx
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import CottageDetails from './CottageDetails';
import CottagePageClient from '@/components/CottagePageClient';

interface Params {
  id: string;
}

interface CottageWithReviews {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice?: number | null;
  bedrooms: number;
  maxGuests: number;
  amenities: string[];
  rules: string[];
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  coverImage?: string | null;
  reviews: {
    id: number;
    createdAt: Date;
    userId: number | null;
    userName: string;
    rating: number;
    comment: string | null;
    isApproved: boolean;
  }[];
}

export default async function CottagePage({ params }: { params: Params }) {
  const id = Number(params.id);
  if (isNaN(id)) notFound();

  const cottage = await prisma.cottage.findUnique({
    where: { id },
    include: {
      reviews: {
        where: { isApproved: true },
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  if (!cottage) notFound();

  // Передаем данные коттеджа в клиентский компонент
  return (
    <div>
      <CottageDetails cottage={cottage} />
      <CottagePageClient cottage={cottage} />
    </div>
  );
}


//   return (
//     <main className={styles.container}>
//       <h1>{cottage.title}</h1>

//       {cottage.coverImage && (
//         <img src={cottage.coverImage} alt={cottage.title} className={styles.coverImage} />
//       )}

//       <p>{cottage.description}</p>

//       <p><strong>Цена:</strong> ${cottage.price.toFixed(2)}</p>
//       {cottage.discountPrice && (
//         <p><strong>Цена со скидкой:</strong> ${cottage.discountPrice.toFixed(2)}</p>
//       )}

//       <p><strong>Количество спален:</strong> {cottage.bedrooms}</p>
//       <p><strong>Максимум гостей:</strong> {cottage.maxGuests}</p>

//       {cottage.amenities.length > 0 && (
//         <>
//           <h2>Удобства</h2>
//           <ul>
//             {cottage.amenities.map((a, i) => (
//               <li key={i}>{a}</li>
//             ))}
//           </ul>
//         </>
//       )}

//       {cottage.rules.length > 0 && (
//         <>
//           <h2>Правила</h2>
//           <ul>
//             {cottage.rules.map((r, i) => (
//               <li key={i}>{r}</li>
//             ))}
//           </ul>
//         </>
//       )}

//       {cottage.address && (
//         <p><strong>Адрес:</strong> {cottage.address}</p>
//       )}

//       {cottage.latitude && cottage.longitude && (
//         <p>
//           <strong>Координаты:</strong> {cottage.latitude}, {cottage.longitude}
//         </p>
//       )}

//       <section className={styles.reviews}>
//         <h2>Отзывы</h2>
//         {cottage.reviews.length === 0 && <p>Пока нет отзывов.</p>}
//         {cottage.reviews.map((review) => (
//           <div key={review.id} className={styles.review}>
//             <p><strong>{review.userName}</strong> — рейтинг: {review.rating}/5</p>
//             {review.comment && <p>{review.comment}</p>}
//             <small>{new Date(review.createdAt).toLocaleDateString()}</small>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }
