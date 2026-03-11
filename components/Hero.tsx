import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden px-6">
      
      {/* Декоративный светящийся шар на фоне */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-600 to-red-600 rounded-full blur-[120px] opacity-30 -z-10"></div>

      <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-6">
        
        {/* 🔥 Обновленный бейдж профессии */}
        <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-semibold tracking-widest uppercase text-orange-400">
          Software & AI Architect
        </div>

        {/* Главный заголовок */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
          Алмас <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Сулейменов
          </span>
        </h1>

        {/* 🔥 Обновленное описание (продающее твою универсальность) */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium mt-6">
          Разрабатываю IT-продукты полного цикла: от мобильных приложений и B2B-веб-платформ до высоконагруженных микросервисов и интеграции ИИ.
        </p>

        {/* Кнопки действия */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10 w-full">
          <a href="#projects" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-center">
            Смотреть проекты
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