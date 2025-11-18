import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const danceStyles = [
  {
    name: 'Хип-хоп',
    icon: 'Music',
    description: 'Энергичные urban-движения',
    schedule: 'ПН, СР, ПТ 18:00'
  },
  {
    name: 'Современный',
    icon: 'Sparkles',
    description: 'Пластика и самовыражение',
    schedule: 'ВТ, ЧТ 19:00'
  },
  {
    name: 'Брейк-данс',
    icon: 'Zap',
    description: 'Акробатика и фристайл',
    schedule: 'ПН, СР 20:00'
  },
  {
    name: 'Латина',
    icon: 'Flame',
    description: 'Страсть и ритм',
    schedule: 'ВТ, ЧТ, СБ 18:00'
  }
];

const teachers = [
  {
    name: 'Алина Волкова',
    specialty: 'Хип-хоп и современный танец',
    experience: '8 лет опыта',
    achievements: 'Чемпионка России 2021'
  },
  {
    name: 'Максим Орлов',
    specialty: 'Брейк-данс',
    experience: '10 лет опыта',
    achievements: 'Судья международных батлов'
  },
  {
    name: 'Виктория Романова',
    specialty: 'Латина и бальные танцы',
    experience: '12 лет опыта',
    achievements: 'Мастер спорта международного класса'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    style: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={32} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              DanceFlow
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#directions" className="hover:text-primary transition-colors">Направления</a>
            <a href="#teachers" className="hover:text-primary transition-colors">Преподаватели</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Танцуй свободно
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Раскрой свой потенциал в мире танца. Профессиональные преподаватели и атмосфера творчества
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Пробное занятие
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Расписание
            </Button>
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Направления танцев
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {danceStyles.map((style, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={style.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                  <p className="text-muted-foreground mb-4">{style.description}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                    <Icon name="Clock" size={16} />
                    {style.schedule}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Наши преподаватели
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="User" size={80} className="text-white" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{teacher.name}</h3>
                  <p className="text-primary font-semibold mb-2">{teacher.specialty}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Award" size={16} className="text-secondary" />
                      {teacher.experience}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Trophy" size={16} className="text-accent" />
                      {teacher.achievements}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Расписание занятий
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'].map((day, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-muted/50 to-transparent hover:from-primary/10 transition-colors">
                    <div className="w-32 font-bold text-primary">{day}</div>
                    <div className="flex-1 text-sm text-muted-foreground">
                      {index % 2 === 0 ? '18:00 - Хип-хоп, 20:00 - Брейк-данс' : '18:00 - Латина, 19:00 - Современный'}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Записаться на занятие
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Направление танца</label>
                    <Input
                      placeholder="Выберите стиль"
                      value={formData.style}
                      onChange={(e) => setFormData({...formData, style: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем опыте в танцах"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Танцевальная, 25<br/>ТЦ "Ритм", 3 этаж</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67<br/>Ежедневно с 10:00 до 22:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">info@danceflow.ru<br/>Ответим в течение 1 часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={28} />
                <span className="text-xl font-bold">DanceFlow</span>
              </div>
              <p className="text-white/80 text-sm">Школа танцев для тех, кто любит движение и свободу</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#directions" className="hover:text-white transition-colors">Направления</a></li>
                <li><a href="#teachers" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Расписание</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@danceflow.ru</li>
                <li>г. Москва, ул. Танцевальная, 25</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
            © 2024 DanceFlow. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}
