import Image from "next/image";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Workflow from '@/components/Workflow';
import Agents from '@/components/Agents';
import BeyondBrief from '@/components/BeyondBrief';
import Empathy from '@/components/Empathy';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Workflow />
      <Agents />
      <BeyondBrief />
      <Empathy />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
