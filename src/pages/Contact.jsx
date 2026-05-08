import ContactSection from '../components/sections/ContactSection';

export default function Contact() {
    return (
        <div dir="rtl">
            <ContactSection />
            <div style={{width: '100%', height: '450px', backgroundColor: '#e2e8f0', display: 'flex', marginBottom: '-10px'}}>
                <iframe 
                    title="موقع شركة الباشا على الخريطة"
                    src="https://maps.google.com/maps?q=C7M6%2BV82%20%D8%A3%D8%B4%D8%B1%D9%81%D9%8A%D8%A9%20%D8%B5%D8%AD%D9%86%D8%A7%D9%8A%D8%A7%D8%8C%20%D8%B3%D9%88%D8%B1%D9%8A%D8%A7&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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