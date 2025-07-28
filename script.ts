import { PrismaClient } from './prisma/generated/client'


const prisma = new PrismaClient()

async function main() {
  await prisma.cottage.createMany({
    data: [
      {
        title: "Домик у озера",
        description: "Уютный домик с видом на озеро",
        price: 3500,
        bedrooms: 2,
        maxGuests: 4,
        amenities: ["WiFi", "Кухня", "Баня"],
        images: ["lake1.jpg", "lake2.jpg"],
        address: "ул. Лесная, 15",
        coverImage: "lake_cover.jpg",
        slug: "domik-u-ozera"
      },
      {
        title: "Лесной шале",
        description: "Деревянный домик в сосновом лесу",
        price: 4200,
        bedrooms: 1,
        maxGuests: 2,
        amenities: ["Камин", "Терраса"],
        images: ["forest1.jpg"],
        address: "ул. Сосновая, 8",
        coverImage: "forest_cover.jpg",
        slug: "lesnoy-shale"
      },
      // Добавьте еще 3 аналогичных объекта
    ],
    skipDuplicates: true
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

// import 'dotenv/config';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient({
//   log: ['query', 'info', 'warn', 'error']
// });

// async function main() {
//     console.log('🔎 Подключаемся к БД...');
//   try {
    
//     await prisma.$connect();

//     console.log('📊 Проверяем существующие коттеджи...');
//     const count = await prisma.cottage.count();
//     console.log(`Найдено коттеджей: ${count}`);

//     if (count === 0) {
//       console.log('➕ Создаем тестовый коттедж...');
//       await prisma.cottage.create({
//         data: {
//           title: "Тестовый коттедж",
//           description: "Описание коттеджа", // добавьте обязательные поля
//           price: 1000,
//           bedrooms: 1,
//           maxGuests: 2,
//           amenities: ["WiFi"],
//           images: ["https://domsbobrom.com/uploads/images/stati/Koda/glles.png"],
//         //   location: "Тестовая локация", // обязательное поле
//         //   rating: 4.5
//         }
//       });
//     }

//     const allCottages = await prisma.cottage.findMany();
//     console.log('🏡 Все коттеджи:', JSON.stringify(allCottages, null, 2));

//   } catch (error) {
//     console.error('❌ Ошибка:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main();
