'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Booking {
  id: number;
  cottageId: number;
  guestName: string;
  guestEmail: string;
  startDate: string;
  endDate: string;
}

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/auth/check');
      if (!res.ok) router.push('/admin/login');
    };

    const fetchBookings = async () => {
      try {
        const res = await fetch('/api/bookings');
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
  }, [router]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Админ панель</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Коттедж</th>
              <th className="py-2 px-4 border">Гость</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Даты</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="py-2 px-4 border">{booking.id}</td>
                <td className="py-2 px-4 border">Коттедж {booking.cottageId}</td>
                <td className="py-2 px-4 border">{booking.guestName}</td>
                <td className="py-2 px-4 border">{booking.guestEmail}</td>
                <td className="py-2 px-4 border">
                  {new Date(booking.startDate).toLocaleDateString()} -{' '}
                  {new Date(booking.endDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
