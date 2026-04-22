import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} dir="rtl">
            <div className={styles.container}>
                <div className={styles.grid}>

                    <div className={styles.brandCol}>
                        <div className={styles.logoWrap}>
                            <img src="/images/albasha_icon_white_only.png" alt="Albasha Logo" className={styles.logo} />
                            <span className={styles.brandName}>الباشا</span>
                        </div>
                        <p className={styles.brandDesc}>
                            شركة الباشا — رواد في تصنيع البلاستيك في سوريا. نمزج بين الخبرة والتقنية الحديثة لتقديم أفضل الحلول.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>روابط سريعة</h3>
                        <ul className={styles.linkList}>
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/services">الخدمات</Link></li>
                            <li><Link to="/products">المنتجات</Link></li>
                            <li><Link to="/portfolio">معرض الأعمال</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>خدماتنا</h3>
                        <ul className={styles.linkList}>
                            <li><Link to="/services#molding">قوالب النفخ والحقن</Link></li>
                            <li><Link to="/services#cnc">CNC احترافي</Link></li>
                            <li><Link to="/services#operating">تشغيل القوالب</Link></li>
                            <li><Link to="/services#pipes">أنابيب PPR</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className={styles.contactCol}>
                        <h3 className={styles.colTitle}>تواصل معنا</h3>
                        <ul className={styles.contactList}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span className={styles.contactText}>سوريا — دمشق</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span className={styles.contactText} dir="ltr">contact_phone_num</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                <span className={styles.contactText} dir="ltr">info@albasha-plast.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <p>&copy; 2026 الباشا لتصنيع البلاستيك. جميع الحقوق محفوظة.</p>
            </div>
        </footer>
    );
}