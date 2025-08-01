import { useState } from 'react';

const ContactsSection = () => {
  const [activeVariant, setActiveVariant] = useState<'cards' | 'list' | 'grid'>('cards');

  // Общие данные для всех вариантов
  const contactData = {
    phone: '+79161234567',
    email: 'info@glamping.ru',
    address: 'Лесная улица, дом 5, Москва, Россия',
    workingHours: 'Круглосуточно'
  };

  // Вариант 1: Карточки (по умолчанию)
  const CardsVariant = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
          <strong>Контакты</strong>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactCard 
          title="Телефон" 
          content={<a href={`tel:${contactData.phone}`} className="hover:text-blue-600 transition-colors">{contactData.phone}</a>} 
        />
        <ContactCard 
          title="Почта" 
          content={<a href={`mailto:${contactData.email}`} className="hover:text-blue-600 transition-colors">{contactData.email}</a>} 
        />
        <ContactCard 
          title="Адрес" 
          content={contactData.address} 
        />
        <ContactCard 
          title="Часы работы" 
          content={contactData.workingHours} 
        />
      </div>
    </div>
  );

  // Вариант 2: Список с разделителем
  const ListVariant = () => (
    <div className="container-fluid mx-auto px-0">
      <div className="border-t border-gray-200 my-8"></div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-6 lg:p-10">
          <h3 className="text-2xl font-semibold mb-6 animate-fade-in">Контакты</h3>
        </div>
        <div className="w-full lg:w-1/2 p-6 lg:p-10">
          <ul className="space-y-4 text-lg">
            <ContactListItem icon="📞" text={contactData.phone} href={`tel:${contactData.phone}`} />
            <ContactListItem icon="✉️" text={contactData.email} href={`mailto:${contactData.email}`} />
            <ContactListItem icon="📍" text={contactData.address} />
          </ul>
        </div>
      </div>
    </div>
  );

  // Вариант 3: Три колонки
  const GridVariant = () => (
    <div className="container-fluid mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold animate-fade-in">Наши контакты</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ContactGridItem 
          title="Телефон" 
          content={contactData.phone} 
          href={`tel:${contactData.phone}`}
          icon={<PhoneIcon />}
        />
        <ContactGridItem 
          title="Адрес" 
          content={contactData.address}
          icon={<LocationIcon />}
        />
        <ContactGridItem 
          title="Почта" 
          content={contactData.email}
          href={`mailto:${contactData.email}`}
          icon={<EmailIcon />}
        />
      </div>
    </div>
  );

  return (
    <section className="my-16">
      {/* Переключатель вариантов (можно скрыть в production) */}
      <div className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={() => setActiveVariant('cards')} 
          className={`px-4 py-2 rounded ${activeVariant === 'cards' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Вариант 1
        </button>
        <button 
          onClick={() => setActiveVariant('list')} 
          className={`px-4 py-2 rounded ${activeVariant === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Вариант 2
        </button>
        <button 
          onClick={() => setActiveVariant('grid')} 
          className={`px-4 py-2 rounded ${activeVariant === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Вариант 3
        </button>
      </div>

      {activeVariant === 'cards' && <CardsVariant />}
      {activeVariant === 'list' && <ListVariant />}
      {activeVariant === 'grid' && <GridVariant />}
    </section>
  );
};

// Вспомогательные компоненты
const ContactCard = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <div className="text-gray-700">{content}</div>
  </div>
);

const ContactListItem = ({ icon, text, href }: { icon: string; text: string; href?: string }) => (
  <li className="flex items-start animate-fade-in">
    <span className="mr-3 text-xl">{icon}</span>
    {href ? (
      <a href={href} className="hover:text-blue-600 transition-colors">{text}</a>
    ) : (
      <span>{text}</span>
    )}
  </li>
);

const ContactGridItem = ({ title, content, href, icon }: { 
  title: string; 
  content: string; 
  href?: string; 
  icon: React.ReactNode;
}) => (
  <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-all animate-fade-in">
    <div className="text-3xl mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    {href ? (
      <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors">{content}</a>
    ) : (
      <p>{content}</p>
    )}
  </div>
);

// Иконки (можно заменить на SVG)
const PhoneIcon = () => <span>📞</span>;
const EmailIcon = () => <span>✉️</span>;
const LocationIcon = () => <span>📍</span>;

export default ContactsSection;
