import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-apple-gray hover:text-black transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-apple-gray hover:text-black transition-colors">
                  Карты
                </Link>
              </li>
              <li>
                <Link to="/instructions" className="text-sm text-apple-gray hover:text-black transition-colors">
                  Инструкция
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-apple-gray hover:text-black transition-colors">
                  Служба поддержки
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-apple-gray hover:text-black transition-colors">
                  Часто задаваемые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-apple-gray hover:text-black transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-apple-gray hover:text-black transition-colors">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-apple-gray hover:text-black transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-apple-gray text-center">
            Copyright © {currentYear} Apple Gift Card. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
