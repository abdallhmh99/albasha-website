import PageHeader from '../components/ui/PageHeader';
import AboutStory from '../components/sections/AboutStory';
import CoreValues from '../components/sections/CoreValues';
import CTASection from '../components/sections/CTASection';

export default function About() {
    return (
        <div dir="rtl">
            <PageHeader 
                title="عن الباشا" 
                subtitle="تعرف على تاريخ الباشا، الرائد في صناعة القوالب المعدنية والتشغيل الدقيق."
                variant="isometric"
            />
            <AboutStory />
            <CoreValues />
            <CTASection />
        </div>
    );
}