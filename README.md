# AIKASA — MVP app mockups

Mobile + desktop HTML mockups for all 19 user-facing surfaces of the AIKASA MVP — the
public marketing + sign-up pages, the member portal, and the admin console. One shared
design system (`shared/design-system.css`) drives every screen.

> ## About these mockups
>
> These are the **AIKASA app's own pages** — a normal product: a homepage, pricing,
> sign-up, sign-in, subscription confirmation, a "launching soon" page, the member
> portal, and the admin console. They are **not** a founding-member campaign.
>
> The paid **founding-member registration runs separately on the Africon campaign site**
> and is out of scope for these mockups. After launch, founding members are carried into
> this app and keep a **Founding Member 2026 badge** (member area only — never sold or
> collected on the public pages here).
>
> **Key dates**
> - **15 August 2026** — full public launch (normal sign-ups open).
> - **15 July 2026** — founding registration closes on the Africon site, and registered
>   founding members get **early access** to this app to explore selected features, test
>   the learning experience, and send feedback that shapes the final build.

## Where to start

Open **`index.html`** in a browser. It's the stakeholder tour — every screen in its
mobile and desktop viewport, with click-throughs to the full mockups.

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
│   ├── aikasa-logo.png           # Brand logo (nav, footer, member/admin sidebar)
│   ├── icons.html                # Inline SVG icon sprite
│   └── pretext-init.js           # Resize-aware text layout helper
├── public/                       # 7 screens × mobile + desktop = 14 files — the app's public pages
│   ├── landing-{mobile,desktop}.html          # Homepage
│   ├── pricing-{mobile,desktop}.html          # AI-Ready vs AI Transformation tiers
│   ├── join-{mobile,desktop}.html             # Create account (sign-up)
│   ├── login-{mobile,desktop}.html            # Sign in
│   ├── payment-callback-{mobile,desktop}.html # "Confirming your payment…" verify state
│   ├── payment-success-{mobile,desktop}.html  # Subscription confirmed / welcome
│   └── countdown-{mobile,desktop}.html        # "Launching 15 August 2026" (the one DARK surface)
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

**Total:** 38 mockups + 1 showcase + 1 README + shared files.

## Design system

All mockups reference `shared/design-system.css` — one source of truth for tokens,
components, and breakpoints.

- **Brand Blue** `#1850A8` (primary — taken straight from the AIKASA logo) ·
  **Brand Green** `#2ECC71` (accent only — never small body text on white)
- **Logo:** `shared/aikasa-logo.png`, used in the public nav + footer and the member /
  admin sidebar. On the dark countdown surface, a white text wordmark is used instead.
- **Type:** Poppins (display + body), Inter (uppercase caption), JetBrains Mono (technical)
- **Direction:** Learning Editorial — lighter-touch minimalism, generous whitespace
- **Glass:** restrained — floating nav + at most one elevated card per section
- **Light theme primary** across the product; **countdown is the one intentional dark surface**
- **Banned in AIKASA contexts:** the Africon tech-purple `#6366f1` (AI-slop association)

## Pricing (standard tiers)

| Tier | Ghana | Global |
|---|---|---|
| **AI-Ready** (Tier 1) | GHS 200 / mo · GHS 2,000 / yr | $15 / mo · $120 / yr |
| **AI Transformation** (Tier 2) | GHS 600 / mo · GHS 6,000 / yr | $49 / mo · $449 / yr |

Region sets the currency (Ghana = GHS, elsewhere = USD); billing is monthly or annual,
with annual ≈ two months free. Cancel anytime. (Source: Master Blueprint §12.2 / §12.3.)

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

**Founding Member badge (member area only):** members who registered during the founding
campaign are carried into the app at launch with a **Founding Member 2026** badge on their
profile, dashboard, and community presence. The public pages never sell or collect founding
membership — that lives on the separate Africon campaign site.

**NEVER on any mockup:** NFT · on-chain · voting rights · equity · revenue share ·
lifetime free access · Naira (₦) · "Pro / Pro Annual" · "Build Knowledge / Apply Skills / Drive Impact".

## Navigation patterns

| Surface | Desktop (≥1024px) | Mobile (<1024px) |
|---|---|---|
| Public | Floating glass top nav (logo + Pricing · Sign in · Get started) | Glass top nav + hamburger |
| Member portal | Floating glass left sidebar (8 items + Sign out) | Bottom tab bar (5 tabs: Home · Lessons · Live · Challenges · Profile) |
| Admin | Utility sidebar (denser, less glass) | Hamburger drawer |

## Demo data conventions

- **Demo member:** Yaa Mensah · AI Transformation tier · Founding Member badge · Level 2 (Foundation) · Avatar "YM"
- **Demo admin operator:** Albert Mensah · staff_role = admin · Avatar "AM"
- **Demo lesson:** "How to refine a Gamma deck" · Pillar 2 · 9 min · Kojo Asante (Africon facilitator)
- **Demo countdown:** 66 days · 10 hours · 24 minutes · 18 seconds (stable values, no JS countdown; target 15 Aug 2026)
- **Demo payment reference:** `AIK_TXN_2026_4F9C2A1B`

## Accessibility (WCAG 2.1 AA)

- Body text on white uses Brand Blue or slate (Brand Green is large-text / accent only — fails AA at body sizes on white)
- Touch targets ≥ 44 × 44 px on mobile
- Skip-to-content link as first focusable element on every page
- Focus-visible: 2px Brand-Blue-400 outline + 2px offset
- ARIA: `aria-current="page"` on active nav, `aria-label` on icon-only buttons, `aria-live` for status changes
- `prefers-reduced-motion` collapses animations
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

## What's NOT in these mockups (deferred)

- User-facing dark-mode toggle (only countdown is dark)
- Full custom video player UI (we ship a branded Cloudflare Stream wrapper for MVP)
- Complex gamification (no points or leaderboards beyond the Founding Member badge and challenge tracking)
- Profile media uploads beyond avatar
- Onboarding multi-step wizard (the day-1 first-lesson nudge is the onboarding)

## Sources of truth

| Document | Role |
|---|---|
| `AIKASA_Master_Blueprint_and_Execution_Charter_v3.pdf` | Strategy + content (pillars, pricing §12, learning model) |
| `AIKASA_MVP_Engineering_Plan.md` §10 | Design system overlays, canonical naming, responsive specs, accessibility |
| `AFRICON_BRAND_GUIDE.md` | Inherited token system (type, spacing, neutrals) |
| `meeting_summary.txt` | Original positioning + decisions |

The paid founding-member campaign (registration, prepay, founder pricing) is built and run
separately on the **Africon** campaign site and is **not** represented in these mockups. These
files are the AIKASA app itself.
