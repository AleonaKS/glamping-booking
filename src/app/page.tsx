'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import FAQAccordion from '../components/FAQAccordion';
import ContactsSection from '../components/ContactsSection';
import Design1 from '@/components/design_1'; 
import Design2 from '@/components/design_2';
import Design3 from '@/components/design_3';

interface Cottage {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  maxPeople?: number;
  coords: { x: number; y: number };
}

type DesignVariant = 'design1' | 'design2' | 'design3';

const designStyles: Record<
  DesignVariant,
  { background: string; color: string; accent: string }
> = {
  design1: { background: '#ffffff', color: '#333333', accent: '#B1C399' },
  design2: { background: '#f5f5f5', color: '#222222', accent: '#E8D5B5' },
  design3: { background: '#f0f7f4', color: '#1a1a1a', accent: '#A0C1B9' },
};

export default function HomePage() {
  const [houses, setHouses] = useState<Cottage[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredHouse, setHoveredHouse] = useState<string | null>(null);
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [design, setDesign] = useState<DesignVariant>('design1');

  useEffect(() => {
    fetch('/api/cottages')
      .then((res) => res.json())
      .then((data) => {
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
    { id: 'Карта', label: 'Карта' },
    { id: 'faq', label: 'Часто задаваемые вопросы' },
    { id: 'contacts', label: 'Контакты' },
  ];

  if (loading)
    return <p style={{ paddingTop: 60, textAlign: 'center' }}>Загрузка...</p>;

  // Выбираем компонент дизайна по состоянию
  const DesignComponent = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
  }[design];

  return (
    
    <DesignComponent
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      hoveredHouse={hoveredHouse}
      setHoveredHouse={setHoveredHouse}
      selectedHouse={selectedHouse}
      setSelectedHouse={setSelectedHouse}
      navItems={navItems}
      designStyles={designStyles[design]}
    >
      
      {/* Переключатель дизайна сверху по центру */}
      <div
        style={{
          position: 'fixed',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1200,
          display: 'flex',
          gap: 10,
        }}
      >
        {(['design1', 'design2', 'design3'] as DesignVariant[]).map((d) => (
          <button
            key={d}
            onClick={() => setDesign(d)}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              fontWeight: design === d ? 'bold' : 'normal',
              backgroundColor: design === d ? designStyles[d].accent : '#ccc',
              color: design === d ? '#fff' : '#333',
              transition: 'background-color 0.3s ease',
            }}
            aria-pressed={design === d}
          >
            {d.toUpperCase()}
          </button>
        ))}
      </div>

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
                fill={
                  hoveredHouse === house.id || selectedHouse === house.id
                    ? 'orange'
                    : 'brown'
                }
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

        {/* Секции FAQ, Контакты и т.д. */}
        <section
          id="contacts"
          style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}
        >
          <ContactsSection />
        </section>

        <section
          id="faq"
          style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}
        >
          <h2>Часто задаваемые вопросы</h2>
          <FAQAccordion />
        </section>

        <section
          id="comfort"
          style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto' }}
        >
          <h2>Ваш дом вдали от дома</h2>
          <p>
            Насладитесь комфортом в наших стильных коттеджах, оборудованных всем
            необходимым для вашего идеального отдыха. Ощутите спокойствие и
            умиротворение, окруженные природой. Идеальное место для перезагрузки.
          </p>
          <p>
            Наши домики предлагают уют, комфорт и уединение. Наслаждайтесь
            природой вдали от городской суеты. Идеальное место для семейного
            отдыха и романтических выходных. Создайте незабываемые воспоминания.
          </p>
        </section>
      </main>
    </DesignComponent>
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
      <img
        src={house.image}
        alt={house.title}
        style={{ width: '100%', borderRadius: 6, marginBottom: 8 }}
      />
      <h4 style={{ margin: '0 0 8px' }}>{house.title}</h4>
      <p style={{ margin: '0 0 4px' }}>Цена: {house.price} ₽/ночь</p>
      {house.maxPeople && (
        <p style={{ margin: '0 0 8px' }}>Макс. гостей: {house.maxPeople}</p>
      )}
      {showDetailsLink && (
        <div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
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
