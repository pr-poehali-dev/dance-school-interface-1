import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Schedule = () => {
  const schedule = {
    monday: [
      { time: '10:00-11:30', style: 'Хип-хоп', level: 'Начинающие', teacher: 'Анна Петрова', age: '7-12 лет' },
      { time: '17:00-18:30', style: 'Современный танец', level: 'Средний', teacher: 'Мария Иванова', age: '13-17 лет' },
      { time: '19:00-20:30', style: 'Брейк-данс', level: 'Продвинутые', teacher: 'Дмитрий Козлов', age: '18+ лет' },
    ],
    tuesday: [
      { time: '11:00-12:30', style: 'Бальные танцы', level: 'Начинающие', teacher: 'Елена Смирнова', age: '7-12 лет' },
      { time: '18:00-19:30', style: 'Джаз-фанк', level: 'Средний', teacher: 'Светлана Орлова', age: '13-17 лет' },
      { time: '20:00-21:30', style: 'Латина', level: 'Продвинутые', teacher: 'Виктор Романов', age: '18+ лет' },
    ],
    wednesday: [
      { time: '10:00-11:30', style: 'Современный танец', level: 'Начинающие', teacher: 'Мария Иванова', age: '7-12 лет' },
      { time: '17:00-18:30', style: 'Хип-хоп', level: 'Средний', teacher: 'Анна Петрова', age: '13-17 лет' },
      { time: '19:00-20:30', style: 'Бальные танцы', level: 'Продвинутые', teacher: 'Елена Смирнова', age: '18+ лет' },
    ],
    thursday: [
      { time: '11:00-12:30', style: 'Латина', level: 'Начинающие', teacher: 'Виктор Романов', age: '7-12 лет' },
      { time: '18:00-19:30', style: 'Брейк-данс', level: 'Средний', teacher: 'Дмитрий Козлов', age: '13-17 лет' },
      { time: '20:00-21:30', style: 'Джаз-фанк', level: 'Продвинутые', teacher: 'Светлана Орлова', age: '18+ лет' },
    ],
    friday: [
      { time: '10:00-11:30', style: 'Джаз-фанк', level: 'Начинающие', teacher: 'Светлана Орлова', age: '7-12 лет' },
      { time: '17:00-18:30', style: 'Латина', level: 'Средний', teacher: 'Виктор Романов', age: '13-17 лет' },
      { time: '19:00-20:30', style: 'Хип-хоп', level: 'Продвинутые', teacher: 'Анна Петрова', age: '18+ лет' },
    ],
    saturday: [
      { time: '10:00-11:30', style: 'Брейк-данс', level: 'Начинающие', teacher: 'Дмитрий Козлов', age: '7-12 лет' },
      { time: '12:00-13:30', style: 'Бальные танцы', level: 'Средний', teacher: 'Елена Смирнова', age: '13-17 лет' },
      { time: '14:00-15:30', style: 'Современный танец', level: 'Продвинутые', teacher: 'Мария Иванова', age: '18+ лет' },
    ],
  };

  const days = [
    { key: 'monday', label: 'Понедельник' },
    { key: 'tuesday', label: 'Вторник' },
    { key: 'wednesday', label: 'Среда' },
    { key: 'thursday', label: 'Четверг' },
    { key: 'friday', label: 'Пятница' },
    { key: 'saturday', label: 'Суббота' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Расписание занятий
            </h1>
            <p className="text-xl text-muted-foreground">
              Выберите удобное время для занятий танцами
            </p>
          </div>

          <Tabs defaultValue="monday" className="w-full">
            <TabsList className="w-full flex-wrap h-auto mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 p-2">
              {days.map((day) => (
                <TabsTrigger 
                  key={day.key} 
                  value={day.key}
                  className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {day.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map((day) => (
              <TabsContent key={day.key} value={day.key}>
                <div className="grid gap-4">
                  {schedule[day.key as keyof typeof schedule].map((lesson, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                              <Icon name="Clock" size={24} />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{lesson.style}</CardTitle>
                              <p className="text-muted-foreground">{lesson.time}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <span className="px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium">
                              {lesson.level}
                            </span>
                            <span className="px-4 py-2 rounded-full bg-accent/20 text-accent font-medium">
                              {lesson.age}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="User" size={18} />
                          <span>Преподаватель: <span className="font-medium text-foreground">{lesson.teacher}</span></span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-6 text-center">
                <Icon name="Users" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Малые группы</h3>
                <p className="text-muted-foreground">До 12 человек в группе</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardContent className="p-6 text-center">
                <Icon name="CalendarDays" size={40} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Гибкое расписание</h3>
                <p className="text-muted-foreground">6 дней в неделю</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
              <CardContent className="p-6 text-center">
                <Icon name="GraduationCap" size={40} className="mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Все уровни</h3>
                <p className="text-muted-foreground">От начинающих до профи</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
