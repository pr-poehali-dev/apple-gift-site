import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo-b.svg" alt="Apple Gift Card" className="h-8" />
          <span className="ml-2 font-medium">Gift Card</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-apple-blue transition-colors">
            Главная
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-apple-blue transition-colors">
            Карты
          </Link>
          <Link to="/instructions" className="text-sm font-medium hover:text-apple-blue transition-colors">
            Инструкция
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/products" 
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Карты
            </Link>
            <Link 
              to="/instructions" 
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Инструкция
            </Link>
            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-sm text-gray-500">Корзина</span>
              <Button variant="outline" size="icon" className="rounded-full">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
