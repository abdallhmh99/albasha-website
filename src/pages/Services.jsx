import PageHeader from '../components/ui/PageHeader';
import ServiceDetails from '../components/sections/ServiceDetails';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CTASection from '../components/sections/CTASection';

export default function Services() {
    return (
        <div dir="rtl">
            <PageHeader 
                title="خدماتنا" 
                subtitle="حلول صناعية متكاملة تبدأ من التصميم الهندسي الدقيق وتنتهي بالإنتاج الشامل."
                variant="isometric"
            />
            <ServiceDetails />
            <WhyChooseUs />
            <CTASection />
        </div>
    );
}