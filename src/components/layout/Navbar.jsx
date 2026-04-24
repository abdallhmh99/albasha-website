import { NavLink, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

function Navbar(){
    const [scrolled, setScrolled] = useState(false);
    const [isArabic, setIsArabic] = useState(true);
    const linksRef = useRef(null);
    const location = useLocation();
    const [indicator, setIndicator] = useState({
        underlineLeft: 0,
        underlineWidth: 0,
        helmetLeft: 0,
        helmetTop: 0,
        visible: false,
    });
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    
    


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    

    const updateIndicator = useCallback(() => {
        const container = linksRef.current;
        if (!container) return;
        const active = container.querySelector('a[aria-current="page"]');
        if (!active) {
            setIndicator((prev) => ({
                ...prev,
                underlineWidth: 0,
                visible: false,
            }));
            return;
        }
        const parentRect = container.getBoundingClientRect();
        const linkRect = active.getBoundingClientRect();
        const linkLeft = linkRect.left - parentRect.left + container.scrollLeft;
        const linkTop = linkRect.top - parentRect.top + container.scrollTop;

        setIndicator({
            underlineLeft: linkLeft,
            underlineWidth: linkRect.width,
            helmetLeft: linkLeft - 20,
            helmetTop: linkTop - 34,
            visible: true,
        });
    }, []);

    useLayoutEffect(() => {
        updateIndicator();
    }, [location.pathname, updateIndicator]);

    useLayoutEffect(() => {
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [updateIndicator]);

    const handleLanguageToggle = () => {
        setIsArabic((prev) => !prev);
    };

    const linkClass = ({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
    const mobileLinkClass = ({ isActive }) =>
        isActive
            ? `${styles.mobileLinkClass} ${styles.mobileLinkActive}`
            : styles.mobileLinkClass;
    return(
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : "" }`}>
        <div className={styles.logoContainer}>
            <div className={styles.logo}>
                <span className={styles.logoSwap} aria-hidden>
                    <img
                        className={`${styles.logoImg} ${styles.logoImgWhite} ${scrolled ? styles.logoHidden : ''}`}
                        src="/images/bplast_icon_white_no_text.png"
                        alt=""
                    />
                    <img
                        className={`${styles.logoImg} ${styles.logoImgDark} ${scrolled ? styles.logoVisible : ''}`}
                        src="/images/bplast_icon_only.png"
                        alt=""
                    />
                </span>
                <p className={styles.name}>ALBASHA PLAST</p>
            </div>
        </div>

        <div className={styles.linksContainer} ref={linksRef}>
            
            <NavLink to="/" end className={linkClass}>
                Home
            </NavLink>
            <NavLink to="/products" className={linkClass}>
                Products
            </NavLink>
            <NavLink to="/services" className={linkClass}>
                Services
            </NavLink>
            <NavLink to="/portfolio" className={linkClass}>
                Portfolio
            </NavLink>
            <NavLink to="/about" className={linkClass}>
                About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
                Contact
            </NavLink>
            <span
                className={styles.navHelmetWrap}
                style={{
                    transform: `translate(${indicator.helmetLeft}px, ${indicator.helmetTop}px)`,
                    opacity:
                        indicator.visible && indicator.underlineWidth > 0 ? 1 : 0,
                }}
                aria-hidden
            >
                <span className={styles.navHelmetTilt}>
                    <img
                        className={styles.navHelmetImg}
                        src="/images/helmet-similar.svg"
                        alt=""
                        width={64}
                        height={48}
                        draggable={false}
                    />
                </span>
            </span>
        </div>

        <div className={styles.buttonContainer}>
            <button
                className={styles.langButton}
                onClick={handleLanguageToggle}
                type="button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${styles.globeIcon} ${!isArabic ? styles.rotated : ''}`}
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                </svg>
                <span className={styles.langText}>{isArabic ? 'العربية' : 'English'}</span>
            </button>
        </div>


        <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.mobileOverlayOpen : ''}`} onClick={closeMobileMenu}>

        </div>


        <div className={styles.mobileMenu}>
            <button className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.mobileMenuButtonOpen : ''}`} onClick={toggleMobileMenu} type="button" aria-expanded={isMobileMenuOpen} aria-controls='mobile-menu' aria-label="Toggle mobile menu">
             <span className={styles.mobileMenuLine}></span>
             <span className={styles.mobileMenuLine}></span>
             <span className={styles.mobileMenuLine}></span>
            </button>
        </div>

        
        <div className={`${styles.drawerMobileMenu} ${isMobileMenuOpen ? styles.drawerMobileMenuOpen : ''}`} id='mobile-menu'>
            <div className={styles.mobileDrawerTop}>
                <button
                    className={styles.mobileLangButton}
                    onClick={handleLanguageToggle}
                    type="button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${styles.globeIcon} ${!isArabic ? styles.rotated : ''}`}
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                    </svg>
                    <span className={styles.langText}>{isArabic ? 'العربية' : 'English'}</span>
                </button>
            </div>
            
            <NavLink to="/" end className={mobileLinkClass} onClick={closeMobileMenu}>
                Home
            </NavLink>
            <NavLink to="/products" className={mobileLinkClass} onClick={closeMobileMenu}>
                Products
            </NavLink>
            <NavLink to="/services" className={mobileLinkClass} onClick={closeMobileMenu}>
                Services
            </NavLink>
            <NavLink to="/portfolio" className={mobileLinkClass} onClick={closeMobileMenu}>
                Portfolio
            </NavLink>
            <NavLink to="/about" className={mobileLinkClass} onClick={closeMobileMenu}>
                About
            </NavLink>
            <NavLink to="/contact" className={mobileLinkClass} onClick={closeMobileMenu}>
                Contact
            </NavLink>
            
        </div>

        

    </nav>)

}
export default Navbar;
