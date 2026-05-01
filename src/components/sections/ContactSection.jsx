import styles from './ContactSection.module.css';

export default function ContactSection() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.infoSide}>
                        <h2 className={styles.title}>تواصل معنا</h2>
                        <p className={styles.description}>نحن هنا للإجابة على جميع استفساراتك وتلبية طلباتك. خبراؤنا متاحون للرد عليك بأسرع وقت ممكن.</p>

                        <div className={styles.infoCards}>
                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <h3>المبيعات والدعم الفني</h3>
                                    <p dir="ltr">+963 9X XXX XXXX</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <h3>تابعنا على إنستغرام</h3>
                                    <p dir="ltr">@albashaplast</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconWrapper}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <h3>المقر الرئيسي</h3>
                                    <p>سوريا، حلب، المدينة الصناعية</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.whatsappSide}>
                        <div className={styles.whatsappCard}>
                            <div className={styles.whatsappIconLarge}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <h3 className={styles.whatsappTitle}>الرد الفوري عبر واتساب</h3>
                            <p className={styles.whatsappDesc}>نعلم أن وقتك ثمين. اضغط على الزر أدناه لبدء محادثة مباشرة مع فريقنا عبر واتساب.</p>
                            <a href="https://wa.me/963900000000" target="_blank" rel="noreferrer" className={styles.whatsappButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                تواصل معنا الآن
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
