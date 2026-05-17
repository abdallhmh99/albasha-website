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
                    <h2 className={styles.title}>هل تبحث عن قوة تصنيعية ترتقي بمشروعك؟</h2>
                    <p className={styles.description}>
                        انتقل بإنتاجك إلى المستوى التالي مع ترسانة "الباشا بلاست" الصناعية. نضع خبرة 30 عاماً وأحدث التقنيات الهندسية تحت تصرفك.
                    </p>
                    <div className={styles.btnGroup}>
                        <Link to="/contact" className={`${styles.btn} ${styles.btnSolid}`}>تحدث مع مهندسينا الآن</Link>
                        <a href="https://wa.me/963944515413" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>طلب استشارة عبر واتساب</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
