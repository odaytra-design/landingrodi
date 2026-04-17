# LandingRodi SaaS Pro

واجهة SaaS منظمة ومجهزة للعمل على Cloudflare Workers.

## التشغيل المحلي

```bash
npm install
npm run dev
```

## النشر

```bash
npm install
npm run deploy
```

## الفكرة
- Generate Copy
- Build Landing Page
- Preview داخل iframe
- Fake AI mode قابل للتحويل لاحقاً إلى OpenAI بدون تغيير الواجهة

## الملفات الأساسية
- `src/index.js` نقطة البداية
- `src/ui/app-shell.js` واجهة التطبيق
- `src/ui/styles.js` الستايل الكامل
- `src/engines/copy-engine.js` توليد النص
- `src/engines/page-renderer.js` تحويل النص إلى صفحة هبوط
- `src/data/presets.js` تصنيفات وأنماط المجالات
