import React from 'react';
import { useTranslations } from 'next-intl';

const BeyondBrief = () => {
    const t = useTranslations('BeyondBrief');

    return (
        <section id="beyond-the-brief" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
                        {t('titleStart')} <span className="text-yellow-500">{t('titleBeyond')}</span> {t('titleEnd')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t.rich('description', {
                            strong1: (chunks) => <strong className="text-gray-900">{chunks}</strong>
                        })}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pipeline A */}
                    <div className="bg-blue-50/50 rounded-xl p-8 border border-blue-100 h-full flex flex-col">
                        <h4 className="text-xl font-display font-bold text-blue-600 mb-3">{t('pipelineATitle')}</h4>
                        <p className="text-gray-600 mb-6 flex-grow">
                            {t.rich('pipelineADesc', {
                                strong1: (chunks) => <strong className="text-gray-800">{chunks}</strong>,
                                strong2: (chunks) => <strong className="text-gray-800">{chunks}</strong>
                            })}
                        </p>
                        <p className="font-bold text-sm text-gray-700 mt-auto bg-white inline-block px-3 py-1 rounded-full border border-blue-100 shadow-sm w-fit">
                            {t('pipelineALabel')}
                        </p>
                    </div>

                    {/* Pipeline B */}
                    <div className="bg-green-50/50 rounded-xl p-8 border border-green-100 h-full flex flex-col">
                        <h4 className="text-xl font-display font-bold text-green-600 mb-3">{t('pipelineBTitle')}</h4>
                        <p className="text-gray-600 mb-6 flex-grow">
                            {t.rich('pipelineBDesc', {
                                strong1: (chunks) => <strong className="text-gray-800">{chunks}</strong>
                            })}
                        </p>
                        <p className="font-bold text-sm text-gray-700 mt-auto bg-white inline-block px-3 py-1 rounded-full border border-green-100 shadow-sm w-fit">
                            {t('pipelineBLabel')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondBrief;
