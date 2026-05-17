import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import styles from './PortfolioPreview.module.css';

const projects = [
    {
        id: 1,
        title: "هندسة قوالب صناعية معقدة",
        category: "قوالب حقن عالية التحمل",
        image: "/images/portfolio/portfolio_injection_mold_4cav_v2.png",
        size: "large"
    },
    {
        id: 2,
        title: "خطوط إنتاج أنظمة PPR",
        category: "بنية تحتية مائية موثوقة",
        image: "/images/pipes/green_ppr_pn10.png",
        size: "medium"
    },
    {
        id: 3,
        title: "أجزاء ميكانيكية دقيقة التنفيذ",
        category: "التشغيل الميكانيكي الدقيق (CNC)",
        image: "/images/portfolio/cnc_aluminum_v3.png",
        size: "medium"
    }
];

export default function PortfolioPreview() {
    return (
        <section className={styles.portfolioSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SectionTitle 
                        badge="سجل الإنجازات"
                        title="نماذج من دقة التصنيع الهندسي لدينا"
                        centered={false}
                    />
                    <div className={styles.ctaWrapper}>
                        <Button variant="outline" to="/portfolio">عرض كل الأعمال</Button>
                    </div>
                </div>

                <div className={styles.gallery}>
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className={`${styles.galleryItem} ${project.size === 'large' ? styles.largeItem : styles.mediumItem}`}
                        >
                            <img src={project.image} alt={project.title} className={styles.projectImage} loading="lazy" />
                            <div className={styles.overlay}>
                                <div className={styles.overlayContent}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
