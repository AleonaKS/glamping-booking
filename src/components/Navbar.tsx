'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: '#fff',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: 20, marginRight: 40 }}>
        <Link href="/" style={{color: '#333', textDecoration: 'none'}}>Glamping Booking</Link>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <a href="#houses" style={{ color: '#333', textDecoration: 'none' }}>Домики</a>
        <a href="#about" style={{ color: '#333', textDecoration: 'none' }}>О нас</a>
        <a href="#services" style={{ color: '#333', textDecoration: 'none' }}>Услуги</a>
        <a href="#contacts" style={{ color: '#333', textDecoration: 'none' }}>Контакты</a>
      </div>
    </nav>
  );
}
