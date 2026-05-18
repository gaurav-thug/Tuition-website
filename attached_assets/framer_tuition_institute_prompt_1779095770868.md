# FRAMER AI WEBSITE GENERATION PROMPT
## Premium Tuition & Coaching Institute Showcase Website

---

## CORE BRIEF

Create a **premium, modern, conversion-optimised showcase website** for a professional tuition and coaching institute. This is NOT an LMS or e-learning platform. The sole purpose is to professionally present the institute, build deep trust with parents and students, and generate admissions inquiries and leads. The overall feel must be comparable to elite modern SaaS and education startup websites — refined, clean, and confidence-inspiring.

---

## GLOBAL DESIGN SYSTEM

### Color Palette
- **Primary Blue:** `#1A56DB` — buttons, accents, highlights
- **Deep Navy:** `#0D1B3E` — headings, footer background, dark sections
- **Sky Accent:** `#60A5FA` — subtle gradients, hover glows, decorative elements
- **Pure White:** `#FFFFFF` — section backgrounds, cards
- **Soft Gray BG:** `#F4F7FE` — alternating section backgrounds
- **Muted Text:** `#64748B` — body copy, subtitles
- **Success Green:** `#10B981` — achievement badges, stats
- **Gold Accent:** `#F59E0B` — toppers, star ratings, achievement highlights

### Typography
- **Display / Hero Headlines:** `Playfair Display` — bold, elegant, 700–900 weight. Used for section titles and the hero headline only.
- **UI & Body Font:** `DM Sans` — clean, modern, highly legible. Used for all body copy, buttons, navigation, cards.
- **Accent / Numbers Font:** `Space Grotesk` — for statistics counters, badge numbers, large numerical displays.
- **Hierarchy:**
  - Hero H1: 64px–80px, bold, tight line-height 1.1
  - Section H2: 40px–52px, semibold
  - Card H3: 22px–28px, medium
  - Body: 16px–18px, regular, line-height 1.7
  - Caption/Label: 12px–14px, uppercase, letter-spacing 0.08em

### Spacing & Layout
- **Max content width:** 1200px centered
- **Section vertical padding:** 100px top and bottom on desktop, 64px on mobile
- **Card gaps:** 24px–32px
- **Border radius:** Cards 20px, Buttons 12px, Badges 100px (pill)
- **Grid system:** 12-column, responsive collapsing to 4-column on mobile

### Visual Style Rules
- Apply **glassmorphism** on cards overlaid on gradient/image backgrounds: `background: rgba(255,255,255,0.08)`, `backdrop-filter: blur(20px)`, thin white 1px border
- Use **soft blue-to-white radial gradients** as section backgrounds sparingly (hero, CTA section)
- **Subtle mesh gradient** on hero: deep navy top fading to mid-blue, with soft light orbs (blurred circles, opacity 0.15)
- All cards have a **hover lift effect**: `transform: translateY(-6px)`, box-shadow elevation increase, smooth 300ms ease transition
- Decorative **geometric line patterns** (very low opacity, 0.04–0.06) as background texture on dark sections
- **No harsh drop shadows** — use soft, diffused shadows: `box-shadow: 0 20px 60px rgba(26,86,219,0.10)`

### Icons
- Use **Phosphor Icons** or **Heroicons** (outlined style) throughout — consistent stroke weight 1.5px
- Icon size in feature cards: 28px–32px, placed in a soft blue rounded square container (48×48px, `background: #EFF6FF`, `border-radius: 12px`)
- CTA icons: arrow-right, phone, whatsapp-logo, envelope
- Achievement icons: trophy, star, graduation-cap, chart-bar, check-circle

### Animations & Transitions
- **Page load:** Staggered fade-up reveal for hero elements — headline (0ms), tagline (100ms), CTAs (200ms), stats (350ms)
- **Scroll reveal:** All section content fades in and slides up 24px as it enters viewport. Stagger child elements 80ms apart.
- **Counter animation:** Statistics numbers count up from 0 when the stats section enters viewport (1.5s duration, ease-out)
- **Card hover:** `transform: translateY(-6px) scale(1.01)` + shadow intensify, 300ms ease
- **Button hover:** Background lightens 10%, slight scale 1.02, icon nudges right 4px
- **Navbar:** On scroll past 80px, navbar gains `backdrop-filter: blur(20px)` + soft white background with shadow
- **Image hover in gallery:** Soft zoom `scale(1.06)` with overlay fade
- All transitions: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

---

## NAVIGATION

Build a **sticky top navigation bar** that is transparent on load and becomes a frosted-glass white bar on scroll.

**Left:** Institute logo (text-based: bold navy wordmark + small icon mark) + tagline in tiny muted text below
**Center:** Navigation links — Home | About | Courses | Faculty | Results | Gallery | Contact (DM Sans, 15px, medium weight, hover underline animation with blue color)
**Right:** Two buttons — `📞 Call Now` (outline style, navy border) + `WhatsApp Us` (solid green `#25D366`, white text, WhatsApp icon)

**Mobile:** Hamburger menu icon opens a full-screen slide-down menu with all links stacked, CTA buttons at bottom. Smooth open/close animation.

---

## SECTION 1 — HERO

**Layout:** Full-viewport height (100vh minimum). Two-column on desktop (55% text left, 45% visual right). Single column stacked on mobile.

**Background:** Deep navy (`#0D1B3E`) with a soft radial gradient light source in top-right (blue `#1A56DB` at 30% opacity, blurred 200px). Subtle geometric dot-grid pattern at 4% opacity overlay.

**Left Column Content:**
- Small pill badge at top: `🏆 Trusted by 5,000+ Families` — white text, semi-transparent white border, glassmorphism style
- H1 Headline (Playfair Display, white): *"Where Every Student's Potential Becomes Their Achievement"*
- Subheadline (DM Sans, 20px, `#93C5FD`): *"Expert coaching for Classes 6–12 | CBSE | ICSE | State Board | Competitive Exams. Small batches. Big results."*
- Three CTA buttons row:
  - `📞 Call Now` — solid white, navy text, rounded 12px
  - `💬 WhatsApp Us` — solid `#25D366`, white text
  - `📅 Book Free Demo` — outlined white border, white text
- Micro-label below buttons: *"No registration fee for demo class • Limited seats"*

**Right Column Visual:**
- Large rounded-corner image card (border-radius 24px) showing a bright, professional classroom scene with engaged students
- Floating stat badge overlapping bottom-left of image: glassmorphism card showing *"98% Parent Satisfaction"* with star icon
- Floating subject badge overlapping top-right: small pill showing *"Science | Math | English"*

**Statistics Bar** — below the two-column content, a full-width row of 4 animated counters, separated by soft dividers:
- `5,000+` Students Taught
- `15+` Years of Excellence
- `98%` Results Rate
- `12+` Expert Faculty

Stats bar has a semi-transparent white glassmorphism background card with blue number text (Space Grotesk, bold, 48px) and label below (DM Sans, 14px, muted).

**Images to use:** Bright, professional, diverse students studying in a modern classroom; teacher explaining at whiteboard; students in uniforms looking confident. Warm lighting. Real photography style, not stock-photo generic.

---

## SECTION 2 — ABOUT THE INSTITUTE

**Layout:** Alternating two-column. Background: `#F4F7FE`.

**Left:** Large image stack — primary photo (founder or classroom) with a smaller overlapping photo card (students or awards wall). Add a floating badge: *"Est. 2009"* in gold accent.

**Right:** Content
- Section label (uppercase, blue, 13px): `WHO WE ARE`
- H2: *"15 Years of Shaping Bright Futures"*
- Body copy (2–3 short paragraphs): History of the institute, founding vision, commitment to personalized education, community trust
- Founder's vision quote in a highlighted blockquote card: blue left-border, light blue background, italic Playfair Display text, founder name + designation below
- Three mini-stat cards in a row below: Years Active | Students | Branches
- CTA link: *"Meet Our Faculty →"* in blue underline style

**Images to use:** Warm, professional photo of institute founder or director (formal attire, confident pose). Interior shots of clean classrooms.

---

## SECTION 3 — COURSES OFFERED

**Layout:** White background. Section header centered. Then a category tab row followed by a card grid.

**Section Header:**
- Label: `WHAT WE TEACH`
- H2: *"Comprehensive Coaching Across All Subjects & Boards"*
- Subtitle: *"From foundational classes to competitive exam prep — we cover it all."*

**Category Filter Tabs** (horizontally scrollable on mobile):
- All | Classes 6–8 | Classes 9–10 | Classes 11–12 | Competitive Exams | Foundation

**Course Cards Grid** (3 columns desktop, 2 tablet, 1 mobile):

Each card includes:
- Icon in colored rounded square (subject color-coded: blue for Science, green for Math, orange for English, purple for SST, red for Commerce)
- Subject name (H3, bold)
- Classes covered (small pill badge)
- Board compatibility pills: `CBSE` `ICSE` `State Board`
- 3 bullet points of key highlights (check icons)
- `View Details →` link at bottom

**Sample Cards:**
1. Mathematics — Classes 6–12 — CBSE, ICSE, State
2. Science (Physics, Chemistry, Biology) — Classes 8–12
3. English Language & Literature — Classes 6–12
4. Social Studies / History / Geography — Classes 6–10
5. Commerce (Accounts, Economics, Business Studies) — Classes 11–12
6. Competitive Exam Prep (JEE Foundation, NEET Foundation, Olympiad, NTSE)

Cards have hover lift, top colored border accent matching subject color, and a soft gradient background.

---

## SECTION 4 — FACULTY SECTION

**Layout:** Background `#F4F7FE`. Section header centered. 4-column card grid (2 on tablet, 1 on mobile).

**Section Header:**
- Label: `MEET THE TEAM`
- H2: *"Learn from the Best — Experienced, Passionate Educators"*

**Faculty Cards:**

Each card is a premium profile card:
- Professional photo (circular, with colored ring border matching subject color)
- Name (bold, 18px)
- Subject specialization (blue pill badge)
- Qualification (muted, 14px) — e.g., *M.Sc. Physics, IIT Delhi*
- Years of experience (small icon + text)
- Short bio (2 lines max)
- Social icon row (LinkedIn icon only, subtle)
- Thin bottom colored stripe matching subject

**Sample Faculty (4–6 cards):**
- Mr. Rajesh Kumar — Mathematics — M.Sc. Math, 12 Years Exp.
- Dr. Priya Sharma — Science (Physics & Chemistry) — Ph.D., 10 Years Exp.
- Ms. Anita Verma — English — M.A. English Literature, 8 Years Exp.
- Mr. Sandeep Singh — Commerce — CA, 9 Years Exp.
- Ms. Neha Gupta — Biology — M.Sc. Zoology, 7 Years Exp.
- Mr. Arun Mehta — SST & Foundation — M.A. History, 11 Years Exp.

Cards have a soft hover: white lift, subtle shadow intensify, profile ring glows.

---

## SECTION 5 — WHY CHOOSE US

**Layout:** White background. Section header centered. Then a two-part layout: left large visual (classroom or institute image with floating badge), right 3×2 feature grid.

**Section Header:**
- Label: `OUR ADVANTAGE`
- H2: *"The Smart Choice for Your Child's Academic Success"*

**Feature Grid (6 cards, 2 columns):**

Each feature card: Icon (outlined, in blue rounded box) + Bold title + 2-line description

1. 🎯 **Small Batch Sizes** — Max 12–15 students per batch for focused, personalized attention
2. 👨‍🏫 **Expert Faculty** — IIT/NIT qualified, experienced teachers with proven track records
3. 💬 **Personalized Attention** — Individual progress tracking and one-on-one doubt sessions
4. 📊 **Proven Results** — 98%+ students achieve their target grades year after year
5. 🏛️ **Modern Infrastructure** — AC classrooms, smart boards, study material included
6. 📱 **Parent Updates** — Regular performance reports and transparent communication

Left side image: modern classroom interior with engaged students. Floating badge on image: *"Top Coaching Institute — City Award 2023"* (glassmorphism, gold icon).

---

## SECTION 6 — ACHIEVEMENTS & RESULTS

**Layout:** Dark section — background `#0D1B3E` with subtle diagonal geometric pattern overlay at 5% opacity. White and light-colored text throughout.

**Section Header (centered, white):**
- Label (sky blue, uppercase): `OUR TRACK RECORD`
- H2 (white): *"Results That Speak Louder Than Words"*

**Animated Statistics Row** (4 counters, glassmorphism cards):
- `5,000+` Happy Students
- `98%` Board Exam Pass Rate
- `300+` District Toppers Produced
- `15+` Years of Excellence

**Topper Highlight Cards** — horizontal scrollable row of 3–4 cards:

Each card: Glassmorphism (white 8% background, blur), student photo circle, name, score achieved (large gold number), subject/board, year. Gold trophy icon at top of card.

**Achievement Badges Row** — pill badges in light blue/gold: *"Best Coaching Centre 2023" | "5-Star Rated on Google" | "CBSE Expert Partner" | "1000+ Students in Top Schools"*

**Board Results Highlight** — small table-style card: Board | Appeared | Passed | Distinction — 3 rows for CBSE, ICSE, State Board

---

## SECTION 7 — TESTIMONIALS & REVIEWS

**Layout:** Background `#F4F7FE`. Section header. Mixed card grid.

**Section Header (centered):**
- Label: `WHAT THEY SAY`
- H2: *"Trusted by 5,000+ Students and Their Families"*
- Google rating badge: ⭐⭐⭐⭐⭐ `4.9/5 on Google Reviews` (with Google G icon)

**Testimonial Cards Grid** (3 columns desktop, masonry-style stagger):

Each card: White background, rounded 20px, soft shadow, top blue quotation mark (decorative, large, muted)
- Review text (Playfair italic, 16–17px)
- Reviewer name (bold, DM Sans)
- Role (small, muted): *Parent of Class 10 Student* or *Former Student, now at IIT*
- Star rating (5 gold stars)
- Verified badge (green checkmark + *"Verified Parent/Student"*)
- Profile photo (small circle, 40px)

Include 1 card styled as a **video testimonial placeholder**: dark overlay card with large play button circle center, reviewer name and role below, "Watch Story" CTA — this is a visual placeholder only.

Mix parent reviews and student reviews. 6 cards total. Stagger heights for masonry feel.

---

## SECTION 8 — PHOTO GALLERY

**Layout:** White background. Section header centered. Masonry/Pinterest-style image grid.

**Section Header:**
- Label: `LIFE AT [INSTITUTE NAME]`
- H2: *"A Glimpse Inside Our Learning Community"*

**Category Filter Tabs:** All | Classrooms | Events | Infrastructure | Activities | Achievements

**Gallery Grid:** 4-column masonry grid on desktop, 2-column on tablet, 1-column on mobile.
- Varying image heights for masonry feel
- On hover: soft dark overlay fades in with a white expand icon center and category label bottom-left
- Images: modern classrooms, students working in groups, teachers at smart boards, science lab sessions, prize distribution ceremonies, parent-teacher meetings, institute exterior, library/study area
- 12 images total in the grid
- "Load More" button at bottom (outlined blue)

All gallery images: real, warm, professional photography style. No stock-photo genericness. Bright lighting. Clean environments.

---

## SECTION 9 — BRANCH LOCATIONS

**Layout:** Background `#F4F7FE`. Section header. Then a two-column split: left is a map embed area, right is branch address cards.

**Section Header (centered):**
- Label: `FIND US`
- H2: *"Multiple Branches — Convenient to You"*

**Left:** Large Google Maps embed placeholder (styled rounded container, 500px height, map-style background with location pin icon center as placeholder visual, text: *"Interactive Map — 3 Locations"*)

**Right:** Stacked Branch Cards (3 cards):

Each card: White, rounded 16px, soft shadow
- Branch name badge (colored pill: Main Branch, Branch 2, Branch 3)
- Full address (bold name, muted address lines)
- 📞 Phone number (clickable link)
- 🕐 Timings: Mon–Sat, 7AM–8PM
- Two buttons: `Get Directions →` (blue outline) | `Call Branch` (blue solid, small)

**Bottom Note:** *"All branches are AC-equipped, accessible, and offer the same quality of education."*

---

## SECTION 10 — FAQs

**Layout:** White background. Two-column: left heading + contact prompt, right accordion list.

**Left:**
- Label: `COMMON QUESTIONS`
- H2: *"Everything You Need to Know"*
- Body: *"Have more questions? Our team is happy to help."*
- Button: `Ask on WhatsApp →` (green)

**Right — Accordion (8 FAQs):**

Each FAQ: Question row (bold, with + / − toggle icon), answer slides open smoothly below.

1. What is the batch size per class?
2. Do you provide study materials?
3. How do I enroll my child?
4. What boards do you cover?
5. Are demo classes available?
6. How do you track student progress?
7. What are the fee payment options?
8. Do you offer online doubt support?

Accordion items have a soft blue left-border when open. Smooth expand/collapse animation 300ms.

---

## SECTION 11 — CONTACT / INQUIRY SECTION

**Layout:** Two-column on desktop (form left, contact info right). Background: white with a soft blue radial gradient top-right decoration.

**Section Header:**
- Label: `GET IN TOUCH`
- H2: *"Start Your Child's Success Journey Today"*
- Subtitle: *"Fill in the form and we'll get back to you within 24 hours."*

**Left — Inquiry Form:**

Styled form card (white, rounded 24px, premium shadow):
- Full Name field
- Phone Number field
- Student's Class / Grade (dropdown)
- Subject / Course of Interest (dropdown)
- Preferred Branch (dropdown)
- Message / Additional Notes (textarea, 3 rows)
- `Submit Inquiry` button — full width, solid blue, large 56px height, rounded 12px, with arrow-right icon

Form fields: DM Sans, 16px, soft border `#E2E8F0`, focus glow blue border, rounded 10px, 48px height.

**Right — Contact Info Cards:**

Stack of info cards:
- 📞 Phone: `+91 98765 43210` (large, bold, clickable)
- 💬 WhatsApp: `Chat with us` (green button)
- 📧 Email: `admissions@institute.com`
- 📍 Main Address: Full address text
- 🕐 Office Hours: Mon–Sat | 8AM–7PM

Below cards: Social link icons row (Instagram, Facebook, YouTube, Google Maps) — circle icon buttons, navy background, white icons, hover lifts.

---

## SECTION 12 — FLOATING WHATSAPP BUTTON

**Position:** Fixed, bottom-right corner, `bottom: 28px`, `right: 28px`, `z-index: 9999`

**Design:** Circle button, 60px diameter, `background: #25D366`, WhatsApp SVG icon (white, 30px center). Soft drop shadow. Pulse animation ring (expanding ring fades out, repeating every 2 seconds — attention-grabbing but not annoying).

**On hover:** Scale 1.08, shadow intensifies.
**On click:** Opens `https://wa.me/[number]?text=Hi, I'm interested in admissions`

Also add a small label pill that appears on first load after 3 seconds: `💬 Chat with Us` floating left of the button, white pill, then fades out after 4 seconds.

---

## FOOTER

**Layout:** Full-width, background `#0D1B3E` (deep navy). White and muted text.

**Structure — 4 columns:**

**Column 1 — Brand:**
- Institute logo/name (white wordmark)
- Tagline (sky blue, 14px italic)
- Short description: *"Empowering students since 2009 through expert coaching, personalized attention, and proven results."*
- Social icons row: Instagram, Facebook, YouTube, Google — circle icons, white border, hover blue fill

**Column 2 — Quick Links:**
- Heading: `QUICK LINKS`
- Links: Home | About | Courses | Faculty | Results | Gallery | Contact
- Each link: muted white, hover → bright white with underline

**Column 3 — Courses:**
- Heading: `OUR COURSES`
- Links: Mathematics | Science | English | Commerce | SST | Competitive Exams
- Same link style

**Column 4 — Contact:**
- Heading: `CONTACT US`
- 📞 Phone number (bold white)
- 💬 WhatsApp link
- 📧 Email
- 📍 Main branch short address
- `Book Free Demo →` button (outlined white, rounded)

**Bottom Bar** (thin divider above):
- Left: Copyright © 2025 [Institute Name]. All rights reserved.
- Right: Privacy Policy | Terms of Use
- Both muted, 13px

---

## IMAGE DIRECTION (for all sections)

Use these types of images throughout:
- **Students:** Diverse Indian students, Class 6–12 age range, in uniforms or casual study wear, genuinely engaged — studying at desks, raising hands, working in groups, looking at boards
- **Classrooms:** Modern, clean, well-lit rooms — smart boards or whiteboards, good furniture, plants, organized — NOT old or cluttered
- **Teachers:** Professional, approachable Indian educators — formal or smart-casual attire, at whiteboard or sitting with students, confident
- **Infrastructure:** Library shelves, study tables, reception area, institute exterior signage, science lab equipment
- **Events:** Prize distribution, cultural programs, parent-teacher meetings, group photos
- **Avoid:** Overly Western stock photos, irrelevant ethnicity mismatches, generic laptop stock imagery, corporate office settings unrelated to education
- **Style:** Warm natural lighting, authentic candid feel, high resolution, not overly posed

---

## FINAL TECHNICAL REQUIREMENTS

- **SEO:** Each section has a semantic HTML landmark (`<section>`, `<header>`, `<footer>`, `<nav>`, `<main>`). H1 only once (hero). H2 for all section titles. Alt text on all images.
- **Performance:** Lazy-load all images below the fold. Use next-gen image formats (WebP). Minimize animation on `prefers-reduced-motion`.
- **Responsiveness:** Mobile-first. All grids collapse gracefully. Font sizes scale using `clamp()`. Touch targets minimum 44px. Navigation becomes hamburger below 768px.
- **Framer Components:** Build as reusable components — NavBar, HeroSection, CourseCard, FacultyCard, TestimonialCard, StatCounter, GalleryItem, FAQItem, ContactForm, Footer. Each component independently resizable and editable in Framer.
- **CMS-ready:** Course cards, faculty cards, testimonials, and gallery items should use Framer CMS collections so content can be edited without code changes.
- **Smooth Scrolling:** Enable CSS `scroll-behavior: smooth`. Section anchor IDs match nav links.
- **Conversion Optimised:** WhatsApp button always visible. CTAs repeated in hero, about, and bottom CTA section. Phone number in navbar on desktop. Inquiry form above the fold on contact section.
- **Colour Contrast:** All text meets WCAG AA contrast ratios. White text only on sufficiently dark backgrounds.

---

*Generate this as a complete, production-ready Framer website using the above design system, section structure, content, and technical specifications. Prioritize visual quality, conversion-friendliness, and mobile responsiveness above all.*
