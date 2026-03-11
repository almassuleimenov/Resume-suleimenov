import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin", "cyrillic"],
  weight: ['400', '600', '800', '900'] // Берем жирные начертания для заголовков
});

export const metadata: Metadata = {
  title: "Алмас Сулейменов | Backend & AI Architect",
  description: "Разработка высоконагруженных систем и ИИ-интеграций",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      {/* Глубокий черный фон как на твоих референсах */}
      <body className={`${montserrat.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}