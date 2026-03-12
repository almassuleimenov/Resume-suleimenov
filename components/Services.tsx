"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ru: {
    title1: "Что я могу",
    title2: "сделать для вас",
    desc: "Комплексные IT-решения, которые приводят новых клиентов, экономят ваше время и увеличивают прибыль компании.",
    items: [
      {
        number: "01",
        title: "Премиум-сайты для бизнеса",
        description: "Разрабатываю современные и быстрые сайты, которые вызывают доверие и продают ваши услуги. От стильных визиток до крупных платформ.",
      },
      {
        number: "02",
        title: "Умные ИИ-Боты (WhatsApp & Telegram)",
        description: "Внедряю виртуального администратора. Бот отвечает за 1 секунду, знает ваш прайс и записывает клиентов 24/7, даже когда вы спите.",
      },
      {
        number: "03",
        title: "Мобильные приложения",
        description: "Создаю приложения для iOS и Android. Идеально для клиник, отелей и магазинов, чтобы ваш бизнес всегда был в кармане у клиента.",
      },
      {
        number: "04",
        title: "Автоматизация и Учет",
        description: "Разрабатываю надежные базы данных и внутренние системы управления. Чтобы бизнес работал как часы, без рутины и ошибок сотрудников.",
      }
    ]
  },
  kk: {
    title1: "Сіз үшін не",
    title2: "істей аламын",
    desc: "Жаңа клиенттер әкелетін, уақытыңызды үнемдейтін және компания кірісін арттыратын кешенді IT-шешімдер.",
    items: [
      {
        number: "01",
        title: "Премиум бизнес-сайттар",
        description: "Сенім ұялататын және қызметтеріңізді сататын заманауи әрі жылдам сайттар жасаймын. Стильді визиткалардан ірі платформаларға дейін.",
      },
      {
        number: "02",
        title: "Ақылды ИИ-боттар (WhatsApp & Telegram)",
        description: "Виртуалды әкімшіні енгіземін. Бот 1 секунд ішінде жауап береді, бағаны біледі және сіз ұйықтап жатқанда да клиенттерді 24/7 қабылдауға жазады.",
      },
      {
        number: "03",
        title: "Мобильді қосымшалар",
        description: "iOS және Android үшін қосымшалар жасаймын. Клиникалар, қонақүйлер мен дүкендер үшін өте қолайлы, сіздің бизнесіңіз әрқашан клиенттің қалтасында болады.",
      },
      {
        number: "04",
        title: "Автоматтандыру және Есепке алу",
        description: "Сенімді дерекқорлар мен ішкі басқару жүйелерін әзірлеймін. Бизнес қызметкерлердің қателігінсіз және рутинасыз сағаттай жұмыс істеуі үшін.",
      }
    ]
  },
  en: {
    title1: "What I can",
    title2: "do for you",
    desc: "Comprehensive IT solutions that bring new clients, save your time, and increase company profits.",
    items: [
      {
        number: "01",
        title: "Premium Business Websites",
        description: "I develop modern and fast websites that build trust and sell your services. From stylish business cards to large platforms.",
      },
      {
        number: "02",
        title: "Smart AI Bots (WhatsApp & Telegram)",
        description: "I implement a virtual administrator. The bot replies in 1 second, knows your pricing, and books clients 24/7, even while you sleep.",
      },
      {
        number: "03",
        title: "Mobile Applications",
        description: "I build apps for iOS and Android. Perfect for clinics, hotels, and stores, keeping your business right in your client's pocket.",
      },
      {
        number: "04",
        title: "Automation & Accounting",
        description: "I develop reliable databases and internal management systems. So your business runs like clockwork, without routine or employee errors.",
      }
    ]
  }
};

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="services" className="w-full py-24 px-6 bg-black/50 relative z-10 border-t border-white/5 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок */}
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 transition-all">
            {t.title1} <span className="text-orange-500">{t.title2}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg transition-all">
            {t.desc}
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Красивая большая цифра на фоне */}
              <div className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.03] group-hover:text-orange-500/[0.05] transition-colors select-none pointer-events-none">
                {service.number}
              </div>

              {/* Номер */}
              <div className="text-xl font-black text-orange-500 mb-4 tracking-widest">
                // {service.number}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-base leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}