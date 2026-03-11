import React from 'react';

const services = [
  {
    title: "B2B Платформы & Сайты",
    description: "Разработка корпоративных сайтов и веб-приложений. Быстрые, безопасные, с удобной админ-панелью (Headless CMS) для управления контентом.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Мобильные приложения",
    description: "Кроссплатформенная разработка (iOS & Android) на Flutter. Плавные анимации, современный UI/UX и полная интеграция с серверной частью.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI-Ассистенты & Боты",
    description: "Внедрение нейросетей (ChatGPT, LLaMA) в ваш бизнес. Умные боты для Telegram/WhatsApp, автоматизация поддержки и продаж (RAG-архитектура).",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Backend & Микросервисы",
    description: "Проектирование надежной серверной архитектуры. API-шлюзы на Go, базы данных PostgreSQL, кэширование Redis и полная упаковка в Docker.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 px-6 bg-black/50 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок */}
        <div className="flex flex-col mb-16 items-center text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Что я могу <span className="text-orange-500">сделать</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl">
            Комплексные инженерные решения для бизнеса. От мобильных приложений до интеграции искусственного интеллекта.
          </p>
        </div>

        {/* Сетка услуг: изменена на 2 колонки (md:grid-cols-2) для идеального квадрата из 4 элементов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}