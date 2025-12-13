"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ThankYouPage() {
    const t = useTranslations('ThankYou');

    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4 font-sans">
            <div className="bg-white rounded-2xl shadow-sm max-w-lg w-full p-8 md:p-12 text-center border-t-4 border-green-500">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 text-green-500 mb-6">
                    <i className="fas fa-check text-4xl"></i>
                </div>

                <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">{t('title')}</h1>
                <p className="text-xl text-gray-600 mb-8">{t('subTitle')}</p>

                <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left border border-gray-100">
                    <p className="text-gray-700 mb-4">
                        <i className="fas fa-envelope-open-text text-blue-500 mr-2"></i>
                        {t.rich('licenseKeys', {
                            strong1: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                    <p className="text-sm text-gray-500">
                        <i className="fas fa-info-circle mr-2"></i>
                        {t('spam')}
                    </p>
                </div>

                <Link href="/" className="inline-block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg">
                    {t('backHome')}
                </Link>
            </div>
        </div>
    );
}
