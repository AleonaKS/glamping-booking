// src/components/BookingSuccessContent.tsx
'use client';

import { CheckCircle, Mail, Phone, Calendar, User } from 'lucide-react';
import styles from './success.module.css';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface BookingSuccessContentProps {
  booking: {
    id?: string;
    cottageId: number;
    startDate: string;
    endDate: string;
    guestName?: string;
    guestEmail?: string;
    guestPhone?: string;
    cottageTitle: string;
    cottageDescription?: string | null;
  };
  onClose: () => void;
}

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
  return phone.replace(/^(\+7)(\d{3})(\d{3})(\d{2})(\d{2})$/, '\$1 (\$2) \$3-\$4-\$5');
}

function calculateDaysCount(startDate?: string, endDate?: string) {
  if (!startDate || !endDate) return 0;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffMs = end.getTime() - start.getTime();
  return Math.max(Math.ceil(diffMs / (1000 * 60 * 60 * 24)), 0);
}

export default function BookingSuccessContent({ booking, onClose }: BookingSuccessContentProps) {
  const daysCount = calculateDaysCount(booking.startDate, booking.endDate);

  return (
    <div className={styles.container}>
      <button onClick={onClose} aria-label="Закрыть" className={styles.closeButton}>×</button>
      <div className={styles.checkmark}>
        <CheckCircle className={styles.checkIcon} />
      </div>

      <h1 className={styles.title}>Бронирование подтверждено!</h1>
      <p className={styles.subtitle}>Мы отправили детали бронирования на вашу электронную почту</p>

      <div className={styles.detailsCard}>
        <h2 className={styles.detailsTitle}>Детали бронирования</h2>

        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Номер брони:</span>
          <span className={styles.detailValue}>#{booking.id || '-'}</span>
        </div>

        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Домик:</span>
          <div>
            <span className={styles.detailValue}>{booking.cottageTitle}</span>
            {booking.cottageDescription && (
              <p className={styles.cottageDescription}>{booking.cottageDescription}</p>
            )}
          </div>
        </div>

        <div className={styles.detailItem}>
          <Calendar className={styles.detailIcon} />
          <div>
            <div className={styles.detailDate}>
              {formatDate(booking.startDate)} {' → '} {formatDate(booking.endDate)}
            </div>
            <div className={styles.detailDays}>
              {daysCount} {daysCount === 1 ? 'день' : daysCount > 1 && daysCount < 5 ? 'дня' : 'дней'}
            </div>
          </div>
        </div>

        {(booking.guestName || booking.guestEmail || booking.guestPhone) && (
          <div className={styles.guestInfo}>
            <h3 className={styles.sectionTitle}>Ваши данные</h3>
            {booking.guestName && (
              <div className={styles.detailItem}>
                <User className={styles.detailIcon} />
                <span>{booking.guestName}</span>
              </div>
            )}
            {booking.guestEmail && (
              <div className={styles.detailItem}>
                <Mail className={styles.detailIcon} />
                <span>{booking.guestEmail}</span>
              </div>
            )}
            {booking.guestPhone && (
              <div className={styles.detailItem}>
                <Phone className={styles.detailIcon} />
                <span>{formatPhoneDisplay(booking.guestPhone)}</span>
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
    </div>
  );
}
