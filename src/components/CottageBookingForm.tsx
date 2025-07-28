// src/components/CottageBookingForm.tsx 
'use client';

import { useState, useEffect, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import toast from 'react-hot-toast';
import { Calendar, User, Mail, Phone } from 'lucide-react';

import styles from './booking.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';



registerLocale('ru', ru);

interface BookingInterval {
  startDate: string;
  endDate: string;
}

interface Cottage {
  id: number;
  title: string;
}

interface BookingFormData {
  cottageId: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  startDate: Date | null;
  endDate: Date | null;
  adults: number;
  children: number;
}

interface CottageBookingFormProps {
  cottageId: number;
  onSuccess?: () => void; // callback при успешном бронировании
}

export default function CottageBookingForm({ cottageId, onSuccess }: CottageBookingFormProps) {
  // внутри компонента
  const router = useRouter();
  const [cottages, setCottages] = useState<Cottage[]>([]);
  const [loadingCottages, setLoadingCottages] = useState(true);

  const [busyIntervals, setBusyIntervals] = useState<BookingInterval[]>([]);
  const [loadingBusyDates, setLoadingBusyDates] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<BookingFormData>({
    cottageId,
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    startDate: null,
    endDate: null,
    adults: 1,
    children: 0,
  });

  useEffect(() => {
    async function fetchCottages() {
      try {
        const res = await fetch('/api/cottages');
        if (!res.ok) throw new Error('Failed to fetch cottages');
        const data: Cottage[] = await res.json();
        setCottages(data);
      } catch (error) {
        console.error(error);
        setCottages([]);
      } finally {
        setLoadingCottages(false);
      }
    }
    fetchCottages();
  }, []);

  useEffect(() => {
    if (!cottageId) return;

    async function fetchBusyDates() {
      setLoadingBusyDates(true);
      try {
        const res = await fetch(`/api/cottages/${cottageId}/availability`);
        if (!res.ok) {
          const errorData = await res.json();
          console.error('Failed to load busy dates:', errorData.error);
          setBusyIntervals([]);
          return;
        }
        const data = await res.json();
        setBusyIntervals(data.bookings || []);
      } catch (error) {
        console.error('Error loading busy dates:', error);
        setBusyIntervals([]);
      } finally {
        setLoadingBusyDates(false);
      }
    }

    fetchBusyDates();
  }, [cottageId]);

  const cottage = cottages.find(c => c.id === cottageId);

  if (loadingCottages) return <div>Загрузка коттеджей...</div>;
  if (!cottage) return <div>Коттедж не найден</div>;

  function isDateBusy(date: Date): boolean {
    return busyIntervals.some(({ startDate, endDate }) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      return (
        d >= new Date(start.getFullYear(), start.getMonth(), start.getDate()) &&
        d <= new Date(end.getFullYear(), end.getMonth(), end.getDate())
      );
    });
  }

  const dayClassName = (date: Date) => (isDateBusy(date) ? styles['busy-date'] : '');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    let formattedInput = '';

    if (input.length > 0) {
      const firstDigit = input[0];
      if (firstDigit === '7' || firstDigit === '8') {
        formattedInput = `+7 (${input.substring(1, 4)}`;
        if (input.length > 4) {
          formattedInput += `) ${input.substring(4, 7)}`;
          if (input.length > 7) {
            formattedInput += `-${input.substring(7, 9)}`;
            if (input.length > 9) {
              formattedInput += `-${input.substring(9, 11)}`;
            }
          }
        }
      } else {
        formattedInput = input;
      }
    }

    setFormData(prev => ({ ...prev, guestPhone: formattedInput }));
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Backspace' && formData.guestPhone.replace(/\D/g, '').length >= 11) {
      e.preventDefault();
    }
  };

  const handlePhoneFocus = () => {
    if (!formData.guestPhone) {
      setFormData(prev => ({ ...prev, guestPhone: '+7 (' }));
    }
  };

  const handlePhoneBlur = () => {
    if (formData.guestPhone.replace(/\D/g, '').length < 11) {
      setFormData(prev => ({ ...prev, guestPhone: '' }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]:
        name === 'cottageId' || name === 'adults' || name === 'children' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneDigits = formData.guestPhone.replace(/\D/g, '');
    if (phoneDigits.length < 11) {
      toast.error('Пожалуйста, введите полный номер телефона');
      return;
    }

    if (!formData.guestEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.guestEmail)) {
      toast.error('Пожалуйста, введите корректный email адрес');
      return;
    }

    if (!formData.guestName || formData.guestName.trim().length < 2) {
      toast.error('Пожалуйста, введите имя и фамилию');
      return;
    }

    if (!formData.startDate || !formData.endDate) {
      toast.error('Пожалуйста, выберите даты заезда и выезда');
      return;
    }

    if (formData.startDate >= formData.endDate) {
      toast.error('Дата выезда должна быть позже даты заезда');
      return;
    }

    const diffTime = Math.abs(formData.endDate.getTime() - formData.startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 30) {
      toast.error('Максимальный период бронирования - 30 дней');
      return;
    }

    setIsSubmitting(true);

try {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        guestPhone: phoneDigits,
        startDate: formData.startDate!.toISOString(),
        endDate: formData.endDate!.toISOString(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.error || `Ошибка сервера: ${response.status}`);
      setIsSubmitting(false);
      return;
    }

    toast.success('Бронирование успешно создано!');
    if (onSuccess) onSuccess();


    // Переход на страницу успеха с передачей параметров в query
    router.push(
      `/cottages/${cottageId}/booking/success?` +
      new URLSearchParams({
        id: data.id.toString(),
        cottageId: cottageId.toString(),
        startDate: formData.startDate!.toISOString(),
        endDate: formData.endDate!.toISOString(),
        guestName: formData.guestName,
        guestEmail: formData.guestEmail,
        guestPhone: formData.guestPhone,
      }).toString()
    );

  } catch (error) {
    toast.error('Ошибка соединения с сервером.');
    setIsSubmitting(false);
  }
};

  const filterPassedDate = (date: Date) => date >= new Date();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Бронирование коттеджа {cottage.title}</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <User className={styles.icon} />
            Ваше имя
          </label>
          <input
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Иван Иванов"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Mail className={styles.icon} />
            Email
          </label>
          <input
            type="email"
            name="guestEmail"
            value={formData.guestEmail}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="example@mail.com"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Phone className={styles.icon} />
            Телефон
          </label>
          <input
            type="tel"
            name="guestPhone"
            value={formData.guestPhone}
            onChange={handlePhoneChange}
            onKeyDown={handlePhoneKeyDown}
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
            ref={phoneInputRef}
            className={styles.input}
            placeholder="+7 (123) 456-78-90"
            maxLength={18}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Calendar className={styles.icon} />
            Дата заезда
          </label>
          <DatePicker
            selected={formData.startDate}
            onChange={date => setFormData(prev => ({ ...prev, startDate: date }))}
            selectsStart
            startDate={formData.startDate}
            endDate={formData.endDate}
            minDate={new Date()}
            filterDate={filterPassedDate}
            excludeDateIntervals={busyIntervals.map(interval => ({
              start: new Date(interval.startDate),
              end: new Date(interval.endDate),
            }))}
            dayClassName={dayClassName}
            placeholderText="Выберите дату"
            className={styles.input}
            required
            locale="ru"
            dateFormat="dd.MM.yyyy"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Calendar className={styles.icon} />
            Дата выезда
          </label>
          <DatePicker
            selected={formData.endDate}
            onChange={date => {
              if (date && formData.startDate && date > formData.startDate) {
                setFormData(prev => ({ ...prev, endDate: date }));
              }
            }}
            selectsEnd
            startDate={formData.startDate}
            endDate={formData.endDate}
            minDate={formData.startDate || new Date()}
            filterDate={filterPassedDate}
            excludeDateIntervals={busyIntervals.map(interval => ({
              start: new Date(interval.startDate),
              end: new Date(interval.endDate),
            }))}
            dayClassName={dayClassName}
            placeholderText="Выберите дату"
            className={styles.input}
            required
            locale="ru"
            dateFormat="dd.MM.yyyy"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Взрослые</label>
          <select
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            className={styles.input}
          >
            {[1, 2, 3, 4].map(num => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Дети</label>
          <select
            name="children"
            value={formData.children}
            onChange={handleChange}
            className={styles.input}
          >
            {[0, 1, 2, 3].map(num => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={styles.button}
          disabled={isSubmitting || loadingBusyDates}
          aria-busy={isSubmitting}
          aria-disabled={isSubmitting || loadingBusyDates}
          title={loadingBusyDates ? 'Загрузка занятых дат...' : undefined}
        >
          {isSubmitting ? 'Отправка...' : 'Забронировать'}
        </button>
      </form>

      <div className={styles.legend}>
        <span className={styles.legendBusy}></span> Занятые даты
      </div>
    </div>
  );
}
