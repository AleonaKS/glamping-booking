// src/components/CottagePageClient.tsx
'use client';

import { useState } from 'react';
import CottageBookingForm from './CottageBookingForm';

interface CottagePageClientProps {
  cottage: {
    id: number;
    title: string;
  };
}

export default function CottagePageClient({ cottage }: CottagePageClientProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsBookingOpen(true)}
        style={{
          marginTop: 20,
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Забронировать
      </button>

      {isBookingOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 8,
              width: '90%',
              maxWidth: 500,
              maxHeight: '90%',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsBookingOpen(false)}
              aria-label="Закрыть"
              style={{
                float: 'right',
                fontSize: 24,
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                marginBottom: 10,
              }}
            >
              ×
            </button>

            <CottageBookingForm
              cottageId={cottage.id}
              onSuccess={() => setIsBookingOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
