// Если используешь какие-то хуки прямо тут, оставь "use client", если нет - можно убрать
import React from 'react';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

// 🔥 ГЛАВНЫЙ ИМПОРТ ПРОВАЙДЕРА
import { LanguageProvider } from '@/context/LanguageContext'; 

export default function Home() {
  return (
    // 🔥 ОБЕРТЫВАЕМ ВЕСЬ САЙТ В ПРОВАЙДЕР
    <LanguageProvider>
      <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
        <Hero />
        <Philosophy />
        <Services />
        <Projects />
        <Footer />
      </main>
    </LanguageProvider>
  );
}