// HeroSection.tsx
import React from 'react';

const HeroSection = () => (
  <section
    style={{
      position: 'relative',
      height: '80vh',
      backgroundImage: 'url(/images/hero-photo.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 1rem',
    }}
  >
    <h1 style={{ fontSize: '2.5rem', maxWidth: 600, marginBottom: '1rem' }}>
      Ваш дом вдали от дома — среди лесов, озёр и звёздного неба
    </h1>
    <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
      Glamping с комфортом: уединение, природа и новые впечатления
    </p>
    <button
      style={{
        backgroundColor: '#48542E',
        color: 'white',
        padding: '0.75rem 2rem',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: '1rem',
      }}
      onClick={() => alert('Забронировать домик')}
    >
      Забронировать домик
    </button>
  </section>
);

export default HeroSection;
