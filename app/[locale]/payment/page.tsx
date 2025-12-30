"use client";

import React, { useEffect, useState, useRef } from 'react';
import Script from 'next/script';
import { useTranslations } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "AXxPC5qauR2oKGWOtsVi9Wy4LsMfmRSSzhmFtaaKSIflM6m2Du_-0mDyfgItdvHfTPAtst_bPvIhmHAu";
const VALIDATOR_API_URL = 'https://script.google.com/macros/s/AKfycbwGWS8VlhT9LFU_cqlmQr8ZwbgRpdOygsgwucuTWAcnVMnWpFy24EwKq-hWRKpoFhw/exec';

type PlanDetail = {
    name: string;
    price: number;
    id: string;
    featuresKey: 'proFeatures' | 'businessFeatures';
};

const PLANS: Record<string, PlanDetail> = {
    "PRO": {
        name: "Pro Plan",
        price: 29.00,
        id: "P-6GK30767G94091318NEA5GVY",
        featuresKey: 'proFeatures'
    },
    "BUSINESS": {
        name: "Business Plan",
        price: 99.00,
        id: "P-9XH43012K32457045NEA5HLQ",
        featuresKey: 'businessFeatures'
    }
};

export default function PaymentPage() {
    const t = useTranslations('Payment');
    const searchParams = useSearchParams();
    const planParam = searchParams.get('plan');
    const [selectedPlanKey, setSelectedPlanKey] = useState<string>('PRO');
    const [currentPlanId, setCurrentPlanId] = useState<string>('');
    const [discountMessage, setDiscountMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
    const [isLoadingDiscount, setIsLoadingDiscount] = useState(false);
    const discountInputRef = useRef<HTMLInputElement>(null);
    const paypalRef = useRef<HTMLDivElement>(null);

    // Initialize Plan
    useEffect(() => {
        let key = planParam ? planParam.toUpperCase() : 'PRO';
        if (!PLANS[key]) key = 'PRO';
        setSelectedPlanKey(key);
        setCurrentPlanId(PLANS[key].id); // Initialize with default Plan ID
    }, [planParam]);

    const currentPlan = PLANS[selectedPlanKey];

    // Apply Discount - New Dynamic Plan ID Logic
    const applyDiscount = async () => {
        const code = discountInputRef.current?.value.trim();
        if (!code) return;

        setIsLoadingDiscount(true);
        setDiscountMessage(null);

        try {
            const response = await fetch(`${VALIDATOR_API_URL}?code=${code}`);
            const data = await response.json();

            console.log('🔍 Discount API Response:', data);
            console.log('👉 Current Plan Before:', currentPlan);
            if (data.target_plan_id) console.log('🎯 Target Plan ID from API:', data.target_plan_id);

            if (data.valid && data.target_plan_id) {
                // Update to discounted Plan ID
                setCurrentPlanId(data.target_plan_id);
                setDiscountMessage({ text: data.message || t('success'), type: 'success' });
            } else {
                // Reset to default Plan ID
                setCurrentPlanId(currentPlan.id);
                setDiscountMessage({ text: data.message || t('invalid'), type: 'error' });
            }
        } catch (e) {
            console.error('Discount validation error:', e);
            setDiscountMessage({ text: t('error'), type: 'error' });
        } finally {
            setIsLoadingDiscount(false);
        }
    };

    // Render PayPal Buttons
    const renderPayPalButtons = () => {
        if (!window.paypal || !paypalRef.current || !currentPlanId) return;

        // Clear existing buttons
        paypalRef.current.innerHTML = '';

        window.paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'blue',
                layout: 'vertical',
                label: 'subscribe'
            },
            createSubscription: function (data: any, actions: any) {
                // Dynamic Plan ID - Clean and simple!
                return actions.subscription.create({
                    'plan_id': currentPlanId
                });
            },
            onApprove: function (data: any) {
                window.location.href = "/thank-you";
            },
            onError: function (err: any) {
                alert('Something went wrong. Please try again.');
                console.error(err);
            }
        }).render(paypalRef.current);
    };

    // Re-render PayPal when plan or Plan ID changes
    useEffect(() => {
        renderPayPalButtons();
    }, [selectedPlanKey, currentPlanId]);


    return (
        <div className="bg-gray-50 font-sans text-gray-900 min-h-screen flex flex-col">
            <Script
                src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&intent=subscription`}
                onLoad={() => renderPayPalButtons()}
            />

            {/* Header */}
            <header className="bg-white border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <i className="fas fa-arrow-left text-gray-400 group-hover:text-gray-600 transition-colors"></i>
                        <span className="text-gray-500 font-medium group-hover:text-gray-700 transition-colors">{t('backHome')}</span>
                    </Link>
                    <img src="/images/logo/logo_contentdrive_400x133.png" alt="ContentDrive" className="h-8 md:h-10" />
                    <div className="w-24"></div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

                    {/* Left Column */}
                    <div className="md:col-span-7 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                            <h2 className="text-xl font-display font-bold text-gray-900 mb-6 flex items-center">
                                <span className="bg-blue-50 text-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                {t('orderSummary')}
                            </h2>

                            <div className="flex justify-between items-start border-b border-gray-100 pb-6 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{currentPlan.name}</h3>
                                    <p className="text-gray-500 text-sm">{t('subscription')}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-gray-900">${currentPlan.price}</div>
                                    <div className="text-gray-400 text-sm">/month</div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">{t('whatsIncluded')}</h4>
                                <ul className="space-y-3">
                                    {[0, 1, 2, 3].map(i => {
                                        const feature = t(`${currentPlan.featuresKey}.${i}` as any);
                                        // Handle missing keys gracefully if fewer features
                                        if (feature === `${currentPlan.featuresKey}.${i}`) return null;
                                        return (
                                            <li key={i} className="flex items-center text-sm text-gray-600">
                                                <i className="fas fa-check text-green-500 mr-3"></i>
                                                {feature}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Discount */}
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">{t('discountCode')}</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        ref={discountInputRef}
                                        placeholder={t('enterCode')}
                                        className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                    />
                                    <button
                                        onClick={applyDiscount}
                                        disabled={isLoadingDiscount}
                                        className="bg-gray-900 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors disabled:opacity-50"
                                    >
                                        {isLoadingDiscount ? '...' : t('apply')}
                                    </button>
                                </div>
                                {discountMessage && (
                                    <p className={`text-sm mt-2 font-medium ${discountMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                                        {discountMessage.text}
                                    </p>
                                )}
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
                                <span className="font-bold text-gray-700">{t('totalDue')}</span>
                                <span className="text-2xl font-bold text-green-500">${currentPlan.price.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-center gap-6 text-gray-400 grayscale opacity-70">
                            <div className="flex items-center gap-2"><i className="fas fa-lock"></i> {t('ssl')}</div>
                            <div className="flex items-center gap-2"><i className="fas fa-shield-alt"></i> {t('privacy')}</div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-5">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 sticky top-4">
                            <h2 className="text-xl font-display font-bold text-gray-900 mb-6 flex items-center">
                                <span className="bg-blue-50 text-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                {t('securePayment')}
                            </h2>

                            <p className="text-gray-600 text-sm mb-6">{t('paymentDesc')}</p>

                            <div ref={paypalRef} className="w-full min-h-[150px]"></div>

                            <div className="mt-6 text-center">
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {t.rich('terms', {
                                        link: (chunks) => <Link href="/terms" className="underline hover:text-gray-600">{chunks}</Link>,
                                        br: () => <br />
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
