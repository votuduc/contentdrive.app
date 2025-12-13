
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <main className="py-12 bg-white min-h-screen pt-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">Terms and Conditions of Use</h1>
                        <p className="text-gray-500">Last updated: November 03, 2025</p>
                    </div>

                    <div className="prose prose-lg prose-blue mx-auto text-gray-600">
                        <p className="mb-6">This privacy policy applies to the ContentDrive service and associated Google Sheets add-on.</p>

                        <div className="mb-10">
                            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Data We Collect</h2>
                            <p className="mb-4">We want to make it clear what data we collect from you when you use our service. We take your privacy very seriously, and we aim to be as transparent as possible about the information we gather.</p>

                            <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Personal Information</h3>
                            <p className="mb-4">We do not collect any personally identifiable information (PII) from our users. This means we do not ask for your name, email address, phone number, or any other information that could be used to identify you personally, outside of the information required for your subscription payment, which is handled by our payment processor.</p>

                            <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Usage Data</h3>
                            <p className="mb-2">We collect anonymous usage data to help us improve the extension and provide a better user experience. This data includes:</p>
                            <ul className="list-disc list-inside space-y-2 mb-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <li>The features you use within the extension</li>
                                <li>How often you use the extension</li>
                                <li>The performance of the extension (e.g., loading times, errors)</li>
                            </ul>
                            <p className="mb-4">This data is completely anonymous and cannot be traced back to you as an individual. We use this information to understand how our service is being used and to identify areas for improvement.</p>

                            <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Cookies</h3>
                            <p className="mb-4">With your consent, we use cookies to track anonymous analytics data. We do not use cookies to store any personal information.</p>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">How We Use Your Data</h2>
                            <p className="mb-2">The anonymous usage data we collect is used solely for the purpose of improving the ContentDrive service. We use this data to:</p>
                            <ul className="list-disc list-inside space-y-2 mb-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <li>Understand which features are most popular and useful</li>
                                <li>Identify and fix bugs or performance issues</li>
                                <li>Make data-driven decisions about future updates and improvements</li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Data Sharing</h2>
                            <p className="mb-4">We do not sell or share your data with any third parties. All the information we collect is for internal use only and is used to improve our service.</p>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                            <p className="mb-4">We may update our policies from time to time. We will notify you of any changes by posting the new policy on this page.</p>
                            <p className="mb-4">You are advised to review this page periodically for any changes. Changes to this policy are effective when they are posted on this page.</p>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="mb-2">If you have any questions about this policy, you can contact us:</p>
                            <ul className="list-none space-y-2 mb-4">
                                <li className="flex items-center font-medium text-blue-500"><i className="fas fa-envelope mr-3"></i>
                                    hi@timkhachhang.net</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
