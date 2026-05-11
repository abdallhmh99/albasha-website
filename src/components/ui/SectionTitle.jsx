import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, subtitle, badge, centered = true }) {
    return (
        <motion.div 
            className={`${styles.container} ${centered ? styles.centered : styles.start}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {badge && <span className={styles.badge}>{badge}</span>}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </motion.div>
    );
}
