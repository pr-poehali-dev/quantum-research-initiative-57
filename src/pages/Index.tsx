import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "pricing", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );

      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={22} className="text-accent" />
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              ЭлектроМастер
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Услуги
            </a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">
              Как мы работаем
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">
              Прайс
            </a>
          </nav>
          <div className="flex gap-3">
            <a href="tel:+79000000000">
              <button className="px-5 py-2.5 text-sm font-medium border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all">
                Позвонить
              </button>
            </a>
            <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-semibold">
              Оставить заявку
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/7f5a29e0-ac94-4220-b0d2-f60b05bdbfab/files/43b93d63-502b-429d-a9ab-62a8d536dd1b.jpg"
            alt="Электромонтаж"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Профессиональный монтаж под ключ
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Электрика. Камеры.
                </span>
                <br />
                <span className="text-accent">Безопасность.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Монтаж электрики, систем видеонаблюдения и контроля доступа (СКУД)
                для объектов любой сложности. Работаем быстро, с гарантией.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center">
                  Получить расчёт
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white">
                  Наши объекты
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">500+</div>
                  <p className="text-sm text-white/60">Объектов сдано</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">10 лет</div>
                  <p className="text-sm text-white/60">На рынке</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">5 лет</div>
                  <p className="text-sm text-white/60">Гарантия на работы</p>
                </div>
              </div>
            </div>

            <div
              className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <img
                src="https://cdn.poehali.dev/projects/7f5a29e0-ac94-4220-b0d2-f60b05bdbfab/files/d3c54aec-97af-4453-af0d-893d478f765b.jpg"
                alt="Видеонаблюдение"
                className="w-full h-full object-cover rounded-3xl drop-shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Услуги</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Что мы монтируем
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                iconName: "Zap",
                title: "Электромонтаж",
                desc: "Монтаж электропроводки, щитов, розеток и освещения в квартирах, домах и офисах под ключ.",
              },
              {
                iconName: "Camera",
                title: "Видеонаблюдение",
                desc: "Установка IP-камер, аналоговых систем и видеорегистраторов для дома, офиса и территории.",
              },
              {
                iconName: "ShieldCheck",
                title: "СКУД",
                desc: "Системы контроля и управления доступом: электронные замки, домофоны, турникеты.",
              },
              {
                iconName: "Building2",
                title: "Промышленные объекты",
                desc: "Электрификация складов, производственных цехов и торговых площадей любой сложности.",
              },
              {
                iconName: "Wrench",
                title: "Техническое обслуживание",
                desc: "Регулярное ТО и аварийный ремонт электрических и охранных систем в любое время.",
              },
              {
                iconName: "FileCheck",
                title: "Проектирование",
                desc: "Разработка технической документации и проектов электроснабжения согласно нормам ПУЭ.",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                    <Icon name={item.iconName} size={22} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Процесс</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Как мы работаем
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                iconName: "PhoneCall",
                title: "Заявка",
                desc: "Оставляете заявку на сайте или звоните — мы перезваниваем в течение 15 минут.",
              },
              {
                step: "02",
                iconName: "ClipboardList",
                title: "Замер и смета",
                desc: "Выезжаем на объект, оцениваем объём работ и составляем точную смету бесплатно.",
              },
              {
                step: "03",
                iconName: "HardHat",
                title: "Монтаж",
                desc: "Наша бригада приступает к работам в согласованные сроки — аккуратно и профессионально.",
              },
              {
                step: "04",
                iconName: "BadgeCheck",
                title: "Сдача объекта",
                desc: "Принимаете работу, получаете гарантийные документы. Оплата только после вашего одобрения.",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="text-7xl font-black text-accent/10 mb-4 font-display leading-none">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                    <Icon name={item.iconName} size={18} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Прайс</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Понятные цены
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Никаких скрытых доплат — итоговая стоимость фиксируется в договоре
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Квартира",
                price: "от 30 000 ₽",
                desc: "Монтаж электрики в квартире или небольшом офисе",
                features: [
                  "Разводка проводки",
                  "Установка щитка",
                  "Монтаж розеток и выключателей",
                  "Подключение освещения",
                  "Гарантия 3 года",
                ],
                popular: false,
              },
              {
                name: "Коттедж / Офис",
                price: "от 90 000 ₽",
                desc: "Полный комплекс работ для частного дома или офиса",
                features: [
                  "Всё из пакета «Квартира»",
                  "Монтаж видеонаблюдения",
                  "Установка СКУД",
                  "Прокладка кабельных трасс",
                  "Гарантия 5 лет",
                ],
                popular: true,
              },
              {
                name: "Объект",
                price: "По запросу",
                desc: "Промышленные объекты, склады, производство",
                features: [
                  "Проектирование системы",
                  "Монтаж под ключ",
                  "Техническое обслуживание",
                  "Аварийный выезд 24/7",
                  "Гарантия 5 лет",
                ],
                popular: false,
              },
            ].map((plan, i) => {
              const isVisible = visibleSections["pricing"];
              return (
                <div
                  key={i}
                  className={`relative p-8 rounded-2xl border transition-all duration-700 ${plan.popular ? "border-accent/60 bg-accent/5 shadow-2xl shadow-accent/20" : "border-accent/10 bg-card/50"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-accent text-black text-xs font-bold rounded-full uppercase tracking-wider">
                        Популярный
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
                    <div className="text-3xl font-black text-accent font-display">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                        <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${plan.popular ? "bg-gradient-to-r from-accent to-accent/90 text-black hover:shadow-lg hover:shadow-accent/40" : "border border-accent/40 text-white hover:border-accent/70 hover:bg-accent/10"}`}
                  >
                    Рассчитать стоимость
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Свяжитесь с нами</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                Готовы обсудить
              </span>
              <br />
              <span className="text-accent">ваш объект?</span>
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Оставьте заявку — наш специалист свяжется с вами в течение 15 минут
              и бесплатно проконсультирует по вашему проекту.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="tel"
                placeholder="Ваш номер телефона"
                className="flex-1 px-6 py-4 rounded-full bg-card border border-accent/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent/60 transition-colors"
              />
              <button className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold flex items-center gap-2 justify-center whitespace-nowrap">
                Перезвоните мне
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
            <p className="text-white/30 text-xs mt-4">Работаем по Москве и области. Без выходных.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={18} className="text-accent" />
            <span className="font-display font-bold text-lg bg-gradient-to-r from-white to-accent/80 bg-clip-text text-transparent">
              ЭлектроМастер
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 ЭлектроМастер. Монтаж электрики, видеонаблюдения и СКУД.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="tel:+79000000000" className="hover:text-accent transition-colors">+7 (900) 000-00-00</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
