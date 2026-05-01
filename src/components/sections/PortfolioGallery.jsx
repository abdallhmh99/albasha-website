import { useState } from 'react';
import styles from './PortfolioGallery.module.css';
import SectionTitle from '../ui/SectionTitle';

const portfolioItems = [
    {
        id: 1,
        title: "قالب حقن 4 تجاويف",
        category: "molds",
        categoryLabel: "قوالب حقن",
        image: "/images/services/mold.png",
        size: "large"
    },
    {
        id: 2,
        title: "ترس ميكانيكي دقيق",
        category: "cnc",
        categoryLabel: "تشغيل CNC",
        image: "/images/services/cnc.png",
        size: "small"
    },
    {
        id: 3,
        title: "قالب نفخ عبوات 1 لتر",
        category: "molds",
        categoryLabel: "قوالب نفخ",
        image: "/images/services/mold.png",
        size: "medium"
    },
    {
        id: 4,
        title: "هيكل ألمنيوم معقد",
        category: "cnc",
        categoryLabel: "تشغيل CNC",
        image: "/images/services/production.png",
        size: "medium"
    },
    {
        id: 5,
        title: "قالب حقن لقطع الغيار",
        category: "molds",
        categoryLabel: "قوالب حقن",
        image: "/images/services/cnc.png",
        size: "small"
    },
    {
        id: 6,
        title: "تصميم وتنفيذ قالب طبي",
        category: "molds",
        categoryLabel: "قوالب دقيقة",
        image: "/images/services/mold.png",
        size: "large"
    }
];

const categories = [
    { id: 'all', label: 'جميع الأعمال' },
    { id: 'molds', label: 'صناعة القوالب' },
    { id: 'cnc', label: 'تشغيل CNC' }
];

export default function PortfolioGallery() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredItems = activeFilter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <section className={styles.gallerySection}>
            <div className={styles.container}>
                <SectionTitle 
                    badge="معرض الأعمال" 
                    title="دقة هندسية في كل تفصيلة" 
                />

                <div className={styles.filters}>
                    {categories.map(cat => (
                        <button 
                            key={cat.id}
                            className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.active : ''}`}
                            onClick={() => setActiveFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className={styles.masonryGrid}>
                    {filteredItems.map(item => (
                        <div key={item.id} className={`${styles.galleryItem} ${styles[item.size]}`}>
                            <div className={styles.imageWrapper}>
                                <img src={item.image} alt={item.title} className={styles.image} />
                                <div className={styles.overlay}>
                                    <span className={styles.categoryBadge}>{item.categoryLabel}</span>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
