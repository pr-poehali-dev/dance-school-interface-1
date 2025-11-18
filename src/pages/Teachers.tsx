import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Teachers = () => {
  const teachers = [
    {
      name: 'Анна Петрова',
      specialty: 'Хип-хоп',
      experience: '12 лет',
      achievements: 'Чемпион России по хип-хопу 2019, Судья международных соревнований',
      description: 'Профессиональный танцор и хореограф с большим опытом работы с детьми и взрослыми',
    },
    {
      name: 'Мария Иванова',
      specialty: 'Современный танец',
      experience: '15 лет',
      achievements: 'Лауреат международных фестивалей, Хореограф театра современного танца',
      description: 'Специализируется на contemporary и modern dance, создает уникальные постановки',
    },
    {
      name: 'Дмитрий Козлов',
      specialty: 'Брейк-данс',
      experience: '10 лет',
      achievements: 'Победитель Battle of the Year 2020, Участник международных баттлов',
      description: 'B-boy с мировым именем, обучает всем элементам breaking от базы до power moves',
    },
    {
      name: 'Елена Смирнова',
      specialty: 'Бальные танцы',
      experience: '18 лет',
      achievements: 'Мастер спорта по бальным танцам, Педагог высшей категории',
      description: 'Работает с парами всех возрастов, готовит к соревнованиям разных уровней',
    },
    {
      name: 'Виктор Романов',
      specialty: 'Латина',
      experience: '14 лет',
      achievements: 'Чемпион Европы по латиноамериканским танцам, Судья WDSF',
      description: 'Эксперт в латиноамериканской программе, преподает сальсу, бачату, меренге',
    },
    {
      name: 'Светлана Орлова',
      specialty: 'Джаз-фанк',
      experience: '11 лет',
      achievements: 'Хореограф музыкальных клипов, Призер World of Dance',
      description: 'Создает энергичные и стильные постановки, работала с известными артистами',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Наши преподаватели
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональные танцоры и хореографы с богатым опытом и наградами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary via-secondary to-accent relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{teacher.name}</h3>
                    <p className="text-white/90 font-medium">{teacher.specialty}</p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Award" size={18} className="text-primary" />
                    <span className="text-sm">Опыт: {teacher.experience}</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Icon name="Trophy" size={18} className="text-accent" />
                      Достижения
                    </h4>
                    <p className="text-sm text-muted-foreground">{teacher.achievements}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Icon name="Info" size={18} className="text-secondary" />
                      О преподавателе
                    </h4>
                    <p className="text-sm text-muted-foreground">{teacher.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center">
            <Icon name="Star" size={48} className="mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold mb-4">
              Учитесь у лучших
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наши преподаватели регулярно повышают квалификацию, участвуют в международных мастер-классах и передают свой опыт ученикам
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Teachers;
