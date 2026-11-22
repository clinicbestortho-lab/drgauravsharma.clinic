# Dr. Gaurav Sharma Orthopaedic Clinic — Production Website

Production-grade, Awwwards-crafted medical practice platform for **Dr. Gaurav Sharma Orthopaedic Clinic**, Sikandra, Agra, Uttar Pradesh (deployed at [https://drgauravsharma.clinic](https://drgauravsharma.clinic), rebuilt from the demo at `https://bestorthoclinic.vercel.app`).

Built with calm authority, medical precision, and human warmth. Optimized for patients aged 30–75 across Agra, Sikandra, Bodla, Dayalbagh, and Western UP on mid-range Android devices over 4G networks.

---

## 🏗️ Architecture & Technology Stack

- **Framework**: Next.js 15 (App Router, React Server Components, TypeScript Strict)
- **Styling**: Tailwind CSS v4 with bespoke clinical design tokens (`#0F2744` deep navy, `#FAF8F4` warm off-white, `#0D7E8A` restrained teal, `#C28E38` warm gold)
- **Internationalization**: `next-intl` with full English (`/`) and Hindi (`/hi/...`) parity, persisted locale state
- **Motion & Storytelling**:
  - **GSAP 3 + ScrollTrigger**: Count-up trust stats, pinned philosophy sequences, responsive `matchMedia`, ticker-synchronized Lenis smooth scrolling
  - **Motion (`motion/react`)**: Shared-element layout indicator for procedure chips, filter re-flowing, AnimatePresence symptom navigator, FAQ accordions, and mobile navigation drawer
- **Type-Safe Validation**: `react-hook-form` + `zod` for Indian phone number validation, honeypot spam protection, and server-side rate limiting
- **Search Engine Optimization (SEO/AEO)**:
  - Full structured JSON-LD data: `Physician`, `MedicalClinic`, `MedicalProcedure` (for all 12 surgeries), `FAQPage`, `VideoObject`, `BreadcrumbList`
  - Automated `sitemap.xml` (all 73 static pages pre-rendered in English and Hindi) and `robots.txt`
  - Dynamic OpenGraph and Twitter cards

---

## 📁 Repository Structure

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx             # Root locale layout with fonts, JSON-LD, Lenis, Header, Footer
│   │   ├── page.tsx               # Production Home page (all 13 sections in sequence)
│   │   ├── about/page.tsx         # Doctor biography, faculty background, surgical ethics
│   │   ├── credentials/page.tsx   # Verified degrees, UPMC registration (48757) verification
│   │   ├── surgeries/
│   │   │   ├── page.tsx           # Searchable surgical procedures catalog with live filters
│   │   │   └── [slug]/page.tsx    # Dedicated SEO procedure page (12 procedures)
│   │   ├── conditions/
│   │   │   ├── page.tsx           # Areas of care directory
│   │   │   └── [slug]/page.tsx    # Dedicated anatomical condition page (9 areas)
│   │   ├── clinic/page.tsx        # Location, hours, travel guide from Agra & nearby
│   │   ├── faq/page.tsx           # Full categorized FAQ knowledgebase
│   │   ├── videos/page.tsx        # Hindi educational video gallery with lite YouTube embeds
│   │   ├── patient-stories/page.tsx # NMC-compliant recovery logs (behind feature flag)
│   │   ├── contact/page.tsx       # Booking consultation form + Emergency trauma protocol
│   │   ├── privacy/page.tsx       # Privacy and healthcare data policy
│   │   ├── terms/page.tsx         # Terms of use and clinical disclaimer
│   │   └── consent/page.tsx       # Patient media and informed consent policy
│   ├── actions/booking.ts         # Server action for appointment requests with Zod validation
│   ├── globals.css                # Fluid typography (min 17px body) and Tailwind v4 theme tokens
│   ├── robots.ts                  # Search crawler directives
│   └── sitemap.ts                 # XML sitemap generator
├── components/
│   ├── layout/                    # Header, Footer, TopUtilityStrip, MobileStickyBar, BookingCTA
│   ├── sections/                  # Hero, SymptomNavigator, MeetDoctor, Philosophy, Surgeries, etc.
│   ├── booking/                   # BookingForm, EmergencyBlock
│   ├── motion/                    # LenisProvider, Reveal, SplitHeading, CountUp, Magnetic
│   └── ui/                        # Button, Badge, Breadcrumbs, LanguageSwitcher, TextSizeToggle
├── content/                       # Typed clinical data (no hardcoded JSX copy)
│   ├── surgeries.ts               # 12 procedures with indications, timelines, highlights
│   ├── conditions.ts              # 8 symptom navigator regions + 9 areas of care
│   ├── faqs.ts                    # Categorized clinical FAQs
│   ├── videos.ts                  # Hindi educational videos metadata
│   └── patientStories.ts          # Seed data with FEATURE_FLAG_PATIENT_STORIES flag
├── i18n/                          # next-intl routing and request configuration
├── lib/
│   ├── clinic.ts                  # Single source of truth for doctor, clinic, hours & contacts
│   ├── seo.ts                     # Metadata & JSON-LD schema generators
│   └── animations.ts              # GSAP easing curves, durations, and reduced-motion checks
└── messages/                      # Translation catalogs (en.json and hi.json)
```

---

## 🛠️ How to Edit Clinic Content (For Clinic Staff)

Content lives in typed TypeScript files under `/content` and `/lib/clinic.ts`. To make updates:

1. **Clinic Hours, Phone Numbers, or Social Media Links**:
   - Edit `lib/clinic.ts` -> update `CLINIC_CONTACT`, `CLINIC_TIMINGS`, or `CLINIC_LOCATION`. All footers, headers, buttons, and JSON-LD schemas update automatically.
2. **Adding or Modifying Surgical Procedures**:
   - Edit `content/surgeries.ts` -> Add or edit procedures in `SURGERIES`. New pages and sitemaps are generated automatically.
3. **Adding or Updating FAQs**:
   - Edit `content/faqs.ts` -> Update `FAQS` array. Both the FAQ index and schema update in sync.
4. **Enabling Patient Stories (Testimonials)**:
   - Edit `content/patientStories.ts` -> Set `FEATURE_FLAG_PATIENT_STORIES = true` once explicit written consent and doctor approval are verified.

---

## 🚀 Deployment Instructions (Vercel)

1. Push this repository to GitHub or GitLab:
   ```bash
   git init
   git add .
   git commit -m "feat: production build of Dr. Gaurav Sharma clinic website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Import the project into your Vercel Dashboard.
3. Set the Root Directory to `./` (Framework preset: Next.js).
4. Add environment variables if utilizing email dispatch:
   - `NEXT_PUBLIC_SITE_URL=https://drgauravsharma.clinic`
5. Click **Deploy**. Vercel will run `npm run build` and output all 73 static pages with instant edge CDN delivery.
