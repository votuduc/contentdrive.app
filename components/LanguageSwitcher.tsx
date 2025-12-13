"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

// Flag Icons as components
const USFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="12">
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 v30 h60 v-30 z" fill="#FFF" />
            <path d="M0,0 v30 h60 v-30 z" fill="#C8102E" />
        </g>
        {/* Simplified US Flag for size/complexity trade-off or just use standard Rects for a rough representation if exact SVG is too complex for inline. 
           Actually, let's use a simpler known verified SVG path for better visual. 
           OR better yet, since I can't browse for a perfect complex SVG string, I will use a high-quality emoji for now OR simple rectangular SVGs.
           User requested "Flag Icon". 
           Let's use a standard circular or rectangular SVG set.
        */}
    </svg>
);

// Actually, let's use standard sourced SVGs to ensure they look good.
const Flags = {
    en: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-6 h-6 rounded-full border border-gray-200 shadow-sm">
            <path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z" />
            <path fill="#CE1126" d="M36 27a4 4 0 0 1-4 4h-3V5h3a4 4 0 0 1 4 4v18z" />
            <path fill="#CE1126" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h3V5H4z" />
            <path fill="#FFF" d="M7 5h22v26H7z" />
            <path fill="#00247D" d="M0 5h16v12H0zm20 0h16v12H20zM0 19h16v12H0zm20 0h16v12H20z" />
            {/* Very Abstract US flag - Actually let's use the Emoji approach for reliability? 
               No, emojis look different on different OS. 
               Let's stick to reliable rectangular flags using simple colors.
            */}
            <rect width="36" height="36" fill="#B22234" />
            <rect width="36" height="4" y="4" fill="#FFF" />
            <rect width="36" height="4" y="12" fill="#FFF" />
            <rect width="36" height="4" y="20" fill="#FFF" />
            <rect width="36" height="4" y="28" fill="#FFF" />
            <rect width="18" height="19" fill="#3C3B6E" />
            <path fill="#FFF" d="M2 2h2v2H2zm4 0h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm-10 4h2v2H4zm4 0h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-10 4h2v2H4zm4 0h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-10 4h2v2H4zm4 0h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2z" />
        </svg>
    ),
    fr: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" className="w-6 h-4 rounded-sm shadow-sm border border-gray-100 object-cover">
            <rect width="36" height="24" fill="#ED2939" />
            <rect width="24" height="24" fill="#FFF" />
            <rect width="12" height="24" fill="#002395" />
        </svg>
    ),
    es: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" className="w-6 h-4 rounded-sm shadow-sm border border-gray-100 object-cover">
            <rect width="36" height="24" fill="#AA151B" />
            <rect width="36" height="12" y="6" fill="#F1BF00" />
        </svg>
    )
};

// More Polished SVGs
const FlagIcon = ({ locale, className = "w-6 h-4" }: { locale: string, className?: string }) => {
    if (locale === 'en') {
        // US Flag
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className={className}>
                <g fillRule="evenodd">
                    <path fill="#bd3d44" d="M0 0h640v480H0" />
                    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 202.8h640M0 276.5h640M0 350.2h640M0 424h640" />
                    <path fill="#192f5d" d="M0 0h296v258.5H0" />
                    <g fill="#fff">
                        <path d="M54 34l8.3 25H36l21.3-15.4L36 59l21.3 15.4L78.7 59l-21.4-15.4H83.7L62.3 59l21.4 15.4L62.3 90l8.3-25.5H44l8.3 25.5L44 116H70.6L49.2 100l21.4 15.4L49.2 131l8.3-25.5H32l8.3 25.5L32 157H58.6L37.2 141l21.4 15.4L37.2 172l8.3-25.5Zm64.8 0l8.3 25H100.8l21.3-15.4L100.8 59l21.3 15.4L143.5 59l-21.4-15.4H148.5L127.1 59l21.4 15.4L127.1 90l8.3-25.5H108.8l8.3 25.5L108.8 116H135.4L114 100l21.4 15.4L114 131l8.3-25.5H96.8l8.3 25.5L96.8 157H123.4L102 141l21.4 15.4L102 172l8.3-25.5Zm64.8 0l8.3 25H165.6l21.3-15.4L165.6 59l21.3 15.4L208.3 59l-21.4-15.4H213.3L191.9 59l21.4 15.4L191.9 90l8.3-25.5H173.6l8.3 25.5L173.6 116H200.2L178.8 100l21.4 15.4L178.8 131l8.3-25.5H161.6l8.3 25.5L161.6 157H188.2L166.8 141l21.4 15.4L166.8 172l8.3-25.5Zm64.8 0l8.3 25H230.4l21.3-15.4L230.4 59l21.3 15.4L273.1 59l-21.4-15.4H278.1L256.7 59l21.4 15.4L256.7 90l8.3-25.5H238.4l8.3 25.5L238.4 116H265L243.6 100l21.4 15.4L243.6 131l8.3-25.5H226.4l8.3 25.5L226.4 157H253L231.6 141l21.4 15.4L231.6 172l8.3-25.5Zm-229.4 65l8.3 25.5H29.5l8.3 25.5L29.5 174H56.1L34.7 158.5l21.4 15.4L34.7 190l8.3-25.5H17l8.3 25.5L17 215H43.6L22.2 200l21.4 15.4L22.2 231l8.3-25.5H5l8.3 25.5L5 256H31.6L10.2 241l21.4 15.4L10.2 272l8.3-25.5Zm64.8-25.5l8.3 25.5H94.3l8.3 25.5L94.3 174H120.9L99.5 158.5l21.4 15.4L99.5 190l8.3-25.5H81.8l8.3 25.5L81.8 215H108.4L87 200l21.4 15.4L87 231l8.3-25.5H69.8l8.3 25.5L69.8 256H96.4L75 241l21.4 15.4L75 272l8.3-25.5Zm64.8-25.5l8.3 25.5H159.1l8.3 25.5L159.1 174H185.7L164.3 158.5l21.4 15.4L164.3 190l8.3-25.5H146.6l8.3 25.5L146.6 215H173.2L151.8 200l21.4 15.4L151.8 231l8.3-25.5H134.6l8.3 25.5L134.6 256H161.2L139.8 241l21.4 15.4L139.8 272l8.3-25.5Zm64.8-25.5l8.3 25.5H223.9l8.3 25.5L223.9 174H250.5L229.1 158.5l21.4 15.4L229.1 190l8.3-25.5H211.4l8.3 25.5L211.4 215H238L216.6 200l21.4 15.4L216.6 231l8.3-25.5H199.4l8.3 25.5L199.4 256H226L204.6 241l21.4 15.4L204.6 272l8.3-25.5Z" />
                    </g>
                </g>
            </svg>
        );
    } else if (locale === 'fr') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
                <rect width="900" height="600" fill="#ED2939" />
                <rect width="600" height="600" fill="#FFF" />
                <rect width="300" height="600" fill="#002395" />
            </svg>
        );
    } else if (locale === 'es') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className={className}>
                <rect width="750" height="500" fill="#c60b1e" />
                <rect width="750" height="250" y="125" fill="#ffc400" />
            </svg>
        );
    } else if (locale === 'vi') {
        // Vietnam Flag
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
                <rect width="900" height="600" fill="#da251d" />
                <polygon fill="#ff0" points="450,100 350,400 550,200 350,200 550,400" />
            </svg>
        );
    } else if (locale === 'id') {
        // Indonesia Flag
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
                <rect width="900" height="300" fill="#FF0000" />
                <rect width="900" height="300" y="300" fill="#FFF" />
            </svg>
        );
    } else if (locale === 'pt') {
        // Portugal Flag
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" className={className}>
                <rect width="600" height="400" fill="#FF0000" />
                <rect width="240" height="400" fill="#006600" />
            </svg>
        );
    } else if (locale === 'ru') {
        // Russia Flag
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
                <rect width="900" height="200" fill="#FFF" />
                <rect width="900" height="200" y="200" fill="#0039A6" />
                <rect width="900" height="200" y="400" fill="#D52B1E" />
            </svg>
        );
    } else if (locale === 'ko') {
        // South Korea Flag
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
                <rect width="900" height="600" fill="#FFF" />
                <circle cx="450" cy="300" r="120" fill="#C60C30" />
                <path d="M450 180 A120 120 0 0 0 450 420 A60 60 0 0 1 450 300 A60 60 0 0 0 450 180" fill="#003478" />
            </svg>
        );
    } else if (locale === 'ja') {
        // Japan Flag
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
                <rect width="900" height="600" fill="#FFF" />
                <circle cx="450" cy="300" r="108" fill="#BC002D" />
            </svg>
        );
    } else if (locale === 'zh') {
        // China Flag
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
                <rect width="900" height="600" fill="#DE2910" />
                <polygon fill="#FFDE00" points="150,120 180,210 120,150 180,150 120,210" />
            </svg>
        );
    } else if (locale === 'ar') {
        // Saudi Arabia Flag (representative for Arabic)
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
                <rect width="900" height="600" fill="#165B33" />
            </svg>
        );
    }
    return null;
}

const LanguageSwitcher = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'es', label: 'Español' },
        { code: 'vi', label: 'Tiếng Việt' },
        { code: 'id', label: 'Bahasa Indonesia' },
        { code: 'pt', label: 'Português' },
        { code: 'ru', label: 'Русский' },
        { code: 'ko', label: '한국어' },
        { code: 'ja', label: '日本語' },
        { code: 'zh', label: '中文' },
        { code: 'ar', label: 'العربية' }
    ];

    return (
        <div className="relative z-50" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
            >
                <FlagIcon locale={locale} className="w-6 h-4 rounded-sm shadow-sm" />
                <span className="text-sm font-medium text-gray-700 uppercase">{locale}</span>
                <i className={`fas fa-chevron-down text-xs text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
                    {languages.map((lang) => (
                        <Link
                            key={lang.code}
                            href={pathname}
                            locale={lang.code}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center px-4 py-3 hover:bg-gray-50 transition-colors ${locale === lang.code ? 'bg-blue-50/50' : ''}`}
                        >
                            <FlagIcon locale={lang.code} className="w-5 h-3.5 rounded-sm shadow-sm mr-3" />
                            <span className={`text-sm ${locale === lang.code ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
                                {lang.label}
                            </span>
                            {locale === lang.code && <i className="fas fa-check ml-auto text-blue-500 text-xs"></i>}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
