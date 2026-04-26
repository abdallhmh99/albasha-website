import HeroSection from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';

export default function Home() {
    return (
        <div dir="rtl">
            <HeroSection />
            <ServicesPreview />
            {/* The rest of the sections will be added here later */}
        </div>
    );
}