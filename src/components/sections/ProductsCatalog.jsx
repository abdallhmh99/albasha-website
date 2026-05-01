import { useState } from 'react';
import styles from './ProductsCatalog.module.css';
import SectionTitle from '../ui/SectionTitle';

const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'pipes', label: 'أنابيب PPR' },
    { id: 'fittings', label: 'وصلات PPR' },
    { id: 'ready-plastic', label: 'عبوات ومنتجات جاهزة' }
];

const products = [
    {
        id: 1,
        title: "أنبوب PPR بضغط 20 بار",
        category: "pipes",
        shortDesc: "أنابيب مياه صحية للضغط العالي",
        specs: [
            "متوفر بجميع الأقطار (20mm - 110mm)",
            "مقاوم للحرارة العالية والضغط المستمر",
            "عمر افتراضي يتجاوز 50 عاماً",
            "مصنوع من مادة البولي بروبيلين النقية 100%"
        ],
        image: "/images/services/ppr-pipes.png",
    },
    {
        id: 2,
        title: "كوع PPR 90 درجة",
        category: "fittings",
        shortDesc: "وصلات احترافية لزوايا 90 درجة",
        specs: [
            "لحام حراري محكم يمنع التسريب نهائياً",
            "سماكة جدار متوافقة تماماً مع الأنابيب",
            "انسيابية عالية تمنع ترسب الأملاح",
            "متوفر بجميع الأقطار المطلوبة للمشاريع"
        ],
        image: "/images/services/production.png",
    },
    {
        id: 3,
        title: "أنبوب PPR بضغط 25 بار",
        category: "pipes",
        shortDesc: "أنابيب مخصصة للشبكات الرئيسية",
        specs: [
            "مخصص للتدفئة المركزية والضغوطات العالية جداً",
            "مقاومة فائقة للتشققات والتمدد الحراري",
            "عزل حراري ممتاز يحافظ على حرارة المياه",
            "مطابق لمواصفات الجودة العالمية"
        ],
        image: "/images/services/ppr-pipes.png",
    },
    {
        id: 4,
        title: "تي PPR (Tee)",
        category: "fittings",
        shortDesc: "وصلة ثلاثية لتقسيم مجرى المياه",
        specs: [
            "تقسيم دقيق وسهل مع الحفاظ على ضغط المياه",
            "زوايا داخلية ناعمة تمنع الاحتكاك",
            "مقاومة للمواد الكيميائية والتآكل",
            "سهولة وسرعة في التركيب واللحام"
        ],
        image: "/images/services/production.png",
    },
    {
        id: 5,
        title: "عبوات بلاستيكية جاهزة",
        category: "ready-plastic",
        shortDesc: "عبوات آمنة للاستخدام المتعدد",
        specs: [
            "منتجات حقن ونفخ بمواصفات قياسية",
            "مواد خام (Food Grade) آمنة صحياً",
            "عزل تام ومنع تسريب السوائل",
            "متوفرة بسعات وتصاميم مختلفة"
        ],
        image: "/images/services/mold.png",
    }
];

export default function ProductsCatalog() {
    const [activeCategory, setActiveCategory] = useState('all');
    
    const filteredProducts = activeCategory === 'all' 
        ? products 
        : products.filter(p => p.category === activeCategory);

    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const handleCategoryChange = (catId) => {
        setActiveCategory(catId);
        const newFiltered = catId === 'all' ? products : products.filter(p => p.category === catId);
        if (newFiltered.length > 0) {
            setSelectedProduct(newFiltered[0]);
        }
    };

    const getWhatsAppUrl = (productName) => {
        const text = `مرحباً، أود الاستفسار عن المواصفات والأسعار للمنتج: ${productName}`;
        return `https://wa.me/963900000000?text=${text}`;
    };

    return (
        <section className={styles.catalogSection}>
            <div className={styles.container}>
                <SectionTitle 
                    badge="الكتالوج الهندسي" 
                    title="المنتجات والحلول الصناعية التفصيلية" 
                />

                <div className={styles.filtersWrapper}>
                    {categories.map(cat => (
                        <button 
                            key={cat.id}
                            className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                            onClick={() => handleCategoryChange(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className={styles.splitLayout}>
                    <div className={styles.listSide}>
                        {filteredProducts.map(product => (
                            <button 
                                key={product.id} 
                                className={`${styles.listItem} ${selectedProduct?.id === product.id ? styles.activeItem : ''}`}
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className={styles.listImageWrapper}>
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className={styles.listText}>
                                    <h4>{product.title}</h4>
                                    <p>{product.shortDesc}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className={styles.detailSide}>
                        {selectedProduct && (
                            <div className={styles.detailCard}>
                                <div className={styles.detailImageWrapper}>
                                    <img src={selectedProduct.image} alt={selectedProduct.title} className={styles.detailImage} />
                                </div>
                                <div className={styles.detailContent}>
                                    <h2 className={styles.detailTitle}>{selectedProduct.title}</h2>
                                    
                                    <div className={styles.specsBox}>
                                        <h3>المواصفات الفنية:</h3>
                                        <ul>
                                            {selectedProduct.specs.map((spec, i) => (
                                                <li key={i}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    {spec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a 
                                        href={getWhatsAppUrl(selectedProduct.title)} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className={styles.whatsappBtn}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        طلب المنتج عبر واتساب
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
