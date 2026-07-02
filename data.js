/* ============================================================
   KEVIN CAHYA FIRMANSYAH — Interactive Portfolio
   Theme-switchable: --accent drives the entire palette
   ============================================================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── THEME DEFINITIONS ── */
:root,
[data-theme="cyber"] {
  --accent:       #00E5A0;
  --accent-d:     #00B87F;
  --accent-rgb:   0,229,160;
  --accent-glow:  rgba(0,229,160,0.15);
}
[data-theme="electric"] {
  --accent:       #00BFFF;
  --accent-d:     #0095CC;
  --accent-rgb:   0,191,255;
  --accent-glow:  rgba(0,191,255,0.15);
}
[data-theme="neon"] {
  --accent:       #BF5FFF;
  --accent-d:     #9B3DDD;
  --accent-rgb:   191,95,255;
  --accent-glow:  rgba(191,95,255,0.15);
}
[data-theme="solar"] {
  --accent:       #FF8C00;
  --accent-d:     #D97300;
  --accent-rgb:   255,140,0;
  --accent-glow:  rgba(255,140,0,0.15);
}
[data-theme="crimson"] {
  --accent:       #FF2D55;
  --accent-d:     #CC1A3E;
  --accent-rgb:   255,45,85;
  --accent-glow:  rgba(255,45,85,0.15);
}

/* ── BASE TOKENS ── */
:root {
  --bg:       #080810;
  --bg-2:     #0E0E1A;
  --bg-card:  #131320;
  --border:   rgba(255,255,255,0.07);
  --border-h: rgba(255,255,255,0.15);
  --white:    #EEEEF5;
  --muted:    #7070A0;
  --red:      #FF3B5C;

  --font-d: 'Outfit', sans-serif;
  --font-m: 'DM Mono', monospace;

  --max-w: 1160px;
  --nav-h: 64px;
  --ease:  cubic-bezier(.25,.46,.45,.94);
  --ease-b: cubic-bezier(.34,1.56,.64,1);

  /* Transition for theme switching */
  --theme-transition: background-color 0.5s var(--ease), border-color 0.5s var(--ease), color 0.5s var(--ease), box-shadow 0.5s var(--ease);
}

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--font-d);
  background: var(--bg);
  color: var(--white);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  cursor: none; /* hidden for custom cursor */
}

@media (pointer: coarse) { body { cursor: auto; } }

img { display: block; max-width: 100%; }
a   { color: inherit; text-decoration: none; }
strong { font-weight: 600; color: var(--white); }
em    { font-style: italic; color: var(--accent); }
.mono { font-family: var(--font-m); }

/* ── CUSTOM CURSOR ── */
.cursor {
  position: fixed;
  width: 10px; height: 10px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width .15s, height .15s, background .15s, transform .05s;
  mix-blend-mode: difference;
  will-change: transform;
}

.cursor.expand {
  width: 40px; height: 40px;
  background: rgba(var(--accent-rgb), 0.2);
  border: 1px solid var(--accent);
}

.cursor-trail {
  position: fixed;
  width: 32px; height: 32px;
  border: 1px solid rgba(var(--accent-rgb), 0.4);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: all .08s ease-out;
  will-change: transform;
}

@media (pointer: coarse) { .cursor, .cursor-trail { display: none; } }

/* ── THEME PANEL ── */
.theme-panel {
  position: fixed;
  right: 24px; bottom: 80px;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.theme-toggle-btn {
  width: 44px; height: 44px;
  background: var(--bg-card);
  border: 1px solid var(--border-h);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  transition: all 0.25s, var(--theme-transition);
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

.theme-toggle-btn:hover {
  border-color: var(--accent);
  box-shadow: 0 0 16px var(--accent-glow);
  transform: rotate(30deg);
}

.theme-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: all 0.25s var(--ease);
}

.theme-options.open {
  opacity: 1;
  transform: none;
  pointer-events: all;
}

.theme-opt {
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: var(--bg-card);
  cursor: pointer;
  padding: 3px;
  transition: border-color 0.2s, transform 0.2s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.4);
}

.theme-opt:hover, .theme-opt.active { border-color: var(--white); transform: scale(1.15); }

.theme-swatch {
  display: block;
  width: 100%; height: 100%;
  border-radius: 50%;
}

/* ── UTILITY ── */
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  font-family: var(--font-d);
  font-size: .875rem;
  font-weight: 600;
  letter-spacing: .02em;
  border: 1.5px solid transparent;
  cursor: pointer;
  border-radius: 8px;
  white-space: nowrap;
  transition: all 0.25s var(--ease), var(--theme-transition);
  position: relative;
  overflow: hidden;
}

/* Ripple pseudo-element on buttons */
.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.08);
  opacity: 0;
  transition: opacity 0.2s;
}

.btn:active::after { opacity: 1; }

.btn--primary  {
  background: var(--accent);
  color: #08080F;
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.3);
}

.btn--primary:hover {
  background: var(--accent-d);
  border-color: var(--accent-d);
  box-shadow: 0 0 30px rgba(var(--accent-rgb), 0.5);
  transform: translateY(-2px);
}

.btn--outline  {
  background: transparent;
  color: var(--white);
  border-color: var(--border-h);
}

.btn--outline:hover {
  border-color: var(--accent);
  color: var(--accent);
  box-shadow: 0 0 16px rgba(var(--accent-rgb), 0.2);
  transform: translateY(-2px);
}

.btn--full { width: 100%; justify-content: center; }

.section { padding: 100px 0; }

.section__label {
  font-family: var(--font-m);
  font-size: .72rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
  transition: color 0.5s;
}

.section__title {
  font-family: var(--font-d);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: var(--white);
  line-height: 1.15;
}

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background 0.3s, border-color 0.3s, var(--theme-transition);
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: rgba(8,8,16,0.92);
  backdrop-filter: blur(20px);
  border-bottom-color: var(--border);
}

.nav__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 2rem;
  height: var(--nav-h);
  display: flex; align-items: center; justify-content: space-between;
}

.nav__logo {
  font-family: var(--font-d);
  font-size: 1.3rem; font-weight: 800;
  color: var(--white);
  letter-spacing: -.02em;
}

.logo-dot { color: var(--accent); transition: color 0.5s; }

.nav__links {
  list-style: none;
  display: flex; align-items: center; gap: 32px;
}

.nav-link {
  font-size: .85rem; font-weight: 400;
  color: var(--muted);
  transition: color 0.2s;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 0; height: 1px;
  background: var(--accent);
  transition: width 0.25s var(--ease), background 0.5s;
}

.nav-link:hover { color: var(--white); }
.nav-link:hover::after { width: 100%; }

.nav__cta {
  background: transparent !important;
  border: 1px solid var(--accent) !important;
  color: var(--accent) !important;
  padding: 7px 18px;
  border-radius: 6px;
  font-weight: 500 !important;
  transition: all 0.2s, var(--theme-transition) !important;
}

.nav__cta:hover {
  background: var(--accent) !important;
  color: var(--bg) !important;
  box-shadow: 0 0 16px rgba(var(--accent-rgb),.35) !important;
}

.nav__cta::after { display: none; }

.nav__toggle {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}

.nav__toggle span {
  display: block; width: 22px; height: 1.5px;
  background: var(--white); transition: all 0.2s;
}

.nav__mobile {
  display: none; flex-direction: column;
  padding: 1rem 2rem 1.5rem;
  border-top: 1px solid var(--border);
  background: rgba(8,8,16,0.97);
  backdrop-filter: blur(20px);
}

.nav__mobile.open { display: flex; }

.nav__mobile-link {
  font-size: 1rem; color: var(--muted);
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s;
}

.nav__mobile-link:hover { color: var(--white); }

/* ── HERO ── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex; flex-direction: column; justify-content: center;
  padding-top: var(--nav-h);
  overflow: hidden;
}

.hero__canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Radial color glows that shift with theme */
.hero__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(120px);
  transition: background 0.8s var(--ease);
  z-index: 0;
}

.hero__glow--1 {
  width: 600px; height: 600px;
  background: rgba(var(--accent-rgb), 0.07);
  top: -200px; right: -100px;
  animation: glow-pulse 6s ease-in-out infinite;
}

.hero__glow--2 {
  width: 400px; height: 400px;
  background: rgba(var(--accent-rgb), 0.04);
  bottom: 0; left: -100px;
  animation: glow-pulse 8s ease-in-out infinite reverse;
}

@keyframes glow-pulse {
  0%,100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.15); opacity: .6; }
}

.hero__container {
  position: relative; z-index: 1;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 60px; align-items: center;
  padding-top: 60px; padding-bottom: 80px;
}

/* ── HERO LEFT ── */
.hero__badge {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-m); font-size: .72rem;
  color: var(--accent);
  border: 1px solid rgba(var(--accent-rgb), 0.35);
  padding: 7px 16px; border-radius: 100px;
  margin-bottom: 28px;
  background: rgba(var(--accent-rgb), 0.06);
  transition: all 0.5s;
}

.badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 2s ease-in-out infinite;
  transition: background 0.5s;
}

@keyframes pulse-dot {
  0%,100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb),.5); }
  50%      { box-shadow: 0 0 0 7px rgba(var(--accent-rgb),0); }
}

.hero__name {
  font-family: var(--font-d);
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  font-weight: 900;
  line-height: 1.0; letter-spacing: -.04em;
  color: var(--white);
  margin-bottom: 16px;
}

.hero__name-accent {
  color: var(--accent);
  transition: color 0.5s;
}

.hero__name-line { display: inline-block; }

/* Reveal text animation */
@keyframes reveal-up {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: none; }
}

.reveal-text {
  display: inline-block;
  animation: reveal-up 0.7s var(--ease) both;
}

/* Typewriter line */
.hero__typewriter {
  display: flex; align-items: center; gap: 6px;
  margin-bottom: 20px;
  font-family: var(--font-m); font-size: .8rem;
}

.hero__type-prefix { color: var(--muted); }

.hero__type-text {
  color: var(--accent);
  transition: color 0.5s;
  min-width: 1ch;
}

.typed-cursor {
  color: var(--accent);
  animation: blink .75s step-end infinite;
  transition: color 0.5s;
  font-size: 1rem; line-height: 1;
}

@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

.hero__sub {
  font-size: 1rem; color: var(--muted);
  line-height: 1.8; max-width: 480px; margin-bottom: 28px;
}

.hero__tags {
  display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px;
}

.tag {
  font-family: var(--font-m); font-size: .7rem;
  padding: 5px 12px;
  border: 1px solid var(--border-h);
  color: var(--muted); border-radius: 4px;
  letter-spacing: .05em;
  transition: border-color 0.2s, color 0.2s, var(--theme-transition);
  cursor: default;
}

.tag:hover {
  border-color: var(--accent);
  color: var(--accent);
  box-shadow: 0 0 10px rgba(var(--accent-rgb),.15);
}

.hero__actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }

.hero__contacts { display: flex; flex-direction: column; gap: 8px; }

.hero__contact-item {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-m); font-size: .72rem;
  color: var(--muted); transition: color 0.2s;
}

.hero__contact-item:hover { color: var(--accent); }

/* ── HERO RIGHT ── */
.hero__right {
  display: flex; flex-direction: column; align-items: center; gap: 24px;
}

.hero__photo-wrap { position: relative; width: 300px; }

/* Rotating accent ring */
.hero__photo-ring {
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  border: 2px dashed rgba(var(--accent-rgb), 0.25);
  animation: spin-slow 20s linear infinite;
  transition: border-color 0.5s;
}

.hero__photo-ring::before {
  content: '';
  position: absolute;
  width: 10px; height: 10px; top: 50%; left: -5px;
  background: var(--accent);
  border-radius: 50%;
  transform: translateY(-50%);
  transition: background 0.5s;
  box-shadow: 0 0 10px var(--accent);
}

@keyframes spin-slow { to { transform: rotate(360deg); } }

.hero__photo-frame {
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(var(--accent-rgb),.25);
  transition: border-color 0.5s;
  box-shadow: 0 0 40px rgba(var(--accent-rgb),.1), 0 20px 60px rgba(0,0,0,.5);
}

.hero__photo {
  width: 300px; height: 300px;
  object-fit: cover; object-position: center top;
  transition: transform 0.6s var(--ease), filter 0.4s;
  filter: saturate(0.85);
}

.hero__photo:hover { transform: scale(1.06); filter: saturate(1.1); }

.photo-badge {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid rgba(var(--accent-rgb),.3);
  border-radius: 6px; padding: 5px 12px;
  font-size: .68rem; color: var(--accent);
  letter-spacing: .08em;
  transition: all 0.5s;
  animation: float-badge 4s ease-in-out infinite;
}

.photo-badge--tl { top: 20px; left: -28px; animation-delay: 0s; }
.photo-badge--br { bottom: 20px; right: -28px; animation-delay: 1.3s; }
.photo-badge--tr { top: 50%; right: -30px; animation-delay: 0.7s; }

@keyframes float-badge {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}

/* Stat cards */
.hero__stats {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 10px; width: 100%;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px; padding: 14px 12px;
  text-align: center;
  transition: border-color 0.25s, box-shadow 0.25s, var(--theme-transition);
}

.stat-card:hover {
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(var(--accent-rgb),.12);
}

.stat-card__num {
  display: block; font-family: var(--font-d);
  font-size: 1.7rem; font-weight: 800;
  color: var(--accent); line-height: 1; margin-bottom: 4px;
  transition: color 0.5s;
}

.stat-card__label {
  display: block; font-size: .68rem;
  color: var(--muted); line-height: 1.3;
}

/* ── SCROLL INDICATOR ── */
.hero__scroll {
  position: absolute; bottom: 28px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  z-index: 1;
}

.scroll-mouse {
  width: 22px; height: 34px;
  border: 2px solid rgba(var(--accent-rgb),.4);
  border-radius: 11px;
  display: flex; justify-content: center; padding-top: 5px;
  transition: border-color 0.5s;
}

.scroll-wheel {
  width: 4px; height: 8px;
  background: var(--accent);
  border-radius: 2px;
  animation: scroll-wheel 2s var(--ease) infinite;
  transition: background 0.5s;
}

@keyframes scroll-wheel {
  0%   { transform: translateY(0); opacity: 1; }
  80%  { transform: translateY(10px); opacity: 0; }
  81%  { transform: translateY(0); opacity: 0; }
  100% { opacity: 1; }
}

/* ── ABOUT ── */
.about {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.about__grid {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 60px; align-items: start;
}

.about__accent-line {
  width: 2px; height: 48px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  margin-top: 12px;
  transition: background 0.5s;
}

.about__headline {
  font-family: var(--font-d);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700; color: var(--white);
  line-height: 1.25; margin-bottom: 24px;
}

.about__body-cols {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 24px; margin-bottom: 36px;
}

.about__body-cols p {
  font-size: .95rem; color: var(--muted); line-height: 1.85;
}

.about__info-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 18px; padding-top: 28px;
  border-top: 1px solid var(--border);
}

.info-item { display: flex; flex-direction: column; gap: 4px; }

.info-item__label {
  font-family: var(--font-m); font-size: .65rem;
  color: var(--accent); letter-spacing: .1em; text-transform: uppercase;
  transition: color 0.5s;
}

.info-item__val { font-size: .875rem; color: var(--white); }

/* ── SKILLS ── */
.skills { background: var(--bg); }

.skills__header { margin-bottom: 48px; }

.skills__sub-title {
  font-size: .72rem; letter-spacing: .12em;
  text-transform: uppercase; color: var(--muted);
  margin-bottom: 20px;
}

.skills__layout {
  display: grid; grid-template-columns: 1.1fr 1fr;
  gap: 64px; align-items: start;
}

.skills__list { display: flex; flex-direction: column; gap: 20px; }

.skill-item__top {
  display: flex; justify-content: space-between; margin-bottom: 8px;
}

.skill-item__name { font-size: .875rem; color: var(--white); font-weight: 500; }

.skill-item__pct {
  font-family: var(--font-m); font-size: .75rem; color: var(--accent);
  transition: color 0.5s;
}

.skill-item__bar {
  height: 3px; background: var(--border);
  border-radius: 2px; overflow: hidden;
  cursor: pointer;
  position: relative;
}

.skill-item__fill {
  height: 100%; width: 0;
  background: linear-gradient(90deg, var(--accent-d), var(--accent));
  border-radius: 2px;
  transition: width 1.1s var(--ease), background 0.5s;
  position: relative;
}

.skill-item__fill.animated { width: var(--pct); }

/* Shimmer on fill */
.skill-item__fill::after {
  content: '';
  position: absolute; top: 0; right: -20px;
  width: 20px; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent);
  animation: shimmer 2.5s var(--ease) 1.2s infinite;
  opacity: 0;
}

.skill-item__fill.animated::after { opacity: 1; }

@keyframes shimmer { 0%{right:100%} 100%{right:-20px} }

.soft-skills__grid { display: flex; flex-wrap: wrap; gap: 8px; }

.soft-tag {
  font-size: .8rem; padding: 7px 16px;
  border: 1px solid var(--border-h);
  border-radius: 100px; color: var(--muted);
  transition: all 0.2s, var(--theme-transition);
  cursor: default;
}

.soft-tag:hover {
  border-color: var(--accent); color: var(--accent);
  box-shadow: 0 0 12px rgba(var(--accent-rgb),.15);
}

.tools__grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
}

.tool-item {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 14px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px; font-size: .8rem; color: var(--muted);
  transition: all 0.2s, var(--theme-transition);
  cursor: default;
}

.tool-item:hover {
  border-color: var(--accent);
  color: var(--white);
  box-shadow: 0 0 14px rgba(var(--accent-rgb),.1);
  transform: translateY(-2px);
}

/* ── PROJECTS ── */
.projects {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
}

.projects__header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 48px; flex-wrap: wrap; gap: 20px;
}

.projects__filter { display: flex; gap: 8px; flex-wrap: wrap; }

.filter-btn {
  font-family: var(--font-m); font-size: .72rem;
  padding: 6px 16px; border: 1px solid var(--border-h);
  background: transparent; color: var(--muted);
  cursor: pointer; border-radius: 100px;
  letter-spacing: .05em;
  transition: all 0.2s, var(--theme-transition);
}

.filter-btn:hover { border-color: var(--white); color: var(--white); }

.filter-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg);
  box-shadow: 0 0 14px rgba(var(--accent-rgb),.3);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

/* 3D Tilt card */
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px; overflow: hidden;
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s, var(--theme-transition);
  transform-style: preserve-3d;
  perspective: 800px;
  will-change: transform;
}

.project-card:hover {
  border-color: var(--accent);
  box-shadow: 0 8px 40px rgba(var(--accent-rgb),.15), 0 0 0 1px rgba(var(--accent-rgb),.1);
}

.project-card__thumb {
  width: 100%; aspect-ratio: 16/9;
  background: linear-gradient(135deg, var(--bg-2) 0%, var(--bg-card) 100%);
  display: flex; align-items: center; justify-content: center;
  border-bottom: 1px solid var(--border);
  position: relative; overflow: hidden;
}

/* Circuit board pattern in thumb */
.project-card__thumb::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(var(--accent-rgb),.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--accent-rgb),.04) 1px, transparent 1px);
  background-size: 24px 24px;
  transition: background-image 0.5s;
}

.project-card__icon { font-size: 2.8rem; position: relative; z-index: 1; }

.project-card__body { padding: 22px; }

.project-card__meta {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 10px;
}

.project-card__cat {
  font-family: var(--font-m); font-size: .65rem;
  color: var(--accent); letter-spacing: .1em; text-transform: uppercase;
  transition: color 0.5s;
}

.project-card__period { font-family: var(--font-m); font-size: .62rem; color: var(--muted); }

.project-card__title {
  font-size: 1rem; font-weight: 600; color: var(--white);
  line-height: 1.35; margin-bottom: 10px;
}

.project-card__desc {
  font-size: .8rem; color: var(--muted); line-height: 1.7; margin-bottom: 16px;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card__tags { display: flex; flex-wrap: wrap; gap: 6px; }

.project-card__tag {
  font-family: var(--font-m); font-size: .62rem;
  padding: 3px 8px;
  background: rgba(var(--accent-rgb),.08);
  color: var(--accent);
  border: 1px solid rgba(var(--accent-rgb),.15);
  border-radius: 3px;
  transition: all 0.5s;
}

/* ── EXPERIENCE ── */
.experience { background: var(--bg); border-top: 1px solid var(--border); }

.experience__hdr { margin-bottom: 56px; }

.timeline { max-width: 800px; }

.timeline-item {
  display: grid; grid-template-columns: 160px 1fr;
  gap: 40px; padding-bottom: 44px; position: relative;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: 158px; top: 14px;
  width: 1px; height: calc(100% - 14px);
  background: var(--border);
}

.timeline-item:last-child::after { display: none; }

.timeline-item__date {
  font-family: var(--font-m); font-size: .72rem;
  color: var(--muted); text-align: right; padding-top: 2px;
}

.timeline-item__body { position: relative; }

.timeline-dot {
  position: absolute;
  left: -24px; top: 4px;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
  box-shadow: 0 0 12px var(--accent);
  transition: background 0.5s, box-shadow 0.5s;
}

.timeline-item__role {
  font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 3px;
}

.timeline-item__company {
  font-family: var(--font-m); font-size: .75rem;
  color: var(--accent); margin-bottom: 10px; transition: color 0.5s;
}

.timeline-item__desc { font-size: .875rem; color: var(--muted); line-height: 1.8; }

/* ── CONTACT ── */
.contact {
  background: var(--bg-2); border-top: 1px solid var(--border);
}

.contact__inner {
  display: grid; grid-template-columns: 1fr 1.2fr;
  gap: 80px; align-items: start;
}

.contact__headline {
  font-family: var(--font-d);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800; color: var(--white);
  line-height: 1.1; margin-bottom: 16px;
}

.contact__sub {
  font-size: .95rem; color: var(--muted); line-height: 1.75; margin-bottom: 36px;
}

.contact__list { display: flex; flex-direction: column; gap: 14px; }

.contact__item {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s, box-shadow 0.2s, var(--theme-transition);
}

.contact__item:hover {
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(var(--accent-rgb),.08);
}

.contact__icon {
  width: 36px; height: 36px;
  background: rgba(var(--accent-rgb),.08);
  border-radius: 8px; display: flex;
  align-items: center; justify-content: center;
  color: var(--accent); flex-shrink: 0;
  transition: background 0.5s, color 0.5s;
}

.contact__item-label {
  display: block; font-family: var(--font-m); font-size: .63rem;
  color: var(--accent); letter-spacing: .1em;
  text-transform: uppercase; margin-bottom: 3px; transition: color 0.5s;
}

.contact__item-val { display: block; font-size: .85rem; color: var(--white); }

.contact__form { display: flex; flex-direction: column; gap: 18px; }

.form-group { display: flex; flex-direction: column; gap: 7px; }

.form-group label {
  font-family: var(--font-m); font-size: .68rem;
  color: var(--muted); letter-spacing: .1em; text-transform: uppercase;
}

.form-group input, .form-group textarea {
  width: 100%; padding: 12px 16px;
  font-family: var(--font-d); font-size: .9rem;
  color: var(--white); background: var(--bg-card);
  border: 1px solid var(--border); border-radius: 8px;
  outline: none; resize: vertical;
  transition: border-color 0.25s, box-shadow 0.25s, var(--theme-transition);
  caret-color: var(--accent);
}

.form-group input::placeholder, .form-group textarea::placeholder { color: var(--muted); }

.form-group input:focus, .form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(var(--accent-rgb),.1);
}

.form__status { font-size: .82rem; min-height: 20px; color: var(--muted); }
.form__status.success { color: var(--accent); }
.form__status.error   { color: var(--red); }

/* ── FOOTER ── */
.footer { background: var(--bg); border-top: 1px solid var(--border); padding: 32px 0; }

.footer__inner {
  display: flex; align-items: center;
  justify-content: space-between; gap: 16px; flex-wrap: wrap;
}

.footer__name { font-size: 1rem; font-weight: 700; color: var(--white); }

.footer__role { font-size: .72rem; color: var(--muted); margin-top: 2px; }

.footer__copy { font-size: .8rem; color: var(--muted); }

.footer__top {
  width: 36px; height: 36px;
  border: 1px solid var(--border); border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  color: var(--muted); font-size: 1rem;
  transition: all 0.2s, var(--theme-transition);
}

.footer__top:hover {
  border-color: var(--accent); color: var(--accent);
  box-shadow: 0 0 14px rgba(var(--accent-rgb),.2);
}

/* ── MODAL ── */
.modal {
  position: fixed; inset: 0; z-index: 200;
  display: none; align-items: center; justify-content: center; padding: 2rem;
}

.modal.open { display: flex; }

.modal__backdrop {
  position: absolute; inset: 0;
  background: rgba(8,8,16,0.88); backdrop-filter: blur(10px); cursor: pointer;
}

.modal__box {
  position: relative;
  background: var(--bg-card);
  border: 1px solid rgba(var(--accent-rgb),.2);
  border-radius: 14px; max-width: 640px; width: 100%;
  max-height: 88vh; overflow-y: auto; z-index: 1;
  box-shadow: 0 0 60px rgba(var(--accent-rgb),.1);
  transition: border-color 0.5s, box-shadow 0.5s;
  animation: modal-in .3s var(--ease-b);
}

@keyframes modal-in {
  from { opacity: 0; transform: scale(.95) translateY(20px); }
  to   { opacity: 1; transform: none; }
}

.modal__close {
  position: absolute; top: 16px; right: 18px;
  background: none; border: none; font-size: 1rem;
  color: var(--muted); cursor: pointer; transition: color 0.2s;
}

.modal__close:hover { color: var(--white); }

.modal__body-inner { padding: 36px; }

.modal__cat {
  font-family: var(--font-m); font-size: .65rem;
  color: var(--accent); letter-spacing: .12em; text-transform: uppercase;
  margin-bottom: 8px; transition: color 0.5s;
}

.modal__title {
  font-size: 1.5rem; font-weight: 700; color: var(--white); margin-bottom: 6px;
}

.modal__period { font-family: var(--font-m); font-size: .72rem; color: var(--muted); margin-bottom: 18px; }

.modal__desc { font-size: .9rem; color: var(--muted); line-height: 1.85; margin-bottom: 24px; }

.modal__tags { display: flex; flex-wrap: wrap; gap: 8px; }

.modal__tag {
  font-family: var(--font-m); font-size: .7rem;
  padding: 5px 12px;
  background: rgba(var(--accent-rgb),.08);
  color: var(--accent); border: 1px solid rgba(var(--accent-rgb),.2);
  border-radius: 4px; transition: all 0.5s;
}

/* ── FADE-IN ── */
.fade-in {
  opacity: 0; transform: translateY(24px);
  transition: opacity .65s var(--ease), transform .65s var(--ease);
}

.fade-in.visible { opacity: 1; transform: none; }

/* ── PROGRESS BAR (scroll indicator top) ── */
.scroll-progress {
  position: fixed; top: 0; left: 0;
  height: 2px; width: 0;
  background: var(--accent);
  z-index: 200;
  transition: background 0.5s;
  box-shadow: 0 0 8px var(--accent);
}

/* ── BACK TO TOP BUTTON ── */
.back-top {
  position: fixed;
  right: 24px; bottom: 24px;
  width: 44px; height: 44px;
  background: var(--bg-card);
  border: 1px solid var(--border-h);
  border-radius: 50%; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: var(--accent); font-size: 1rem;
  opacity: 0; pointer-events: none;
  transition: all 0.3s, var(--theme-transition);
  box-shadow: 0 4px 20px rgba(0,0,0,.4);
  z-index: 400;
}

.back-top.visible { opacity: 1; pointer-events: all; }
.back-top:hover { border-color: var(--accent); box-shadow: 0 0 18px rgba(var(--accent-rgb),.3); transform: translateY(-2px); }

/* ── RESPONSIVE ── */
@media (max-width: 960px) {
  .hero__container   { grid-template-columns: 1fr; text-align: center; }
  .hero__sub         { max-width: 100%; margin: 0 auto 28px; }
  .hero__tags        { justify-content: center; }
  .hero__actions     { justify-content: center; }
  .hero__contacts    { align-items: center; }
  .hero__right       { order: -1; }
  .hero__photo-wrap  { width: 220px; }
  .hero__photo-frame { width: 220px; }
  .hero__photo       { width: 220px; height: 220px; }
  .hero__stats       { width: 260px; }
  .about__grid       { grid-template-columns: 1fr; }
  .about__body-cols  { grid-template-columns: 1fr; }
  .skills__layout    { grid-template-columns: 1fr; }
  .contact__inner    { grid-template-columns: 1fr; gap: 48px; }
  .timeline-item     { grid-template-columns: 100px 1fr; gap: 24px; }
  .timeline-item::after { left: 98px; }
}

@media (max-width: 700px) {
  .nav__links  { display: none; }
  .nav__toggle { display: flex; }
  .section     { padding: 64px 0; }
  .about__info-grid  { grid-template-columns: 1fr; }
  .projects__header  { flex-direction: column; align-items: flex-start; }
  .projects__grid    { grid-template-columns: 1fr; }
  .timeline-item     { grid-template-columns: 1fr; gap: 8px; }
  .timeline-item::after { display: none; }
  .timeline-dot      { left: -18px; }
  .footer__inner     { justify-content: center; text-align: center; }
  .photo-badge       { display: none; }
  .hero__photo-ring  { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
