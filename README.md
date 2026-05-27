# AIKASA — MVP stakeholder mockups (24 May 2026)

Mobile + desktop HTML mockups for all 19 user-facing surfaces of the AIKASA MVP.
Built against the locked design system in §10 of the engineering plan.

## Where to start

Open **`index.html`** in a browser. It's the stakeholder tour — every screen in
its mobile and desktop viewport, with click-throughs to the full mockups.

```bash
# From this directory:
python3 -m http.server 8080
# Then open http://localhost:8080/index.html
```

## Folder structure

```
.
├── index.html                    # Stakeholder tour — start here
├── README.md                     # You are here
├── shared/
│   ├── design-system.css         # All tokens + components
│   ├── icons.html                # Inline SVG icon sprite (28 icons)
│   └── pretext-init.js           # Resize-aware text layout helper
├── public/                       # 7 screens × mobile + desktop = 14 files
│   ├── landing-{mobile,desktop}.html
│   ├── pricing-{mobile,desktop}.html
│   ├── join-{mobile,desktop}.html
│   ├── login-{mobile,desktop}.html
│   ├── payment-callback-{mobile,desktop}.html
│   ├── payment-success-{mobile,desktop}.html
│   └── countdown-{mobile,desktop}.html       # DARK THEME
├── member/                       # 9 screens × mobile + desktop = 18 files
│   ├── dashboard-{mobile,desktop}.html
│   ├── lesson-library-{mobile,desktop}.html
│   ├── lesson-detail-{mobile,desktop}.html
│   ├── live-sessions-{mobile,desktop}.html
│   ├── challenges-{mobile,desktop}.html
│   ├── toolbox-{mobile,desktop}.html
│   ├── ai-updates-{mobile,desktop}.html
│   ├── community-{mobile,desktop}.html
│   └── profile-{mobile,desktop}.html
└── admin/                        # 3 screens × mobile + desktop = 6 files
    ├── admin-members-{mobile,desktop}.html
    ├── admin-content-{mobile,desktop}.html
    └── admin-analytics-{mobile,desktop}.html
```

**Total:** 38 mockups + 1 showcase + 1 README + 3 shared files.

## Design system

All mockups reference `shared/design-system.css` — one source of truth for tokens,
components, and breakpoints.

**Inheritance:** Africon Brand Guide (full token system) → AIKASA-specific
overlays per Engineering Plan §10.2:

- **Brand Blue** `#003366` (primary) · **Brand Green** `#2ECC71` (accent only)
- **Type:** Poppins (display + body), Inter (uppercase caption), JetBrains Mono (technical)
- **Direction:** Learning Editorial — lighter-touch minimalism, generous whitespace
- **Glass:** restrained — floating nav + at most one elevated card per section
- **Light theme primary** across the product
- **Countdown is the one intentional dark surface** — emotional treatment of pre-launch waiting
- **Banned in AIKASA contexts:** the Africon tech-purple `#6366f1` (AI-slop association)

## Canonical product language

| Concept | Member-facing (canonical) | Forbidden alternatives |
|---|---|---|
| Pillar 1 | AI for Productivity | "Build Knowledge", "Daily AI", etc. |
| Pillar 2 | AI for Business and Entrepreneurship | "Apply Skills", "Business AI" |
| Pillar 3 | AI Navigation and Clarity | "Drive Impact", "AI News" |
| Tier 1 | AI-Ready | "Pro", "Basic" |
| Tier 2 | AI Transformation | "Pro Annual", "Premium" |
| Currency (Ghana) | GHS, ₵ | Naira ₦ |
| Currency (Diaspora) | USD, $ | — |

**Founding Member benefits — canonical only:**
Tier-2 / all-tier access · Founding Member 2026 badge · Launch discount pricing ·
Up to 25% discount on renewal · One preview video + one downloadable prompt pack ·
Periodic build updates by email · Direct feedback channel · One-time launch-day welcome.

**NEVER on any mockup:** NFT · on-chain · voting rights · equity · revenue share ·
lifetime free access · Naira (₦) · "Pro / Pro Annual" · "Build Knowledge / Apply Skills / Drive Impact".

## Navigation patterns

| Surface | Desktop (≥1024px) | Mobile (<1024px) |
|---|---|---|
| Public | Floating glass top nav | Glass top nav + hamburger |
| Member portal | Floating glass left sidebar (8 items + Sign out) | Bottom tab bar (5 tabs: Home · Lessons · Live · Challenges · Profile) |
| Admin | Utility sidebar (denser, less glass) | Hamburger drawer |

## Demo data conventions

- **Demo member:** Yaa Mensah · AI Transformation tier (founding) · Level 2 (Foundation) · Avatar "YM"
- **Demo admin operator:** Albert Mensah · staff_role = admin · Avatar "AM"
- **Demo lesson:** "How to refine a Gamma deck" · Pillar 2 · 9 min · Kojo Asante (Africon facilitator)
- **Demo countdown:** 84 days · 12 hours · 35 minutes · 22 seconds (stable values, no JS countdown)
- **Demo Paystack reference:** `PSK_REF_2026_4F9C2A1B`

## Accessibility (WCAG 2.1 AA — §10.10)

- Body text on white uses Brand Blue or slate (Brand Green is large-text / accent only — fails AA at body sizes on white)
- Touch targets ≥ 44 × 44 px on mobile
- Skip-to-content link as first focusable element on every page
- Focus-visible: 2px Brand-Blue-400 outline + 2px offset
- ARIA: `aria-current="page"` on active nav, `aria-label` on icon-only buttons, `aria-live` for status changes
- `prefers-reduced-motion` collapses animations
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

## What's NOT in these mockups (deferred per §10.12)

- User-facing dark-mode toggle (only countdown is dark)
- Empty-state mockups for the spine (day-1 dashboard, pre-launch library, payment-callback failure)
- Full custom video player UI (we ship a branded Cloudflare Stream wrapper for MVP)
- Complex gamification (no points, leaderboards beyond Founding Member badge and challenge tracking)
- Profile media uploads beyond avatar
- Onboarding multi-step wizard (day-1 first-lesson nudge is the onboarding)

## Verification

Open `index.html` in a browser. Resize the window — text in the mockups
reflows correctly. Click any "Open mobile" / "Open desktop" link to inspect
a full-resolution page.

For stakeholder review, use **Cmd+Plus** / **Cmd+Minus** to zoom the
showcase board to comfortable reading size while keeping the mobile and
desktop viewports comparable.

## Sources of truth

| Document | Role |
|---|---|
| `AIKASA_Master_Blueprint_and_Execution_Charter_v3.pdf` | Strategy and content (pillars, pricing, learning model, founding offer) |
| `AIKASA_MVP_Engineering_Plan.md` §10 | Design system overlays, canonical naming, responsive specs, accessibility |
| `AFRICON_BRAND_GUIDE.md` | Inherited token system (colors, type, spacing) |
| `meeting_summary.txt` | Original positioning + decisions |

For any content drift, the canonical source is the engineering plan §10 +
the master blueprint. Where they differ, the engineering plan wins
(per §10 source-of-truth principle).
