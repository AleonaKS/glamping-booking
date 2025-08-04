// AdvantagesSection.tsx
import React from 'react';

const advantages = [
  {
    icon: '🌲',
    title: 'Природа вокруг',
    description:
      'Просыпайтесь под пение птиц, засыпайте под шелест листвы — без городского шума и суеты.',
  },
  {
    icon: '🛏️',
    title: 'Комфортный кемпинг',
    description:
      'Просторные палатки/домики с удобными кроватями, теплым светом и всем необходимым.',
  },
  {
    icon: '🚶',
    title: 'Активный отдых',
    description:
      'Пешие маршруты, велопрогулки, рыбалка или просто книги у костра — выбор за вами.',
  },
  {
    icon: '📅',
    title: 'Легкое бронирование',
    description:
      'Выберите даты — мы подготовим всё для вашего идеального отдыха.',
  },
];

const AdvantagesSection = () => (
  <section style={{ padding: '3rem 1rem', maxWidth: 900, margin: '0 auto' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
      Почему выбирают нас
    </h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        gap: '2rem',
      }}
    >
      {advantages.map(({ icon, title, description }) => (
        <div
          key={title}
          style={{
            backgroundColor: '#f5f5f0',
            borderRadius: 10,
            padding: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
          <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
          <p style={{ fontSize: '0.95rem', color: '#555' }}>{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AdvantagesSection;
