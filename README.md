# Shreeniwas Yadav — Personal Portfolio

A premium, recruiter-ready developer portfolio built with plain **HTML5**, **CSS3**, and **vanilla JavaScript**. No frameworks, no build step, no dependencies.

> Status: **Module 10 — Final audit, optimization & polish (complete).** The full site — design system, sticky navbar (now including Resume), hero, About, Education, Technical Skills, Learning Journey dashboard, Featured Projects, `#resume`, Let’s Connect, and footer — has passed the final responsive, functional, accessibility, and accuracy audit. Favicon, Open Graph image, and theme-color metadata were added; the resume card still honestly shows "available soon" until the real PDF is added.

## Owner

| Field | Value |
| --- | --- |
| Name | Shreeniwas Yadav |
| Education | Third-year CSE-AI student |
| Goal | Web Development Internship |
| Skills | HTML, CSS, JavaScript |
| Learning | Backend development |
| Projects | Local Market, ResQRoute |
| GitHub | [shreeniwasyadav701](https://github.com/shreeniwasyadav701) |
| Instagram | [@shreeniwas701](https://www.instagram.com/shreeniwas701/) |

Unknown details (email, phone, project screenshots, certificates) stay unlisted until they are confirmed in a later module.

## Folder structure

```
shreeniwas-portfolio/
├── index.html              Entry point — semantic HTML5 document and page shell
├── README.md               This file
└── assets/
    ├── css/
    │   └── style.css       Design tokens, resets, base styles, shell layout
    ├── js/
    │   ├── profile-config.js  Frozen social profile data (Instagram) — reference snapshot, not loaded by the page
    │   ├── progress.js     Learning Progress dashboard (checkbox state, bars, localStorage)
    │   └── script.js       Small page utilities (year stamp, JS flag, scroll reveal)
    ├── images/
    │   └── og-cover.png      Open Graph share image (1200×630 screenshot of the live hero)
    └── icons/
        └── favicon.svg       Tab icon — "SY" monogram on the navy theme
```

### What each file does

- **`index.html`** — Full HTML5 document with responsive viewport, metadata, skip link, sticky header (brand link, role, hamburger button, primary `<nav>` with links to every real section), hero section (`#home`), About section (`#about`), Education section (`#education`), Technical Skills section (`#skills`), My Learning Journey section (`#progress`), Featured Projects section (`#projects`), Resume & Career Opportunities section (`#resume`), Let’s Connect section (`#contact`), and footer (owner name, tagline, dynamic-year copyright). Links the stylesheet and both scripts.
- **`assets/css/style.css`** — CSS custom properties for color, type, spacing, radii, borders, and layout widths; global reset; base typography; focus-visible styling; reduced-motion support; navbar links, active underline, and mobile menu panel; hero, About, Education, Skills, Learning Journey, Featured Projects, Resume, and Let’s Connect layouts; resume/internship cards; social-link cards; project preview mockups (CSS storefront, SVG route map); visual composition; entrance and reveal animations.
- **`assets/js/script.js`** — Removes the `no-js` flag, adds the `js` flag (used to gate scroll-reveal styles), keeps the footer year current, runs an `IntersectionObserver` that adds `.is-visible` to `.reveal` elements as they enter the viewport, toggles the mobile menu (aria-expanded, Escape-to-close with focus return, outside-click close, desktop-resize resets), and highlights the current section’s navbar link with a second IntersectionObserver. Everything degrades to fully visible content when JavaScript is disabled.
- **`assets/js/progress.js`** — Wires up the two learning checklists: restores saved checkbox state, keeps counts/percentages/progress bars in sync on every change, handles per-card reset with confirmation, and persists state to `localStorage`. Degrades to a working (session-only) checklist when storage is unavailable.
- **`assets/js/profile-config.js`** — Frozen data-only object holding verified social profile details (currently Instagram). Kept as a reference snapshot: it is not loaded by `index.html`; Module 7 renders the same verified values as static HTML so the cards also work without JavaScript.

## Learning progress (saved locally)

The "My Learning Journey" section (`#progress`) tracks real, user-ticked checkboxes only — nothing is pre-checked, and the percentage always equals `checked ÷ total`.

| Card | Storage key | Topics |
| --- | --- | --- |
| Full Stack Web Development | `learning-progress-fullstack` | 26 (Frontend 10, Backend 10, Tools and Practice 6) |
| Java & Data Structures and Algorithms | `learning-progress-javadsa` | 28 (Java Fundamentals 8, DSA 15, Problem Solving 5) |

Behavior contract:

1. Each topic is a native `<input type="checkbox">` — clickable, keyboard accessible, focus visible.
2. Checked/unchecked state is saved to `localStorage` per card (JSON array of topic ids) after every change.
3. On page load, saved state is restored; with no saved state, everything starts unchecked.
4. The count ("5 of 26 topics completed"), percentage, progress bar width, and `aria-valuenow` update immediately on every toggle.
5. The **Reset** button clears only its own card after a confirmation dialog.
6. If `localStorage` is unavailable (private mode, storage disabled), the checklist keeps working for the session without crashing — progress just is not persisted.
7. No backend, no login, no external service, no auto-completed topics, no badges or streaks.

## Featured projects (Module 6)

The `#projects` section shows exactly two cards, each linked to its verified public GitHub repository:

| Project | Card status | Tech stack (as shown) | Repository |
| --- | --- | --- | --- |
| Local Market | *(no badge — presented as a completed student build)* | HTML, CSS, Vanilla JavaScript, Node.js, Express.js, MongoDB, Mongoose, JWT Authentication | <https://github.com/shreeniwasyadav701/Local-market> |
| ResQRoute | **In Progress** | Java, Spring Boot, Spring Security, JWT, MySQL, Dijkstra, WebSocket | <https://github.com/shreeniwasyadav701/ResQroute> |

Honesty rules for this section:

1. No **Live Demo** buttons — neither project has a public deployment URL; both only run locally.
2. Every listed feature was verified against the project source (routes, models, controllers, frontend pages) before being shown.
3. ResQRoute is labeled **In Progress** because its roadmap still keeps an "Advanced (future work)" phase.
4. The card previews are CSS/SVG mockups of each app's interface concept — not screenshots, and not claims of pixel-exact UI.
5. GitHub links open in a new tab with `target="_blank" rel="noopener noreferrer"`.

## Contact & social links (Module 7)

The `#contact` section ("Let’s Connect") renders exactly two social cards — every URL live-verified before shipping:

| Platform | Username | URL | Button | Verification |
| --- | --- | --- | --- | --- |
| Instagram | `@shreeniwas701` | <https://www.instagram.com/shreeniwas701/> | Visit Instagram | Page's Open Graph metadata reads "Shreeniwas Yadav (@shreeniwas701)" |
| GitHub | `shreeniwasyadav701` | <https://github.com/shreeniwasyadav701> | Explore GitHub | Profile page loads with owner name "Shreeniwas Yadav" |

Both cards:

1. Use `target="_blank"` and `rel="noopener noreferrer"`.
2. Carry a descriptive `aria-label` (visible button text + username + new-tab hint).
3. Mark their SVG `aria-hidden="true"` and size it via the `social-icon` class.
4. Show a visible focus ring via the existing `:focus-visible` rule (`.social-card:focus-within` also highlights the card border for keyboard users).

Email and LinkedIn are **deliberately absent** — no verified address or profile URL exists in the portfolio's content, and placeholder buttons are forbidden. The markup marks their future spot with a comment inside `.contact__grid` in `index.html`: add another `.social-card` article there once the real details are confirmed, following the pattern of the existing two cards (platform heading, username line, external link). Nothing else needs to change — the grid and responsive rules pick up additional cards automatically.

The CTA panel states openness to internships and collaboration only; it makes no claims about experience or offers. The footer carries the owner name, the tagline "Built with curiosity and a passion for learning.", and a copyright line whose year is refreshed by `script.js` (static fallback `2026` when JavaScript is off).

`assets/js/profile-config.js` stays untouched as the frozen reference snapshot of the Instagram entry (URL, username, `ariaLabel`, `iconSvg`) that the rendered card matches.

## Resume & career opportunities (Module 9)

The `#resume` section pairs two cards: **My Resume** (document icon, one-line summary) and **Open to Internship Opportunities** (short CTA + "Connect With Me" button pointing at the real `#contact` section). Secondary profile links (GitHub, Instagram — both previously verified) sit at the bottom of the CTA card as small text links so they never compete with the primary actions.

Honesty rules for this section:

1. **No resume PDF exists in this folder yet** — the resume card shows "Resume PDF will be available soon" instead of a download button. No placeholder file was generated.
2. To go live later: drop the real PDF into the project (for example `assets/Shreeniwas-Yadav-Resume.pdf`), then replace the pending note in `index.html` with the download link already prepared in the adjacent HTML comment (`<a class="btn btn--primary" href="assets/…" download="…">Download Resume</a>`).
3. The internship CTA states interest only — no experience claims, offers, ratings, counters, or statistics anywhere in the section.
4. "Connect With Me" uses `href="#contact"` — the existing Let’s Connect section; no duplicate contact area was created.
5. No LinkedIn or email links: none are verified.

## Section IDs

| Section | id | Purpose |
| --- | --- | --- |
| Home | `#home` | Hero — "Building Digital Experiences That Matter." |
| About | `#about` | "Beyond the Code" — intro and goal statement |
| Education | `#education` | "Education & Academic Journey" — institution, course, status, third-semester CGPA |
| Skills | `#skills` | "Technical Skills" — Full Stack Web Development list and Java & DSA tags |
| Learning Journey | `#progress` | "My Learning Journey" — Full Stack and Java & DSA checklists with saved progress |
| Projects | `#projects` | "Featured Projects" — Local Market and ResQRoute cards with verified repo links |
| Resume | `#resume` | "Resume & Career Opportunities" — resume card (PDF pending) and internship CTA |
| Contact | `#contact` | "Let’s Connect" — verified Instagram and GitHub cards, connection CTA; footer below |

The navbar, hero CTAs, and skip link all point at real sections by anchor.

## Anchor contract

The hero's CTA buttons point at sections by anchor:

| Button | href | Target section | Status |
| --- | --- | --- | --- |
| Explore My Work | `#projects` | Featured Projects (Local Market, ResQRoute) | Live since Module 6 |
| Get In Touch | `#contact` | Let’s Connect (Instagram, GitHub, CTA) | Live since Module 7 |
| Connect With Me | `#contact` | Let’s Connect (internship CTA card) | Live since Module 9 |

Both hero CTAs resolve to real sections. Anchor scrolling is smooth (CSS `scroll-behavior`, switched to `auto` under `prefers-reduced-motion`), and every target carries `scroll-margin-top: 4.5rem` so the sticky navbar never covers a section heading. On a short page end (Let’s Connect at tablet height), the browser's document-end clamp applies and the section settles slightly lower — still fully readable.

## Navbar & smart navigation (Module 8)

The sticky header doubles as the primary navigation:

| Piece | Behavior |
| --- | --- |
| Brand | "Shreeniwas Yadav" links to `#home` (hero); hover shifts to accent blue |
| Links | Home, About, Education, Technical Skills, Learning Progress, Projects, Resume, Contact — one per real section, no placeholders (Resume joined the navbar in Module 10) |
| Active state | IntersectionObserver (band from below the navbar to 45% of the viewport) marks one link at a time with a gradient underline + `aria-current="location"`; clicking a link sets it immediately |
| Sticky | Header was already `position: sticky` with a translucent blur background; `scroll-margin-top` on sections keeps headings clear of it |
| Mobile/tablet (< 60rem) | Hamburger button (`aria-expanded`, `aria-controls="site-menu"`, label swaps Open/Close) animates to an X and reveals a slide-down panel; closes on link selection, Escape (returns focus to the button), outside click, and when the viewport crosses to desktop width |
| No JavaScript | Toggle hidden; links render as a wrapped, tappable row under the brand |

Conventions worth keeping: one `<nav aria-label="Primary">` only, no inline handlers, and the menu never exceeds the viewport (`max-height` + `overflow-y: auto`).

## Run it locally

Any static server works. Pick one:

```bash
# Python (preinstalled on most systems)
python3 -m http.server 5500
```

```bash
# Node.js
npx serve .
```

Then open <http://localhost:5500> in a browser.

Opening `index.html` directly with a double-click also works, since the project uses only relative paths.

## Conventions

- Semantic HTML landmarks (`header`, `main`, `footer`, section headings with `aria-labelledby`).
- Mobile-first CSS with `clamp()` for fluid type and spacing.
- All visual values come from `:root` custom properties — change the design in one place.
- Keyboard focus is always visible via `:focus-visible`.
- Animations respect the `prefers-reduced-motion` media query.
- No placeholder links or buttons that do nothing.

## Roadmap

- **Module 1 (done):** Foundation, design tokens, page shell.
- **Module 2 (done):** Hero section.
- **Module 3 (done):** About ("Beyond the Code") and Education ("Education & Academic Journey").
- **Module 4 (done):** Technical Skills section — Full Stack Web Development (HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB, Mongoose, REST APIs, Git, GitHub, SQL, database fundamentals) and Java & DSA. No proficiency percentages anywhere — honest, student-level presentation only.
- **Module 5 (done):** My Learning Journey — per-topic checklists for Full Stack (26 topics) and Java & DSA (28 topics), live counts/percentages/progress bars, per-card reset with confirmation, and `localStorage` persistence.
- **Module 6 (done):** Featured Projects — `#projects` showcase with Local Market (full feature/tech list, verified against source) and ResQRoute (labeled In Progress), verified GitHub links only, no invented demo URLs or metrics, CSS/SVG preview mockups, two-column desktop / single-column mobile grid.
- **Module 7 (done):** Let’s Connect — `#contact` section with the exact introduction copy, verified Instagram and GitHub cards (external links, safe attributes, accessible labels), a short internship/collaboration CTA, and the footer (owner name, tagline, dynamic-year copyright).
- **Module 8 (done):** Navbar & smart navigation — sticky header upgraded with a primary nav (brand → `#home`, one link per real section), gradient active-link highlighting via IntersectionObserver, accessible mobile hamburger menu (Escape/outside-click close, focus return), `scroll-margin-top` so the sticky bar never covers section headings.
- **Module 9 (done):** Resume & Career Opportunities — `#resume` section with a resume card (honest "PDF available soon" state, download link prepared in an HTML comment for when the real file lands), an internship CTA card whose "Connect With Me" button targets the real `#contact`, and secondary verified GitHub/Instagram text links.
- **Module 10 (done):** Final professional audit, optimization & polish — full-site audit across all nine sections; Resume added to the navbar and the active-link observer; contrast fixes (project labels, education scale); brand/nav text no longer wraps in the mid-width header; role label hidden below 68rem so the header stays single-line; unused `.hero__name` rule removed; SVG favicon, `theme-color`, Open Graph/Twitter image metadata, and a real 1200×630 hero screenshot as `og-cover.png`; mobile `background-attachment` switched to `scroll` for smoother scrolling. Verified again at 320/375/430/768/1024/1440 with keyboard, reduced-motion, and localStorage tests — no regressions.

## Education data note

The `7.2 / 10` figure in the Education card is labeled **Third-semester CGPA** on purpose. Do not relabel it as an overall or latest CGPA. Update the number in `index.html` (inside `.edu-card__cgpa`) and the label in `.edu-card__result-label` when new verified results are available.
