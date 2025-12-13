import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const Pricing = () => {
    const t = useTranslations('Pricing');

    return (
        <section id="price" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">{t('title')}</h2>
                    <p className="text-xl text-gray-600">{t('description')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* FREE TIER */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col h-full hover:border-blue-500 hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl font-display font-bold text-gray-500 uppercase tracking-wide text-center mb-2">{t('freePlan.name')}</h3>
                        <div className="text-center mb-6">
                            <span className="text-4xl font-bold text-gray-900">{t('freePlan.price')}</span>
                            <span className="text-gray-500">{t('month')}</span>
                        </div>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        <p className="text-center text-red-600 font-bold mb-6">{t('freePlan.limit')}</p>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-700">{t('freePlan.features.strategy')}</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-700">{t('freePlan.features.idea')}</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-700">{t('freePlan.features.briefs')}</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <i className="fas fa-times mt-1 mr-3 ml-[2px]"></i>
                                <span>{t('freePlan.features.dispatch')}</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <i className="fas fa-times mt-1 mr-3 ml-[2px]"></i>
                                <span>{t('freePlan.features.writers')}</span>
                            </li>
                        </ul>

                        <a href="https://workspace.google.com/marketplace/app/contentdrive/365151344215" target="_blank"
                            className="block w-full py-3 px-6 text-center border-2 border-blue-500 text-blue-500 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                            {t('freePlan.cta')}
                        </a>
                        <p className="text-center text-xs text-gray-400 mt-4 h-8">{t('freePlan.subtext')}</p>
                    </div>

                    {/* PRO TIER */}
                    <div className="bg-white rounded-2xl border-2 border-blue-500 p-8 flex flex-col h-full shadow-xl relative transform transition-all duration-300 scale-100 lg:scale-105 hover:scale-105 lg:hover:scale-110 z-10 hover:z-20">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-sm">
                            {t('proPlan.badge')}
                        </div>
                        <h3 className="text-xl font-display font-bold text-blue-500 uppercase tracking-wide text-center mb-2">{t('proPlan.name')}</h3>
                        <div className="text-center mb-6">
                            <span className="text-5xl font-bold text-gray-900">{t('proPlan.price')}</span>
                            <span className="text-gray-500">{t('month')}</span>
                        </div>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        <p className="text-center font-bold text-gray-900 mb-6">{t('proPlan.limit')}</p>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-900 font-medium">{t('proPlan.features.allFree')}</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-700">{t('proPlan.features.dispatch')}</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-900 font-bold">{t('proPlan.features.writers')}</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <i className="fas fa-times mt-1 mr-3 ml-[2px]"></i>
                                <span>{t('proPlan.features.assets')}</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <i className="fas fa-times mt-1 mr-3 ml-[2px]"></i>
                                <span>{t('proPlan.features.team')}</span>
                            </li>
                        </ul>

                        <Link href="/payment?plan=PRO"
                            className="block w-full py-3 px-6 text-center bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-md">
                            {t('proPlan.cta')}
                        </Link>
                        <p className="text-center text-xs text-gray-400 mt-4 h-8">{t('proPlan.subtext')}</p>
                    </div>

                    {/* BUSINESS TIER */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col h-full hover:border-blue-500 hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl font-display font-bold text-gray-500 uppercase tracking-wide text-center mb-2">{t('businessPlan.name')}</h3>
                        <div className="text-center mb-6">
                            <span className="text-4xl font-bold text-gray-900">{t('businessPlan.price')}</span>
                            <span className="text-gray-500">{t('month')}</span>
                        </div>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        <p className="text-center font-bold text-gray-900 mb-6">{t('businessPlan.limit')}</p>

                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-900 font-medium">{t('businessPlan.features.allPro')}</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-900 font-bold">{t('businessPlan.features.briefs')}</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-700">{t('businessPlan.features.writers')}</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-700">{t('businessPlan.features.assets')}</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                                <span className="text-gray-700">{t('businessPlan.features.team')}</span>
                            </li>
                        </ul>

                        <Link href="/payment?plan=BUSINESS"
                            className="block w-full py-3 px-6 text-center border-2 border-blue-500 text-blue-500 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                            {t('businessPlan.cta')}
                        </Link>
                        <p className="text-center text-xs text-gray-400 mt-4 h-8">{t('businessPlan.subtext')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
