// src/app/admin/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Calendar, Mail, User } from 'lucide-react';

interface Booking {
  id: number;
  cottageId: number;
  guestName: string;
  guestEmail: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  guestPhone?: string;
}

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    field: keyof Booking;
    direction: 'asc' | 'desc';
  }>({ field: 'startDate', direction: 'desc' });
  const router = useRouter();

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/auth/check');
      if (!res.ok) router.push('/admin/login');
    };

    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `/api/bookings?sort=${sortConfig.field}&direction=${sortConfig.direction}`
        );
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
    fetchBookings();
  }, [router, sortConfig]);

  const handleSort = (field: keyof Booking) => {
    setSortConfig(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

const sortedBookings = [...bookings].sort((a: Booking, b: Booking) => {
  // Добавляем проверку на существование полей
  const field = sortConfig.field;
  const aValue = a[field];
  const bValue = b[field];

  if (aValue === undefined || bValue === undefined) {
    return 0;
  }

  if (aValue < bValue) {
    return sortConfig.direction === 'asc' ? -1 : 1;
  }
  if (aValue > bValue) {
    return sortConfig.direction === 'asc' ? 1 : -1;
  }
  return 0;
});


  const paginatedBookings = sortedBookings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE);

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Управление бронированиями</h1>
        <Button onClick={() => router.push('/admin/statistics')}>
          Статистика
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex items-center"
                    onClick={() => handleSort('id')}
                  >
                    ID
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Коттедж
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex items-center"
                    onClick={() => handleSort('guestName')}
                  >
                    Гость
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Контакты
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex items-center"
                    onClick={() => handleSort('startDate')}
                  >
                    Даты
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Создано
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedBookings.map(booking => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{booking.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Коттедж {booking.cottageId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {booking.guestName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {booking.guestEmail}
                    </div>
                    {booking.guestPhone && (
                      <div className="flex items-center mt-1">
                        <User className="h-4 w-4 mr-1" />
                        {booking.guestPhone}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(booking.startDate).toLocaleDateString()} -{' '}
                      {new Date(booking.endDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(booking.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-700">
            Показано {paginatedBookings.length} из {bookings.length} записей
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Назад
            </Button>
            <Button
              variant="outline"
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Вперед
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
