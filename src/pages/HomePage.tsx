import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import GiftCard from '@/components/GiftCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gift, CreditCard, ShoppingBag } from 'lucide-react';

const HomePage = () => {
  // Данные для превью карт на главной странице
  const featuredCards = [
    {
      id: 1,
      price: 1000,
      imageUrl: '/placeholder.svg',
      description: 'Идеально для небольших покупок и подписок. Пополните свой счет App Store и наслаждайтесь.',
    },
    {
      id:, 
      price: 5000,
      imageUrl: '/placeholder.svg',
      description: 'Отличный выбор для загрузки игр, приложений и музыки без ограничений.',
    },
    {
      id: 3,
      price: 2500,
      imageUrl: '/placeholder.svg',
      description: 'Оптимальный баланс для разнообразных покупок в экосистеме Apple.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Секция с картами */}
        <section className="apple-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-apple mb-4">
              Выберите номинал
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-apple-gray">
              Подарочные карты доступны разных номиналов для любых потребностей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCards.map((card) => (
              <GiftCard 
                key={card.id}
                id={card.id}
                price={card.price}
                imageUrl={card.imageUrl}
                description={card.description}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/products">
              <Button variant="outline" className="rounded-full px-8 py-6 border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white">
                Смотреть все карты
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Секция "Как это работает" */}
        <section className="bg-apple-light py-16">
          <div className="apple-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-apple mb-4">
                Как это работает
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-apple-gray">
                Всего три простых шага для получения и использования подарочной карты
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                  <ShoppingBag className="h-12 w-12 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">1. Выберите и оплатите</h3>
                <p className="text-apple-gray">Выберите подходящий номинал карты и оплатите покупку удобным способом</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                  <Gift className="h-12 w-12 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">2. Получите код</h3>
                <p className="text-apple-gray">Получите код активации на вашу электронную почту сразу после оплаты</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                  <CreditCard className="h-12 w-12 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">3. Активируйте карту</h3>
                <p className="text-apple-gray">Войдите в свой Apple ID и активируйте код в App Store или iTunes</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/instructions">
                <Button variant="outline" className="rounded-full px-8 py-6 border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white">
                  Подробная инструкция
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;