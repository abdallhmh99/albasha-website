import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';
import styles from './ServicesPreview.module.css';

const services = [
    {
        id: 1,
        title: "قوالب الحقن والنفخ",
        description: "تصميم وتصنيع قوالب عالية المتانة لأي منتج بلاستيكي.",
        image: "/images/services/mold.png",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        )
    },
    {
        id: 2,
        title: "خدمات CNC",
        description: "حفر وتشكيل المعادن بدقة متناهية لتصنيع القوالب المعقدة.",
        image: "/images/services/cnc.png",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        )
    },
    {
        id: 3,
        title: "تشغيل القوالب",
        description: "خطوط إنتاج جاهزة لتشغيل قوالبكم الخاصة بكميات كبيرة.",
        image: "/images/services/production.png",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        )
    },
    {
        id: 4,
        title: "أنابيب PPR",
        description: "منتجاتنا من أنابيب الوصلات والمياه المقاومة للحرارة والضغط.",
        image: "/images/services/ppr.png",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><path d="M6 14V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"></path><path d="M12 18v.01"></path></svg>
        )
    }
];

const stats = [
    { end: 15, suffix: "+", label: "سنة من الخبرة" },
    { end: 500, suffix: "+", label: "قالب تم إنجازه" },
    { end: 100, suffix: "+", label: "عميل مستمر" },
    { value: "24/7", label: "دعم فني وتصنيعي" },
];

export default function ServicesPreview() {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <SectionTitle 
                    badge="خدماتنا"
                    title="حلول صناعية متكاملة تحت سقف واحد"
                    centered={true}
                />

                <motion.div 
                    className={styles.servicesGrid}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map(service => (
                        <motion.div 
                            key={service.id} 
                            className={styles.imageCard}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                        >
                            {/* Background Image */}
                            <img src={service.image} alt={service.title} className={styles.cardImage} />
                            
                            {/* Gradient Overlay */}
                            <div className={styles.cardOverlay}></div>
                            
                            {/* Content */}
                            <div className={styles.cardContent}>
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDesc}>{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section Integrated */}
                <div className={styles.statsContainer}>
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                {stat.end !== undefined ? (
                                    <AnimatedCounter 
                                        end={stat.end} 
                                        suffix={stat.suffix} 
                                        className={styles.statValue} 
                                        dir="ltr" 
                                    />
                                ) : (
                                    <span className={styles.statValue} dir="ltr">{stat.value}</span>
                                )}
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
