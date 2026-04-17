import { escapeHtml } from '../utils/helpers.js';

export function renderLandingPage({ idea = '', copy = {} }) {
  const accent = copy.accent || '#37f29d';
  const headline = escapeHtml(copy.headline || `صفحة هبوط لـ ${idea}`);
  const subheadline = escapeHtml(copy.subheadline || 'وصف تسويقي أقوى');
  const cta = escapeHtml(copy.cta || 'ابدأ الآن');
  const badge = escapeHtml(copy.badge || 'جاهزة للتحويل');
  const proof = escapeHtml(copy.proof || 'صياغة مرتبة وواضحة');
  const benefits = Array.isArray(copy.benefits) ? copy.benefits : [];
  const faq = Array.isArray(copy.faq) ? copy.faq : [];

  const benefitsHtml = benefits.map((item, index) => `
    <div class="lp-benefit-card">
      <div class="lp-benefit-number">0${index + 1}</div>
      <div class="lp-benefit-text">${escapeHtml(item)}</div>
    </div>
  `).join('');

  const faqHtml = faq.map((item) => `
    <div class="lp-faq-item">
      <div class="lp-faq-q">${escapeHtml(item.q)}</div>
      <div class="lp-faq-a">${escapeHtml(item.a)}</div>
    </div>
  `).join('');

  return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${headline}</title>
  <style>
    *{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,sans-serif;background:#0a0d14;color:#fff;line-height:1.7}
    .lp-hero{padding:90px 24px 70px;background:radial-gradient(circle at top right, rgba(124,140,255,.16), transparent 30%), radial-gradient(circle at top left, rgba(55,242,157,.14), transparent 28%), linear-gradient(180deg,#0f1523,#0a0d14)}
    .lp-container{max-width:1120px;margin:0 auto}.lp-badge{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:${accent};margin-bottom:22px;font-size:14px}
    .lp-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:28px;align-items:center}.lp-title{font-size:54px;line-height:1.05;margin:0 0 16px}.lp-sub{font-size:20px;color:#c9d0df;max-width:760px;margin:0 0 28px}
    .lp-actions{display:flex;gap:12px;flex-wrap:wrap}.lp-btn{display:inline-flex;padding:16px 24px;border-radius:14px;background:${accent};color:#091018;text-decoration:none;font-weight:700}.lp-btn-secondary{display:inline-flex;padding:16px 24px;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);color:#fff;text-decoration:none}
    .lp-preview-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:22px;box-shadow:0 25px 80px rgba(0,0,0,.25)}
    .lp-screen{border-radius:18px;background:#fff;color:#111;padding:18px;min-height:360px}.lp-screen-bar{display:flex;gap:8px;margin-bottom:14px}.lp-dot{width:10px;height:10px;border-radius:50%;background:#d0d0d0}
    .lp-mini-hero{background:#f6f8fb;border-radius:18px;padding:18px}.lp-mini-tag{display:inline-block;padding:6px 10px;border-radius:999px;background:#111;color:#fff;font-size:12px;margin-bottom:12px}.lp-mini-title{font-size:26px;line-height:1.2;margin:0 0 10px}.lp-mini-sub{font-size:14px;color:#51606f}.lp-mini-btn{margin-top:14px;display:inline-block;background:#111;color:#fff;padding:12px 18px;border-radius:12px}
    .lp-section{padding:74px 24px}.lp-section-title{text-align:center;font-size:38px;margin:0 0 12px}.lp-section-sub{text-align:center;color:#bdc6d6;max-width:780px;margin:0 auto 34px}
    .lp-benefits{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.lp-benefit-card{padding:24px;border-radius:22px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}.lp-benefit-number{font-size:14px;color:${accent};margin-bottom:10px}.lp-benefit-text{font-size:20px}
    .lp-proof{max-width:860px;margin:0 auto;padding:28px;border-radius:24px;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.09);text-align:center;color:#ecf1fb;font-size:22px}
    .lp-faq-wrap{max-width:900px;margin:0 auto}.lp-faq-item{padding:20px 22px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);margin-bottom:14px}.lp-faq-q{font-size:19px;font-weight:700;margin-bottom:8px}.lp-faq-a{color:#c7d0dd}
    .lp-footer-cta{text-align:center;padding:10px 24px 90px}.lp-footer-cta h2{font-size:42px;margin:0 0 14px}.lp-footer-cta p{max-width:760px;margin:0 auto 24px;color:#c6cfe0;font-size:20px}
    @media(max-width:920px){.lp-grid{grid-template-columns:1fr}.lp-title{font-size:40px}.lp-benefits{grid-template-columns:1fr}.lp-section-title{font-size:30px}.lp-footer-cta h2{font-size:32px}}
  </style>
</head>
<body>
  <section class="lp-hero">
    <div class="lp-container lp-grid">
      <div>
        <div class="lp-badge">${badge}</div>
        <h1 class="lp-title">${headline}</h1>
        <p class="lp-sub">${subheadline}</p>
        <div class="lp-actions">
          <a href="#cta" class="lp-btn">${cta}</a>
          <a href="#benefits" class="lp-btn-secondary">استكشف الصفحة</a>
        </div>
      </div>
      <div class="lp-preview-card">
        <div class="lp-screen">
          <div class="lp-screen-bar"><span class="lp-dot"></span><span class="lp-dot"></span><span class="lp-dot"></span></div>
          <div class="lp-mini-hero">
            <div class="lp-mini-tag">Landing Preview</div>
            <div class="lp-mini-title">${headline}</div>
            <div class="lp-mini-sub">${subheadline}</div>
            <div class="lp-mini-btn">${cta}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="lp-section" id="benefits">
    <div class="lp-container">
      <h2 class="lp-section-title">ليش هذه الصفحة أقوى؟</h2>
      <p class="lp-section-sub">تم ترتيب النصوص والبلوكات لتقود الزائر من الانتباه إلى الفهم ثم إلى الإجراء بشكل أوضح.</p>
      <div class="lp-benefits">${benefitsHtml}</div>
    </div>
  </section>

  <section class="lp-section">
    <div class="lp-container">
      <h2 class="lp-section-title">رسالة مقنعة أكثر</h2>
      <div class="lp-proof">${proof}</div>
    </div>
  </section>

  <section class="lp-section">
    <div class="lp-container">
      <h2 class="lp-section-title">الأسئلة الشائعة</h2>
      <p class="lp-section-sub">حتى النسخة التجريبية لازم تجاوب على الاعتراضات الأساسية داخل الصفحة.</p>
      <div class="lp-faq-wrap">${faqHtml}</div>
    </div>
  </section>

  <section class="lp-footer-cta" id="cta">
    <h2>جاهز تبدأ؟</h2>
    <p>النسخة الحالية تبين كيف النص يتحول إلى صفحة هبوط محترمة بصريًا بدون ما يضيع المنطق البيعي.</p>
    <a href="#" class="lp-btn">${cta}</a>
  </section>
</body>
</html>`;
}
