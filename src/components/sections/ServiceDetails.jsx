import styles from './ServiceDetails.module.css';

const servicesList = [
    {
        id: "molds",
        title: "قوالب الحقن والنفخ",
        description: "نقوم بتصميم وتصنيع قوالب حقن ونفخ البلاستيك بأعلى معايير الدقة والجودة. نستخدم أفضل أنواع الفولاذ المخصصة للقوالب لضمان متانة استثنائية وقدرة على تحمل الإنتاج المستمر. يتم التصميم عبر أحدث البرامج الهندسية لضمان مطابقة القالب للتصميم الأصلي بنسبة 100%.",
        features: ["استخدام فولاذ ألماني وتايواني", "ضمان ملايين الدقات", "دقة تصنيع تصل للميكرون"],
        image: "/images/services/mold.png",
        reverse: false
    },
    {
        id: "cnc",
        title: "خدمات تشغيل CNC",
        description: "نوفر خدمات تشغيل آلي دقيق لجميع أنواع المعادن باستخدام مراكز تشغيل متطورة. سواء كنت تحتاج إلى قطع معقدة أو سلسلة إنتاج، نضمن لك الحصول على نتائج دقيقة ومطابقة للمواصفات الفنية المطلوبة في وقت قياسي.",
        features: ["مراكز تشغيل متطورة", "التعامل مع مختلف المعادن", "تصنيع القطع المعقدة"],
        image: "/images/services/cnc.png",
        reverse: true
    },
    {
        id: "production",
        title: "تشغيل القوالب وإنتاج البلاستيك",
        description: "لا نكتفي بصناعة القوالب، بل نقدم خدمة إنتاج قطع البلاستيك عبر خطوط حقن ونفخ حديثة. يمكنك الاعتماد علينا لتحويل قالبك إلى منتج نهائي بكميات تجارية بجودة ثابتة وتكلفة اقتصادية.",
        features: ["خطوط إنتاج مستمرة", "مراقبة جودة صارمة", "مواد خام ممتازة"],
        image: "/images/services/production.png",
        reverse: false
    },
    {
        id: "ppr",
        title: "أنابيب ووصلات PPR",
        description: "نقوم بإنتاج أنابيب ووصلات PPR عالية الجودة لشبكات المياه، مطابقة للمواصفات العالمية. تتميز منتجاتنا بمقاومتها للضغط العالي والحرارة وعمرها الافتراضي الطويل.",
        features: ["مقاومة عالية للحرارة والضغط", "مواد آمنة صحياً", "عمر افتراضي طويل"],
        image: "/images/services/ppr-pipes.png",
        reverse: true
    }
];

export default function ServiceDetails() {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                {servicesList.map((service) => (
                    <div key={service.id} className={`${styles.serviceRow} ${service.reverse ? styles.reverse : ''}`}>
                        <div className={styles.textContent}>
                            <h2 className={styles.title}>{service.title}</h2>
                            <p className={styles.description}>{service.description}</p>
                            <ul className={styles.featuresList}>
                                {service.features.map((feature, index) => (
                                    <li key={index} className={styles.featureItem}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.imageContent}>
                            <div className={styles.imageWrapper}>
                                <img src={service.image} alt={service.title} className={styles.image} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
