import HeroSection from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import CTASection from '../components/sections/CTASection';

export default function Home() {
    return (
        <div dir="rtl">
            <HeroSection />
            <ServicesPreview />
            <PortfolioPreview />
            <CTASection />
        </div>
    );
}