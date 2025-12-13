import React from 'react';
import { useTranslations } from 'next-intl';

const Workflow = () => {
    const t = useTranslations('Workflow');

    return (
        <section id="feature-highlight" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
                        {t('titleStart')} <span className="text-blue-500">{t('titleStrategy')}</span> {t('titleMiddle')} <span className="text-red-500">{t('titleRoadmap')}</span> {t('titleEnd')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto text-blue-600">
                            <i className="fas fa-layer-group text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-display font-bold text-gray-900 mb-3 text-center">{t('card1Title')}</h4>
                        <p className="text-gray-600 text-center leading-relaxed">
                            {t('card1Desc')}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto text-red-600">
                            <i className="fas fa-bolt text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-display font-bold text-gray-900 mb-3 text-center">{t('card2Title')}</h4>
                        <p className="text-gray-600 text-center leading-relaxed">
                            {t('card2Desc')}
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto text-green-600">
                            <i className="fas fa-file-alt text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-display font-bold text-gray-900 mb-3 text-center">{t('card3Title')}</h4>
                        <p className="text-gray-600 text-center leading-relaxed">
                            {t('card3Desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
