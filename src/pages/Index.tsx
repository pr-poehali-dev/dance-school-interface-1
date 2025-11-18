import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const danceStyles = [
    { 
      name: "Хип-хоп", 
      icon: "Music", 
      schedule: "Пн, Ср, Пт 18:00-19:30",
      color: "from-primary to-secondary"
    },
    { 
      name: "Контемпорари", 
      icon: "Sparkles", 
      schedule: "Вт, Чт 19:00-20:30",
      color: "from-accent to-primary"
    },
    { 
      name: "Брейк-данс", 
      icon: "Zap", 
      schedule: "Ср, Пт 20:00-21:30",
      color: "from-secondary to-accent"
    },
    { 
      name: "Джаз-фанк", 
      icon: "Star", 
      schedule: "Пн, Чт 17:00-18:30",
      color: "from-primary to-accent"
    }
  ];

  const instructors = [
    {
      name: "Алексей Морозов",
      specialty: "Хип-хоп, Брейк-данс",
      experience: "12 лет опыта",
      description: "Чемпион России по брейк-дансу 2020"
    },
    {
      name: "Мария Соколова",
      specialty: "Контемпорари, Джаз-фанк",
      experience: "8 лет опыта",
      description: "Солистка театра современного танца"
    },
    {
      name: "Дмитрий Волков",
      specialty: "Хип-хоп, Урбан",
      experience: "10 лет опыта",
      description: "Хореограф музыкальных клипов"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            DanceFlow
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#schedule" className="text-foreground hover:text-primary transition-colors">Расписание</a>
            <a href="#instructors" className="text-foreground hover:text-primary transition-colors">Преподаватели</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Танцуй свою
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              историю
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Школа современных танцев для всех уровней подготовки. 
            Открой в себе танцора с профессиональными преподавателями.
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Play" size={20} className="mr-2" />
              Начать танцевать
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Пробное занятие
            </Button>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Направления и расписание
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Выбери свой стиль и время для занятий
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {danceStyles.map((style, index) => (
              <Card 
                key={index}
                className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer border-border bg-card/50 backdrop-blur group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${style.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                  <Icon name={style.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{style.name}</h3>
                <p className="text-muted-foreground mb-4">
                  <Icon name="Clock" size={16} className="inline mr-2" />
                  {style.schedule}
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Записаться
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="instructors" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Наши преподаватели
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Профессионалы с мировым опытом
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 border-border bg-card/50 backdrop-blur group"
              >
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon name="User" size={80} className="text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{instructor.name}</h3>
                <p className="text-primary font-semibold mb-2">{instructor.specialty}</p>
                <p className="text-muted-foreground mb-2">
                  <Icon name="Award" size={16} className="inline mr-2" />
                  {instructor.experience}
                </p>
                <p className="text-sm text-muted-foreground">{instructor.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Онлайн-заявка
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку и мы свяжемся с вами в течение часа
          </p>
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  <Icon name="User" size={16} className="inline mr-2" />
                  Ваше имя
                </label>
                <Input 
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  <Icon name="Phone" size={16} className="inline mr-2" />
                  Телефон
                </label>
                <Input 
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  <Icon name="MessageSquare" size={16} className="inline mr-2" />
                  Сообщение
                </label>
                <Textarea 
                  placeholder="Расскажите о себе и выберите направление"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="min-h-32 bg-background/50"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DanceFlow
              </h3>
              <p className="text-muted-foreground">
                Современная школа танцев в центре города. 
                Профессиональное оборудование и атмосфера творчества.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <Icon name="MapPin" size={16} className="inline mr-2" />
                  г. Москва, ул. Танцевальная, 42
                </p>
                <p>
                  <Icon name="Phone" size={16} className="inline mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p>
                  <Icon name="Mail" size={16} className="inline mr-2" />
                  info@danceflow.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Icon name="Instagram" size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Icon name="Youtube" size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Icon name="Facebook" size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t border-border pt-8">
            <p>© 2024 DanceFlow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
