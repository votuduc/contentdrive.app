import React from 'react';
import { useTranslations } from 'next-intl';

const Agents = () => {
    const t = useTranslations('Agents');

    return (
        <section id="ai-agents-section" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
                        {t('titleStart')} <span className="text-green-500">{t('titleTeam')}</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Agent 1 */}
                    <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center group">
                        <div className="text-4xl text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                            <i className="fas fa-lightbulb"></i>
                        </div>
                        <h4 className="text-xl font-display font-bold text-gray-900 mb-3">{t('agent1Title')}</h4>
                        <p className="text-gray-600">
                            {t('agent1Desc')}
                        </p>
                    </div>

                    {/* Agent 2 */}
                    <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center group">
                        <div className="text-4xl text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                            <i className="fas fa-brain"></i>
                        </div>
                        <h4 className="text-xl font-display font-bold text-gray-900 mb-3">{t('agent2Title')}</h4>
                        <p className="text-gray-600">
                            {t('agent2Desc')}
                        </p>
                    </div>

                    {/* Agent 3 */}
                    <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 text-center group">
                        <div className="text-4xl text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                            <i className="fas fa-map-signs"></i>
                        </div>
                        <h4 className="text-xl font-display font-bold text-gray-900 mb-3">{t('agent3Title')}</h4>
                        <p className="text-gray-600">
                            {t('agent3Desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agents;
