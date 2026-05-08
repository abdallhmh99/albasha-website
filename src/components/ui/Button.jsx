import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    to,
    href,
    ...props 
}) {
    const btnClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
    
    if (to) {
        return (
            <Link to={to} className={btnClass} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={btnClass} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noreferrer" : undefined} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={btnClass} {...props}>
            {children}
        </button>
    );
}
