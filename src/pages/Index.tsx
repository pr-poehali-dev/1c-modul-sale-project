import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const modules = [
    { 
      name: "Управление складом", 
      price: "12,000₽", 
      description: "Полная автоматизация складского учета с функциями инвентаризации", 
      features: ["Учет остатков", "Инвентаризация", "Отчеты"]
    },
    { 
      name: "CRM модуль", 
      price: "18,000₽", 
      description: "Управление клиентской базой и продажами для 1С", 
      features: ["База клиентов", "Воронка продаж", "Аналитика"]
    },
    { 
      name: "Интеграция с сайтом", 
      price: "25,000₽", 
      description: "Синхронизация товаров и заказов между сайтом и 1С", 
      features: ["Синхронизация", "API", "Автоматизация"]
    }
  ];

  const services = [
    {
      title: "Разработка под ключ",
      description: "Создаем уникальные модули и конфигурации под ваши задачи",
      price: "от 30,000₽",
      icon: "Code"
    },
    {
      title: "Доработка конфигураций",
      description: "Модификация существующих решений под новые требования",
      price: "от 15,000₽", 
      icon: "Settings"
    },
    {
      title: "Интеграции",
      description: "Подключение внешних сервисов и API к вашей 1С",
      price: "от 20,000₽",
      icon: "Link"
    },
    {
      title: "Консультации",
      description: "Экспертная поддержка по архитектуре и оптимизации",
      price: "от 5,000₽",
      icon: "MessageSquare"
    }
  ];

  const projects = [
    {
      title: "Автоматизация торговой компании",
      description: "Внедрение полного цикла учета товаров, складов и продаж",
      result: "Сокращение времени на обработку заказов на 60%"
    },
    {
      title: "Интеграция с интернет-магазином",
      description: "Синхронизация каталога и заказов между сайтом и 1С",
      result: "Автоматизация обработки 1000+ заказов в день"
    },
    {
      title: "CRM для строительной компании",
      description: "Разработка модуля управления проектами и клиентами",
      result: "Увеличение конверсии на 35%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Database" className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold">1C Modules Store</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
          <a href="#modules" className="text-gray-600 hover:text-primary transition-colors">Модули</a>
          <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Примеры работ</a>
          <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Прайс</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Button>
          <Icon name="Phone" className="h-4 w-4 mr-2" />
          Заказать звонок
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Готовые модули<br />
            <span className="text-primary">для 1С</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Автоматизируйте бизнес-процессы с помощью профессиональных модулей 
            и индивидуальной разработки под ваши задачи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
              Посмотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Icon name="MessageSquare" className="h-5 w-5 mr-2" />
              Бесплатная консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-600">Готовых модулей</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
            <div className="text-gray-600">Опыт разработки</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Техподдержка</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Услуги разработки</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем полный спектр услуг по разработке и доработке 1С конфигураций
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Icon name={service.icon as any} className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Badge variant="secondary" className="text-lg font-semibold">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Catalog */}
      <section id="modules" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Каталог модулей</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовые решения для автоматизации различных бизнес-процессов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{module.name}</CardTitle>
                    <Badge className="text-lg font-bold">{module.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{module.description}</CardDescription>
                  <div className="space-y-2 mb-6">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full">
                    <Icon name="Download" className="h-4 w-4 mr-2" />
                    Скачать модуль
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Примеры работ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Успешно реализованные проекты наших клиентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Icon name="TrendingUp" className="h-5 w-5 text-green-600 mt-0.5" />
                      <p className="text-green-700 font-medium">{project.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Прайс-лист</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прозрачные цены на все виды работ
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-4 border-b">
                    <div className="font-semibold">Услуга</div>
                    <div className="font-semibold text-center">Сложность</div>
                    <div className="font-semibold text-right">Стоимость</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3">
                    <div>Простой модуль</div>
                    <div className="text-center">
                      <Badge variant="outline">Низкая</Badge>
                    </div>
                    <div className="text-right font-semibold">от 8,000₽</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3">
                    <div>Средний модуль</div>
                    <div className="text-center">
                      <Badge variant="secondary">Средняя</Badge>
                    </div>
                    <div className="text-right font-semibold">от 15,000₽</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3">
                    <div>Сложный модуль</div>
                    <div className="text-center">
                      <Badge>Высокая</Badge>
                    </div>
                    <div className="text-right font-semibold">от 25,000₽</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3">
                    <div>Интеграция с внешним API</div>
                    <div className="text-center">
                      <Badge>Высокая</Badge>
                    </div>
                    <div className="text-right font-semibold">от 30,000₽</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3">
                    <div>Консультация специалиста</div>
                    <div className="text-center">
                      <Badge variant="outline">—</Badge>
                    </div>
                    <div className="text-right font-semibold">3,000₽/час</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации по вашим задачам
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Icon name="Phone" className="h-8 w-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p>+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" className="h-8 w-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p>info@1cmodules.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="MessageCircle" className="h-8 w-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Telegram</h3>
              <p>@1cmodules_support</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageSquare" className="h-5 w-5 mr-2" />
              Написать в чат
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Database" className="h-6 w-6" />
                <span className="text-lg font-bold">1C Modules Store</span>
              </div>
              <p className="text-gray-400">
                Профессиональная разработка модулей и конфигураций для 1С
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Готовые модули</li>
                <li>Разработка под ключ</li>
                <li>Интеграции</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Документация</li>
                <li>Обучение</li>
                <li>Техподдержка</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@1cmodules.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 1C Modules Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}