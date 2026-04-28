import styles from './Loader.module.css';

export default function Loader({ fullScreen = false }) {
    return (
        <div className={`${styles.loaderContainer} ${fullScreen ? styles.fullScreen : ''}`}>
            <div className={styles.gearbox}>
                <div className={`${styles.gear} ${styles.one}`}>
                    <div className={styles.gearInner}>
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                    </div>
                </div>
                <div className={`${styles.gear} ${styles.two}`}>
                    <div className={styles.gearInner}>
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                    </div>
                </div>
                <div className={`${styles.gear} ${styles.three}`}>
                    <div className={styles.gearInner}>
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                    </div>
                </div>
                <div className={`${styles.gear} ${styles.four} ${styles.large}`}>
                    <div className={styles.gearInner}>
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                        <div className={styles.bar} />
                    </div>
                </div>
            </div>
        </div>
    );
}
