import { appStyles } from './styles.js';

export function renderAppShell() {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LandingRodi — AI Landing Workspace</title>
  <style>${appStyles}</style>
</head>
<body>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark"></div>
        <div class="brand-copy">
          <h1>LandingRodi</h1>
          <p>AI Landing Workspace</p>
        </div>
      </div>

      <div class="nav-group">
        <div class="nav-title">Workspace</div>
        <div class="nav-item active"><span>Generate Experience</span><small>Live</small></div>
        <div class="nav-item"><span>Projects</span><small>12</small></div>
        <div class="nav-item"><span>Templates</span><small>Beta</small></div>
        <div class="nav-item"><span>Analytics</span><small>Soon</small></div>
      </div>

      <div class="nav-group">
        <div class="nav-title">Account</div>
        <div class="nav-item"><span>Plan</span><small>Starter</small></div>
        <div class="nav-item"><span>Usage</span><small>3 / 50</small></div>
      </div>

      <div class="sidebar-card">
        <h3>Ready for Real AI</h3>
        <p>الواجهة مبنية بحيث تقدر تنتقل من Fake Engine إلى OpenAI لاحقًا بدون ما تكسر الـ UX أو هيكل المشروع.</p>
      </div>
    </aside>

    <main class="content">
      <div class="topbar">
        <div>
          <h2>Build better landing pages faster</h2>
          <p>ولّد النص أولًا، راجعه، وبعدها حوّله مباشرة إلى صفحة هبوط محترمة داخل نفس الـ workspace.</p>
        </div>
        <div class="top-actions">
          <div class="pill">Fake Smart Mode</div>
          <div class="pill">Cloudflare Ready</div>
        </div>
      </div>

      <div class="workspace">
        <section class="panel">
          <div class="panel-head">
            <div>
              <h3>Copy Engine</h3>
              <p>اكتب النشاط أو العرض أو المنتج، والنظام يولد نسخة أولى قابلة للتحويل.</p>
            </div>
          </div>
          <div class="panel-body">
            <div class="hero-card">
              <h4>From idea → copy → landing page</h4>
              <p>المنهج هنا مو “نرمي HTML وخلاص”. أولًا نبني الرسالة التسويقية، بعدها نحوّلها إلى تجربة مرئية أنظف وأقوى.</p>
              <div class="input-wrap">
                <input id="ideaInput" class="idea-input" placeholder="مثال: صفحة هبوط لعيادة جلدية في عمان هدفها واتساب" />
                <button class="primary-btn" onclick="generateCopy()">Generate Copy</button>
              </div>
              <div class="status-row">
                <div class="status-chip">Conversion-first</div>
                <div class="status-chip">Strategy-based</div>
                <div class="status-chip">Preview included</div>
              </div>
            </div>

            <div id="copyView" class="copy-view muted">Generated copy will appear here...</div>
            <div class="actions-inline">
              <button class="primary-btn" onclick="buildPage()">Build Landing Page</button>
              <button class="ghost-btn" onclick="clearWorkspace()">Reset</button>
            </div>
            <div class="footer-note">هذه نسخة SaaS منظمة للعرض والتطوير. الواجهة جاهزة للتحويل لاحقًا إلى AI حقيقي.</div>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <div>
              <h3>Live Preview</h3>
              <p>المعاينة تتحول من النص إلى صفحة فعلية داخل iframe حتى يبين المنتج بشكل محترم.</p>
            </div>
          </div>
          <div class="panel-body">
            <div id="previewWrap" class="empty-state">No landing page yet.<br/>Generate copy first, then build the page.</div>
          </div>
        </section>
      </div>
    </main>
  </div>

  <script>
    let generatedCopy = null;

    async function generateCopy() {
      const idea = document.getElementById('ideaInput').value.trim();
      const copyView = document.getElementById('copyView');
      const previewWrap = document.getElementById('previewWrap');

      if (!idea) {
        copyView.textContent = 'اكتب الفكرة أولاً';
        return;
      }

      copyView.textContent = 'Generating structured copy...';
      previewWrap.innerHTML = '<div class="empty-state">Waiting for landing page build...</div>';

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'copy', idea })
      });

      const data = await res.json();
      generatedCopy = data.copy;

      const lines = [
        'Preset: ' + generatedCopy.presetLabel,
        '',
        'Headline:',
        generatedCopy.headline,
        '',
        'Subheadline:',
        generatedCopy.subheadline,
        '',
        'Benefits:',
        ...generatedCopy.benefits.map(x => '- ' + x),
        '',
        'Proof:',
        generatedCopy.proof,
        '',
        'CTA:',
        generatedCopy.cta,
        '',
        'FAQ:',
        ...generatedCopy.faq.map(x => '- ' + x.q + ' / ' + x.a)
      ];

      copyView.textContent = lines.join('\n');
    }

    async function buildPage() {
      const idea = document.getElementById('ideaInput').value.trim();
      const previewWrap = document.getElementById('previewWrap');

      if (!idea) {
        previewWrap.innerHTML = '<div class="empty-state">اكتب الفكرة أولاً</div>';
        return;
      }

      if (!generatedCopy) {
        previewWrap.innerHTML = '<div class="empty-state">ولّد النص أولاً قبل بناء الصفحة</div>';
        return;
      }

      previewWrap.innerHTML = '<div class="empty-state">Building landing page...</div>';

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'page', idea, copy: generatedCopy })
      });

      const html = await res.text();
      previewWrap.innerHTML = '<iframe id="previewFrame"></iframe>';
      document.getElementById('previewFrame').srcdoc = html;
    }

    function clearWorkspace() {
      generatedCopy = null;
      document.getElementById('ideaInput').value = '';
      document.getElementById('copyView').textContent = 'Generated copy will appear here...';
      document.getElementById('copyView').classList.add('muted');
      document.getElementById('previewWrap').innerHTML = 'No landing page yet.<br/>Generate copy first, then build the page.';
      document.getElementById('previewWrap').className = 'empty-state';
    }
  </script>
</body>
</html>`;
}
