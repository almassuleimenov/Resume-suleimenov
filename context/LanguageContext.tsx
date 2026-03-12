"use client";
import React, { createContext, useContext, useState } from 'react';

// Доступные языки
type Language = 'ru' | 'kk' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // По умолчанию ставим русский (или 'kk', если хочешь)
  const [lang, setLang] = useState<Language>('ru');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Хук, который мы будем вызывать в Hero, Footer и Services
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage должен использоваться внутри LanguageProvider');
  }
  return context;
}