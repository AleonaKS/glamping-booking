'use client';

import { useState } from 'react';

const faqItems = [ 
  {
    id: 'collapse1_19',
    question: 'Время заезда/выезда?',
    answer: 'Заезд с 14:00, выезд до 12:00.',
  },
  {
    id: 'collapse2_19',
    question: 'Можно с питомцами?',
    answer: 'Да, можно с животными по предварительному согласованию.',
  },
  {
    id: 'collapse3_19',
    question: 'Есть парковка?',
    answer: 'У нас есть бесплатная парковка для гостей.',
  }, 
  {
    id: 'collapse4_19',
    question: 'Условия отмены?',
    answer: 'Отмена бронирования возможна за 48 часов.',
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div
      id="bootstrap-accordion_19"
      className="panel-group accordionStyles accordion"
      role="tablist"
      aria-multiselectable="true"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      {faqItems.map(({ id, question, answer }, index) => {
        const isOpen = openId === id;
        const headingId = `heading${index + 1}`;
        
        return (
          
          <div 
            className="card" 
            key={id} 
            style={{ 
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              marginBottom: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
            }}
          >
            <div
              className="card-header"
              role="tab"
              id={headingId}
              style={{ 
                padding: '1rem',
                backgroundColor: isOpen ? '#f0f7ff' : '#f7f7f7',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'background-color 0.3s ease',
              }}
            >
              <div  
                role="button"
                className={`panel-title${isOpen ? '' : ' collapsed'}`}
                onClick={() => toggle(id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') toggle(id);
                }}
                tabIndex={0}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: '#333',
                }}
              >

                <h4 
                  className="panel-title-edit" 
                  style={{ 
                    margin: 0, 
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'color 0.2s ease',
                    color: isOpen ? '#0066cc' : '#333',
                  }}
                >
                  {question}
                </h4>

                {/* Анимированный плюсик */}
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                    position: 'relative',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '0',
                      right: '0',
                      height: '2px',
                      backgroundColor: isOpen ? '#0066cc' : '#666',
                      transform: 'translateY(-50%)',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '0',
                      bottom: '0',
                      width: '2px',
                      backgroundColor: isOpen ? '#0066cc' : '#666',
                      transform: 'translateX(-50%)',
                      borderRadius: '2px',
                      transition: 'all 0.5s ease',
                    }}
                  />
                </span>
              </div>
            </div>
            
            {/* Анимированное содержимое */}
            <div
              id={id}
              className={`panel-collapse noScroll collapse${isOpen ? ' show' : ''}`}
              role="tabpanel"
              aria-labelledby={headingId}
              style={{
                maxHeight: isOpen ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: '#fff',
              }}
            >
              <div 
                className="panel-body" 
                style={{ 
                  padding: isOpen ? '1rem' : '0 1rem',
                  opacity: isOpen ? 1 : 0,
                  transition: 'opacity 0.3s ease, padding 0.3s ease',
                  transitionDelay: isOpen ? '0.1s' : '0s',
                }}
              >
                <p 
                  className="panel-text" 
                  style={{ 
                    margin: 0,
                    color: '#555',
                    lineHeight: '1.6',
                  }}
                >
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
