import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1 */}
                    <div>
                        <h5 className="text-white font-display font-medium uppercase tracking-wider mb-6 text-sm">{t('findUs')}</h5>
                        <p className="mb-4 text-sm leading-relaxed">ContentDrive is a product by Innoflow, a Google Cloud Partner.</p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start"><i className="fas fa-location-arrow w-6 text-blue-500 mt-0.5"></i> <span>{t('address')}</span></li>
                            <li className="flex items-center"><i className="fas fa-phone w-6 text-blue-500"></i> <span>+84-88.888.3458</span></li>
                            <li className="flex items-center"><i className="fas fa-envelope w-6 text-blue-500"></i>
                                <span>hi@timkhachhang.net</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h5 className="text-white font-display font-medium uppercase tracking-wider mb-6 text-sm">{t('resources')}</h5>
                        <ul className="space-y-3 text-sm">
                            <li><a href="https://www.youtube.com/watch?v=Hkl2yq4MA4w" className="hover:text-white transition-colors">{t('videoTutorials')}</a></li>
                            <li><a href="https://workspace.google.com/marketplace/app/contentdrive/365151344215"
                                className="hover:text-white transition-colors">{t('downloadAddon')}</a></li>
                            <li><Link href="/docs" className="hover:text-white transition-colors">{t('userGuide')}</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('supportCenter')}</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h5 className="text-white font-display font-medium uppercase tracking-wider mb-6 text-sm">{t('quickLinks')}</h5>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/#price" className="hover:text-white transition-colors">{t('pricing')}</Link></li>
                            <li><Link href="/#faq-section" className="hover:text-white transition-colors">{t('faq')}</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">{t('terms')}</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">{t('privacy')}</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h5 className="text-white font-display font-medium uppercase tracking-wider mb-6 text-sm">{t('about')}</h5>
                        <p className="text-sm leading-relaxed">
                            {t('aboutDesc')}
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center sm:flex sm:justify-between sm:items-center">
                    <p className="text-sm mb-4 sm:mb-0">
                        {t('copyright')} <a href="http://timkhachhang.net" target="_blank"
                            className="text-gray-300 hover:text-white">Innoflow</a>
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.facebook.com/innoflows" className="text-gray-400 hover:text-white transition-colors"><i
                            className="fab fa-facebook-f text-lg"></i></a>
                        <a href="https://x.com/votuduc" className="text-gray-400 hover:text-white transition-colors"><i
                            className="fab fa-twitter text-lg"></i></a>
                        <a href="https://vn.linkedin.com/company/innoflows"
                            className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-linkedin-in text-lg"></i></a>
                        <a href="https://www.youtube.com/hockieumy" className="text-gray-400 hover:text-white transition-colors"><i
                            className="fab fa-youtube text-lg"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
