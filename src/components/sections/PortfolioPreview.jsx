import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import styles from './PortfolioPreview.module.css';

const projects = [
    {
        id: 1,
        title: "قالب حقن لقطع غيار السيارات",
        category: "قوالب حقن عالية الدقة",
        image: "/images/services/mold.png",
        size: "large"
    },
    {
        id: 2,
        title: "مجموعة وصلات مياه ضغط عالي",
        category: "أنابيب ووصلات PPR",
        image: "/images/services/ppr.png",
        size: "medium"
    },
    {
        id: 3,
        title: "قطعة ميكانيكية معقدة",
        category: "تشغيل معادن CNC",
        image: "/images/services/cnc.png",
        size: "medium"
    }
];

export default function PortfolioPreview() {
    return (
        <section className={styles.portfolioSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SectionTitle 
                        badge="معرض الأعمال"
                        title="أحدث مشاريعنا وإنجازاتنا"
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
                            <img src={project.image} alt={project.title} className={styles.projectImage} />
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
