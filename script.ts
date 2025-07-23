import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
});

async function main() {
    console.log('🔎 Подключаемся к БД...');
  try {
    
    await prisma.$connect();

    console.log('📊 Проверяем существующие коттеджи...');
    const count = await prisma.cottage.count();
    console.log(`Найдено коттеджей: ${count}`);

    if (count === 0) {
      console.log('➕ Создаем тестовый коттедж...');
      await prisma.cottage.create({
        data: {
          title: "Тестовый коттедж",
          description: "Описание коттеджа", // добавьте обязательные поля
          price: 1000,
          bedrooms: 1,
          maxGuests: 2,
          amenities: ["WiFi"],
          images: ["https://domsbobrom.com/uploads/images/stati/Koda/glles.png"],
          location: "Тестовая локация", // обязательное поле
          rating: 4.5
        }
      });
    }

    const allCottages = await prisma.cottage.findMany();
    console.log('🏡 Все коттеджи:', JSON.stringify(allCottages, null, 2));

  } catch (error) {
    console.error('❌ Ошибка:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
