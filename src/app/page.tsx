import Link from 'next/link'; 

export default function Home() {
  const cottages = [
    { id: 1, name: "Лесной домик", description: "Уютный домик среди сосен" },
    { id: 2, name: "Озерный шале", description: "Вид на озеро из окна" },
    { id: 3, name: "Премиум люкс", description: "Просторный коттедж с сауной" }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Добро пожаловать в Glamping Booking!</h1>
        <p className="text-xl text-gray-600">Забронируйте уникальные эко-домики в живописных местах</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <Link 
          href="/booking" 
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg text-center text-lg font-medium transition-colors"
        >
          Забронировать сейчас
        </Link>
        
        <Link 
          href="/admin" 
          className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-4 px-6 rounded-lg text-center text-lg font-medium transition-colors"
        >
          Панель администратора
        </Link>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Наши коттеджи</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cottages.map(cottage => (
            <div key={cottage.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Изображение {cottage.name}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{cottage.name}</h3>
                <p className="text-gray-600 mb-4">{cottage.description}</p>
                <Link 
                  href={`/booking?cottage=${cottage.id}`}
                  className="inline-block bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-2 rounded-md transition-colors"
                >
                  Забронировать
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
