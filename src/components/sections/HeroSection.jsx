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
                    <span className={styles.badge}>أكثر من 30 عاماً من الريادة الصناعية</span>
                    <h1 className={styles.title}>
                        هندسة دقيقة. صناعة متينة.<br />
                        <span className={styles.highlight}>نبتكر لنبني المستقبل</span><br />

                    </h1>
                    <p className={styles.description}>
                        شريكك الصناعي الموثوق. من التصميم الهندسي للقوالب إلى التشغيل الميكانيكي المتقدم (CNC)، وإنتاج شبكات PPR الاستراتيجية. نجمع بين الإرث الصناعي والتكنولوجيا الحديثة لتقديم حلول لا تُضاهى.
                    </p>
                    <div className={styles.btnGroup}>
                        <Button variant="primary" size="lg" to="/contact">ابدأ مشروعك معنا</Button>
                        <Button variant="outline" size="lg" to="/products">استكشف قدراتنا التصنيعية</Button>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.visualCol}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className={styles.imageBox}>
                        <video
                            className={styles.placeholderImage}
                            src="/videos/cnc_running.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ objectFit: 'cover', width: '100%', height: '100%', border: 'none' }}
                        />
                    </div>

                    {/* Floating glassmorphism badge — outside imageBox to avoid clipping */}
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
                </motion.div>
            </div>
        </section>
    );
}
