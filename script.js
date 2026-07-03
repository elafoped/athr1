/* ============================================================
   الملف: script.js
   الوظيفة: التحكم بالترجمة، تأثيرات الظهور، عدادات الأرقام
   ============================================================ */

// -------------------------------------------------------------
// 1. بيانات الترجمة (Translation Data)
// -------------------------------------------------------------
const translations = {
    ar: arTranslations,
    en: enTranslations
};

// -------------------------------------------------------------
// 2. حالة اللغة والتحكم بالترجمة
// -------------------------------------------------------------
let isArabic = true;

function updateLanguage() {
    try {
        const t = isArabic ? translations.ar : translations.en;

        // تحديث النصوص الأساسية
        const textElements = {
            brandTitle: 'brandTitle',
            brandSub: 'brandSub',
            navAbout: 'navAbout',
            navApproach: 'navApproach',
            navProjects: 'navProjects',
            navCfw: 'navCfw',
            navResults: 'navResults',
            navGallery: 'navGallery',
            translateText: 'translateText',
            pdfText: 'pdfText',
            finlandBadge: 'finlandBadge',
            heroTitle: 'heroTitle',
            heroDesc: 'heroDesc',
            sideTitle1: 'sideTitle1',
            sideDesc1: 'sideDesc1',
            pill1: 'pill1',
            pill2: 'pill2',
            pill3: 'pill3',
            pill4: 'pill4',
            centerName: 'centerName',
            centerDesc: 'centerDesc',
            aboutTitle: 'aboutTitle',
            aboutSub: 'aboutSub',
            about1Title: 'about1Title',
            about1Desc: 'about1Desc',
            about2Title: 'about2Title',
            about2Desc: 'about2Desc',
            about3Title: 'about3Title',
            about3Desc: 'about3Desc',
            about4Title: 'about4Title',
            about4Desc: 'about4Desc',
            geoTitle: 'geoTitle',
            geoSub: 'geoSub',
            approachTitle: 'approachTitle',
            approachSub: 'approachSub',
            livelihoodTitle: 'livelihoodTitle',
            livelihoodSub: 'livelihoodSub',
            trainTitle: 'trainTitle',
            trainDesc: 'trainDesc',
            grantTitle: 'grantTitle',
            grantDesc: 'grantDesc',
            followTitle: 'followTitle',
            followDesc: 'followDesc',
            sustainTitle: 'sustainTitle',
            sustainDesc: 'sustainDesc',
            projectTypesTitle: 'projectTypesTitle',
            selectPrinciple: 'selectPrinciple',
            selectDesc: 'selectDesc',
            techSupport: 'techSupport',
            techDesc: 'techDesc',
            gov1: 'gov1',
            gov2: 'gov2',
            gov3: 'gov3',
            gov4: 'gov4',
            gov5: 'gov5',
            projType1: 'projType1',
            projType2: 'projType2',
            projType3: 'projType3',
            projType4: 'projType4',
            projType5: 'projType5',
            projType6: 'projType6',
            projType7: 'projType7',
            projType8: 'projType8',
            card1Title: 'card1Title',
            card1Desc: 'card1Desc',
            card1Chip: 'card1Chip',
            card2Title: 'card2Title',
            card2Desc: 'card2Desc',
            card2Chip: 'card2Chip',
            card3Title: 'card3Title',
            card3Desc: 'card3Desc',
            card3Chip: 'card3Chip',
            card4Title: 'card4Title',
            card4Desc: 'card4Desc',
            card4Chip: 'card4Chip',
            cfwTitle: 'cfwTitle',
            cfwSub: 'cfwSub',
            cfwCount: 'cfwCount',
            cfwCountDesc: 'cfwCountDesc',
            cfwIncentives: 'cfwIncentives',
            cfwIncentivesDesc: 'cfwIncentivesDesc',
            cfwBudget: 'cfwBudget',
            cfwBudgetDesc: 'cfwBudgetDesc',
            cfwTotal: 'cfwTotal',
            cfwTotalDesc: 'cfwTotalDesc',
            cfwWorksTitle: 'cfwWorksTitle',
            timelineMainTitle: 'timelineMainTitle',
            timelineMainSub: 'timelineMainSub',
            meta1Val: 'meta1Val',
            meta2Val: 'meta2Val',
            meta3Val: 'meta3Val',
            meta4Val: 'meta4Val',
            time1Title: 'time1Title',
            time1Desc: 'time1Desc',
            time2Title: 'time2Title',
            time2Desc: 'time2Desc',
            time3Title: 'time3Title',
            time3Desc: 'time3Desc',
            time4Title: 'time4Title',
            time4Desc: 'time4Desc',
            time5Title: 'time5Title',
            time5Desc: 'time5Desc',
            time6Title: 'time6Title',
            time6Desc: 'time6Desc',
            impactTitle: 'impactTitle',
            impactSub: 'impactSub',
            impactEcon1: 'impactEcon1',
            impactEcon2: 'impactEcon2',
            impactEcon3: 'impactEcon3',
            impactSocial1: 'impactSocial1',
            impactSocial2: 'impactSocial2',
            impactSocial3: 'impactSocial3',
            impactInst1: 'impactInst1',
            impactInst2: 'impactInst2',
            impactInst3: 'impactInst3',
            financeTitle: 'financeTitle',
            financeSub: 'financeSub',
            galleryTitle: 'galleryTitle',
            gallerySub: 'gallerySub',
            partnersTitle: 'partnersTitle',
            partnersSub: 'partnersSub',
            closingTitle: 'closingTitle',
            closingDesc: 'closingDesc',
            closingPeriod: 'closingPeriod',
            closingBenef: 'closingBenef',
            closingFamilies: 'closingFamilies',
            closingSustainability: 'closingSustainability',
            footerText1: 'footerText1',
            footerText2: 'footerText2',
            footerText3: 'footerText3',
            meta1Label: 'meta1Label',
            meta2Label: 'meta2Label',
            meta3Label: 'meta3Label',
            meta4Label: 'meta4Label'
        };

        // تحديث النصوص البسيطة
        for (const [key, id] of Object.entries(textElements)) {
            const el = document.getElementById(id);
            if (el && t[key] !== undefined) {
                el.innerText = t[key];
            }
        }

        // تحديث النصوص مع HTML
        const heroBadge1 = document.getElementById('heroBadge1');
        if (heroBadge1) heroBadge1.innerHTML = `<i class="fa-solid fa-star"></i> ${t.heroBadge1}`;
        
        const heroBtn1 = document.getElementById('heroBtn1');
        if (heroBtn1) heroBtn1.innerHTML = `<i class="fa-solid fa-arrow-down"></i> ${t.heroBtn1}`;
        
        const heroBtn2 = document.getElementById('heroBtn2');
        if (heroBtn2) heroBtn2.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${t.heroBtn2}`;
        
        const impactEconTitle = document.getElementById('impactEconTitle');
        if (impactEconTitle) impactEconTitle.innerHTML = `<i class="fa-solid fa-coins"></i> ${t.impactEconTitle}`;
        
        const impactSocialTitle = document.getElementById('impactSocialTitle');
        if (impactSocialTitle) impactSocialTitle.innerHTML = `<i class="fa-solid fa-people-group"></i> ${t.impactSocialTitle}`;
        
        const impactInstTitle = document.getElementById('impactInstTitle');
        if (impactInstTitle) impactInstTitle.innerHTML = `<i class="fa-solid fa-building-circle-check"></i> ${t.impactInstTitle}`;

        // تحديث الإحصائيات
        for (let i = 1; i <= 6; i++) {
            const labelEl = document.getElementById(`stat${i}Label`);
            const noteEl = document.getElementById(`stat${i}Note`);
            if (labelEl && t[`stat${i}Label`]) labelEl.innerText = t[`stat${i}Label`];
            if (noteEl && t[`stat${i}Note`]) noteEl.innerText = t[`stat${i}Note`];
        }

        // تحديث خطوات المنهجية
        for (let i = 1; i <= 4; i++) {
            const titleEl = document.getElementById(`step${i}Title`);
            const descEl = document.getElementById(`step${i}Desc`);
            const tagEl = document.getElementById(`step${i}Tag`);
            if (titleEl && t[`step${i}Title`]) titleEl.innerText = t[`step${i}Title`];
            if (descEl && t[`step${i}Desc`]) descEl.innerText = t[`step${i}Desc`];
            if (tagEl && t[`step${i}Tag`]) tagEl.innerText = t[`step${i}Tag`];
        }

        // تحديث أعمال CfW
        for (let i = 1; i <= 5; i++) {
            const titleEl = document.getElementById(`work${i}Title`);
            const descEl = document.getElementById(`work${i}Desc`);
            if (titleEl && t[`work${i}Title`]) titleEl.innerText = t[`work${i}Title`];
            if (descEl && t[`work${i}Desc`]) descEl.innerText = t[`work${i}Desc`];
        }

        // تحديث المؤشرات المالية
        for (let i = 1; i <= 4; i++) {
            const labelEl = document.getElementById(`fin${i}Label`);
            const descEl = document.getElementById(`fin${i}Desc`);
            if (labelEl && t[`fin${i}Label`]) labelEl.innerText = t[`fin${i}Label`];
            if (descEl && t[`fin${i}Desc`]) descEl.innerText = t[`fin${i}Desc`];
        }

        // تحديث معرض الصور
        for (let i = 1; i <= 4; i++) {
            const capEl = document.getElementById(`galleryCap${i}`);
            if (capEl && t[`galleryCap${i}`]) capEl.innerText = t[`galleryCap${i}`];
        }

        // تحديث تواريخ الجدول الزمني
        const timeDates = document.querySelectorAll('.timeline-date');
        if (timeDates.length >= 6) {
            if (t.time1Date) timeDates[0].innerText = t.time1Date;
            if (t.time2Date) timeDates[1].innerText = t.time2Date;
            if (t.time3Date) timeDates[2].innerText = t.time3Date;
            if (t.time4Date) timeDates[3].innerText = t.time4Date;
            if (t.time5Date) timeDates[4].innerText = t.time5Date;
            if (t.time6Date) timeDates[5].innerText = t.time6Date;
        }

        // تحديث قيم الإحصائيات النهائية
        const closingBoxes = document.querySelectorAll('.closing-box strong');
        if (closingBoxes.length >= 4) {
            if (t.closingPeriodVal) closingBoxes[0].innerText = t.closingPeriodVal;
            if (t.closingBenefVal) closingBoxes[1].innerText = t.closingBenefVal;
            if (t.closingFamiliesVal) closingBoxes[2].innerText = t.closingFamiliesVal;
            if (t.closingSustainabilityVal) closingBoxes[3].innerText = t.closingSustainabilityVal;
        }

        // تحديث قيم المؤشرات المالية
        const financeValues = document.querySelectorAll('.finance-card .value');
        if (financeValues.length >= 4) {
            if (t.fin1Value) financeValues[0].innerText = t.fin1Value;
            if (t.fin2Value) financeValues[1].innerText = t.fin2Value;
            if (t.fin3Value) financeValues[2].innerText = t.fin3Value;
            if (t.fin4Value) financeValues[3].innerText = t.fin4Value;
        }

        // تحديث اتجاه الصفحة
        document.documentElement.dir = isArabic ? "rtl" : "ltr";
        document.documentElement.lang = isArabic ? "ar" : "en";

        console.log('✅ تم تحديث اللغة بنجاح إلى:', isArabic ? 'العربية' : 'English');
        
    } catch (error) {
        console.error('❌ خطأ في تحديث اللغة:', error);
    }
}

// -------------------------------------------------------------
// 3. زر الترجمة
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translateBtn');
    if (translateBtn) {
        translateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            isArabic = !isArabic;
            updateLanguage();
        });
    }

    // -------------------------------------------------------------
    // 4. تصدير PDF باستخدام window.print()
    // -------------------------------------------------------------
    const pdfBtn = document.getElementById('pdfExportBtn');
    if (pdfBtn) {
        pdfBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // تغيير نص الزر
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ' + (isArabic ? 'جاري التجهيز...' : 'Preparing...');
            this.disabled = true;

            try {
                // استخدام window.print() لتصدير الصفحة
                // سيتم حفظها كـ PDF عبر خيار "حفظ باسم PDF" في متصفح Chrome/Edge
                window.print();
                
                // إعادة الزر إلى حالته الأصلية بعد الطباعة
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 1000);
            } catch (error) {
                console.error('❌ خطأ في التصدير:', error);
                this.innerHTML = originalText;
                this.disabled = false;
                alert(isArabic ? 'حدث خطأ أثناء التصدير. حاول مرة أخرى.' : 'An error occurred. Please try again.');
            }
        });
    }

    // -------------------------------------------------------------
    // 5. تأثير الظهور المتدرج
    // -------------------------------------------------------------
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length > 0) {
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    revealObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(el => revealObs.observe(el));
    }

    // -------------------------------------------------------------
    // 6. عدادات الأرقام
    // -------------------------------------------------------------
    function formatNumber(n) {
        return new Intl.NumberFormat('en-US').format(n);
    }

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        
        const duration = 1500;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.floor(target * (0.08 + (progress * 0.92)));
            el.textContent = formatNumber(Math.min(value, target));
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = formatNumber(target);
            }
        }
        requestAnimationFrame(tick);
    }

    const counterEls = document.querySelectorAll('.counter');
    if (counterEls.length > 0) {
        const counterObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        counterEls.forEach(el => counterObs.observe(el));
    }

    // -------------------------------------------------------------
    // 7. الخريطة
    // -------------------------------------------------------------
    const mapContainer = document.getElementById('projectMap');
    if (mapContainer && typeof L !== 'undefined') {
        try {
            const map = L.map('projectMap').setView([33.1327, 36.1838], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap'
            }).addTo(map);
            L.marker([33.1786556, 35.8988626])
                .addTo(map)
                .bindPopup('خان أرنبة - القنيطرة - سوريا')
                .openPopup();
            console.log('✅ تم تحميل الخريطة بنجاح');
        } catch (error) {
            console.error('❌ خطأ في تحميل الخريطة:', error);
        }
    }

    // -------------------------------------------------------------
    // 8. تهيئة اللغة
    // -------------------------------------------------------------
    if (typeof arTranslations !== 'undefined' && typeof enTranslations !== 'undefined') {
        updateLanguage();
        console.log('✅ تم تهيئة الصفحة بنجاح');
    } else {
        console.error('❌ ملفات الترجمة غير محملة بشكل صحيح');
    }
});