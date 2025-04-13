import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-apple-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">О нас</h3>
            <p className="mt-4 text-base text-gray-500">
              Мы официальный реселлер подарочных карт Apple Gift Card. Приобретайте карты с различными номиналами быстро и безопасно.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Карты</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products" className="text-base text-gray-500 hover:text-apple-blue">
                  Все номиналы
                </Link>
              </li>
              <li>
                <Link to="/instructions" className="text-base text-gray-500 hover:text-apple-blue">
                  Как активировать
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Поддержка</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/faq" className="text-base text-gray-500 hover:text-apple-blue">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <a href="mailto:support@applegiftcards.ru" className="text-base text-gray-500 hover:text-apple-blue">
                  Связаться с нами
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear} Apple Gift Cards. Все права защищены. Apple и логотип Apple являются товарными знаками Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;