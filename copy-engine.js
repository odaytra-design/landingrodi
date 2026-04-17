import { pick } from '../utils/helpers.js';
import { detectPreset } from '../data/presets.js';

export function generateCopy(idea = '') {
  const preset = detectPreset(idea);

  const headlines = [
    `حوّل ${idea} إلى ${pick(preset.headlineWords)} من أول زيارة`,
    `${idea} بطريقة تبين قيمته بشكل أقوى وأوضح`,
    `صفحة أقوى لـ ${idea} تخلي القرار أسهل وأسرع`,
    `خلي ${idea} يظهر كعرض محترم جاهز للتحويل`
  ];

  const subheadlines = [
    `هذه النسخة مصممة لتعرض ${idea} بأسلوب ${pick(preset.tones)} مع تركيز على النتيجة والثقة ووضوح الإجراء المطلوب.`,
    `بدل النصوص العامة، هذه الصياغة ترتب ${idea} بشكل يخدم الإعلان والصفحة والقرار النهائي للزائر.`,
    `تم تجهيز العرض ليظهر ${idea} كخدمة أو منتج أو عرض يستحق الاهتمام، مع CTA أوضح وتجربة أفضل.`
  ];

  const benefits = [
    `صياغة أقوى لفكرة ${idea}`,
    ...preset.valueBullets
  ].sort(() => 0.5 - Math.random()).slice(0, 4);

  const socialProof = [
    `مناسب لتجارب الإعلانات السريعة، صفحات الواتساب، وحملات جمع العملاء المحتملين.`,
    `يعطي إحساس احترافي أكثر من النصوص العامة أو الصفحات المرتجلة.`,
    `يبني تسلسل منطقي من الانتباه إلى الثقة ثم إلى الإجراء.`
  ];

  const ctas = ['ابدأ الآن', 'اطلب الآن', 'احصل على العرض', 'تواصل الآن'];

  return {
    presetLabel: preset.label,
    accent: preset.accent,
    badge: preset.badge,
    headline: pick(headlines),
    subheadline: pick(subheadlines),
    benefits,
    proof: pick(socialProof),
    cta: pick(ctas),
    faq: preset.faqs
  };
}
