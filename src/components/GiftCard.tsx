import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export interface GiftCardProps {
  id: string;
  amount: number;
  image: string;
  description: string;
}

const GiftCard = ({ amount, image, description }: GiftCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <img 
          src={image} 
          alt={`Apple Gift Card ${amount} руб.`} 
          className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-medium mb-2">
          {amount.toLocaleString('ru-RU')} ₽
        </h3>
        <p className="text-apple-gray text-sm mb-6">
          {description}
        </p>
        
        <Button 
          className="w-full bg-apple-blue text-white hover:bg-opacity-90 rounded-full flex items-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Добавить в корзину</span>
        </Button>
      </div>
    </div>
  );
};

export default GiftCard;
