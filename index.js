import { renderAppShell } from './ui/app-shell.js';
import { generateCopy } from './engines/copy-engine.js';
import { renderLandingPage } from './engines/page-renderer.js';

export default {
  async fetch(request) {
    if (request.method === 'POST') {
      try {
        const body = await request.json();
        const action = body.action || 'copy';
        const idea = body.idea || '';

        if (action === 'copy') {
          const copy = generateCopy(idea);
          return Response.json({ ok: true, copy });
        }

        if (action === 'page') {
          const html = renderLandingPage({ idea, copy: body.copy || {} });
          return new Response(html, {
            headers: { 'Content-Type': 'text/html; charset=UTF-8' }
          });
        }

        return Response.json({ ok: false, error: 'Invalid action' }, { status: 400 });
      } catch (error) {
        return Response.json({ ok: false, error: error.message }, { status: 500 });
      }
    }

    return new Response(renderAppShell(), {
      headers: { 'Content-Type': 'text/html; charset=UTF-8' }
    });
  }
};
