import styles from './WhyChooseUs.module.css';

const reasons = [
    {
        id: 1,
        title: "سرعة في التنفيذ",
        description: "نلتزم بجداول زمنية دقيقة لضمان تسليم مشروعك في الوقت المحدد.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        )
    },
    {
        id: 2,
        title: "دقة هندسية",
        description: "تقنيات متطورة تضمن دقة تصل إلى الميكرون في جميع منتجاتنا.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
        )
    },
    {
        id: 3,
        title: "سرية تامة",
        description: "نحافظ على خصوصية تصاميم عملائنا ونضمن حماية حقوقهم الفكرية.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        )
    },
    {
        id: 4,
        title: "دعم فني",
        description: "فريق جاهز لتقديم الدعم الفني وخدمات الصيانة ما بعد التسليم.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
        )
    }
];

export default function WhyChooseUs() {
    return (
        <section className={styles.whySection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>لماذا تختار الباشا؟</h2>
                </div>
                
                <div className={styles.grid}>
                    {reasons.map(reason => (
                        <div key={reason.id} className={styles.reasonCard}>
                            <div className={styles.iconWrapper}>
                                {reason.icon}
                            </div>
                            <h3 className={styles.title}>{reason.title}</h3>
                            <p className={styles.description}>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
