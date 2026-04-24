import Button from '../ui/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.contentCol}>
                    <span className={styles.badge}>رواد الصناعة في سوريا</span>
                    <h1 className={styles.title}>
                        نحول أفكارك إلى<br/>
                        <span className={styles.highlight}>منتجات بلاستيكية</span><br/>
                        واقعية
                    </h1>
                    <p className={styles.description}>
                        مصنع متكامل لإنتاج القوالب، خدمات CNC الاحترافية، وتصنيع أنابيب PPR بأعلى معايير الجودة العالمية.
                    </p>
                    <div className={styles.btnGroup}>
                        <Button variant="primary" size="lg">ابدأ مشروعك الآن</Button>
                        <Button variant="outline" size="lg">كتالوج المنتجات</Button>
                    </div>
                </div>

                <div className={styles.visualCol}>
                    <div className={styles.imageBox}>
                        <div className={styles.placeholderImage}></div>
                        
                        {/* Floating glassmorphism badge */}
                        <div className={styles.floatingBadge}>
                            <div className={styles.badgeContent}>
                                <div className={styles.pulseDot}></div>
                                <div>
                                    <span className={styles.badgeTitle}>آلة CNC قيد التشغيل</span>
                                    <span className={styles.badgeSubtitle}>دقة عالية: 0.01mm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
