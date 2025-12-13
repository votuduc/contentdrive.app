import React from 'react';
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <section id="header-container" className="pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                        <span className="font-medium text-gray-900">{t('titleStart')} </span>
                        <span className="text-red-600 font-black">{t('titleStrategy')}</span>
                        <span className="font-medium text-gray-900"> {t('titleMiddle')}</span>
                        <br className="hidden sm:block" />
                        <span className="text-blue-500 font-black">{t('titleCampaign')}</span>
                        <span className="font-medium text-gray-900"> {t('titleIn')} </span>
                        <span className="font-black text-gray-900">{t('titleMinutes')}</span>
                    </h1>

                    <p className="mt-4 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t.rich('description', {
                            green: (chunks) => <strong className="text-green-600">{chunks}</strong>,
                            yellow: (chunks) => <strong className="text-yellow-500">{chunks}</strong>
                        })}
                    </p>

                    <div className="mb-12">
                        <a href="https://workspace.google.com/marketplace/app/contentdrive/365151344215" target="_blank"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 shadow-md transform hover:-translate-y-0.5 transition duration-200">
                            {t('cta')}
                        </a>
                    </div>
                </div>

                {/* Demo Video */}
                <div className="max-w-5xl mx-auto mt-10 shadow-2xl rounded-xl overflow-hidden border border-gray-200">
                    <div className="relative pb-[56.25%] h-0">
                        <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/Hkl2yq4MA4w"
                            title="ContentDrive - How it Works" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
