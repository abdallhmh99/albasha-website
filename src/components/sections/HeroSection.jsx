import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.contentCol}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={styles.badge}>رواد الصناعة في سوريا</span>
                    <h1 className={styles.title}>
                        نحول أفكارك إلى<br />
                        <span className={styles.highlight}>منتجات بلاستيكية</span><br />
                        واقعية
                    </h1>
                    <p className={styles.description}>
                        مصنع متكامل لإنتاج القوالب، خدمات CNC الاحترافية، وتصنيع أنابيب PPR بأعلى معايير الجودة العالمية.
                    </p>
                    <div className={styles.btnGroup}>
                        <Button variant="primary" size="lg" to="/contact">تواصل معنا الآن</Button>
                        <Button variant="outline" size="lg" to="/products">كتالوج المنتجات</Button>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.visualCol}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className={styles.imageBox}>
                        <div className={styles.placeholderImage}></div>

                        {/* Floating glassmorphism badge */}
                        <motion.div
                            className={styles.floatingBadge}
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <div className={styles.badgeContent}>
                                <div className={styles.pulseDot}></div>
                                <div>
                                    <span className={styles.badgeTitle}>آلة CNC قيد التشغيل</span>
                                    <span className={styles.badgeSubtitle}>دقة عالية: 0.001mm</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
