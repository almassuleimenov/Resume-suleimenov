"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ru: {
    title1: "Архитектура,",
    title2: "а не просто код.",
    desc: "Разработка IT-продукта — это инвестиция. Моя цель — сделать так, чтобы ваш сайт, приложение или ИИ-система работали как швейцарские часы и приносили реальную прибыль, а не требовали бесконечных доработок.",
    principles: [
      {
        title: "Думаю о ваших деньгах",
        description: "Я не просто делаю 'красивую картинку'. Я создаю инструмент, который будет продавать ваши услуги, вызывать доверие клиентов и окупать вложенные средства.",
        number: "01"
      },
      {
        title: "Умная автоматизация",
        description: "Внедряю искусственный интеллект в ваш WhatsApp или Telegram. Бот работает 24/7 вместо администратора: мгновенно отвечает клиентам, знает прайс и записывает на прием.",
        number: "02"
      },
      {
        title: "Надежность и скорость",
        description: "Никаких зависаний и ошибок. Я использую те же технологии, на которых работают мировые банки и корпорации. Ваш бизнес будет работать без сбоев.",
        number: "03"
      }
    ]
  },
  kk: {
    title1: "Архитектура,",
    title2: "жай ғана код емес.",
    desc: "IT-өнімді әзірлеу — бұл инвестиция. Менің мақсатым — сіздің сайтыңыз, қосымшаңыз немесе ИИ-жүйеңіз швейцариялық сағаттай жұмыс істеп, шексіз жөндеуді қажет етпей, нақты пайда әкелуін қамтамасыз ету.",
    principles: [
      {
        title: "Сіздің ақшаңызды ойлаймын",
        description: "Мен жай ғана 'әдемі сурет' жасамаймын. Мен сіздің қызметтеріңізді сататын, клиенттердің сенімін оятып, салынған қаражатты ақтайтын нақты құрал жасаймын.",
        number: "01"
      },
      {
        title: "Ақылды автоматтандыру",
        description: "WhatsApp немесе Telegram-ға жасанды интеллект енгіземін. Бот әкімшінің орнына 24/7 жұмыс істейді: клиенттерге лезде жауап береді, бағаны біледі және қабылдауға жазады.",
        number: "02"
      },
      {
        title: "Сенімділік пен жылдамдық",
        description: "Ешқандай қатулар мен қателіктерсіз. Мен әлемдік банктер мен корпорациялар жұмыс істейтін технологияларды қолданамын. Сіздің бизнесіңіз мінсіз жұмыс істейді.",
        number: "03"
      }
    ]
  },
  en: {
    title1: "Architecture,",
    title2: "not just code.",
    desc: "Developing an IT product is an investment. My goal is to ensure your website, app, or AI system runs like clockwork and brings real profit, rather than requiring endless tweaks.",
    principles: [
      {
        title: "Thinking about your money",
        description: "I don't just make a 'pretty picture'. I build a tool that sells your services, builds client trust, and generates a return on your investment.",
        number: "01"
      },
      {
        title: "Smart Automation",
        description: "I integrate AI into your WhatsApp or Telegram. The bot works 24/7 instead of an admin: instantly answers clients, knows the pricing, and books appointments.",
        number: "02"
      },
      {
        title: "Reliability and Speed",
        description: "No lags or errors. I use the exact same technologies that power global banks and corporations. Your business will run without interruptions.",
        number: "03"
      }
    ]
  }
};

export default function Philosophy() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="w-full py-24 px-6 relative z-10 bg-gradient-to-b from-[#0a0a0a] to-black/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Левая часть: Текст */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight transition-all">
            {t.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              {t.title2}
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 transition-all">
            {t.desc}
          </p>
          <div className="w-24 h-1 bg-white/20 rounded-full hidden lg:block"></div>
        </div>

        {/* Правая часть: Карточки принципов */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* Декоративный неоновый блик */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600/20 rounded-full blur-[80px] -z-10"></div>

          {t.principles.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 ${index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
            >
              <div className="text-4xl font-black text-white/10 mb-4 select-none">
                {item.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
