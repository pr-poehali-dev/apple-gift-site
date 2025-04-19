import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-apple-light">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Apple Gift Card
          </h1>
          <p className="text-xl md:text-2xl text-apple-gray mb-8 leading-relaxed">
            Подарите радость покупок в мире Apple. Идеальный подарок для любого случая.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-apple-blue text-white hover:bg-opacity-90 rounded-full px-8 py-6"
              asChild
            >
              <Link to="/products">
                Выбрать карту
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="border-apple-gray text-apple-gray hover:bg-transparent hover:text-black hover:border-black rounded-full px-8 py-6"
              asChild
            >
              <Link to="/instructions">
                Как использовать
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Apple Gift Card" 
            className="w-full max-w-md object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-apple-gray/20 to-transparent" />
    </section>
  );
};

export default Hero;
