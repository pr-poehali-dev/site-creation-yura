
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Герой-секция услуг */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Наши услуги</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              Мы предлагаем полный спектр решений для вашего бизнеса, 
              от консультаций до разработки и внедрения сложных систем
            </p>
          </div>
        </section>
        
        {/* Список услуг */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Веб-разработка</h3>
                <p className="text-gray-600 mb-4">
                  Создание современных, отзывчивых и быстрых веб-сайтов и приложений 
                  с использованием передовых технологий.
                </p>
                <Button variant="outline" className="mt-auto">Подробнее</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Мобильные приложения</h3>
                <p className="text-gray-600 mb-4">
                  Разработка нативных и кроссплатформенных мобильных приложений 
                  для iOS и Android, которые привлекают пользователей.
                </p>
                <Button variant="outline" className="mt-auto">Подробнее</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Аналитика данных</h3>
                <p className="text-gray-600 mb-4">
                  Превращаем ваши данные в ценные бизнес-инсайты, предоставляя 
                  аналитические решения и визуализацию.
                </p>
                <Button variant="outline" className="mt-auto">Подробнее</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Процесс работы */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Наш процесс работы</h2>
            
            <div className="flex flex-col md:flex-row gap-8 justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Консультация</h3>
                <p className="text-gray-600">Обсуждаем ваши потребности и цели проекта</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Планирование</h3>
                <p className="text-gray-600">Разрабатываем стратегию и план действий</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Реализация</h3>
                <p className="text-gray-600">Воплощаем идеи в реальный продукт</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA секция */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы начать свой проект?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Свяжитесь с нами сегодня для бесплатной консультации и узнайте, как мы можем помочь вашему бизнесу.
            </p>
            <Button variant="secondary" size="lg">Связаться с нами</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
