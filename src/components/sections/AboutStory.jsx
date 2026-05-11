import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './AboutStory.module.css';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function AboutStory() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    // Parallax effect: moves from -50px to 50px as it scrolls
    const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

    return (
        <section className={styles.storySection}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.textContent}>
                        <SectionTitle 
                            badge="قصتنا" 
                            title="رواد صناعة القوالب في سوريا" 
                            centered={false} 
                        />
                        <p className={styles.paragraph}>
                            بدأت مسيرتنا برؤية واضحة: تقديم حلول صناعية تضاهي الجودة العالمية في مجال تصميم وتصنيع القوالب المعدنية، وتشكيل المعادن (CNC)، وخطوط إنتاج البلاستيك المتقدمة.
                        </p>
                        <p className={styles.paragraph}>
                            على مدار سنوات من العمل الجاد، استطعنا في <strong>مصنع الباشا</strong> بناء ثقة واسعة مع عملائنا من خلال الالتزام بأدق التفاصيل، واستخدام أحدث التكنولوجيا في الآلات والمعدات. نحن نؤمن بأن نجاح منتجك النهائي وعمره الطويل يبدأ من جودة القالب الذي ننتجه لك.
                        </p>
                        <div className={styles.statsRow}>
                            <div className={styles.statBox}>
                                <AnimatedCounter end={15} suffix="+" className={styles.statNumber} />
                                <span className={styles.statText}>سنة من الخبرة</span>
                            </div>
                            <div className={styles.statBox}>
                                <AnimatedCounter end={100} suffix="%" className={styles.statNumber} />
                                <span className={styles.statText}>دقة في التصنيع</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageContent} ref={containerRef}>
                        <motion.div className={styles.imageWrapper} style={{ y }}>
                            <img src="/images/services/cnc.png" alt="آلة CNC في المصنع" className={styles.image} />
                            <div className={styles.imageOverlay}></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
