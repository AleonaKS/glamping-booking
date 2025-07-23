'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale'; 

import 'react-datepicker/dist/react-datepicker.css';

// Регистрируем русскую локаль для календаря
registerLocale('ru', ru);

export default function BookingPage() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState(''); 
  const [cottageId, setCottageId] = useState(1);  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация дат
    if (!startDate || !endDate) {
      alert('Пожалуйста, выберите даты заезда и выезда');
      return;
    }

    if (startDate >= endDate) {
      alert('Дата выезда должна быть позже даты заезда');
      return;
    }

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cottageId: 1,
          guestName,
          guestEmail,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(`Бронь #${data.id} успешно создана!`);
        // Сброс формы
        setStartDate(null);
        setEndDate(null);
        setGuestName('');
        setGuestEmail('');
      } else {
        alert(`Ошибка: ${data.error || 'Неизвестная ошибка'}`);
      }
    } catch (error) {
      console.error('Ошибка бронирования:', error);
      alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.');
    }
  };

  // Функция для отключения прошедших дат
  const filterPassedDate = (date: Date) => {
    return date >= new Date();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Ваше имя</label>
        <input
          type="text"
          placeholder="Иван Иванов"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          required
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="example@mail.com"
          value={guestEmail}
          onChange={(e) => setGuestEmail(e.target.value)}
          required
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>



<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">Коттедж</label>
  <select
    value={cottageId}
    onChange={(e) => setCottageId(Number(e.target.value))}
    className="w-full p-2 border rounded-md"
  >
    <option value="1">Коттедж 1</option>
    <option value="2">Коттедж 2</option>
    <option value="3">Коттедж 3</option>
  </select>
</div>


      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Дата заезда</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          filterDate={filterPassedDate}
          placeholderText="Выберите дату"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          wrapperClassName="w-full"
          required
          locale="ru"
          dateFormat="dd.MM.yyyy"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Дата выезда</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || new Date()}
          filterDate={filterPassedDate}
          placeholderText="Выберите дату"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          wrapperClassName="w-full"
          required
          locale="ru"
          dateFormat="dd.MM.yyyy"
        />
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Забронировать
      </button>
    </form>
  );
}
