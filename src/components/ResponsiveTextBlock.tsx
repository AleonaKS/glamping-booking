
import React, { useState } from 'react';

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

// Размер квадрата теперь в vw (процентах ширины окна)
const squareSizeVw = 30; // 12vw
const angle = 30; // градусы
const rad = (angle * Math.PI) / 180;
// Размер контейнера с учётом поворота (в vw)
const containerSizeVw = squareSizeVw * (Math.abs(Math.cos(rad)) + Math.abs(Math.sin(rad)));

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
        style={{
          position: 'fixed',
          top: '1vw',
          right: '1vw',
          zIndex: 1300,
          padding: '0.6vw 1.2vw',
          borderRadius: '0.6vw',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: designStyles.accent,
          color: designStyles.color,
          fontWeight: 'bold',
          boxShadow: '0 0.2vw 0.6vw rgba(0,0,0,0.2)',
          userSelect: 'none',
          transition: 'background-color 0.3s ease',
          fontSize: '1.2vw',
        }}
        aria-label="Переключить шрифт"
        title="Переключить шрифт"
      >
        Шрифт: {fonts[fontIndex].name}
      </button>

      <div style={{ position: 'relative', width: '100%', height: '80vw', overflow: 'hidden' }}>
        <img
          src="/images/beautiful-mountain-landscape-scaled.jpg"
          alt="фон"
          style={{ width: '200%', height: '70vw', objectFit: 'cover', filter: 'blur(2px)' }}
          draggable={false}
          loading="lazy"
        />


{/* Бежевый блок с текстом и заливкой */}
<div
  style={{
    position: 'relative',
    width: '100%',
    marginTop: '-17vw',
    boxSizing: 'border-box',
    zIndex: 3,
    // padding: '0 2vw', // если нужно, убрать или оставить
  }}
>
  <svg
    viewBox="0 0 1200 280"
    preserveAspectRatio="xMidYMid meet"
    style={{ width: '100%', height: '18vw', display: 'block' }}
    aria-hidden="true"
  >
    <defs>
      <mask id="text-mask" maskUnits="userSpaceOnUse">
        <rect width="1200" height="280" fill="white" />
        <text
          x="0"
          y="0"
          fontSize="15vw"
          fontWeight="bold"
          fill="black"
          style={{ userSelect: 'none' }}
        >
          <tspan x="2vw" dy="1.3em">
            Ваш дом вдали от дома
          </tspan>
          <tspan x="2vw" dy="1.3em">
            среди живописных пейзажей
          </tspan>
        </text>
      </mask>
    </defs>
    <rect
      width="1200"
      height="280"
      fill="rgba(235, 229, 213, 0.85)"
      mask="url(#text-mask)"
    />
  </svg>
</div>





{/* Наклонный бежевый прямоугольник */}
<div
  style={{
    position: 'absolute',
    top: '-10vw', // поднял блок выше (было 0, стало -5vw)
    left: 0,
    width: '150%',
    height: '200%',
    backgroundColor: 'rgba(235, 229, 213, 0.8)',
    transformOrigin: 'top left',
    transform: 'rotate(30deg) translateY(-100%)',
    zIndex: 2,
    boxShadow: 'none',
    paddingTop: '2vw',
  }}
>
  {/* Контейнер квадратов */}
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '100%',
      padding: '0 1.5vw',
      boxSizing: 'border-box',
      gap: '4vw',
      marginTop: '-3vw',
      position: 'relative',
      left: '0vw', // сдвинул контейнер с квадратами влево
    }}
  >
            {/* Левый квадрат */}
            <div
              style={{
                width: `${squareSizeVw}vw`,
                height: `${squareSizeVw}vw`,
                backgroundColor: '#48542E',
                borderRadius: '1vw',
                boxShadow: `1vw -1vw 0 0 ${shadowColor}`,
                flexShrink: 0,
                userSelect: 'none',
              }}
            />

            {/* Центральный квадрат с изображением */}
            <div
              style={{
                width: `${squareSizeVw}vw`,
                height: `${squareSizeVw}vw`,
                borderRadius: '1vw',
                boxShadow: `1vw -1vw 0 0 ${shadowColor}`,
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
                userSelect: 'none',
              }}
            >
              <div
                style={{
                  width: `${containerSizeVw}vw`,
                  height: `${containerSizeVw}vw`,
                  position: 'absolute',
                  top: `calc(50% - ${containerSizeVw / 2}vw)`,
                  left: `calc(50% - ${containerSizeVw / 2}vw)`,
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
                width: `${squareSizeVw}vw`,
                height: `${squareSizeVw}vw`,
                backgroundColor: '#48542E',
                borderRadius: '1vw',
                boxShadow: `1vw -1vw 0 0 ${shadowColor}`,
                flexShrink: 0,
                userSelect: 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* Основной контент страницы поверх */}
      <div style={{ position: 'relative', zIndex: 10, paddingTop: '1.25vw' }}>{children}</div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// function ResponsiveTextBlock() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     function checkMobile() {
//       setIsMobile(window.innerWidth <= 768); // порог для мобильных
//     }
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   if (isMobile) {
//     // Мобильный вариант
//     return (
//       <svg
//         viewBox="0 0 600 200"
//         preserveAspectRatio="xMidYMid meet"
//         style={{ width: '100%', height: '25vw', display: 'block' }}
//         aria-hidden="true"
//       >
//         <defs>
//           <mask id="text-mask-mobile" maskUnits="userSpaceOnUse">
//             <rect width="600" height="200" fill="white" />
//             <text
//               x="10"
//               y="0"
//               fontSize="8vw"
//               fontWeight="bold"
//               fill="black"
//               style={{ userSelect: 'none' }}
//             >
//               <tspan x="4vw" dy="1.2em">
//                 Ваш дом вдали
//               </tspan>
//               <tspan x="4vw" dy="1.2em">
//                 от дома
//               </tspan>
//               <tspan x="4vw" dy="1.2em">
//                 среди живописных пейзажей
//               </tspan>
//             </text>
//           </mask>
//         </defs>
//         <rect
//           width="600"
//           height="200"
//           fill="rgba(235, 229, 213, 0.85)"
//           mask="url(#text-mask-mobile)"
//         />
//       </svg>
//     );
//   }

//   // Десктопный вариант
//   return (
//     <svg
//       viewBox="0 0 1200 280"
//       preserveAspectRatio="xMidYMid meet"
//       style={{ width: '100%', height: '18vw', display: 'block' }}
//       aria-hidden="true"
//     >
//       <defs>
//         <mask id="text-mask-desktop" maskUnits="userSpaceOnUse">
//           <rect width="1200" height="280" fill="white" />
//           <text
//             x="0"
//             y="0"
//             fontSize="12vw"
//             fontWeight="bold"
//             fill="black"
//             style={{ userSelect: 'none' }}
//           >
//             <tspan x="2vw" dy="1.3em">
//               Ваш дом вдали от дома
//             </tspan>
//             <tspan x="2vw" dy="1.3em">
//               среди живописных пейзажей
//             </tspan>
//           </text>
//         </mask>
//       </defs>
//       <rect
//         width="1200"
//         height="280"
//         fill="rgba(235, 229, 213, 0.85)"
//         mask="url(#text-mask-desktop)"
//       />
//     </svg>
//   );
// }
// export default ResponsiveTextBlock;
