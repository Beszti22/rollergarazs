# RollerGarázs — Design System Master

## 1. Brand Identity
- **Name:** RollerGarázs
- **Founded:** 2023 (as seen on badge: "RG 2023 ROLLER GARÁZS")
- **Location:** 2131 Göd, Mikszáth Kálmán utca 68. (Béke u. sarok)
- **Sector:** Specialized Electric Scooter Repair, Commissioning & Custom Tuning (Márkafüggetlen elektromos roller szerviz, beüzemelés, tuning)
- **Signature Persona:** Joe / RollerGarázs YouTube creator (@RollerGarazs2020) — practical mechanical mastery, KuKirin specialist, transparent pricing, 5.0 Google rating.

## 2. Visual Style & Dial
- **Tier:** Expressive Garage & Precision Engineering
- **Variance:** 6 | **Motion:** 5 | **Density:** 4 (clean, scannable, industrial precision)
- **Aesthetic:** Dark Carbon, Matte Obsidian, Racing Red Glow, Hexagonal Motifs, High-contrast Metallic accents.

## 3. Design Tokens

### Colors
```css
:root {
  --bg-base: #0a0d14;
  --bg-surface: #111622;
  --bg-surface-elevated: #171f30;
  --bg-card-hover: #1c263c;
  
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.16);
  --border-accent: rgba(229, 37, 33, 0.4);
  
  --color-primary: #e52521;
  --color-primary-glow: rgba(229, 37, 33, 0.35);
  --color-primary-hover: #ff3834;
  --color-primary-dark: #b81b18;
  
  --color-secondary: #f59e0b;
  --color-electric: #00d2ff;
  --color-success: #10b981;
  
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-full: 9999px;
  
  --font-heading: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
  --shadow-glow: 0 0 25px rgba(229, 37, 33, 0.25);
}
```

## 4. Key Sections
1. **Header & Navigation**: Sticky blur bar, logo badge, opening status, direct phone CTA, i18n toggle.
2. **Hero**: High-impact statement, 5.0 review badge, primary CTA ("Hibabejelentés / Árajánlat"), direct call CTA, trust badges (KuKirin, Xiaomi, Ninebot, Joyor).
3. **Quick Problem Solver (Típushibák & Megoldások)**: Specific solutions for KuKirin wobble/brakes, Xiaomi punctures/latch, high-power machine diagnostics.
4. **Services & Pricing Guide**: Commissioning / Nullrevízió, Puncture & Solid tire repair, Hydraulic brake upgrade, Suspension / stem play, Diagnostics & waterproofing.
5. **Interactive Diagnosis & Quote Calculator**: Instant interactive selector (Brand + Issue) calculating turnaround and price estimate, with contact lead form.
6. **YouTube & Workshop Proof**: Highlighting the real repair workshop and channel videos.
7. **Reviews**: Real 5.0 customer experiences from Göd and Dunakeszi/Budapest area.
8. **Contact & Route**: Göd address, Google Maps / Waze buttons, interactive map, opening hours.
9. **Floating Mobile Action Bar**: Instant call, route and quote triggers.
