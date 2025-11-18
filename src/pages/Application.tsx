import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Application = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время',
      });
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };

  const danceStyles = [
    'Хип-хоп',
    'Современный танец',
    'Бальные танцы',
    'Брейк-данс',
    'Латина',
    'Джаз-фанк',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Онлайн-заявка
            </h1>
            <p className="text-xl text-muted-foreground">
              Заполните форму и мы свяжемся с вами для записи на занятие
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-6 text-center">
                <Icon name="Gift" size={40} className="mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-2">Первое занятие бесплатно</h3>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" size={40} className="mx-auto mb-3 text-secondary" />
                <h3 className="font-bold mb-2">Ответим в течение часа</h3>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
              <CardContent className="p-6 text-center">
                <Icon name="Shield" size={40} className="mx-auto mb-3 text-accent" />
                <h3 className="font-bold mb-2">Конфиденциальность данных</h3>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl">Форма записи</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">
                      Ваше имя *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Введите ваше имя"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+7 (999) 123-45-67"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="h-12"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dance-style" className="text-base">
                      Направление танца *
                    </Label>
                    <Select name="dance-style" required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Выберите направление" />
                      </SelectTrigger>
                      <SelectContent>
                        {danceStyles.map((style) => (
                          <SelectItem key={style} value={style}>
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-base">
                      Возраст *
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      required
                      placeholder="Укажите возраст"
                      className="h-12"
                      min="5"
                      max="99"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level" className="text-base">
                    Уровень подготовки *
                  </Label>
                  <Select name="level" required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Выберите уровень" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Начинающий</SelectItem>
                      <SelectItem value="intermediate">Средний</SelectItem>
                      <SelectItem value="advanced">Продвинутый</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">
                    Дополнительная информация
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о своих пожеланиях, опыте или задайте вопрос"
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 h-14 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" className="mr-2" size={20} />
                        Отправить заявку
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1 h-14 text-lg"
                    onClick={() => navigate('/')}
                  >
                    Отмена
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Application;
