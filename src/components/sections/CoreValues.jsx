import styles from './CoreValues.module.css';

const values = [
    {
        id: 1,
        title: "الدقة المتناهية",
        description: "كل ميكرون يهمنا. نستخدم أحدث ماكينات الـ CNC لضمان تطابق القوالب مع التصاميم الهندسية بنسبة 100%.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
        )
    },
    {
        id: 2,
        title: "الجودة العالية (المتانة)",
        description: "نختار أفضل أنواع الفولاذ والمعادن المخصصة للقوالب، لتتحمل ضغط الإنتاج المستمر وملايين الدقات بدون تآكل.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        )
    },
    {
        id: 3,
        title: "الابتكار والتطوير",
        description: "لا نتوقف عن التعلم. فريقنا الهندسي يواكب أحدث برامج التصميم الصناعي ليقدم حلولاً ذكية تختصر وقت الإنتاج.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13V5h7a7 7 0 0 1 7 7v8h-7z"></path><path d="M11 20v4"></path><path d="M7 24h8"></path><circle cx="15" cy="9" r="2"></circle></svg>
        )
    }
];

export default function CoreValues() {
    return (
        <section className={styles.valuesSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>مبادئنا التي لا نتنازل عنها</h2>
                </div>
                
                <div className={styles.grid}>
                    {values.map(value => (
                        <div key={value.id} className={styles.valueCard}>
                            <div className={styles.iconWrapper}>
                                {value.icon}
                            </div>
                            <h3 className={styles.title}>{value.title}</h3>
                            <p className={styles.description}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
