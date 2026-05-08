import { Link } from 'react-router-dom';
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
                        <Link to="/contact" className={`${styles.btn} ${styles.btnSolid}`}>تواصل معنا الآن</Link>
                        <a href="https://wa.me/963944515413" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>ابدأ مشروعك عبر واتساب</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
