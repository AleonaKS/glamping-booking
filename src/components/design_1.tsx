import React, { useState, useEffect } from 'react';

const fonts = [
  { name: 'Roboto Slab', css: "'Roboto Slab', serif" },
  { name: 'Podkova', css: "'Podkova', serif" },
  { name: 'Sansation', css: "'Sansation', sans-serif" },
  { name: 'Bellota', css: "'Bellota', cursive" },
  { name: 'Jura', css: "'Jura', sans-serif" },
];

interface DesignProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hoveredHouse: string | null;
  setHoveredHouse: React.Dispatch<React.SetStateAction<string | null>>;
  selectedHouse: string | null;
  setSelectedHouse: React.Dispatch<React.SetStateAction<string | null>>;
  navItems: { id: string; label: string }[];
  designStyles: { background: string; color: string; accent: string };
}

const shadowColor = 'rgba(59, 37, 0, 1)';
const angle = 30; // градусы
const rad = (angle * Math.PI) / 180;


export default function Design1({
  children,
  sidebarOpen,
  setSidebarOpen,
  hoveredHouse,
  setHoveredHouse,
  selectedHouse,
  setSelectedHouse,
  navItems,
  designStyles,
}: DesignProps) {
  const [fontIndex, setFontIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Отслеживаем ширину экрана
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // проверка при монтировании
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Размеры для ПК и телефона
  // Для ПК размеры в vw, для телефона — в vh или px (можно настроить)
  const squareSizeVw = isMobile ? 60 : 25; // например, на мобилке квадраты больше в процентах ширины
  const containerSizeVw = squareSizeVw * (Math.abs(Math.cos(rad)) + Math.abs(Math.sin(rad)));
const fontSizePx = isMobile ? 24 : 28; // размер шрифта в пикселях
const svgHeightPx = isMobile ? 180 : 70; // высота svg в пикселях
const TextHeight = isMobile ? 180 : 90; // высота svg в пикселях

  // // Размеры шрифтов для svg
  // const fontSizeVw = isMobile ? 15 : 10; // vw, больше на мобилке для читаемости

  // Размеры и отступы кнопки переключения шрифта
  const fontButtonStyle = {
    position: 'fixed' as const,
    top: isMobile ? '3vw' : '1vw',
    right: isMobile ? '3vw' : '1vw',
    zIndex: 1300,
    padding: isMobile ? '1.5vw 3vw' : '0.6vw 1.2vw',
    borderRadius: isMobile ? '1.5vw' : '0.6vw',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: designStyles.accent,
    color: designStyles.color,
    fontWeight: 'bold',
    boxShadow: isMobile ? '0 0.5vw 1.5vw rgba(0,0,0,0.2)' : '0 0.2vw 0.6vw rgba(0,0,0,0.2)',
    userSelect: 'none' as const,
    transition: 'background-color 0.3s ease',
    fontSize: isMobile ? '4vw' : '1.2vw',
  };

  const nextFont = () => {
    setFontIndex((fontIndex + 1) % fonts.length);
  };

  return (
    <div
      style={{
        backgroundColor: '#B1C399',
        color: designStyles.color,
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'auto',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        fontFamily: fonts[fontIndex].css,
      }}
    >
      {/* Кнопка переключения шрифта */}
      <button
        onClick={nextFont}
        style={fontButtonStyle}
        aria-label="Переключить шрифт"
        title="Переключить шрифт"
      >
        Шрифт: {fonts[fontIndex].name}
      </button>

 <div
  style={{
    position: 'relative',
    width: '100%',
    height: isMobile ? '140vw' : '60vw', // фиксированная высота контейнера
    overflow: 'hidden',
  }}
>
  <img
    src="/images/beautiful-mountain-landscape-scaled.jpg"
    alt="фон"
    style={{
      width: '100%',              // Заменить 200% на 100%
      height: '100%',             // чтобы занимать всю высоту контейнера
      objectFit: 'cover',
      filter: 'blur(2px)',
      display: 'block',           // убрать лишние отступы снизу у img
    }}
    draggable={false}
    loading="lazy"
  />

  {/* Бежевый блок с текстом и заливкой */}
  <div
    style={{
      position: 'absolute',
      bottom: isMobile ? '-90px' : 0,  // смещение вниз на 20px на мобилке
      left: 0,
      width: '100%',
      zIndex: 3,
      boxSizing: 'border-box',
      padding: 0,
    }}
  >
    <svg
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: svgHeightPx, display: 'block' }}
      aria-hidden="true"
    >
      <defs>
        <mask id="text-mask" maskUnits="userSpaceOnUse">
          <rect width="100%" height='90' fill="white" />
          {isMobile ? (
            <text
              x="20"
              y="0"
              fontSize={fontSizePx}
              fontWeight="regular"
              fill="black"
              style={{ userSelect: 'none' }}
            >
              <tspan x="20" dy="1.3em">Ваш дом вдали от дома</tspan>
              <tspan x="20" dy="1.3em">среди живописных пейзажей</tspan>
            </text>
          ) : (
            <text
              x="20"
              y="45"
              fontSize={fontSizePx}
              fontWeight="bold"
              fill="black"
              style={{ userSelect: 'none' }}
            >
              Ваш дом вдали от дома среди живописных пейзажей
            </text>
          )}
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="rgba(235, 229, 213, 0.85)"
        mask="url(#text-mask)"
      />
    </svg>
  </div>
 





        {/* Наклонный бежевый прямоугольник */}
        <div
          style={{
            position: 'absolute',
            top: isMobile ? '10vw' : '-10vw',
            left: isMobile ? -80 : -40,
            width: '150%',
            height: '200%',
            backgroundColor: 'rgba(235, 229, 213, 0.8)',
            transformOrigin: 'top left',
            transform: 'rotate(30deg) translateY(-100%)',
            zIndex: 2,
            boxShadow: 'none',
            paddingTop: isMobile ? '4vw' : '2vw',
          }}
        >
          {/* Контейнер квадратов */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              height: '100%',
              padding: isMobile ? '0 3vw' : '0 1.5vw',
              boxSizing: 'border-box',
              gap: isMobile ? '8vw' : '4vw',
              marginTop: isMobile ? '-1vw' : '-4vw',
              position: 'relative',
              left: '0vw',
              // flexDirection: isMobile ? 'column' : 'row', // на мобилке вертикально
            }}
          >
            {/* Левый квадрат */}
            <div
              style={{
                width: isMobile ? '40vw' : `${squareSizeVw}vw`,
                height: isMobile ? '40vw' : `${squareSizeVw}vw`,
                backgroundColor: '#48542E',
                borderRadius: isMobile ? '3vw' : '1vw',
                boxShadow: isMobile ? `3vw -3vw 0 0 ${shadowColor}` : `1vw -1vw 0 0 ${shadowColor}`,
                flexShrink: 0,
                userSelect: 'none',
                marginBottom: isMobile ? '4vw' : 0,
              }}
            />

            {/* Центральный квадрат с изображением */}
            <div
              style={{
                width: isMobile ? '40vw' : `${squareSizeVw}vw`,
                height: isMobile ? '40vw' : `${squareSizeVw}vw`,
                borderRadius: isMobile ? '3vw' : '1vw',
                boxShadow: isMobile ? `3vw -3vw 0 0 ${shadowColor}` : `1vw -1vw 0 0 ${shadowColor}`,
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
                userSelect: 'none',
                marginBottom: isMobile ? '4vw' : 0,
              }}
            >
              <div
                style={{
                  width: isMobile ? '56vw' : `${containerSizeVw}vw`,
                  height: isMobile ? '56vw' : `${containerSizeVw}vw`,
                  position: 'absolute',
                  top: `calc(50% - ${isMobile ? 56 / 2 : containerSizeVw / 2}vw)`,
                  left: `calc(50% - ${isMobile ? 56 / 2 : containerSizeVw / 2}vw)`,
                }}
              >
                <img
                  src="/images/sn8aixz1doy.jpg"
                  alt="Центральный квадрат"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transformOrigin: 'center center',
                    transform: `rotate(${-angle}deg)`,
                    display: 'block',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Правый квадрат */}
            <div
              style={{
                width: isMobile ? '40vw' : `${squareSizeVw}vw`,
                height: isMobile ? '40vw' : `${squareSizeVw}vw`,
                backgroundColor: '#48542E',
                borderRadius: isMobile ? '3vw' : '1vw',
                boxShadow: isMobile ? `3vw -3vw 0 0 ${shadowColor}` : `1vw -1vw 0 0 ${shadowColor}`,
                flexShrink: 0,
                userSelect: 'none',
                marginBottom: isMobile ? '4vw' : 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Основной контент страницы поверх */}
      <div style={{ position: 'relative', zIndex: 10, paddingTop: isMobile ? '5vw' : '1.25vw' }}>{children}</div>
    </div>
  );
}
