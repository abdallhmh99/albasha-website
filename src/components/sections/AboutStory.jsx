import styles from './AboutStory.module.css';
import SectionTitle from '../ui/SectionTitle';

export default function AboutStory() {
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
                                <span className={styles.statNumber} dir="ltr">15+</span>
                                <span className={styles.statText}>سنة من الخبرة</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statNumber} dir="ltr">100%</span>
                                <span className={styles.statText}>دقة في التصنيع</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageContent}>
                        {/* Placeholder image from existing assets */}
                        <div className={styles.imageWrapper}>
                            <img src="/images/services/cnc.png" alt="آلة CNC في المصنع" className={styles.image} />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
