
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        
        {/* Секция о компании */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="/placeholder.svg" 
                  alt="О компании" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">О нашей компании</h2>
                <p className="text-gray-700 mb-4">
                  Мы команда профессионалов, объединенных общей целью — создавать инновационные 
                  решения для бизнеса. За годы работы мы накопили богатый опыт и помогли 
                  множеству клиентов реализовать их идеи.
                </p>
                <p className="text-gray-700 mb-4">
                  Наша миссия — делать технологии доступными для решения бизнес-задач 
                  любой сложности. Мы ценим наших клиентов и строим долгосрочные отношения, 
                  основанные на доверии и результатах.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <div className="text-gray-600">Довольных клиентов</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-gray-600">Завершенных проектов</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-gray-600">Лет опыта</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-gray-600">Техническая поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
