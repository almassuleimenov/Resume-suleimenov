import React from 'react';

const projects = [
  {
    title: "Soile AI | ИИ-Логопед",
    description: "Мобильное приложение для детей с геймификацией и родительским контролем. Интеграция нейросетей с контекстной памятью.",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "LLaMA 3.3"],
    link: "", // Ссылки пока нет
    linkText: "Демо APK по запросу",
    type: "Mobile + AI Backend",
  },
  {
    title: "AI Bot Ecosystem",
    description: "Распределенная микросервисная архитектура. Высоконагруженный шлюз на Go принимает вебхуки и передает логику в RAG-мозг на Python.",
    tech: ["Go (Golang)", "Python", "Sanity CMS", "RAG"],
    link: "https://github.com/almassuleimenov/bot-gateway",
    linkText: "Смотреть код (GitHub)",
    type: "High-Load Architecture",
  },
  {
    title: "KazTenge Auditor",
    description: "Интеллектуальная система выявления коррупционных рисков, ценовых аномалий и картельных сговоров в госзакупках РК.",
    tech: ["Python", "Hugging Face", "Scikit-Learn", "NetworkX"],
    link: "https://github.com/almassuleimenov/KazTengeAuditor",
    linkText: "Смотреть код (GitHub)",
    type: "Machine Learning",
  },
  {
    title: "SNP Architects",
    description: "Корпоративный сайт для архитектурного бюро. Разработан с Headless CMS (Sanity) для управления контентом и настроенным CI/CD.",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind", "shadcn/ui"],
    link: "https://snp-arch.vercel.app/",
    linkText: "Посетить сайт",
    type: "Full-Stack Web (B2B)",
  }   
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок секции */}
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Избранные <span className="text-orange-500">Проекты</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
        </div>

        {/* Сетка проектов (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Декоративное свечение при наведении */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div>
                <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                  {project.type}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Теги технологий и Кнопка */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-gray-300 bg-black/40 rounded-md border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Логика рендера кнопки */}
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-white group-hover:text-orange-400 transition-colors"
                  >
                    {project.linkText}
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center text-sm font-bold text-gray-500">
                    {project.linkText}
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}