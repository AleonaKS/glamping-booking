import Link from 'next/link';

export default function BookingSuccess() {
  return (
    <div className="max-w-md mx-auto text-center py-12">
      <div className="mb-8 text-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-4">Бронирование подтверждено!</h1>
      <p className="text-gray-600 mb-8">Мы отправили детали бронирования на вашу электронную почту.</p>
      <Link 
        href="/booking" 
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Создать новое бронирование
      </Link>
    </div>
  );
}
