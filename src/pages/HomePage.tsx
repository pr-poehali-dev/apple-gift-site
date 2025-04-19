import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GiftCard from "@/components/GiftCard";
import { Button } from "@/components/ui/button";
import { CreditCard, Gift, ShoppingBag } from "lucide-react";

const featuredCards = [
  {
    id: "card-1",
    amount: 1000,
    image: "/placeholder.svg",
    description: "Идеально для небольших покупок в App Store или iTunes"
  },
  {
    id: "card-2",
    amount: 5000,
    image: "/placeholder.svg",
    description: "Для настоящих ценителей приложений, игр и контента"
  }
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Популярные карты</h2>
              <p className="text-apple-gray max-w-2xl mx-auto">
                Выберите подходящий номинал для любого случая. Наши карты — идеальный подарок и для себя, и для близких.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              {featuredCards.map(card => (
                <GiftCard key={card.id} {...card} />
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                variant="outline" 
                className="rounded-full border-apple-gray text-apple-gray hover:bg-transparent hover:text-black hover:border-black"
                asChild
              >
                <Link to="/products">
                  Посмотреть все карты
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-apple-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Преимущества Apple Gift Card</h2>
              <p className="text-apple-gray max-w-2xl mx-auto">
                Универсальный подарок для любого повода. Используйте для покупок в App Store, iTunes Store и Apple Store.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-apple-light rounded-full mx-auto mb-6">
                  <CreditCard className="h-8 w-8 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium mb-3">Легкое использование</h3>
                <p className="text-apple-gray">
                  Просто добавьте карту в свой аккаунт Apple ID и используйте для любых покупок
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-apple-light rounded-full mx-auto mb-6">
                  <Gift className="h-8 w-8 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium mb-3">Идеальный подарок</h3>
                <p className="text-apple-gray">
                  Можно подарить друзьям и близким на любой праздник или торжество
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-apple-light rounded-full mx-auto mb-6">
                  <ShoppingBag className="h-8 w-8 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium mb-3">Универсальность</h3>
                <p className="text-apple-gray">
                  Подходит для покупки приложений, игр, музыки, фильмов и подписок
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
