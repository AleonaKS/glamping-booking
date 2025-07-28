import { Cottage } from '@prisma/client';
import styles from '@/components/booking.module.css';



interface CottageDetailsProps {
  cottage: Cottage & {
    reviews: {
      id: number;
      createdAt: Date;
      userId: number | null;
      userName: string;
      rating: number;
      comment: string | null;
      isApproved: boolean;
    }[];
  };
}

export default function CottageDetails({ cottage }: CottageDetailsProps) {
  return (
    <div className={styles.container}>
      <h1>{cottage.title}</h1>
      
      {cottage.coverImage && (
        <img 
          src={cottage.coverImage} 
          alt={cottage.title} 
          className={styles.coverImage} 
        />
      )}

      <p>{cottage.description}</p>

      <p><strong>Цена:</strong> {cottage.price} ₽/ночь</p>
      {cottage.discountPrice && (
        <p><strong>Цена со скидкой:</strong> {cottage.discountPrice} ₽/ночь</p>
      )}

      <p><strong>Количество спален:</strong> {cottage.bedrooms}</p>
      <p><strong>Максимум гостей:</strong> {cottage.maxGuests}</p>

      {cottage.amenities.length > 0 && (
        <>
          <h2>Удобства</h2>
          <ul>
            {cottage.amenities.map((amenity, i) => (
              <li key={i}>{amenity}</li>
            ))}
          </ul>
        </>
      )}

      {cottage.rules.length > 0 && (
        <>
          <h2>Правила</h2>
          <ul>
            {cottage.rules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </>
      )}

      {cottage.address && (
        <p><strong>Адрес:</strong> {cottage.address}</p>
      )}

      {cottage.latitude && cottage.longitude && (
        <p>
          <strong>Координаты:</strong> {cottage.latitude}, {cottage.longitude}
        </p>
      )}

      <section className={styles.reviews}>
        <h2>Отзывы</h2>
        {cottage.reviews.length === 0 ? (
          <p>Пока нет отзывов.</p>
        ) : (
          cottage.reviews.map((review) => (
            <div key={review.id} className={styles.review}>
              <p>
                <strong>{review.userName}</strong> — рейтинг: {review.rating}/5
              </p>
              {review.comment && <p>{review.comment}</p>}
              <small>
                {new Date(review.createdAt).toLocaleDateString()}
              </small>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
