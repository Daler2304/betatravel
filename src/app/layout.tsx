import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
    variable: "--font-inter",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "BetaTravel — Поиск и покупка авиабилетов",
    description:
        "BetaTravel — сервис для поиска и бронирования авиабилетов. Сравнивайте доступные рейсы, выбирайте подходящие даты и планируйте свои путешествия.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="ru" className={`${interSans.variable} h-full antialiased`}>
            <body className="flex flex-col">{children}</body>
        </html>
    );
}
