import { useState } from 'react';

interface BookingFormProps {
  cottageId: number;
}

export default function BookingForm({ cottageId }: BookingFormProps) {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cottageId, guestName, guestEmail, startDate, endDate }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Бронирование успешно создано!');
      setGuestName('');
      setGuestEmail('');
      setStartDate('');
      setEndDate('');
    } else {
      setMessage(data.error || 'Ошибка бронирования');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Забронировать коттедж</h3>
      <input
        type="text"
        placeholder="Ваше имя"
        value={guestName}
        onChange={e => setGuestName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={guestEmail}
        onChange={e => setGuestEmail(e.target.value)}
        required
      />
      <label>
        Дата заезда:
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          required
        />
      </label>
      <label>
        Дата выезда:
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Забронировать</button>
      {message && <p>{message}</p>}
    </form>
  );
}

