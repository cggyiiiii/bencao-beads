# 本草香珠 BenCao Beads — Website Brief

## Brand
- Name: 本草香珠 / BenCao Beads
- Tagline CN: 以香养身，以珠安心
- Tagline EN: Heal with Fragrance, Rest with Beads
- Position: TCM body constitution × fragrant medicinal bead bracelets
- Target: Malaysian Chinese (25-55), bilingual CN/EN
- Contact: WhatsApp +601164362283

## Design Direction
AESTHETIC: Eastern Apothecary Luxury — NOT generic wellness.
Think: premium traditional Chinese medicine cabinet meets modern e-commerce.
- Color: Deep walnut (#3E2723), aged parchment (#F5E6CA), gold foil (#C9A84C), sage green (#8B9D77), cinnabar red (#A52422)
- Texture: Rice paper grain, wood grain, subtle ink wash backgrounds
- Typography: CN — Noto Serif SC or similar elegant serif. EN — a distinctive serif like Playfair Display or Cormorant Garamond
- Mood: You walk into an old Chinese apothecary, wooden drawers everywhere, herbs hanging, incense burning. But the website is clean and modern.
- Motion: Subtle — scroll reveals, gentle parallax, ink brush animations on load

## Pages

### 1. Home (index.html)
- Hero: Full-width atmospheric image/gradient with brand name + tagline
- "Find Your Constitution" CTA button → links to quiz
- 3 value props: 中医配方 (TCM Formula) / 天然药材 (Natural Herbs) / 手工制作 (Handcrafted)
- Featured products (3-4 hero products)
- Brand story section (short)
- Footer with WhatsApp CTA

### 2. Body Constitution Quiz (quiz.html)
- Interactive 9-question quiz based on TCM 九种体质
- Questions about sleep, energy, digestion, temperature preference, etc.
- Result page: shows your constitution type + recommended bracelet
- WhatsApp CTA: "Order your personalized bracelet"
- This is the CORE conversion funnel

### 3. Products (products.html)
- Categories: 香珠手串 (Bracelets) / 香牌项链 (Necklaces) / 小挂件 (Charms) / 养生用品 (Wellness)
- Product cards with image placeholder, name, price in MYR
- Click → product detail modal or section
- Each product shows: name, description, constitution match, price, WhatsApp order button

### 4. About (about.html)
- Brand story: TCM doctor collaboration
- The 9 constitutions explained
- Quality & craftsmanship
- Why BenCao Beads

## Products & Pricing (MYR, converted from CNY×0.65)

### Bracelets (香珠手串)
Based on 9 body constitutions:
| Constitution | CN | Scent | Retail MYR |
|---|---|---|---|
| Qi Stagnation | 气郁体质 | 舒香 | 89 |
| Blood Stasis | 血瘀体质 | 通香 | 89 |
| Qi Deficiency | 气虚体质 | 正香 | 89 |
| Yang Deficiency | 阳虚体质 | 温香 | 89 |
| Yin Deficiency | 阴虚体质 | 润香 | 89 |
| Balanced | 平和体质 | 和香 | 89 |
| Phlegm-Damp | 痰湿体质 | 化香 | 89 |
| Damp-Heat | 湿热体质 | 清香 | 89 |
| Allergic | 特禀体质 | 敏香 | 89 |

Sizes: 8mm (RM79), 10mm (RM85), 12mm (RM89), 14mm (RM99), 16mm (RM109)
Fortune character beads: 13mm (RM89)
Five Element beads: 12mm (RM89)

### Necklaces (香牌项链)
Large pendants: RM49-69
Small pendants: RM29-39
Styles: 双面福, 莲花(爆款), 祥云, 观音, 关公, 麒麟招财, 九尾狐狸, etc.

### Charms (小挂件)
RM19-49
Styles: 招财进宝, 五行葫芦, 莲花衣挂, 五行小马, etc.

### Wellness (养生用品)
通络梳香 RM59
莲花刮痧板 RM39
莲花香插 RM29

## Technical
- Pure HTML/CSS/JS (no framework)
- Single repo, deploy on Railway
- Bilingual: CN default, EN toggle (JS-based language switch, data-lang attributes)
- Mobile-first responsive
- WhatsApp deep link: https://wa.me/601164362283?text=...
- No backend needed yet
- Images: use placeholder colors/gradients for now (real product photos later)

## Language Toggle
Use data-lang="cn" and data-lang="en" on elements.
JS toggle switches display. Default: CN.
Store preference in localStorage.

## File Structure
```
index.html
quiz.html
products.html
about.html
css/style.css
js/main.js
js/quiz.js
js/products.js
js/i18n.js
```

IMPORTANT: Follow the frontend-design skill guidelines. This must NOT look like generic AI output. Make it feel like a real premium TCM brand. Every detail matters — the fonts, the textures, the spacing, the micro-interactions. This is an apothecary, not a Bootstrap template.
