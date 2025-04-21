
import { CheckCircle, Clock, Code, Shield } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle size={28} />,
      title: "Высокое качество",
      description: "Мы гарантируем профессиональный подход и отличный результат."
    },
    {
      icon: <Clock size={28} />,
      title: "Быстрые сроки",
      description: "Выполняем проекты в согласованные сроки без потери качества."
    },
    {
      icon: <Code size={28} />,
      title: "Современные технологии",
      description: "Используем передовые технологии для создания вашего проекта."
    },
    {
      icon: <Shield size={28} />,
      title: "Надежность",
      description: "Обеспечиваем безопасность и стабильность всех наших решений."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем комплексный подход к решению задач и обеспечиваем высокое качество на каждом этапе работы.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
