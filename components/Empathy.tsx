import React from 'react';
import { useTranslations } from 'next-intl';

const Empathy = () => {
    const t = useTranslations('Empathy');

    return (
        <section id="empathy-section" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">{t('title')}</h2>
                        <p className="text-xl text-gray-600">
                            {t.rich('description', {
                                strong1: (chunks) => <strong className="text-gray-900">{chunks}</strong>
                            })}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500 flex items-start">
                            <span className="text-green-500 mr-3 mt-1 text-lg">✔️</span>
                            <p className="text-gray-700">{t('point1')}</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500 flex items-start">
                            <span className="text-green-500 mr-3 mt-1 text-lg">✔️</span>
                            <p className="text-gray-700">{t('point2')}</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500 flex items-start">
                            <span className="text-green-500 mr-3 mt-1 text-lg">✔️</span>
                            <p className="text-gray-700">{t('point3')}</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500 flex items-start">
                            <span className="text-green-500 mr-3 mt-1 text-lg">✔️</span>
                            <p className="text-gray-700">{t('point4')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Empathy;
