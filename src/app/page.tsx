'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import FAQAccordion from '../components/FAQAccordion';
import ContactsSection from '../components/ContactsSection';

 


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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const navItems = [
    { id: 'houses', label: 'Домики' }, 
    // { id: 'comfort', label: 'Комфорт и природа' },
    { id: 'faq', label: 'Часто задаваемые вопросы' },
    { id: 'contacts', label: 'Контакты' },
  ];

  if (loading) return <p style={{ paddingTop: 60, textAlign: 'center' }}></p>;

  return (
    <>
      {/* Кнопка открытия боковой панели */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Открыть меню"
          style={{
            position: 'fixed',
            top: 20,
            left: 20,
            zIndex: 1000,
            background: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            width: 40,
            height: 40,
            cursor: 'pointer',
            fontSize: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ☰
        </button>
      )}

      {/* Боковая панель */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: sidebarOpen ? 0 : '-250px',
          width: 250,
          height: '100vh',
          background: '#222',
          color: '#fff',
          paddingTop: 60,
          paddingLeft: 20,
          paddingRight: 20,
          boxSizing: 'border-box',
          transition: 'left 0.3s ease',
          zIndex: 1100,
          display: 'flex',
          flexDirection: 'column',
        }}
        aria-label="Боковая навигация"
      >
        <button
          onClick={() => setSidebarOpen(false)}
          aria-label="Закрыть меню"
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: 24,
            cursor: 'pointer',
          }}
        >
          ×
        </button>

        {navItems.map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={() => setSidebarOpen(false)}
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '10px 0',
              fontSize: 18,
              borderBottom: '1px solid #444',
              cursor: 'pointer',
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Основной контент */}
      <main
        style={{
          paddingTop: 60,
          paddingLeft: sidebarOpen ? 270 : 20,
          maxWidth: 800,
          margin: '20px auto',
          transition: 'padding-left 0.3s ease',
        }}
      >
        {/* Карта с домиками */}
        <section
          id="map"
          style={{
            position: 'relative',
            width: '100%',
            height: 400,
            marginBottom: 20,
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

        {/* Секция Домики */}
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





        {/* Секция Контакты */}
        <section id="contacts" style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}>
          <div>      
            <ContactsSection />
          </div>
        </section>

        {/* Часто задаваемые вопросы */}
          <section id="faq" style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}>
            <h2>Часто задаваемые вопросы</h2>
            <FAQAccordion />
          </section>



        {/* Ваш дом вдали от дома */}
        <section id="comfort" style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}>
          <h2>Ваш дом вдали от дома</h2>
          <p>Насладитесь комфортом в наших стильных коттеджах, оборудованных всем необходимым для вашего идеального отдыха. Ощутите спокойствие и умиротворение, окруженные природой. Идеальное место для перезагрузки.</p>
          <p>Наши домики предлагают уют, комфорт и уединение. Наслаждайтесь природой вдали от городской суеты. Идеальное место для семейного отдыха и романтических выходных. Создайте незабываемые воспоминания.</p>
        </section>

        {/* Добро пожаловать */}
        {/* <section id="welcome" style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}>
          <h2>Добро пожаловать</h2>
          <p>Окунитесь в атмосферу спокойствия и умиротворения. Наши коттеджи предлагают идеальное сочетание домашнего уюта и близости к природе.</p>
          <ul>
            <li>Комфорт</li>
            <li>Природа</li>
            <li>Вкус</li>
            <li>Приключения</li>
            <li>Релакс</li>
          </ul>
          <p>Исследуйте окрестности, наслаждайтесь свежим воздухом и создавайте незабываемые воспоминания. Мы позаботились о каждой детали для вашего комфорта.</p>
          <p>Откройте для себя уникальный опыт загородного отдыха. Мы предлагаем комфортабельные коттеджи и незабываемые впечатления.</p>
        </section>

        {/* Живописные виды и свежий воздух */}
        {/* <section id="nature" style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}>
          <h2>Живописные виды и свежий воздух</h2>
          <p>Наслаждайтесь природой в комфортабельных условиях. Наши коттеджи оборудованы всем необходимым для вашего отдыха.</p>
          <p>Проведите время с близкими в живописном месте. Идеально для семейного отдыха и романтических выходных.</p>
          <p>Исследуйте окрестности, наслаждайтесь свежим воздухом и тишиной. Отличная возможность отдохнуть от городской суеты.</p>
          <p>Погрузитесь в атмосферу спокойствия и гармонии с природой. Наши коттеджи предлагают идеальное место для отдыха и восстановления сил.</p>
          <ul>
            <li>Комфорт</li>
            <li>Природа</li>
            <li>Уединение</li>
            <li>Приключения</li>
            <li>Отдых</li>
            <li>Впечатления</li>
          </ul>
        </section> */} 
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
