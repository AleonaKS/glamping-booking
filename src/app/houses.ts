export interface House {
  id: string;
  name: string;
  price: number;
  maxPeople: number;
  image: string;
  coords: { x: number; y: number }; // координаты на SVG карте (в процентах)
  description: string;
}

export const houses: House[] = [
  {
    id: 'house1',
    name: 'Домик у озера',
    price: 5000,
    maxPeople: 4,
    image: '/houses/house1.jpg',
    coords: { x: 20, y: 30 },
    description: 'Уютный домик у красивого озера...',
  },
  {
    id: 'house2',
    name: 'Горный коттедж',
    price: 7000,
    maxPeople: 6,
    image: '/houses/house2.jpg',
    coords: { x: 60, y: 50 },
    description: 'Прекрасный коттедж в горах...',
  },
  // Добавьте ещё
];
