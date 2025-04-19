import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GiftCard from "@/components/GiftCard";

const giftCards = [
  {
    id: "card-1000",
    amount: 1000,
    image: "/placeholder.svg",
    description: "Идеально для небольших покупок в App Store или iTunes"
  },
  {
    id: "card-2500",
    amount: 2500,
    image: "/placeholder.svg",
    description: "Для покупки игр и премиум-приложений в Apple Store"
  },
  {
    id: "card-5000",
    amount: 5000,
    image: "/placeholder.svg",
    description: "Максимальные возможности для всех сервисов Apple"
  }
];

const ProductsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-apple-light py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-medium mb-4">Apple Gift Cards</h1>
              <p className="text-apple-gray text-lg">
                Выберите подходящий номинал и подарите возможность приобрести любимые приложения, игры, музыку, фильмы и многое другое.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {giftCards.map(card => (
                <GiftCard key={card.id} {...card} />
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-apple-light rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-medium mb-4 text-center">Нужен особый номинал?</h3>
              <p className="text-apple-gray text-center mb-6">
                Свяжитесь с нами для заказа подарочных карт с индивидуальным номиналом или для корпоративных клиентов.
              </p>
              <div className="flex justify-center">
                <a 
                  href="mailto:sales@applegiftcard.ru" 
                  className="text-apple-blue hover:underline font-medium"
                >
                  Связаться с нами
                </a>
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
