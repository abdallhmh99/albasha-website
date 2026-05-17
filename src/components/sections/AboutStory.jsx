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
                            badge="إرثنا الصناعي"
                            title="ثلاثة عقود من صياغة التفاصيل وهندسة الصلابة"
                            centered={false}
                        />
                        <p className={styles.paragraph}>
                            لم تكن البداية مجرد تأسيس مصنع، بل كانت إرساءً لمعايير جديدة في القطاع الصناعي السوري. منذ أكثر من ثلاثين عاماً، ارتبط اسم <strong>الباشا بلاست</strong> بالموثوقية العالية والدقة الهندسية المتناهية في تصميم وتصنيع القوالب، وأنظمة التشغيل الميكانيكي، وخطوط الإنتاج المتقدمة.
                        </p>
                        <p className={styles.paragraph}>
                            نحن لا نصنع قوالب فقط؛ بل نؤسس للبنية التحتية لنجاح مشاريع عملائنا. بفضل الترسانة التقنية الحديثة والخبرات الهندسية المتراكمة، نضمن تحويل أعقد المخططات الصناعية إلى واقع ملموس يتميز بالمتانة، الاستدامة، والأداء الفائق الذي لا يساوم على الجودة.
                        </p>
                        <div className={styles.statsRow}>
                            <div className={styles.statBox}>
                                <AnimatedCounter end={30} suffix="+" className={styles.statNumber} />
                                <span className={styles.statText}>عاماً من التميز الصناعي</span>
                            </div>
                            <div className={styles.statBox}>
                                <AnimatedCounter end={100} suffix="%" className={styles.statNumber} />
                                <span className={styles.statText}>التزام بمعايير الجودة</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageContent} ref={containerRef}>
                        <motion.div className={styles.imageWrapper} style={{ y }}>
                            <img src="/images/portfolio/portfolio_injection_mold_4cav_v2.png" alt="آلة CNC في المصنع" className={styles.image} loading="lazy" />
                            <div className={styles.imageOverlay}></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
