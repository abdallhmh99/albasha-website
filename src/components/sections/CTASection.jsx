import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            {/* Background Decorative Elements */}
            <div className={styles.decorativeCircle1}></div>
            <div className={styles.decorativeCircle2}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>هل أنت مستعد لتحويل فكرتك إلى واقع؟</h2>
                    <p className={styles.description}>
                        فريقنا من المهندسين والخبراء جاهز لدراسة مشروعك وتقديم أفضل الحلول الصناعية من التصميم الدقيق وحتى الإنتاج الشامل.
                    </p>
                    <div className={styles.btnGroup}>
                        <button className={`${styles.btn} ${styles.btnSolid}`}>تواصل معنا الآن</button>
                        <button className={`${styles.btn} ${styles.btnOutline}`}>طلب عرض سعر</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
