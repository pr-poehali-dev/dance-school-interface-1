import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  const danceStyles = [
    { name: 'Хип-хоп', icon: 'Headphones', color: 'from-primary to-secondary' },
    { name: 'Современный танец', icon: 'Sparkles', color: 'from-secondary to-accent' },
    { name: 'Бальные танцы', icon: 'Heart', color: 'from-accent to-primary' },
    { name: 'Брейк-данс', icon: 'Zap', color: 'from-primary to-accent' },
    { name: 'Латина', icon: 'Flame', color: 'from-secondary to-primary' },
    { name: 'Джаз-фанк', icon: 'Star', color: 'from-accent to-secondary' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Танцуй <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">свободно</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Профессиональная школа танцев для детей и взрослых. Раскройте свой потенциал вместе с нами!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg">
                    <Link to="/application">Записаться на пробное занятие</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg">
                    <Link to="/schedule">Посмотреть расписание</Link>
                  </Button>
                </div>
                <div className="flex gap-8 pt-6">
                  <div>
                    <div className="text-4xl font-bold text-primary">15+</div>
                    <div className="text-muted-foreground">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary">500+</div>
                    <div className="text-muted-foreground">учеников</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent">20+</div>
                    <div className="text-muted-foreground">преподавателей</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Направления танцев
              </h2>
              <p className="text-xl text-muted-foreground">
                Выберите свой стиль из нашей коллекции танцевальных направлений
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {danceStyles.map((style, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary"
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${style.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon name={style.icon as any} size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                    <p className="text-muted-foreground">
                      Занятия для начинающих и продвинутых танцоров
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Почему выбирают нас
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Award" size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Опытные преподаватели</h3>
                <p className="text-muted-foreground">
                  Наши педагоги — профессионалы с многолетним опытом и наградами
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name="Users" size={40} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Малые группы</h3>
                <p className="text-muted-foreground">
                  Индивидуальный подход к каждому ученику в группах до 12 человек
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Trophy" size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Участие в конкурсах</h3>
                <p className="text-muted-foreground">
                  Регулярные выступления и участие в танцевальных соревнованиях
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы начать танцевать?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатное пробное занятие и откройте для себя мир танца!
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link to="/application">Записаться прямо сейчас</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
