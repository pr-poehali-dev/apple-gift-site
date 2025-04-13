import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

type GiftCardProps = {
  id: number;
  price: number;
  imageUrl: string;
  description: string;
};

const GiftCard = ({ id, price, imageUrl, description }: GiftCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="apple-card hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={imageUrl} 
          alt={`Apple Gift Card ${price} ₽`} 
          className={`w-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900">Apple Gift Card</h3>
        <p className="mt-2 text-3xl font-semibold">{price.toLocaleString()} ₽</p>
        <p className="mt-3 text-gray-500">{description}</p>
        
        <div className="mt-6">
          <Button className="w-full bg-apple-blue hover:bg-apple-blue/90 rounded-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;