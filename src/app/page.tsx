'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface Cottage {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  maxPeople?: number;
  coords: { x: number; y: number };
}

export default function HomePage() {
  const [houses, setHouses] = useState<Cottage[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredHouse, setHoveredHouse] = useState<string | null>(null);
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/cottages')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setHouses(data);
        } else {
          setHouses([]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ paddingTop: 60, textAlign: 'center' }}>Загрузка коттеджей...</p>;

  return (
    <>
      <Navbar />

      {/* Контейнер с отступом сверху под фиксированный Navbar */}
      <main style={{ paddingTop: 60 }}>
        {/* Карта с домиками */}
        <section
          id="map"
          style={{
            position: 'relative',
            width: '90%',
            // maxWidth: 800,
            // height: 400,
            margin: '20px auto',
            border: '1px solid #ccc',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <svg
            viewBox="0 0 100 100"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <image
              href="/image-asset.jpeg"
              x="0"
              y="0"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid meet"
            />

            {houses.map((house) => (
              <circle
                key={house.id}
                cx={house.coords.x}
                cy={house.coords.y}
                r={3}
                fill={hoveredHouse === house.id || selectedHouse === house.id ? 'orange' : 'brown'}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredHouse(house.id)}
                onMouseLeave={() => setHoveredHouse(null)}
                onClick={() => setSelectedHouse(house.id)}
              />
            ))}
          </svg>

          {hoveredHouse && !selectedHouse && (
            <HouseTooltip house={houses.find((h) => h.id === hoveredHouse)!} />
          )}

          {selectedHouse && (
            <HouseTooltip
              house={houses.find((h) => h.id === selectedHouse)!}
              onClose={() => setSelectedHouse(null)}
              showDetailsLink
            />
          )}
        </section>

        {/* Информационные секции */}
        <section id="houses" style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}>
          <h2>Домики</h2>
          {houses.map(house => (
            <div key={house.id} style={{ marginBottom: 20 }}>
              <h3>{house.title}</h3>
              <img src={house.image} alt={house.title} style={{ width: '100%', borderRadius: 8, maxWidth: 400 }} />
              <p>{house.description}</p>
              <p>Цена: {house.price} ₽/ночь</p>
              {house.maxPeople && <p>Макс. гостей: {house.maxPeople}</p>}
              <Link href={`/cottages/${house.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
                Подробнее →
              </Link>
            </div>
          ))}
        </section>

        <section id="about" style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}>
          <h2>О нас</h2>
          <p>Здесь информация о компании...</p>
        </section>

        <section id="services" style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}>
          <h2>Услуги</h2>
          <p>Описание услуг...</p>
        </section>

        <section id="contacts" style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}>
          <h2>Контакты</h2>
          <p>Телефон, email, адрес...</p>
        </section>
      </main>
    </>
  );
}

function HouseTooltip({
  house,
  onClose,
  showDetailsLink = false,
}: {
  house: Cottage;
  onClose?: () => void;
  showDetailsLink?: boolean;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${house.coords.y}%`,
        left: `${house.coords.x}%`,
        transform: 'translate(10px, -50%)',
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 10,
        width: 220,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        zIndex: 10,
      }}
    >
      <img src={house.image} alt={house.title} style={{ width: '100%', borderRadius: 6, marginBottom: 8 }} />
      <h4 style={{ margin: '0 0 8px' }}>{house.title}</h4>
      <p style={{ margin: '0 0 4px' }}>Цена: {house.price} ₽/ночь</p>
      {house.maxPeople && <p style={{ margin: '0 0 8px' }}>Макс. гостей: {house.maxPeople}</p>}
      {showDetailsLink && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href={`/cottages/${house.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
            Подробнее →
          </Link>
          <button onClick={onClose} style={{ marginLeft: 10, cursor: 'pointer' }}>
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
}



// export default function HomePage() {
//   return (
//     <div>
//       <h1>Главная страница</h1>
//       {/* Используем SVG как React-компонент */}
//       <HouseIcon width={100} height={100} />
//     </div>
//   );
// }





// import Link from 'next/link';
// import { prisma } from '@/lib/prisma'; // путь к вашему prisma клиенту

// export default async function Home() {
//   // Получаем коттеджи из БД
//   const cottages = await prisma.cottage.findMany({
//     select: {
//       id: true,
//       title: true,
//       description: true,
//       // можно добавить цену, изображения и т.д.
//     },
//   });

//   return (
//     <main className="container mx-auto px-4 py-8">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Добро пожаловать в Glamping Booking!</h1>
//         <p className="text-xl text-gray-600">Забронируйте уникальные эко-домики в живописных местах</p>
//       </div>

//       <div className="flex flex-col md:flex-row gap-6 mb-12">
//         <Link
//           href="/cottages"
//           className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg text-center text-lg font-medium transition-colors"
//         >
//           Посмотреть все коттеджи
//         </Link>

//         <Link
//           href="/admin"
//           className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-4 px-6 rounded-lg text-center text-lg font-medium transition-colors"
//         >
//           Панель администратора
//         </Link>
//       </div>

//       <section className="mb-12">
//         <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Наши коттеджи</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {cottages.map((cottage) => (
//             <div key={cottage.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//               <div className="h-48 bg-gray-200 flex items-center justify-center">
//                 <span className="text-gray-500">Изображение {cottage.title}</span>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2 text-gray-800">{cottage.title}</h3>
//                 <p className="text-gray-600 mb-4">{cottage.description}</p>
//                 <Link
//                   href={`/cottages/${cottage.id}/booking`}
//                   className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-center font-medium transition-colors"
//                 >
//                   Забронировать
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
