"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-gray-900">{question}</span>
                <i className={`fas fa-chevron-down text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="bg-gray-50 px-6 py-4 text-gray-700">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const t = useTranslations('FAQ');

    // Helper to render rich text for answers
    const renderRich = (chunks: any) => <strong className="font-bold">{chunks}</strong>;
    const renderItalic = (chunks: any) => <em className="italic">{chunks}</em>;

    return (
        <section id="faq-section" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-gray-900 mb-12">{t('title')}</h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    <FAQItem
                        question={t('q1')}
                        answer={t.rich('a1', { strong: renderRich })}
                    />
                    <FAQItem
                        question={t('q2')}
                        answer={t.rich('a2', { strong: renderRich, em: renderItalic })}
                    />
                    <FAQItem
                        question={t('q3')}
                        answer={t('a3')}
                    />
                    <FAQItem
                        question={t('q4')}
                        answer={t.rich('a4', { strong: renderRich })}
                    />
                    <FAQItem
                        question={t('q5')}
                        answer={t.rich('a5', { strong: renderRich })}
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
