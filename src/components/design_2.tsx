interface DesignProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // houses: Cottage[];
  hoveredHouse: string | null;
  setHoveredHouse: React.Dispatch<React.SetStateAction<string | null>>;
  selectedHouse: string | null;
  setSelectedHouse: React.Dispatch<React.SetStateAction<string | null>>;
  navItems: { id: string; label: string }[];
  designStyles: { background: string; color: string; accent: string };
}

export default function Design1({
  children,
  sidebarOpen,
  setSidebarOpen,
  // houses,
  hoveredHouse,
  setHoveredHouse,
  selectedHouse,
  setSelectedHouse,
  navItems,
  designStyles,
}: DesignProps) {
  return (
    <div
      style={{
        backgroundColor: designStyles.background,
        color: designStyles.color,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      {/* Например, наклонный блок фона */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          left: -150,
          width: 400,
          height: 400,
          backgroundColor: designStyles.accent,
          transform: 'rotate(-15deg)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      {/* Кнопка меню, сайдбар и т.д. можно сюда перенести или оставить в HomePage */}

      {/* Контент страницы поверх */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
