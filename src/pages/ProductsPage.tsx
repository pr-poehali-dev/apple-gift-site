import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GiftCard from '@/components/GiftCard';

const ProductsPage = () => {
  // Данные о продуктах
  const giftCards = [
    {
      id: 1,
      price: 1000,
      imageUrl: '/placeholder.svg',
      description: 'Идеально для небольших покупок и подписок. Пополните свой счет App Store и наслаждайтесь.',
    },
    {
      id: 2,
      price: 2500,
      imageUrl: '/placeholder.svg',
      description: 'Оптимальный баланс для разнообразных покупок в экосистеме Apple.',
    },
    {
      id: 3,
      price: 5000,
      imageUrl: '/placeholder.svg',
      description: 'Отличный выбор для загрузки игр, приложений и музыки без ограничений.',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-apple-light">
        {/* Заголовок страницы */}
        <div className="bg-white py-16">
          <div className="apple-container text-center">
            <h1 className="text-4xl font-bold text-apple">Apple Gift Cards</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-apple-gray">
              Выберите подходящий номинал для использования в App Store, iTunes, Apple Books 
              и множестве других сервисов Apple.
            </p>
          </div>
        </div>
        
        {/* Карточки продуктов */}
        <section className="apple-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <GiftCard 
                key={card.id}
                id={card.id}
                price={card.price}
                imageUrl={card.imageUrl}
                description={card.description}
              />
            ))}
          </div>
        </section>
        
        {/* Дополнительная информация */}
        <section className="bg-white py-16 mt-16">
          <div className="apple-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-apple mb-6">Информация о картах</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-apple mb-2">Что можно купить с Apple Gift Card?</h3>
                  <p className="text-apple-gray">
                    С помощью Apple Gift Card вы можете приобрести приложения, игры, музыку, фильмы, 
                    книги, а также оплатить подписки на сервисы Apple, такие как Apple Music, 
                    Apple TV+, Apple Arcade, iCloud и многое другое.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-apple mb-2">Срок действия карты</h3>
                  <p className="text-apple-gray">
                    Apple Gift Card не имеет срока действия и не теряет своей стоимости со временем. Средства остаются на вашем 
                    счете Apple ID до тех пор, пока вы их не используете.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-apple mb-2">Безопасность транзакций</h3>
                  <p className="text-apple-gray">
                    Все транзакции на нашем сайте защищены современными технологиями шифрования. 
                    Мы гарантируем безопасность ваших платежей и конфиденциальность личных данных.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;