"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '@/i18n/routing';

import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const t = useTranslations('Navigation');
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img className="h-10 w-auto" src="/images/logo/logo_contentdrive_400x133.png" alt="ContentDrive Logo" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-auto flex items-baseline space-x-1 items-center">
                            <Link href="/#header-container" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors">{t('home')}</Link>
                            <Link href="/#feature-highlight" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors">{t('howItWorks')}</Link>
                            <Link href="/#price" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors">{t('pricing')}</Link>
                            <Link href="/#faq-section" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors">{t('faq')}</Link>
                            <Link href="/docs" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors">{t('docs')}</Link>
                            <a href="https://blog.contentdrive.app" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors">{t('blog')}</a>

                            {/* Language Switcher */}
                            <div className="ml-2 pl-2 border-l border-gray-200">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100 shadow-lg absolute w-full`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/#header-container" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-bold">{t('home')}</Link>
                    <Link href="/#feature-highlight" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-bold">{t('howItWorks')}</Link>
                    <Link href="/#price" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-bold">{t('pricing')}</Link>
                    <Link href="/#faq-section" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-bold">{t('faq')}</Link>
                    <Link href="/docs" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-bold">{t('docs')}</Link>
                    <a href="https://blog.contentdrive.app" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-bold">{t('blog')}</a>

                    <div className="px-3 py-3 border-t border-gray-100 mt-2">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Select Language</span>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
