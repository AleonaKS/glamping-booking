'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { houses } from '@/app/houses';
import { toast } from 'react-hot-toast';
import styles from './page.module.css';

interface Props {
  params: { id: string };
}

export default function HousePage({ params }: Props) {
  const router = useRouter();
  const house = houses.find((h) => h.id === params.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!house) {
    return (
      <div style={{ maxWidth: 600, margin: '20px auto', padding: '20px' }}>
        <p>Домик не найден</p>
        <button
          onClick={() => router.push('/')}
          style={{
            marginTop: '16px',
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Вернуться на главную
        </button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      cottageId: house.id,
      guestName: formData.get('name') as string,
      startDate: formData.get('checkin') as string,
      endDate: formData.get('checkout') as string,
      guestEmail: formData.get('email') as string,
      guestPhone: formData.get('phone') as string,
      adults: 2,
      children: 0,
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ошибка при бронировании');
      }

      toast.success('Бронирование успешно создано!');
      // Вместо перехода на другую страницу просто закрываем модал и можно обновить состояние или показать сообщение
      setIsModalOpen(false);

      // Если хотите, можно добавить локальное состояние для показа success-сообщения на странице
      // Например, setSuccessMessage('Бронирование успешно создано!');

    } catch (error) {
      console.error('Booking error:', error);
      toast.error(error instanceof Error ? error.message : 'Произошла ошибка при бронировании');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.header}>{house.name}</h1>

        <div className={styles.houseContainer}>
          <img src={house.image} alt={house.name} className={styles.houseImage} />

          <div>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}
            >
              {house.description}
            </p>

            <div className={styles.infoBlock}>
              <p style={{ marginBottom: '8px' }}>
                <strong>Цена:</strong> {house.price} ₽/ночь
              </p>
              <p style={{ marginBottom: '8px' }}>
                <strong>Максимум гостей:</strong> {house.maxPeople}
              </p>
            </div>

            <button onClick={() => setIsModalOpen(true)} className={styles.bookButton}>
              Забронировать
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно бронирования */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Бронирование: {house.name}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className={styles.closeButton}
                aria-label="Закрыть окно"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.bookingForm}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Ваше имя:</label>
                <input
                  name="name"
                  required
                  className={styles.inputField}
                  placeholder="Иван Иванов"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Телефон:</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className={styles.inputField}
                  placeholder="+7 (XXX) XXX-XX-XX"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={styles.inputField}
                  placeholder="example@mail.com"
                />
              </div>

              <div className={styles.dateGroup}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Дата заезда:</label>
                  <input
                    type="date"
                    name="checkin"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className={styles.inputField}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Дата выезда:</label>
                  <input
                    type="date"
                    name="checkout"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className={styles.inputField}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Комментарий:</label>
                <textarea
                  name="comment"
                  className={`${styles.inputField} ${styles.textareaField}`}
                  rows={3}
                  placeholder="Ваши пожелания..."
                />
              </div>

              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className={styles.cancelButton}
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? <span className={styles.spinner} /> : 'Подтвердить бронь'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}




// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { houses } from '@/app/houses';

// interface Props {
//   params: { id: string };
// }

// export default function HousePage({ params }: Props) {
//   const house = houses.find((h) => h.id === params.id);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   if (!house) return <p>Домик не найден</p>;

//   return (
//     <div style={{ maxWidth: 600, margin: '20px auto' }}>
//       <h1>{house.name}</h1>
//       <img src={house.image} alt={house.name} style={{ width: '100%', borderRadius: 8 }} />
//       <p>{house.description}</p>
//       <p>Цена: {house.price} ₽/ночь</p>
//       <p>Максимум гостей: {house.maxPeople}</p>

//       <button 
//         onClick={() => setIsModalOpen(true)} 
//         style={{ 
//           marginTop: 20,
//           backgroundColor: '#3b82f6',
//           color: 'white',
//           padding: '8px 16px',
//           borderRadius: '4px',
//           border: 'none',
//           cursor: 'pointer'
//         }}
//       >
//         Забронировать
//       </button>

//       {isModalOpen && <BookingModal house={house} onClose={() => setIsModalOpen(false)} />}
//     </div>
//   );
// }

// function BookingModal({
//   house,
//   onClose,
// }: {
//   house: typeof houses[number];
//   onClose: () => void;
// }) {
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: 'rgba(0,0,0,0.5)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 100,
//       }}
//       onClick={onClose}
//     >
//       <div
//         style={{ 
//           background: 'white', 
//           padding: 20, 
//           borderRadius: 8, 
//           width: 400,
//           maxWidth: '90%'
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h2>Бронирование: {house.name}</h2>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert('Спасибо за бронирование!');
//             onClose();
//           }}
//           style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
//         >
//           <label style={{ display: 'flex', flexDirection: 'column' }}>
//             Ваше имя:
//             <input 
//               name="name" 
//               required 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px',
//                 marginTop: '4px',
//                 border: '1px solid #ccc',
//                 borderRadius: '4px'
//               }} 
//             />
//           </label>
//           <label style={{ display: 'flex', flexDirection: 'column' }}>
//             Дата заезда:
//             <input 
//               type="date" 
//               name="checkin" 
//               required 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px',
//                 marginTop: '4px',
//                 border: '1px solid #ccc',
//                 borderRadius: '4px'
//               }} 
//             />
//           </label>
//           <label style={{ display: 'flex', flexDirection: 'column' }}>
//             Дата выезда:
//             <input 
//               type="date" 
//               name="checkout" 
//               required 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px',
//                 marginTop: '4px',
//                 border: '1px solid #ccc',
//                 borderRadius: '4px'
//               }} 
//             />
//           </label>

//           <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
//             <button 
//               type="submit" 
//               style={{
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 padding: '8px 16px',
//                 borderRadius: '4px',
//                 border: 'none',
//                 cursor: 'pointer',
//                 flex: 1
//               }}
//             >
//               Забронировать
//             </button>
//             <button 
//               type="button" 
//               onClick={onClose}
//               style={{
//                 backgroundColor: '#ef4444',
//                 color: 'white',
//                 padding: '8px 16px',
//                 borderRadius: '4px',
//                 border: 'none',
//                 cursor: 'pointer',
//                 flex: 1
//               }}
//             >
//               Отмена
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
