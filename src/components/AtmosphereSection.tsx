// AtmosphereSection.tsx
import React from 'react';

const AtmosphereSection = () => (
  <section
    style={{
      backgroundColor: '#e9e6dc',
      padding: '3rem 1rem',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      maxWidth: 900,
      margin: '0 auto',
      gap: '2rem',
    }}
  >
    <div style={{ flex: '1 1 300px' }}>
      <h2>Здесь время течёт иначе</h2>
      <p>
        Забудьте о спешке. Наш glamping — место, где можно:  </p>
        <ul>
          <li>Отключиться от гаджетов и подключиться к природе.</li>
          <li>Исследовать живописные тропы или расслабиться в гамаке.</li>
          <li>Попробовать вечер у костра с ароматным чаем и историями под звёздами.</li>
        </ul>
      
    </div>
    <div style={{ flex: '1 1 300px' }}>
      <img
        src="/images/campfire-guests.jpg"
        alt="Гости у костра"
        style={{ width: '100%', borderRadius: 10, objectFit: 'cover' }}
        loading="lazy"
      />
    </div>
  </section>
);

export default AtmosphereSection;
