export const nichePresets = {
  health: {
    label: 'Health & Wellness',
    accent: '#37f29d',
    badge: 'تحويلات + ثقة + نتيجة',
    tones: ['احترافي', 'صحي', 'مطمئن'],
    headlineWords: ['نتيجة أسرع', 'راحة أكثر', 'بداية أوضح'],
    valueBullets: ['أسلوب بسيط وواضح', 'مناسب للجمهور العام', 'يركز على النتيجة والثقة'],
    faqs: [
      { q: 'هل هذا مناسب للمبتدئين؟', a: 'نعم، لأنه يقدم الفكرة بشكل واضح وبعيد عن التعقيد.' },
      { q: 'ما الذي يميز العرض؟', a: 'التركيز على النتيجة مع لغة مقنعة وثقة أعلى.' }
    ]
  },
  finance: {
    label: 'Finance & Insurance',
    accent: '#7c8cff',
    badge: 'وضوح + مصداقية + CTA مباشر',
    tones: ['رسمي', 'مقنع', 'موثوق'],
    headlineWords: ['عرض أوضح', 'قرار أسرع', 'رسالة أقوى'],
    valueBullets: ['صياغة موثوقة', 'مناسبة لحملات الأداء', 'تركز على الثقة واتخاذ القرار'],
    faqs: [
      { q: 'هل هذه الصياغة مناسبة للإعلانات؟', a: 'نعم، لأنها مبنية على وضوح الفائدة وتقليل التردد.' },
      { q: 'هل تركز الصفحة على جمع العملاء؟', a: 'تم ترتيبها لتدعم التحويل واتخاذ إجراء مباشر.' }
    ]
  },
  ecommerce: {
    label: 'Ecommerce & Offers',
    accent: '#ff8f4d',
    badge: 'بيع مباشر + شد انتباه + سرعة',
    tones: ['بيعي', 'سريع', 'ملفت'],
    headlineWords: ['عرض أقوى', 'قيمة أعلى', 'تجربة أسرع'],
    valueBullets: ['لغة أقرب للبيع', 'مناسبة لمنتجات الـ performance', 'تخلي الزائر يتحرك أسرع'],
    faqs: [
      { q: 'هل هذا مناسب للمنتجات؟', a: 'نعم، خصوصًا المنتجات التي تحتاج عرض مباشر وCTA واضح.' },
      { q: 'هل يمكن استخدامه مع إعلانات السوشال؟', a: 'نعم، لأنه يركز على النتيجة والانتباه السريع.' }
    ]
  },
  services: {
    label: 'Services & Lead Gen',
    accent: '#00d1ff',
    badge: 'ليدز + توضيح الخدمة + إقناع',
    tones: ['عملي', 'مرتب', 'مباشر'],
    headlineWords: ['انطلاقة أوضح', 'خدمة أقوى', 'تحويل أفضل'],
    valueBullets: ['ترتيب مقنع للخدمة', 'مناسب لجمع العملاء المحتملين', 'يعطي احترافية أعلى للعرض'],
    faqs: [
      { q: 'هل هذه الصفحة مناسبة للخدمات؟', a: 'نعم، لأنها تشرح القيمة بشكل مرتب وتدفع الزائر للتواصل.' },
      { q: 'هل تفيد في صفحات الواتساب؟', a: 'نعم، يمكن توجيه CTA لأي قناة تواصل بسهولة.' }
    ]
  }
};

export function detectPreset(idea = '') {
  const text = idea.toLowerCase();
  if (/(تامين|insurance|loan|finance|bank|بطاقة|قرض)/i.test(text)) return nichePresets.finance;
  if (/(تخسيس|عيادة|جلدية|اسنان|صحي|wellness|health|medical)/i.test(text)) return nichePresets.health;
  if (/(متجر|منتج|دروب|ecom|offer|عرض|store|shop)/i.test(text)) return nichePresets.ecommerce;
  return nichePresets.services;
}
