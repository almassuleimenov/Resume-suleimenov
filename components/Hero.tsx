"use client"; 
import React from 'react';
// 🔥 ПОДКЛЮЧАЕМ ГЛОБАЛЬНЫЙ МОЗГ
import { useLanguage } from '../context/LanguageContext'; 

// Словарь переводов
const translations = {
  ru: {
    badge: "IT-решения для бизнеса",
    name: "Алмас",
    surname: "Сулейменов",
    description: "Разрабатываю премиальные сайты, мобильные приложения и умных ИИ-ботов, которые приводят клиентов и автоматизируют вашу работу.",
    btnProjects: "Смотреть проекты",
  },
  kk: {
    badge: "Бизнеске арналған IT-шешімдер",
    name: "Алмас",
    surname: "Сүлейменов",
    description: "Клиенттерді тартатын және жұмысыңызды автоматтандыратын премиум сайттар, мобильді қосымшалар және ақылды ИИ-боттар жасаймын.",
    btnProjects: "Жобаларды көру",
  },
  en: {
    badge: "IT Solutions for Business",
    name: "Almas",
    surname: "Suleimenov",
    description: "I develop premium websites, mobile apps, and smart AI bots that drive clients and automate your workflow.",
    btnProjects: "View Projects",
  }
};

export default function Hero() {
  // 🔥 ТЕПЕРЬ HERO БЕРЕТ ЯЗЫК ИЗ ГЛОБАЛЬНОГО МОЗГА
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden px-6">
      
      {/* Декоративный светящийся шар на фоне */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-600 to-red-600 rounded-full blur-[120px] opacity-30 -z-10"></div>

      {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ */}
      <div className="absolute top-8 right-6 md:right-12 flex gap-2 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md z-50">
        {(['kk', 'ru', 'en'] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              lang === l 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-6 mt-16 md:mt-0">
        
        {/* Бейдж профессии */}
        <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-semibold tracking-widest uppercase text-orange-400 transition-all">
          {t.badge}
        </div>

        {/* Главный заголовок */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none transition-all">
          {t.name} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            {t.surname}
          </span>
        </h1>

        {/* ПРОСТОЕ И ПРОДАЮЩЕЕ ОПИСАНИЕ */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium mt-6 transition-all">
          {t.description}
        </p>
        
        {/* Кнопки действия */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10 w-full">
          <a href="#projects" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-center">
            {t.btnProjects}
          </a>
          <a href="https://t.me/Suleimenov_almasik" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 hover:bg-[#24A1DE]/20 border border-white/10 hover:border-[#24A1DE]/50 text-white font-bold rounded-xl backdrop-blur-md transition-all duration-300 text-center flex items-center justify-center gap-2">
            Telegram
          </a>
          <a href="https://wa.me/qr/N5TYLVLIOJQ6I1" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 text-white font-bold rounded-xl backdrop-blur-md transition-all duration-300 text-center flex items-center justify-center gap-2">
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}