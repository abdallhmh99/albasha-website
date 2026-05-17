import { useState, useEffect } from 'react';
import styles from './ProductsCatalog.module.css';
import SectionTitle from '../ui/SectionTitle';

const mainCategories = [
    { id: 'ppr', label: 'منتجات PPR' },
    { id: 'other', label: 'منتجات بلاستيكية أخرى' }
];

const subCategories = {
    ppr: [
        { id: 'all-ppr', label: 'جميع منتجات PPR' },
        { id: 'pipes', label: 'أنابيب PPR' },
        { id: 'fittings', label: 'وصلات PPR' }
    ],
    other: [
        { id: 'all-other', label: 'جميع المنتجات البلاستيكية' },
        { id: 'cleaning', label: 'عبوات المنظفات' },
        { id: 'cosmetics', label: 'عبوات التجميل' },
        { id: 'medical_food', label: 'عبوات طبية وغذائية' },
        { id: 'industrial', label: 'أدوات منزلية وصناعية' }
    ]
};

const products = [
    /* ──────────── أنابيب PPR ──────────── */
    {
        id: 1,
        title: "أنبوب PPR مياه باردة (PN10)",
        mainCategory: "ppr",
        category: "pipes",
        shortDesc: "أنابيب خفيفة الوزن مخصصة لشبكات المياه الباردة",
        specs: [
            "ضغط تشغيل اسمي: 10 بار",
            "متوفر بأقطار من 20mm إلى 110mm",
            "مادة البولي بروبيلين العشوائي النقية 100%",
            "عمر افتراضي يتجاوز 50 عاماً",
            "خط أزرق طولي مميز للمياه الباردة"
        ],
        image: "/images/pipes/green_ppr_pn10.png",
    },
    {
        id: 2,
        title: "أنبوب PPR مياه ساخنة وباردة (PN16)",
        mainCategory: "ppr",
        category: "pipes",
        shortDesc: "للاستخدام المزدوج بضغط معتدل",
        specs: [
            "ضغط تشغيل اسمي: 16 بار",
            "يتحمل درجات حرارة حتى 60°C",
            "متوفر بأقطار من 20mm إلى 110mm",
            "مقاوم للتآكل والترسبات الكلسية",
            "مطابق لمواصفات ISO 15874"
        ],
        image: "/images/pipes/green_ppr_pn16.png",
    },
    {
        id: 3,
        title: "أنبوب PPR مياه ساخنة (PN20)",
        mainCategory: "ppr",
        category: "pipes",
        shortDesc: "الأكثر شيوعاً للشبكات المنزلية",
        specs: [
            "ضغط تشغيل اسمي: 20 بار",
            "يتحمل درجات حرارة حتى 70°C",
            "خط أحمر طولي مميز للمياه الساخنة",
            "عزل حراري ممتاز يحافظ على حرارة المياه",
            "سماكة جدار عالية لضمان الأمان"
        ],
        image: "/images/pipes/green_ppr_pn20.png",
    },
    {
        id: 4,
        title: "أنبوب PPR ضغط عالي (PN25)",
        mainCategory: "ppr",
        category: "pipes",
        shortDesc: "مخصص للتدفئة المركزية والضغوطات العالية",
        specs: [
            "ضغط تشغيل اسمي: 25 بار",
            "يتحمل درجات حرارة حتى 95°C",
            "مقاومة فائقة للتشققات والتمدد الحراري",
            "مثالي لأنظمة التدفئة المركزية",
            "متوفر بأقطار من 20mm إلى 75mm"
        ],
        image: "/images/pipes/green_ppr_pn25.png",
    },

    /* ──────────── وصلات PPR ──────────── */
    {
        id: 5,
        title: "كوع 90° (Elbow)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "لتغيير اتجاه الأنابيب بزاوية قائمة",
        specs: [
            "لحام حراري محكم يمنع التسريب نهائياً",
            "سماكة جدار متوافقة تماماً مع الأنابيب",
            "انسيابية داخلية عالية تمنع ترسب الأملاح",
            "متوفر بجميع الأقطار (20mm - 63mm)"
        ],
        image: "/images/fittings/fitting_elbow_90.png",
    },
    {
        id: 6,
        title: "كوع 45° (Elbow)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "لتغيير اتجاه بزاوية مائلة انسيابية",
        specs: [
            "زاوية 45° لمسارات أكثر انسيابية",
            "تقليل فقدان الضغط في الشبكة",
            "سطح داخلي أملس يمنع الاحتكاك",
            "متوفر بجميع الأقطار القياسية"
        ],
        image: "/images/fittings/fitting_elbow_45.png",
    },
    {
        id: 7,
        title: "وصلة مباشرة (Coupling)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "لربط أنبوبين من نفس القطر في خط مستقيم",
        specs: [
            "اتصال محكم وسهل التركيب",
            "مقاومة عالية للضغط الداخلي",
            "توزيع متساوٍ للإجهاد على جسم الوصلة",
            "متوفرة بأقطار من 20mm إلى 110mm"
        ],
        image: "/images/fittings/fitting_coupling.png",
    },
    {
        id: 8,
        title: "تي متساوي (Equal Tee)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "لتفريغ خط فرعي بنفس القطر",
        specs: [
            "تقسيم دقيق مع الحفاظ على ضغط المياه",
            "زوايا داخلية ناعمة تمنع الاحتكاك",
            "مقاومة للمواد الكيميائية والتآكل",
            "سهولة وسرعة في التركيب واللحام"
        ],
        image: "/images/fittings/fitting_equal_tee.png",
    },
    {
        id: 9,
        title: "تي مخفّض (Reducing Tee)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "لتفريغ خط فرعي بقطر أصغر",
        specs: [
            "انتقال سلس بين الأقطار المختلفة",
            "تصميم هيدروليكي محسّن لتدفق مثالي",
            "متوفر بتشكيلات أقطار متعددة",
            "لحام حراري يضمن عدم التسريب"
        ],
        image: "/images/fittings/fitting_reducing_tee.png",
    },
    {
        id: 10,
        title: "مخفّض (Reducer)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "للانتقال بين قطرين مختلفين",
        specs: [
            "انتقال تدريجي يمنع اضطراب التدفق",
            "يحافظ على ضغط المياه أثناء التخفيض",
            "متوفر بكافة تركيبات الأقطار",
            "مقاومة عالية للإجهاد الحراري"
        ],
        image: "/images/fittings/fitting_reducer.png",
    },
    {
        id: 11,
        title: "سدادة نهاية (End Cap)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "لإغلاق نهاية الأنبوب بإحكام",
        specs: [
            "إغلاق محكم يمنع التسريب 100%",
            "تُستخدم لاختبار الضغط وإغلاق الخطوط",
            "مقاومة للضغط العالي المستمر",
            "سهلة اللحام والتركيب"
        ],
        image: "/images/fittings/fitting_end_cap.png",
    },
    {
        id: 12,
        title: "يونيون (Union)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "وصلة قابلة للفك والتركيب لسهولة الصيانة",
        specs: [
            "تصميم قابل للفك دون قطع الأنابيب",
            "حلقة ربط معدنية مقاومة للصدأ",
            "مثالية لنقاط الصيانة والمحابس",
            "إحكام تام مع حشوة مطاطية داخلية"
        ],
        image: "/images/fittings/fitting_union.png",
    },
    {
        id: 13,
        title: "محبس كروي PPR (Ball Valve)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "للتحكم بتدفق المياه وإيقافها بدقة",
        specs: [
            "فتح وإغلاق كامل بربع دورة فقط",
            "مقبض أحمر مريح ومتين",
            "كرة معدنية داخلية مقاومة للتآكل",
            "لحام حراري مباشر مع أنابيب PPR"
        ],
        image: "/images/fittings/fitting_ball_valve.png",
    },
    {
        id: 14,
        title: "وصلة انتقالية ذكر (Male Adapter)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "لربط PPR بأنابيب أو قطع معدنية (سن خارجي)",
        specs: [
            "سن معدني نحاسي مطلي بالنيكل",
            "مقاوم للتآكل والصدأ",
            "متوفر بأقطار 20mm إلى 63mm",
            "مثالي للربط مع الشبكات المعدنية القديمة"
        ],
        image: "/images/fittings/fitting_male_adapter.png",
    },
    {
        id: 15,
        title: "وصلة انتقالية أنثى (Female Adapter)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "لربط PPR بقطع معدنية (سن داخلي)",
        specs: [
            "سن داخلي نحاسي عالي الجودة",
            "مخصصة لربط الخلاطات والمحابس المعدنية",
            "إحكام تام يمنع أي تسريب",
            "متوفرة بجميع الأقطار القياسية"
        ],
        image: "/images/fittings/fitting_female_adapter.png",
    },
    {
        id: 16,
        title: "صليب (Cross Fitting)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "وصلة رباعية الاتجاهات للشبكات المعقدة",
        specs: [
            "توزيع متساوٍ للتدفق في 4 اتجاهات",
            "مقاومة عالية للضغط من جميع الجهات",
            "تستخدم في الشبكات الصناعية والبلدية",
            "متوفرة بالأقطار القياسية"
        ],
        image: "/images/fittings/fitting_cross.png",
    },
    {
        id: 17,
        title: "مشبك تثبيت (Pipe Clip)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "لتثبيت الأنابيب على الجدران والأسقف",
        specs: [
            "تثبيت آمن ومحكم للأنابيب",
            "يسمح بالتمدد الحراري الطبيعي",
            "تركيب سهل بمسمار واحد",
            "متوفر لجميع أقطار الأنابيب"
        ],
        image: "/images/fittings/fitting_pipe_clip.png",
    },
    {
        id: 18,
        title: "فلانش (Flange Adapter)",
        mainCategory: "ppr",
        category: "fittings",
        shortDesc: "للربط مع أنظمة الأنابيب المعدنية الكبيرة",
        specs: [
            "ربط فلانشي قياسي متوافق مع DIN/ANSI",
            "مخصص للأقطار الكبيرة (50mm وأكثر)",
            "مقاومة عالية للضغط والحرارة",
            "مثالي للمشاريع الصناعية والمحطات"
        ],
        image: "/images/fittings/fitting_flange_adapter.png",
    },

    /* ──────────── عبوات المنظفات ──────────── */
    {
        id: 19,
        title: "زجاجة بخاخ (Trigger Spray)",
        mainCategory: "other",
        category: "cleaning",
        shortDesc: "عبوة بلاستيكية مع رأس بخاخ ذراعي",
        specs: [
            "مادة HDPE أو PET مقاومة للمواد الكيميائية",
            "سعات: 500 مل — 750 مل — 1 لتر",
            "فوهة قابلة للتعديل (رذاذ دقيق / تدفق مركّز)",
            "فتحة عنق 28/410 (القياس العالمي)"
        ],
        image: "/images/products/trigger_spray_bottle.png",
    },
    {
        id: 20,
        title: "زجاجة صابون سائل مع مضخة",
        mainCategory: "other",
        category: "cleaning",
        shortDesc: "زجاجة أنيقة مع رأس مضخة ضغط",
        specs: [
            "مادة PET شفاف عالي الوضوح",
            "سعات: 250 مل — 500 مل — 1 لتر",
            "مضخة لوشن بمعدل 2cc لكل ضغطة مع قفل",
            "فتحة عنق 24/410 أو 28/410"
        ],
        image: "/images/products/lotion_pump_bottle.png",
    },
    {
        id: 21,
        title: "عبوة كلور / منظف قوي",
        mainCategory: "other",
        category: "cleaning",
        shortDesc: "عبوة متينة مقاومة للمواد الكيميائية القوية",
        specs: [
            "مادة HDPE حصرياً لمقاومة التآكل",
            "سعات: 1 لتر — 2 لتر — 4 لتر (غالون)",
            "مقبض يد مدمج للسعات الكبيرة",
            "غطاء لولبي مع حشوة عازلة مقاومة للكلور"
        ],
        image: "/images/products/bleach_bottle.png",
    },
    {
        id: 22,
        title: "أغطية فليب توب (Flip-Top Cap)",
        mainCategory: "other",
        category: "cleaning",
        shortDesc: "غطاء يُفتح ويُغلق بيد واحدة عبر مفصل بلاستيكي",
        specs: [
            "مادة PP (بولي بروبيلين) عالية المتانة",
            "أقطار: 20 مم — 24 مم — 28 مم",
            "ألوان متعددة حسب الطلب",
            "مثالي لعبوات الشامبو والصابون والصلصات"
        ],
        image: "/images/products/flip_top_caps.png",
    },
    {
        id: 23,
        title: "أغطية لولبية (Screw Cap)",
        mainCategory: "other",
        category: "cleaning",
        shortDesc: "أغطية لولبية كلاسيكية بأحجام وألوان متعددة",
        specs: [
            "مادة PP أو PE عالية الجودة",
            "أقطار: 28 مم — 38 مم — 43 مم",
            "حشوة داخلية لمنع التسريب",
            "خاصية مقاومة العبث (Tamper-evident)"
        ],
        image: "/images/products/screw_caps.png",
    },

    /* ──────────── عبوات التجميل ──────────── */
    {
        id: 24,
        title: "زجاجة كريم مع مضخة ذهبية",
        mainCategory: "other",
        category: "cosmetics",
        shortDesc: "زجاجة أنيقة لتوزيع الكريمات واللوشن",
        specs: [
            "مادة PET عالي الشفافية أو PP أبيض لؤلؤي",
            "سعات: 100 مل — 150 مل — 200 مل — 250 مل",
            "مضخة لوشن بلون ذهبي / فضي / أبيض",
            "تصميم اسطواني عصري بكتف مسطّح"
        ],
        image: "/images/products/cosmetic_lotion_bottle.png",
    },
    {
        id: 25,
        title: "علبة كريم دائرية (Cosmetic Jar)",
        mainCategory: "other",
        category: "cosmetics",
        shortDesc: "علبة واسعة الفم لكريمات الوجه والبشرة",
        specs: [
            "مادة PP أبيض مع غطاء أكريليك شفاف",
            "سعات: 15 مل — 30 مل — 50 مل — 100 مل",
            "قرص فاصل داخلي لحماية المحتوى",
            "مثالية لكريم الوجه والمرطّب والمقشّر"
        ],
        image: "/images/products/cosmetic_jar.png",
    },
    {
        id: 26,
        title: "أنابيب تجميلية (Cosmetic Tubes)",
        mainCategory: "other",
        category: "cosmetics",
        shortDesc: "أنبوب مرن قابل للضغط مع غطاء فليب توب",
        specs: [
            "مادة PE متعدد الطبقات أو ABL",
            "سعات: 30 مل — 50 مل — 75 مل — 150 مل",
            "غطاء فليب توب أو لولبي صغير",
            "مثالي لكريم اليدين وواقي الشمس ومعجون الأسنان"
        ],
        image: "/images/products/cosmetic_tubes.png",
    },
    {
        id: 27,
        title: "زجاجة بخاخ عطر / ميست",
        mainCategory: "other",
        category: "cosmetics",
        shortDesc: "زجاجة رفيعة مع بخاخ رذاذ ناعم",
        specs: [
            "مادة PET شفاف عالي النقاء",
            "سعات: 50 مل — 100 مل — 150 مل — 200 مل",
            "بخاخ Fine Mist مع غطاء شفاف أو معدني",
            "مثالية لبخاخ العطر والتونر ومثبّت المكياج"
        ],
        image: "/images/products/spray_mist_bottle.png",
    },
    {
        id: 28,
        title: "عبوات مستحضرات تجميل متكاملة",
        mainCategory: "other",
        category: "cosmetics",
        shortDesc: "مجموعة عبوات متنوعة لخطوط التجميل الكاملة",
        specs: [
            "تصاميم أنيقة بألوان الباستيل العصرية",
            "مضخات ذات لمسة ناعمة (Soft Touch)",
            "سعات متعددة من 250 مل إلى 500 مل",
            "مثالية لخطوط الشامبو واللوشن وغسول الجسم"
        ],
        image: "/images/products/product_cosmetic_bottles.png",
    },

    /* ──────────── عبوات طبية وغذائية ──────────── */
    {
        id: 29,
        title: "عبوات أدوية صيدلانية",
        mainCategory: "other",
        category: "medical_food",
        shortDesc: "عبوات معتمة لحفظ الأدوية والكبسولات",
        specs: [
            "مادة PET/HDPE معتمدة طبياً (Food Grade)",
            "حماية من الأشعة فوق البنفسجية (لون عنبري/كهرماني)",
            "سعات من 50 مل إلى 500 مل",
            "إحكام تام ضد الرطوبة"
        ],
        image: "/images/products/product_pharma_bottles.png",
    },
    {
        id: 30,
        title: "حاويات حفظ الطعام",
        mainCategory: "other",
        category: "medical_food",
        shortDesc: "علب بلاستيكية شفافة لحفظ الأطعمة",
        specs: [
            "مادة PP آمنة للغذاء والمايكرويف (BPA Free)",
            "غطاء محكم الغلق مع قفل سيليكون لمنع التسريب",
            "شفافية عالية لرؤية المحتوى",
            "متوفرة بأحجام وأشكال متعددة"
        ],
        image: "/images/products/product_food_container.png",
    },
    {
        id: 31,
        title: "غطاء آمن للأطفال (Child-Proof Cap)",
        mainCategory: "other",
        category: "medical_food",
        shortDesc: "أغطية حماية للأدوية والمواد الخطرة",
        specs: [
            "آلية ضغط ثم تدوير (Push-and-Turn)",
            "مطابقة لمعايير السلامة العالمية للصيدليات",
            "مادة PP عالية المتانة",
            "مناسبة للعبوات الكيميائية والأدوية"
        ],
        image: "/images/products/product_child_proof_cap.png",
    },

    /* ──────────── أدوات منزلية وصناعية ──────────── */
    {
        id: 32,
        title: "أدوات منزلية بلاستيكية",
        mainCategory: "other",
        category: "industrial",
        shortDesc: "تشكيلة من الأدوات المنزلية البلاستيكية المتينة",
        specs: [
            "مصنوعة من مواد بلاستيكية قابلة لإعادة التدوير",
            "مقاومة للصدمات والكسر",
            "تصاميم عملية تلبي احتياجات المطبخ والمنزل",
            "ألوان ثابتة ولا تتأثر بالحرارة"
        ],
        image: "/images/products/product_household_items.png",
    },
    {
        id: 33,
        title: "صناديق تخزين",
        mainCategory: "other",
        category: "industrial",
        shortDesc: "صناديق بلاستيكية كبيرة للتخزين والتنظيم",
        specs: [
            "مادة PP شديدة التحمل للأوزان",
            "أغطية محكمة مع مشابك جانبية قوية",
            "تصميم قابل للتكديس (Stackable)",
            "سعات كبيرة تصل إلى 50 لتر وأكثر"
        ],
        image: "/images/products/product_storage_box.png",
    },
    {
        id: 34,
        title: "قطع بلاستيكية صناعية متخصصة",
        mainCategory: "other",
        category: "industrial",
        shortDesc: "قطع بلاستيكية تُصنّع بالطلب للمعدات الصناعية",
        specs: [
            "استخدام بوليمرات هندسية (Nylon, ABS, PC)",
            "مقاومة فائقة للاحتكاك والحرارة والمواد الكيميائية",
            "تصنيع دقيق حسب المخططات الهندسية",
            "تطبيقات في السيارات والمصانع والإلكترونيات"
        ],
        image: "/images/products/product_industrial_part.png",
    }
];

export default function ProductsCatalog() {
    const [activeMainCategory, setActiveMainCategory] = useState('ppr');
    const [activeSubCategory, setActiveSubCategory] = useState('all-ppr');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Update sub category and selection when main category changes
    useEffect(() => {
        const defaultSub = activeMainCategory === 'ppr' ? 'all-ppr' : 'all-other';
        setActiveSubCategory(defaultSub);
        
        const filtered = products.filter(p => p.mainCategory === activeMainCategory);
        if (filtered.length > 0) {
            setSelectedProduct(filtered[0]);
        }
    }, [activeMainCategory]);

    const filteredProducts = products.filter(p => {
        if (p.mainCategory !== activeMainCategory) return false;
        if (activeSubCategory === 'all-ppr' || activeSubCategory === 'all-other') return true;
        return p.category === activeSubCategory;
    });

    const handleSubCategoryChange = (catId) => {
        setActiveSubCategory(catId);
        const newFiltered = products.filter(p => {
            if (p.mainCategory !== activeMainCategory) return false;
            if (catId === 'all-ppr' || catId === 'all-other') return true;
            return p.category === catId;
        });
        if (newFiltered.length > 0) {
            setSelectedProduct(newFiltered[0]);
        }
    };

    const getWhatsAppUrl = (productName) => {
        const text = `مرحباً، أود الاستفسار عن المواصفات والأسعار للمنتج: ${productName}`;
        return `https://wa.me/963944515413?text=${encodeURIComponent(text)}`;
    };

    return (
        <section className={styles.catalogSection}>
            <div className={styles.container}>
                <SectionTitle
                    badge="الكتالوج الهندسي"
                    title="المنتجات والحلول الصناعية التفصيلية"
                />

                {/* Main Categories (PPR vs Other Plastics) */}
                <div className={styles.mainFiltersWrapper}>
                    {mainCategories.map(cat => (
                        <button
                            key={cat.id}
                            className={`${styles.mainFilterBtn} ${activeMainCategory === cat.id ? styles.activeMain : ''}`}
                            onClick={() => setActiveMainCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Sub Categories based on Main Category */}
                <div className={styles.subFiltersWrapper}>
                    {subCategories[activeMainCategory].map(cat => (
                        <button
                            key={cat.id}
                            className={`${styles.subFilterBtn} ${activeSubCategory === cat.id ? styles.activeSub : ''}`}
                            onClick={() => handleSubCategoryChange(cat.id)}
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
                                    <img src={product.image} alt={product.title} loading="lazy" />
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
                                    <img src={selectedProduct.image} alt={selectedProduct.title} className={styles.detailImage} loading="lazy" />
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
