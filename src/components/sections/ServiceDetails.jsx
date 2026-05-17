import styles from './ServiceDetails.module.css';
import SectionTitle from '../ui/SectionTitle';

const servicesList = [
    {
        id: "molds",
        title: "هندسة قوالب الحقن والنفخ",
        description: "الوجهة الهندسية الأولى لتصنيع قوالب البلاستيك المعقدة. نعتمد على أرفع سبائك الفولاذ العالمية المعالجة حرارياً لضمان قوالب تتحمل ملايين الدورات الإنتاجية دون تراجع في دقة المنتج.",
        features: ["سبائك فولاذية عالمية معالجة حرارياً", "عمر افتراضي يتجاوز ملايين الدورات الإنتاجية", "تطابق دقيق للمواصفات الهندسية (ميكرون)"],
        image: "/images/portfolio/portfolio_injection_mold_4cav_v2.png",
        reverse: false
    },
    {
        id: "cnc",
        title: "التشغيل الآلي المتقدم (CNC)",
        description: "مراكز التشغيل الآلي لدينا مجهزة للتعامل مع أعقد التصاميم الهندسية. نقدم خدمات تفريز وخراطة بفضل منظومة CNC المتطورة التي تضمن إزالة المعادن بدقة استثنائية وتلبي متطلبات أقصى القطاعات صرامة.",
        features: ["مراكز تفريز وخراطة مبرمجة عالية الأداء", "تشكيل معقد لمختلف المعادن والسبائك", "هندسة عكسية ودقة تنفيذ خالية من الأخطاء"],
        image: "/images/portfolio/cnc_aluminum_v3.png",
        reverse: true
    },
    {
        id: "production",
        title: "الإنتاج الصناعي والحقن البلاستيكي",
        description: "بيئة إنتاجية متكاملة لترجمة قوالبك إلى خطوط إنتاج فعلية. من خلال أسطول ماكينات الحقن والنفخ، نضمن لك إنتاجاً كمياً مستقراً مع الحفاظ الصارم على تجانس الخصائص الفيزيائية للمنتجات.",
        features: ["أسطول متطور من ماكينات الحقن والنفخ", "تحكم صارم في الجودة أثناء الإنتاج الكمي", "كفاءة اقتصادية ودورة إنتاجية سريعة"],
        image: "/images/portfolio/production_line_no_worker.png",
        reverse: false
    },
    {
        id: "ppr",
        title: "أنظمة وشبكات أنابيب PPR",
        description: "العمود الفقري لشبكات المياه الآمنة والمستدامة. نستخدم مواد خام بكر 100% لإنتاج شبكات تقاوم أقسى درجات الضغط والحرارة ومطابقة لأرفع معايير الصحة العالمية ISO.",
        features: ["مقاومة فائقة للإجهادات الحرارية والضغط العالي", "مواد خام بكر 100% مطابقة للمعايير الصحية", "بنية خالية من التسرب وعمر تشغيلي استثنائي"],
        image: "/images/pipes/green_ppr_pn10.png",
        reverse: true
    }
];

export default function ServiceDetails() {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <SectionTitle 
                    badge="القدرات التصنيعية" 
                    title="حلول هندسية متكاملة من التصميم إلى الإنتاج الكمي" 
                />
                <div className={styles.servicesGrid}>
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
                                <img src={service.image} alt={service.title} className={styles.image} loading="lazy" />
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
