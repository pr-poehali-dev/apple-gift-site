import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-apple-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-apple-light sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-apple sm:text-5xl md:text-6xl">
                <span className="block">Apple Gift Card</span>
                <span className="block text-apple-blue">Подарите впечатления</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Приобретите подарочную карту Apple Gift Card для покупок в App Store, iTunes Store, 
                Apple Books и оплаты подписок Apple. Один подарок — миллион возможностей.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full">
                  <Link to="/products">
                    <Button className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium rounded-full text-white bg-apple-blue hover:bg-opacity-90 md:py-6 md:text-lg md:px-10">
                      Выбрать карту
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/placeholder.svg"
          alt="Apple Gift Card"
        />
      </div>
    </div>
  );
};

export default Hero;