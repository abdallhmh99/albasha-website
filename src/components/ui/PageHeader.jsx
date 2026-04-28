import styles from './PageHeader.module.css';

export default function PageHeader({ title, subtitle, variant = 'icon' }) {
    return (
        <div className={`${styles.header} ${styles[variant]}`}>
            {/* Option 4: Huge faded icon */}
            {variant === 'icon' && (
                <svg className={styles.bgIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <path d="M6 14V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"></path>
                    <path d="M12 18v.01"></path>
                </svg>
            )}

            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
    );
}
