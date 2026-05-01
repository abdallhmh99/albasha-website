import ContactSection from '../components/sections/ContactSection';

export default function Contact() {
    return (
        <div dir="rtl">
            <ContactSection />
            <div style={{width: '100%', height: '450px', backgroundColor: '#e2e8f0', display: 'flex'}}>
                <iframe 
                    title="موقع شركة الباشا على الخريطة"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102434.61391515286!2d37.15174094999999!3d36.20215715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff813b98135af%3A0x967e5e70cf261a8!2z2K3ZhNio2Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2s!4v1700000000000!5m2!1sar!2s" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}