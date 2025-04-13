import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InstructionStep from '@/components/InstructionStep';
import { CreditCard, Gift, ShoppingCart, CheckCircle, Smartphone, Laptop } from 'lucide-react';

const InstructionsPage = () => {
  const steps = [
    {
      number: 1,
      title: 'Выберите номинал',
      description: 'Выберите подходящий номинал Gift Card в зависимости от ваших потребностей.',
      icon: <ShoppingCart size={32} />
    },
    {
      number: 2,
      title: 'Оплатите покупку',
      description: 'Оплатите заказ удобным для вас способом — банковской картой или через электронный кошелек.',
      icon: <CreditCard size={32} />
    },
    {
      number: 3,
      title: 'Получите код',
      description: 'После оплаты вы моментально получите код активации на указанную вами электронную почту.',
      icon: <Gift size={32} />
    },
    {
      number: 4,
      title: 'Откройте App Store',
      description: 'На вашем iPhone, iPad, Mac или на сайте iTunes откройте App Store или iTunes Store.',
      icon: <Smartphone size={32} />
    },
    {
      number: 5,
      title: 'Активируйте карту',
      description: 'Войдите в свой Apple ID, нажмите на аватар профиля и выберите "Погасить карту или код".',
      icon: <Laptop size={32} />
    },
    {
      number: 6,
      title: 'Готово!',
      description: 'Введите полученный код и наслаждайтесь покупками в экосистеме Apple!',
      icon: <CheckCircle size={32} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-apple-light">
        {/* Заголовок страницы */}
        <div className="bg-white py-16">
          <div className="apple-container text-center">
            <h1 className="text-4xl font-bold text-apple">Как активировать карту</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-apple-gray">
              Подробная инструкция по покупке и активации Apple Gift Card
            </p>
          </div>
        </div>
        
        {/* Пошаговая инструкция */}
        <section className="apple-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {steps.map((step) => (
              <InstructionStep 
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </section>
        
        {/* Дополнительная информация */}
        <section className="bg-white py-16 mt-16">
          <div className="apple-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-apple mb-6">Часто задаваемые вопросы</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-apple mb-2">Что делать, если код не пришел?</h3>
                  <p className="text-apple-gray">
                    Обычно код приходит мгновенно после оплаты. Проверьте папку "Спам" вашей электронной почты. 
                    Если код не пришел в течение 15 минут, свяжитесь с нашей службой поддержки.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-apple mb-2">Можно ли активировать карту на нескольких устройствах?</h3>
                  <p className="text-apple-gray">
                    Да, средства добавляются на ваш счет Apple ID. Вы можете использовать эти средства на любом 
                    устройстве, где вы вошли под своим Apple ID.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-apple mb-2">Как проверить баланс моей Apple Gift Card?</h3>
                  <p className="text-apple-gray">
                    Чтобы проверить баланс, откройте App Store, нажмите на свою учетную запись в правом верхнем углу 
                    и выберите "Учетная запись". Ваш баланс будет отображаться в верхней части экрана.
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

export default InstructionsPage;