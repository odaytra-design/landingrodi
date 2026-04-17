# RodiPages AI

Conversational landing page generator with real OpenAI integration from day one.

## What this starter includes
- Chat-style creation flow
- Real OpenAI API integration
- 2-stage generation pipeline:
  - Strategy Engine
  - Copy + Page JSON Engine
- Live landing page preview
- Improve button with AI rewrite
- Seedance / GPT-inspired UI structure

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`

## Required env vars

```env
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-4.1-mini
```

You can change the model to any supported OpenAI model.

## Architecture

### 1) Strategy Engine
Takes a natural-language request and extracts:
- page goal
- audience
- tone
- angle
- objections
- CTA type
- best sections

### 2) Copy Engine
Uses the strategy JSON to create:
- hero
- benefits
- proof
- offer
- faq
- cta

### 3) Renderer
Renders JSON into a real landing page preview.

## Main files
- `app/page.tsx` → home / generator UI
- `app/api/generate/route.ts` → real OpenAI generation
- `app/api/improve/route.ts` → AI rewriting / optimization
- `components/chat-shell.tsx` → main workspace UI
- `components/page-preview.tsx` → landing page preview
- `lib/openai.ts` → OpenAI client
- `lib/prompts.ts` → strategy and copy prompts
- `types/page.ts` → app types

## Next steps you can add
- auth
- database
- publish routes
- saved projects
- analytics
- leads capture
- custom domains
