import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle, badge, centered = true }) {
    return (
        <div className={`${styles.container} ${centered ? styles.centered : styles.start}`}>
            {badge && <span className={styles.badge}>{badge}</span>}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
}
