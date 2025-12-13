"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function DocsPage() {
    const t = useTranslations('Docs');
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('div[id^="install-step"], div[id^="usage-step"], section[id]');
            let current = '';

            sections.forEach(section => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id') || '';
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <div className="container mx-auto px-4 py-8 lg:py-12 pt-24">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* LEFT SIDEBAR (Sticky on Desktop) */}
                    <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
                        <nav className="sticky top-28 max-h-[calc(100vh-120px)] overflow-y-auto pr-4 border-r border-gray-100" id="doc-sidebar">
                            <ul className="space-y-1 text-sm">
                                {/* Part 1 */}
                                <li className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-4">{t('install')}</li>
                                <li><a href="#install-step-1" onClick={(e) => scrollTo('install-step-1', e)} className={`doc-nav-link block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-r-md border-l-[3px] border-transparent transition-colors ${activeSection === 'install-step-1' ? 'text-blue-500 bg-blue-50 border-blue-500' : ''}`}>1. Install</a></li>
                                <li><a href="#install-step-2" onClick={(e) => scrollTo('install-step-2', e)} className={`doc-nav-link block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-r-md border-l-[3px] border-transparent transition-colors ${activeSection === 'install-step-2' ? 'text-blue-500 bg-blue-50 border-blue-500' : ''}`}>2. Initial Setup</a></li>

                                {/* Part 2 */}
                                <li className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-4">{t('workflow')}</li>
                                <li><a href="#usage-step-1" onClick={(e) => scrollTo('usage-step-1', e)} className={`doc-nav-link block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-r-md border-l-[3px] border-transparent transition-colors ${activeSection === 'usage-step-1' ? 'text-blue-500 bg-blue-50 border-blue-500' : ''}`}>Step 1: Strategy</a></li>
                                <li><a href="#usage-step-2" onClick={(e) => scrollTo('usage-step-2', e)} className={`doc-nav-link block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-r-md border-l-[3px] border-transparent transition-colors ${activeSection === 'usage-step-2' ? 'text-blue-500 bg-blue-50 border-blue-500' : ''}`}>Step 2: Ideation</a></li>
                                <li><a href="#usage-step-3" onClick={(e) => scrollTo('usage-step-3', e)} className={`doc-nav-link block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-r-md border-l-[3px] border-transparent transition-colors ${activeSection === 'usage-step-3' ? 'text-blue-500 bg-blue-50 border-blue-500' : ''}`}>Step 3: Roadmap</a></li>
                                <li><a href="#usage-step-4" onClick={(e) => scrollTo('usage-step-4', e)} className={`doc-nav-link block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-r-md border-l-[3px] border-transparent transition-colors ${activeSection === 'usage-step-4' ? 'text-blue-500 bg-blue-50 border-blue-500' : ''}`}>Step 4: Planning</a></li>
                                <li><a href="#usage-step-5" onClick={(e) => scrollTo('usage-step-5', e)} className={`doc-nav-link block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-r-md border-l-[3px] border-transparent transition-colors ${activeSection === 'usage-step-5' ? 'text-blue-500 bg-blue-50 border-blue-500' : ''}`}>Step 5: Briefs</a></li>

                                {/* Part 3 */}
                                <li className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-4">{t('advanced')}</li>
                                <li><a href="#advanced-automation" onClick={(e) => scrollTo('advanced-automation', e)} className={`doc-nav-link block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-r-md border-l-[3px] border-transparent transition-colors ${activeSection === 'advanced-automation' ? 'text-blue-500 bg-blue-50 border-blue-500' : ''}`}>Automation</a></li>

                                {/* Part 4 */}
                                <li className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-4">{t('support')}</li>
                                <li><a href="#troubleshooting" onClick={(e) => scrollTo('troubleshooting', e)} className={`doc-nav-link block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-r-md border-l-[3px] border-transparent transition-colors ${activeSection === 'troubleshooting' ? 'text-blue-500 bg-blue-50 border-blue-500' : ''}`}>Troubleshooting</a></li>
                            </ul>
                        </nav>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className="w-full min-w-0 doc-content">
                        <header className="mb-12 border-b border-gray-100 pb-8">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">📚 {t('title')}</h1>
                            <p className="text-xl text-gray-500 leading-relaxed">{t('subtitle')}</p>
                        </header>

                        {/* Part 1 */}
                        <section id="installation" className="mb-16">
                            <h2 className="text-2xl font-display font-bold text-red-500 mb-6 pb-2 border-b border-gray-200">Part 1: Installation & Onboarding</h2>
                            <p className="text-gray-600 mb-6">Follow these one-time steps to activate ContentDrive in your workspace.</p>

                            <div id="install-step-1" className="mb-10 scroll-mt-28">
                                <h3 className="text-xl font-display font-bold text-blue-500 mb-4">1. Install from Marketplace</h3>
                                <p className="text-gray-600 mb-4">Open a new or existing Google Sheet. In the top menu, go to <code>Extensions &gt; Add-ons &gt; Get add-ons</code>.</p>
                                <img src="/images/docs/doc_image_1.png" alt="Install from marketplace" className="border border-gray-200 rounded-lg shadow-sm mb-6 max-w-full h-auto" />
                                <p className="text-gray-600 mb-4">Search for &quot;ContentDrive&quot;, click the result, and then click <strong>Install</strong>. You will need to grant the necessary Google permissions to continue.</p>
                                <img src="/images/docs/doc_image_2.png" alt="Marketplace listing" className="border border-gray-200 rounded-lg shadow-sm mb-6 max-w-full h-auto" />
                            </div>

                            <div id="install-step-2" className="mb-10 scroll-mt-28">
                                <h3 className="text-xl font-display font-bold text-blue-500 mb-4">2. Initial Setup & Licensing</h3>
                                <p className="text-gray-600 mb-4">Once installed, refresh your browser tab (Press F5 or Cmd+R). <strong className="text-gray-900">Note: This is critical for the menu to appear.</strong></p>
                                <p className="text-gray-600 mb-4">Go to <code>Extensions &gt; ContentDrive &gt; Initial Setup</code>.</p>
                                <img src="/images/docs/doc_image_3.png" alt="Initial setup menu" className="border border-gray-200 rounded-lg shadow-sm mb-6 max-w-full h-auto" />

                                <p className="text-gray-600 mb-4">The add-on will automatically generate the required tabs/sheets for you. A sidebar will appear on the right. Fill in your Name and Email to register.</p>
                                <img src="/images/docs/doc_image_4.png" alt="Sidebar registration" className="border border-gray-200 rounded-lg shadow-sm mb-6 max-w-full h-auto" />

                                <p className="text-gray-600 mb-4">Check your Email: You will receive a License Key. Copy the key and paste it into Cell <strong>B2</strong> of the <strong>&quot;Settings ⚙️&quot;</strong> tab.</p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md mt-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <i className="fas fa-exclamation-triangle text-yellow-400"></i>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-bold text-yellow-800">⚠️ QA Alert</h3>
                                            <div className="mt-2 text-sm text-yellow-700">
                                                <p>If the &quot;ContentDrive&quot; menu does not appear after installation, refresh the page (F5). If it still does not appear, go to <code>Help &gt; Check Onboarding Status</code> or <code>Reset Onboarding</code>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="/images/docs/doc_image_5.png" alt="Troubleshooting menu" className="mt-4 border border-yellow-200 rounded shadow-sm max-w-full h-auto w-full max-w-[400px]" />
                                </div>
                            </div>
                        </section>

                        {/* Part 2 */}
                        <section id="workflow" className="mb-16">
                            <h2 className="text-2xl font-display font-bold text-red-500 mb-6 pb-2 border-b border-gray-200">Part 2: The 5-Step Content Workflow</h2>
                            <p className="text-gray-600 mb-8">ContentDrive operates on a &quot;Waterfall&quot; logic. You must complete one step to unlock the next.</p>

                            <div id="usage-step-1" className="mb-12 scroll-mt-28 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-display font-bold text-blue-500 mb-2">Step 1: Define Your Strategy</h3>
                                <p className="text-gray-500 mb-4 font-medium italic">Goal: Teach the AI your brand voice, audience, and core value proposition.</p>
                                <ol className="list-decimal list-inside space-y-4 text-gray-600">
                                    <li><strong>Human Action:</strong> Navigate to the <code>1. Strategy Draft</code> tab and fill in the 6 columns. Do not leave these blank.</li>
                                    <img src="/images/docs/doc_image_6.png" className="block my-3 border rounded shadow-sm max-w-full" />
                                    <li><strong>AI Action:</strong> Go to <code>Extensions &gt; ContentDrive &gt; Content AI Workflow &gt; Step 1: AI Refine Strategy</code>.</li>
                                    <li><strong>Review:</strong> Go to the <code>2. Strategy Hub</code> tab. The AI has refined your raw notes used.</li>
                                    <img src="/images/docs/doc_image_7.png" className="block my-3 border rounded shadow-sm max-w-full" />
                                    <li><strong>Approve:</strong> If happy, change the status in Column G to &quot;Approved&quot;.</li>
                                    <img src="/images/docs/doc_image_8.png" className="block my-3 border rounded shadow-sm max-w-full" />
                                </ol>
                            </div>

                            <div id="usage-step-2" className="mb-12 scroll-mt-28 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-display font-bold text-blue-500 mb-2">Step 2: Ideation & Prioritization</h3>
                                <p className="text-gray-500 mb-4 font-medium italic">Goal: Generate topic ideas aligned with the strategy.</p>
                                <ul className="space-y-4 text-gray-600 list-disc list-inside">
                                    <li><strong>AI Action:</strong> Go to <code>Step 2: AI Generate & Prioritize</code>.</li>
                                    <img src="/images/docs/doc_image_9.png" className="block my-3 border rounded shadow-sm max-w-full" />
                                    <li>The AI will read your &quot;Approved&quot; strategy and generate ideas in <code>2. Strategy Hub</code>.</li>
                                    <li><strong>Scoring:</strong> The AI assigns a &quot;Priority Tier&quot;: 🟢 DO NOW, 🟡 Do Later, 🟣 Backlog.</li>
                                    <img src="/images/docs/doc_image_10.png" className="block my-3 border rounded shadow-sm max-w-full" />
                                </ul>
                            </div>

                            <div id="usage-step-3" className="mb-12 scroll-mt-28 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-display font-bold text-blue-500 mb-2">Step 3: Build the Roadmap</h3>
                                <p className="text-gray-500 mb-4 font-medium italic">Goal: Move ideas to the &quot;Production&quot; pipeline.</p>
                                <ol className="list-decimal list-inside space-y-4 text-gray-600">
                                    <li><strong>Human Action:</strong> Review generated ideas. Set status to &quot;Approved&quot; for ones you want to write.</li>
                                    <img src="/images/docs/doc_image_11.png" className="block my-3 border rounded shadow-sm max-w-full" />
                                    <li><strong>AI Action:</strong> Go to <code>Step 3: Move Idea to Roadmap</code>.</li>
                                    <li>The system moves rows to <code>4. Content Roadmap 🗺️</code>.</li>
                                </ol>
                            </div>

                            <div id="usage-step-4" className="mb-12 scroll-mt-28 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-display font-bold text-blue-500 mb-2">Step 4: Strategic Planning</h3>
                                <p className="text-gray-500 mb-4 font-medium italic">Goal: Flesh out ideas with angles and keywords.</p>
                                <ul className="space-y-4 text-gray-600 list-disc list-inside">
                                    <li><strong>AI Action:</strong> Go to <code>Step 4: AI Suggest Plan</code> inside the Roadmap tab.</li>
                                    <img src="/images/docs/doc_image_12.png" className="block my-3 border rounded shadow-sm max-w-full" />
                                    <li>AI fills details: Format, Angle, Title, Persona.</li>
                                    <li><strong>Human Action:</strong> Review. Change status to &quot;Ready for Briefing&quot;.</li>
                                </ul>
                            </div>

                            <div id="usage-step-5" className="mb-12 scroll-mt-28 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-display font-bold text-blue-500 mb-2">Step 5: Create Content Briefs</h3>
                                <p className="text-gray-500 mb-4 font-medium italic">Goal: Generate a production-ready document.</p>
                                <ol className="list-decimal list-inside space-y-4 text-gray-600">
                                    <li>Select the cell of the idea you want to brief.</li>
                                    <li><strong>AI Action:</strong> Go to <code>Step 5: AI Create Full Brief</code>.</li>
                                    <li><strong>Output:</strong> Detailed brief saved in <code>5. Writer Briefs ✍️</code>.</li>
                                    <img src="/images/docs/doc_image_14.png" className="block my-3 border rounded shadow-sm max-w-full" />
                                </ol>
                            </div>
                        </section>

                        {/* Part 3 */}
                        <section id="advanced-automation" className="mb-16 scroll-mt-28">
                            <h2 className="text-2xl font-display font-bold text-red-500 mb-6 pb-2 border-b border-gray-200">Part 3: Advanced Automation</h2>
                            <p className="text-gray-600 mb-6">For power users who want to automate drafting and asset creation.</p>

                            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tab Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pineline A</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AI Agents: Brief to Article</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">Auto-writes full article in Google Doc.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pineline B</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Digital Asset Suite</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">Generates image prompts, scripts, and slide deck content.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Part 4 */}
                        <section id="troubleshooting" className="mb-16 scroll-mt-28">
                            <h2 className="text-2xl font-display font-bold text-red-500 mb-6 pb-2 border-b border-gray-200">🛑 Troubleshooting</h2>
                            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-md">
                                <ul className="space-y-3 text-red-800">
                                    <li className="flex items-start"><i className="fas fa-times-circle mt-1 mr-3"></i><span><strong>Do Not Rename Tabs:</strong> The script looks for specific tab names.</span></li>
                                    <li className="flex items-start"><i className="fas fa-times-circle mt-1 mr-3"></i><span><strong>Exact Spelling Matters:</strong> &quot;Approved&quot; is not the same as &quot;approved&quot;.</span></li>
                                    <li className="flex items-start"><i className="fas fa-times-circle mt-1 mr-3"></i><span><strong>One Step at a Time:</strong> Do not skip steps in the waterfall.</span></li>
                                </ul>
                            </div>
                        </section>

                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
