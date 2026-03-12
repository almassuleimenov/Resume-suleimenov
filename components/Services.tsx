import React from 'react';

const services = [
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
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 px-6 bg-black/50 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок */}
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Что я могу <span className="text-orange-500">сделать для вас</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            Комплексные IT-решения, которые приводят новых клиентов, экономят ваше время и увеличивают прибыль компании.
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Красивая большая цифра на фоне */}
              <div className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.03] group-hover:text-orange-500/[0.05] transition-colors select-none pointer-events-none">
                {service.number}
              </div>

              {/* Номер (вместо иконки) */}
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