import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    participants: 0,
    waste: 0,
    workshops: 0,
    partners: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targets = { participants: 5247, waste: 2.5, workshops: 158, partners: 34 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        participants: Math.floor(targets.participants * progress),
        waste: parseFloat((targets.waste * progress).toFixed(1)),
        workshops: Math.floor(targets.workshops * progress),
        partners: Math.floor(targets.partners * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedStats(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
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
            <button
              onClick={() => scrollToSection('impact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Наше влияние
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Дашборд
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

      <section id="impact" className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Наше влияние</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Измеримые результаты экологических изменений в цифрах
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '5000+', label: 'Участников', icon: 'Users', color: 'from-primary to-secondary' },
              { number: '2.5т', label: 'Вторсырья собрано', icon: 'Recycle', color: 'from-secondary to-accent' },
              { number: '150+', label: 'Мастер-классов', icon: 'BookOpen', color: 'from-accent to-primary' },
              { number: '30+', label: 'Экопартнёров', icon: 'Handshake', color: 'from-primary/80 to-secondary/80' },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-8 text-center bg-card rounded-2xl border-2 border-muted hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={stat.icon} className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-card rounded-2xl border-2 border-muted animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <Icon name="TrendingUp" size={28} />
                Рост осознанности
              </h3>
              <div className="space-y-6">
                {[
                  { label: 'Раздельный сбор', percent: 85, color: 'bg-primary' },
                  { label: 'Отказ от одноразового', percent: 72, color: 'bg-secondary' },
                  { label: 'Осознанное потребление', percent: 68, color: 'bg-accent' },
                  { label: 'Поддержка локальных', percent: 91, color: 'bg-primary/80' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{item.label}</span>
                      <span className="text-primary font-bold">{item.percent}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out animate-scale-in`}
                        style={{ width: `${item.percent}%`, animationDelay: `${idx * 0.2}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card rounded-2xl border-2 border-muted animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <Icon name="LineChart" size={28} />
                Снижение углеродного следа
              </h3>
              <div className="space-y-8">
                {[
                  { year: '2022', value: 100, label: 'Базовый год' },
                  { year: '2023', value: 75, label: '-25% выбросов' },
                  { year: '2024', value: 48, label: '-52% выбросов' },
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-end gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground font-semibold">{item.year}</span>
                          <span className="text-muted-foreground text-sm">{item.label}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-8 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-destructive via-secondary to-primary h-full rounded-full transition-all duration-1000 ease-out animate-scale-in"
                            style={{ 
                              width: `${item.value}%`, 
                              animationDelay: `${idx * 0.3}s`,
                              background: `linear-gradient(to right, ${idx === 0 ? '#ea384c' : idx === 1 ? '#7BA05B' : '#4A7C2F'})`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  За 2 года работы фестиваля участники снизили личный углеродный след более чем наполовину
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 animate-fade-in">
            <h3 className="text-3xl font-bold mb-8 text-primary text-center">
              Экологический эффект от мероприятий
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Droplet',
                  value: '180 000л',
                  label: 'Воды сэкономлено',
                  description: 'Благодаря переработке и повторному использованию',
                },
                {
                  icon: 'TreePine',
                  value: '320',
                  label: 'Деревьев спасено',
                  description: 'Эквивалент сохранённых лесных ресурсов',
                },
                {
                  icon: 'Wind',
                  value: '12.5т',
                  label: 'CO₂ предотвращено',
                  description: 'Снижение углеродного следа сообщества',
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 0.2}s` }}>
                  <div className="bg-gradient-to-br from-primary to-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-white" size={36} />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{item.label}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="py-20 px-4 bg-muted/10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Дашборд фестиваля</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Отслеживайте показатели экологического воздействия в реальном времени
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { 
                key: 'participants',
                number: animatedStats.participants.toLocaleString(), 
                label: 'Активных участников', 
                icon: 'Users', 
                trend: '+12%',
                color: 'from-primary to-primary/70'
              },
              { 
                key: 'waste',
                number: `${animatedStats.waste}т`, 
                label: 'Вторсырья переработано', 
                icon: 'Recycle', 
                trend: '+8%',
                color: 'from-secondary to-secondary/70'
              },
              { 
                key: 'workshops',
                number: animatedStats.workshops, 
                label: 'Мероприятий проведено', 
                icon: 'Calendar', 
                trend: '+25%',
                color: 'from-accent to-accent/70'
              },
              { 
                key: 'partners',
                number: animatedStats.partners, 
                label: 'Активных партнёров', 
                icon: 'Building2', 
                trend: '+5%',
                color: 'from-primary/80 to-secondary/80'
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-card rounded-2xl border-2 border-muted hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <Icon name={stat.icon} className="text-white" size={24} />
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                    {stat.trend}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="activity" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="activity" className="text-base">Активность</TabsTrigger>
              <TabsTrigger value="impact" className="text-base">Экоэффект</TabsTrigger>
              <TabsTrigger value="goals" className="text-base">Цели 2024</TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-card rounded-2xl border-2 border-muted">
                  <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                    <Icon name="Activity" size={24} />
                    Активность по месяцам
                  </h3>
                  <div className="space-y-4">
                    {[
                      { month: 'Октябрь', events: 18, participants: 620 },
                      { month: 'Сентябрь', events: 22, participants: 890 },
                      { month: 'Август', events: 15, participants: 540 },
                      { month: 'Июль', events: 25, participants: 1120 },
                    ].map((item, idx) => (
                      <div key={idx} className="border-l-4 border-primary pl-4 hover:bg-muted/30 p-3 rounded-r-lg transition-colors">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-foreground">{item.month}</span>
                          <span className="text-sm text-muted-foreground">{item.participants} чел.</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={(item.events / 25) * 100} className="h-2" />
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{item.events} событий</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-card rounded-2xl border-2 border-muted">
                  <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                    <Icon name="TrendingUp" size={24} />
                    Популярные направления
                  </h3>
                  <div className="space-y-5">
                    {[
                      { name: 'Переработка и апсайклинг', percent: 92, icon: 'Recycle' },
                      { name: 'Zero Waste lifestyle', percent: 85, icon: 'Trash2' },
                      { name: 'Городское садоводство', percent: 78, icon: 'Sprout' },
                      { name: 'Экомобильность', percent: 65, icon: 'Bike' },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Icon name={item.icon} className="text-primary" size={18} />
                            <span className="text-sm font-medium text-foreground">{item.name}</span>
                          </div>
                          <span className="text-sm font-bold text-primary">{item.percent}%</span>
                        </div>
                        <Progress value={item.percent} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Сокращение отходов',
                    value: '2.5т',
                    description: 'Мусора отправлено на переработку',
                    icon: 'Trash2',
                    detail: 'Эквивалент 15 тыс. пластиковых бутылок',
                    color: 'from-green-500 to-green-600',
                  },
                  {
                    title: 'Экономия воды',
                    value: '180 000л',
                    description: 'Воды сэкономлено',
                    icon: 'Droplets',
                    detail: 'Хватит на 900 человек в месяц',
                    color: 'from-blue-500 to-blue-600',
                  },
                  {
                    title: 'Снижение CO₂',
                    value: '12.5т',
                    description: 'Углекислого газа предотвращено',
                    icon: 'Wind',
                    detail: 'Как 625 деревьев за год',
                    color: 'from-purple-500 to-purple-600',
                  },
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 bg-card rounded-2xl border-2 border-muted hover:shadow-xl transition-all">
                    <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                      <Icon name={item.icon} className="text-white" size={28} />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                    <div className="text-sm font-semibold text-foreground mb-1">{item.title}</div>
                    <div className="text-xs text-muted-foreground mb-3">{item.description}</div>
                    <div className="pt-3 border-t border-muted">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Icon name="Info" size={14} />
                        {item.detail}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-6">
              <Card className="p-8 bg-card rounded-2xl border-2 border-muted">
                <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
                  <Icon name="Target" size={28} />
                  Годовые цели 2024
                </h3>
                <div className="space-y-8">
                  {[
                    { goal: 'Охватить 10 000 участников', current: 5247, target: 10000, icon: 'Users' },
                    { goal: 'Переработать 5 тонн вторсырья', current: 2500, target: 5000, icon: 'Recycle' },
                    { goal: 'Провести 200 мероприятий', current: 158, target: 200, icon: 'Calendar' },
                    { goal: 'Привлечь 50 партнёров', current: 34, target: 50, icon: 'Handshake' },
                  ].map((item, idx) => {
                    const percent = Math.round((item.current / item.target) * 100);
                    return (
                      <div key={idx} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                              <Icon name={item.icon} className="text-primary" size={20} />
                            </div>
                            <span className="font-semibold text-foreground">{item.goal}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">{percent}%</div>
                            <div className="text-xs text-muted-foreground">
                              {item.current.toLocaleString()} / {item.target.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <Progress value={percent} className="h-3" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border-2 border-muted">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <Icon name="Bell" size={24} />
                Последние обновления
              </h3>
              <div className="space-y-4">
                {[
                  { time: '2 часа назад', text: 'Новый мастер-класс по компостированию', type: 'event' },
                  { time: '5 часов назад', text: 'Собрано 120 кг пластика на акции', type: 'success' },
                  { time: 'Вчера', text: 'Партнёрство с ЭкоМаркет подписано', type: 'partner' },
                  { time: '2 дня назад', text: 'Новая инфографика о переработке', type: 'info' },
                ].map((update, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-card rounded-lg hover:shadow-md transition-all">
                    <div className="bg-primary/10 w-2 h-2 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{update.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{update.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl border-2 border-muted">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <Icon name="Award" size={24} />
                Достижения сообщества
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'Star', name: 'Экогерой', count: 124, color: 'bg-yellow-500' },
                  { icon: 'Trophy', name: 'Лидер переработки', count: 89, color: 'bg-orange-500' },
                  { icon: 'Medal', name: 'Zero Waste мастер', count: 56, color: 'bg-green-500' },
                  { icon: 'Sparkles', name: 'Амбассадор', count: 23, color: 'bg-purple-500' },
                ].map((badge, idx) => (
                  <div key={idx} className="p-4 bg-card rounded-xl text-center hover:shadow-lg transition-all">
                    <div className={`${badge.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <Icon name={badge.icon} className="text-white" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-primary">{badge.count}</div>
                    <div className="text-xs text-muted-foreground">{badge.name}</div>
                  </div>
                ))}
              </div>
            </Card>
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