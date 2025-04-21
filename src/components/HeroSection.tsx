
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Создайте ваш идеальный проект вместе с нами
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Мы предлагаем инновационные решения для бизнеса любого масштаба.
              Начните свой путь к успеху уже сегодня.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Начать сейчас</Button>
              <Button variant="outline" size="lg">Узнать больше</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="Главная иллюстрация" 
              className="max-w-md w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
