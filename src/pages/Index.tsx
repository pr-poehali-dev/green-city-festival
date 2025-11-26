import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Leaf" className="text-secondary" size={28} />
            Зелёный город
          </h1>
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              О фестивале
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
                Экофестиваль для всех
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Пространство, где каждый житель становится участником устойчивых изменений: 
                учится, пробует и создаёт экологичные привычки вместе с сообществом
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                  onClick={() => scrollToSection('about')}
                >
                  Узнать больше
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Стать участником
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/fe0fd787-69ef-4b68-8b17-370eaea7e38a/files/d90ee45f-8db3-4d4d-9654-adfe2f845713.jpg"
                alt="Экофестиваль Зелёный город"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: 'Users',
                title: 'Для всех возрастов',
                description: 'Активности и мастер-классы для детей и взрослых',
              },
              {
                icon: 'Lightbulb',
                title: 'Практичные решения',
                description: 'Работающие экопрактики для повседневной жизни',
              },
              {
                icon: 'Heart',
                title: 'Сообщество',
                description: 'Единомышленники и локальные экоинициативы',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-card hover:shadow-xl transition-all duration-300 rounded-2xl border-2 border-muted animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">О фестивале</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Фестиваль-лаборатория устойчивых изменений и экологичных привычек
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/projects/fe0fd787-69ef-4b68-8b17-370eaea7e38a/files/a14db827-8f98-44dc-8e52-e262094ff7d0.jpg"
                alt="Активности фестиваля"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <Icon name="Target" size={28} />
                  Наша миссия
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Создавать пространство, где теория встречается с практикой, а экология становится 
                  источником вдохновения и радости созидания
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
                  <Icon name="Sparkles" size={28} />
                  Наш подход
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Мы делаем акцент на позитивных изменениях, а не на страшилках. 
                  Показываем, что начать можно с малого — и это уже важно
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: 'BookOpen',
                title: 'Открытые форматы',
                items: ['Лекции и дискуссии', 'Воркшопы и практикумы', 'Экскурсии и прогулки'],
              },
              {
                icon: 'Recycle',
                title: 'Интерактивные зоны',
                items: ['Фримаркет и обмен вещами', 'Пункты приёма вторсырья', 'Мастерские переработки'],
              },
            ].map((block, index) => (
              <Card
                key={index}
                className="p-8 bg-card rounded-2xl border-2 border-muted animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/20 w-14 h-14 rounded-2xl flex items-center justify-center">
                    <Icon name={block.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">{block.title}</h3>
                </div>
                <ul className="space-y-3">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Наши ценности</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'Leaf', text: 'Экологическая ответственность' },
                    { icon: 'MapPin', text: 'Поддержка локальных инициатив' },
                    { icon: 'GraduationCap', text: 'Образование через действие' },
                    { icon: 'Users', text: 'Инклюзивность и доступность' },
                    { icon: 'Sun', text: 'Радость и вдохновение' },
                  ].map((value, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <Icon name={value.icon} className="text-primary" size={24} />
                      </div>
                      <span className="text-lg font-medium text-foreground">{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="https://cdn.poehali.dev/projects/fe0fd787-69ef-4b68-8b17-370eaea7e38a/files/84a51600-4a96-48ea-926e-b3b618333b83.jpg"
                  alt="Ценности фестиваля"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Leaf" size={32} />
            <h3 className="text-2xl font-bold">Зелёный город</h3>
          </div>
          <p className="text-primary-foreground/80 mb-6">
            Фестиваль экологичных изменений и устойчивых привычек
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Icon name="MapPin" size={24} />
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Зелёный город. Вместе создаём устойчивое будущее
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
