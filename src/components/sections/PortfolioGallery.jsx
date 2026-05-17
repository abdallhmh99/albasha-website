import { useState } from 'react';
import styles from './PortfolioGallery.module.css';
import SectionTitle from '../ui/SectionTitle';

const portfolioItems = [
    /* ──────────── قوالب حقن ──────────── */
    {
        id: 1,
        title: "قالب حقن 4 تجاويف — عبوات دوائية",
        category: "injection-molds",
        categoryLabel: "قوالب حقن",
        description: "تصميم وتصنيع قالب حقن بـ 4 تجاويف لإنتاج عبوات دوائية بسعة 100 مل من فولاذ P20 مقسّى مع نظام Hot Runner",
        image: "/images/portfolio/portfolio_injection_mold_4cav_v2.png",
        size: "large"
    },
    {
        id: 2,
        title: "قالب حقن 8 تجاويف — أغطية بلاستيكية",
        category: "injection-molds",
        categoryLabel: "قوالب حقن",
        description: "قالب عالي السرعة بـ 8 تجاويف لإنتاج أغطية لولبية بقطر 28mm مع نظام فك لولبي أوتوماتيكي",
        image: "/images/portfolio/portfolio_cap_mold_8cav_v2.png",
        size: "medium"
    },

    /* ──────────── قوالب نفخ ──────────── */
    {
        id: 3,
        title: "قالب نفخ عبوات مياه 1.5 لتر",
        category: "blow-molds",
        categoryLabel: "قوالب نفخ",
        description: "قالب نفخ ألمنيوم 7075 لإنتاج عبوات PET شفافة بسعة 1.5 لتر — بطاقة إنتاجية 1500 عبوة/ساعة",
        image: "/images/portfolio/portfolio_blow_mold_bottle_v2.png",
        size: "large"
    },
    {
        id: 4,
        title: "قالب نفخ عبوات منظفات 2 لتر",
        category: "blow-molds",
        categoryLabel: "قوالب نفخ",
        description: "قالب نفخ بالبثق لإنتاج عبوات HDPE بمقبض يد بسعة 2 لتر مع طلاء كروم صلب",
        image: "/images/portfolio/portfolio_blow_mold_detergent_v2.png",
        size: "medium"
    },

    /* ──────────── تشغيل CNC ──────────── */
    {
        id: 5,
        title: "ترس ميكانيكي فولاذي دقيق",
        category: "cnc",
        categoryLabel: "تشغيل CNC",
        description: "تصنيع ترس فولاذي 4140 بـ 36 سن وقطر 120mm بدقة ±0.005mm باستخدام CNC 4-محاور + جلخ دقيق",
        image: "/images/portfolio/portfolio_cnc_gear.png",
        size: "medium"
    },
    {
        id: 6,
        title: "هيكل ألمنيوم مخصص لآلة تعبئة",
        category: "cnc",
        categoryLabel: "تشغيل CNC",
        description: "تصنيع قطعة ألمنيوم 6061-T6 معقدة بأبعاد 350×200×80mm باستخدام CNC 5-محاور مع أنودة صلبة",
        image: "/images/portfolio/cnc_aluminum_v3.png",
        size: "large"
    },
    {
        id: 7,
        title: "قاعدة قالب (Mold Base) مشغّلة CNC",
        category: "cnc",
        categoryLabel: "تشغيل CNC",
        description: "تصنيع قاعدة قالب فولاذ S50C بأبعاد 500×400×250mm مع ثقب عميق لقنوات التبريد وأعمدة دليل دقيقة",
        image: "/images/portfolio/mold_base.png",
        size: "medium"
    },
    {
        id: 8,
        title: "هيكل ألمنيوم هندسي معقد",
        category: "cnc",
        categoryLabel: "تشغيل CNC",
        description: "قطعة ألمنيوم مخصصة بأشكال هندسية معقدة ومنحنيات دقيقة لمعدات صناعية متخصصة",
        image: "/images/portfolio/portfolio_cnc_aluminum_structure_v2.png",
        size: "small"
    },

    /* ──────────── تشغيل وإنتاج ──────────── */
    {
        id: 9,
        title: "خط إنتاج كامل — عبوات بلاستيكية",
        category: "production",
        categoryLabel: "خطوط إنتاج",
        description: "تجهيز وتشغيل خط إنتاج كامل بطاقة 10,000 عبوة/يوم — يشمل تصنيع القالب والتركيب والتدريب",
        image: "/images/portfolio/production_line_no_worker.png",
        size: "large"
    }
];

const categories = [
    { id: 'all', label: 'جميع الأعمال' },
    { id: 'injection-molds', label: 'قوالب حقن' },
    { id: 'blow-molds', label: 'قوالب نفخ' },
    { id: 'cnc', label: 'تشغيل CNC' },
    { id: 'production', label: 'خطوط إنتاج' }
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
                                <img src={item.image} alt={item.title} className={styles.image} loading="lazy" />
                                <div className={styles.overlay}>
                                    <span className={styles.categoryBadge}>{item.categoryLabel}</span>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                    {item.description && (
                                        <p className={styles.itemDesc}>{item.description}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
