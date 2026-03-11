import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full relative z-10 border-t border-white/5 bg-[#050505] pt-20 pb-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Призыв к действию (CTA) */}
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
          Готовы обсудить <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">проект?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl">
          От идеи до продакшена. Выберите удобный мессенджер, и мы превратим вашу бизнес-задачу в работающий цифровой продукт.
        </p>

        {/* Кнопки связи (Светящийся неон) */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          
          {/* Telegram */}
          <a 
            href="https://t.me/Suleimenov_almasik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#24A1DE]/10 hover:bg-[#24A1DE]/20 border border-[#24A1DE]/30 hover:border-[#24A1DE] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex items-center justify-center shadow-[0_0_30px_-10px_rgba(36,161,222,0.3)] hover:shadow-[0_0_40px_-10px_rgba(36,161,222,0.6)]"
          >
            <svg className="w-6 h-6 mr-3 text-[#24A1DE]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Написать в Telegram
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/qr/N5TYLVLIOJQ6I1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex items-center justify-center shadow-[0_0_30px_-10px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_-10px_rgba(37,211,102,0.6)]"
          >
            <svg className="w-6 h-6 mr-3 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Написать в WhatsApp
          </a>

        </div>

        {/* Разделитель */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12"></div>

        {/* Соцсети и копирайт */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          <p className="text-gray-500 text-sm font-medium">
            © 2026 Алмас Сулейменов. <span className="text-orange-500">ON Labs</span>.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/almassuleimenov" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}