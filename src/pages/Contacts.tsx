import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (999) 123-45-67',
      description: 'Звоните с 9:00 до 21:00',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@dancestudio.ru',
      description: 'Ответим в течение 24 часов',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'Москва, ул. Танцевальная, 10',
      description: 'Метро Парк Культуры, 5 минут пешком',
    },
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', hours: '10:00 - 22:00' },
    { day: 'Суббота', hours: '10:00 - 20:00' },
    { day: 'Воскресенье', hours: 'Выходной' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', link: '#', color: 'from-pink-500 to-purple-500' },
    { name: 'YouTube', icon: 'Youtube', link: '#', color: 'from-red-500 to-red-600' },
    { name: 'Facebook', icon: 'Facebook', link: '#', color: 'from-blue-500 to-blue-600' },
    { name: 'WhatsApp', icon: 'MessageCircle', link: '#', color: 'from-green-500 to-green-600' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-xl transition-all border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name={contact.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                  <p className="text-lg font-medium mb-1">{contact.content}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-primary" />
                  Часы работы
                </h2>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-primary font-bold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="Share2" size={24} className="text-secondary" />
                  Мы в соцсетях
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon name={social.icon as any} size={24} className="text-white" />
                      </div>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" size={64} className="mx-auto mb-4 text-primary" />
                <p className="text-xl font-bold">Карта будет здесь</p>
                <p className="text-muted-foreground">Москва, ул. Танцевальная, 10</p>
              </div>
            </div>
          </Card>

          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <Icon name="MessageSquare" size={48} className="mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold mb-4">
              Остались вопросы?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Мы с радостью ответим на все ваши вопросы и поможем выбрать подходящее направление танцев
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
