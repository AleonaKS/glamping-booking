// src/app/cottages/[id]/booking/success/page.tsx 
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Home, Mail, Phone, Calendar, User } from 'lucide-react';
import styles from './success.module.css';
import { prisma } from '@/lib/prisma';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

type Props = {
  searchParams: {
    id?: string;
    cottageId?: string;
    startDate?: string;
    endDate?: string;
    guestName?: string;
    guestEmail?: string;
    guestPhone?: string;
  };
};

function formatDate(dateString?: string) {
  if (!dateString) return '-';
  try {
    return format(new Date(dateString), 'd MMMM yyyy', { locale: ru });
  } catch {
    return dateString;
  }
}

function formatPhoneDisplay(phone?: string) {
  if (!phone) return '+7 (XXX) XXX-XX-XX';
  // Пример простого форматирования, подкорректируйте под ваш формат
  return phone.replace(/^(\+7)(\d{3})(\d{3})(\d{2})(\d{2})$/, '\$1 (\$2) \$3-\$4-\$5');
}

function calculateDaysCount(startDate?: string, endDate?: string) {
  if (!startDate || !endDate) return 0;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffMs = end.getTime() - start.getTime();
  return Math.max(Math.ceil(diffMs / (1000 * 60 * 60 * 24)), 0);
}

export default async function BookingSuccess({ searchParams }: Props) {
  // Преобразуем cottageId в число
  const cottageIdNum = searchParams.cottageId ? Number(searchParams.cottageId) : undefined;

  if (!cottageIdNum) {
    return <div>Некорректный ID коттеджа</div>;
  }

  // Получаем коттедж из базы (предполагается, что prisma импортирован и настроен)
  const cottage = await prisma.cottage.findUnique({
    where: { id: cottageIdNum },
  });

  if (!cottage) {
    return <div>Коттедж не найден</div>;
  }

  const daysCount = calculateDaysCount(searchParams.startDate, searchParams.endDate);


  return (
    <div className={styles.container}>
      <div className={styles.checkmark}>
        <CheckCircle className={styles.checkIcon} />
      </div>

      <h1 className={styles.title}>Бронирование подтверждено!</h1>
      <p className={styles.subtitle}>Мы отправили детали бронирования на вашу электронную почту</p>

      <div className={styles.detailsCard}>
        <h2 className={styles.detailsTitle}>Детали бронирования</h2>

        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Номер брони:</span>
          <span className={styles.detailValue}>#{searchParams.id || '-'}</span>
        </div>

        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Коттедж:</span>
          <div>
            <span className={styles.detailValue}>{cottage.title}</span>
            {cottage.description && (
              <p className={styles.cottageDescription}>{cottage.description}</p>
            )}
          </div>
        </div>

        <div className={styles.detailItem}>
          <Calendar className={styles.detailIcon} />
          <div>
            <div className={styles.detailDate}>
              {formatDate(searchParams.startDate)} {' → '} {formatDate(searchParams.endDate)}
            </div>
            <div className={styles.detailDays}>
              {daysCount} {daysCount === 1 ? 'день' : daysCount > 1 && daysCount < 5 ? 'дня' : 'дней'}
            </div>
          </div>
        </div>

        {(searchParams.guestName || searchParams.guestEmail || searchParams.guestPhone) && (
          <div className={styles.guestInfo}>
            <h3 className={styles.sectionTitle}>Ваши данные</h3>
            {searchParams.guestName && (
              <div className={styles.detailItem}>
                <User className={styles.detailIcon} />
                <span>{searchParams.guestName}</span>
              </div>
            )}
            {searchParams.guestEmail && (
              <div className={styles.detailItem}>
                <Mail className={styles.detailIcon} />
                <span>{searchParams.guestEmail}</span>
              </div>
            )}
            {searchParams.guestPhone && (
              <div className={styles.detailItem}>
                <Phone className={styles.detailIcon} />
                <span>{formatPhoneDisplay(searchParams.guestPhone)}</span>
              </div>
            )}
          </div>
        )}

        <div className={styles.contactInfo}>
          <h3 className={styles.sectionTitle}>Контактная информация</h3>
          <div className={styles.contactItem}>
            <Mail className={styles.contactIcon} />
            <span>booking@example.com</span>
          </div>
          <div className={styles.contactItem}>
            <Phone className={styles.contactIcon} />
            <span>+7 (123) 456-78-90</span>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <Link href={`/cottages/${cottage.id}`} className={styles.button}>
          <ArrowLeft className={styles.buttonIcon} />
          Забронировать снова
        </Link>
        <Link href="/" className={`${styles.button} ${styles.homeButton}`}>
          <Home className={styles.buttonIcon} />
          На главную
        </Link>
      </div>
    </div>
  );
}
