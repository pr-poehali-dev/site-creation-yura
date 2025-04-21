
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Логотип" className="h-8 w-auto" />
          <span className="font-semibold text-xl">БрендНейм</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
            О нас
          </Link>
          <Link to="/contacts" className="text-gray-700 hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Войти
          </Button>
          <Button size="sm">
            Начать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
