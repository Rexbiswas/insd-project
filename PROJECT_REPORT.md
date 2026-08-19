# INSD Web Project - Migration & Engineering Report

**Date**: August 19, 2026  
**Project**: INSD Official Website  
**Scope**: Migration from React.js (Vite SPA) to Next.js 16 (App Router) & Full-Stack Reliability

---

## 1. Executive Summary

Today, the INSD website was successfully migrated from a client-only Vite Single Page Application (SPA) to **Next.js 16 (App Router)** with **Turbopack**, **Tailwind CSS v4**, and **Static Site Generation (SSG)**. 

### Key Benefits Achieved:
- **SEO & Search Visibility**: Search engines now receive pre-rendered HTML with full meta tags, OpenGraph data, Twitter cards, and JSON-LD educational organization schemas.
- **Ultra-Fast Performance**: Pre-rendered static pages for all 60+ routes deliver instant first-contentful-paint (FCP).
- **Zero-Disruption Architecture**: Preserved existing Express REST API backend and interactive UI libraries (Framer Motion, GSAP, Lenis, Lucide icons, MUI).
- **Production-Ready Build**: Verified with 100% build pass (`npm run build`) and concurrent dev server runtime (`npm run dev:all`).

---

## 2. Framework & Infrastructure Changes

| Category | Previous Architecture | New Next.js Architecture |
| :--- | :--- | :--- |
| **Framework** | React 19 + Vite 6 | Next.js 16.3.1 (App Router + Turbopack) |
| **Routing** | `react-router-dom` v7 (Client SPA) | File-system App Router (`src/app/**/page.jsx`) |
| **Styling** | `@tailwindcss/vite` | `@tailwindcss/postcss` + PostCSS |
| **SEO Handling** | `react-helmet-async` (Client-side) | Next.js Native Metadata API + JSON-LD injection |
| **Component Organization** | `src/pages/` | `src/app/` (Routes) + `src/views/` (Page Views) |
| **Backend Integration** | Local proxy in `vite.config.js` | Native Next.js API rewrites in `next.config.mjs` |

---

## 3. New Configuration Files Created

### 1. `next.config.mjs`
- **Remote Image Patterns**: Configured image optimization hostnames (`ik.imagekit.io`, `insd.edu.in`, `images.unsplash.com`, `grainy-gradients.vercel.app`, `lh3.googleusercontent.com`).
- **Webpack & Turbopack Aliases**: Mapped `react-router-dom` to `./src/utils/navigation.jsx` for zero-friction routing compatibility.
- **SEO Redirects**: Permanent `308` redirects from legacy endpoints (`/admissions` -> `/course-apply-now`, `/apply` -> `/course-apply-now`, `/blog` -> `/insd-360/blog`).
- **API Rewrites**: Proxied `/api/:path*` to `http://127.0.0.1:5001/api/:path*` in development.

### 2. `postcss.config.mjs`
- PostCSS integration for Tailwind CSS v4 (`@tailwindcss/postcss`).

### 3. `jsconfig.json`
- Path mapping configured for `@/*` -> `./src/*` and `react-router-dom` alias.

### 4. `package.json`
- Updated scripts:
  - `"dev"`: `"next dev"`
  - `"build"`: `"next build"`
  - `"start"`: `"next start"`
  - `"server"`: `"nodemon api/server.js"`
  - `"dev:all"`: `"concurrently \"npm run dev\" \"npm run server\""`

---

## 4. App Router Structure & Layout

### Root Layout (`src/app/layout.jsx`)
- Configured root HTML with viewport settings, Outfit font preloading, and early `--vh` viewport calculation.
- Integrated **Google Tag Manager** (`GTM-K3KH58B2`), **Google Analytics** (`G-77Y53LFPLJ`), and **Microsoft Clarity** (`wnppzeo4j3`).

### Client Layout Wrapper (`src/components/ClientLayoutWrapper.jsx`)
- Wrapped the entire application in client context providers:
  - `AuthProvider`
  - `AdmissionModalProvider`
  - `RegisterModalProvider`
- Global interactive UI elements:
  - `Navbar`
  - `RegistrationModal`
  - `AdmissionModal`
  - `CookieConsent`
  - `FloatingActionPanel`
  - `@vercel/analytics` & `@vercel/speed-insights`
- Global `ScrollToTop` handler and GSAP `ScrollTriggerRefresher`.
- Nested `<Suspense>` fallback boundary to handle asynchronous client-side rendering safely.

### Custom 404 & Offline Handler (`src/app/not-found.jsx`)
- Implemented responsive, animated 404 page with real-time offline connection detection.

---

## 5. Route Mapping Table

All 60+ routes were generated in `src/app/` importing from modular views in `src/views/`:

| URL Route | App Router File | View Component |
| :--- | :--- | :--- |
| `/` | `src/app/page.jsx` | `src/views/Home.jsx` |
| `/courses` | `src/app/courses/page.jsx` | `src/views/Courses.jsx` |
| `/courses/fashion-designing` | `src/app/courses/fashion-designing/page.jsx` | `src/views/FashionDesigning.jsx` |
| `/courses/interior-designing` | `src/app/courses/interior-designing/page.jsx` | `src/views/InteriorDesigning.jsx` |
| `/courses/graphic-designing` | `src/app/courses/graphic-designing/page.jsx` | `src/views/GraphicDesigning.jsx` |
| `/courses/animation-and-vfx` | `src/app/courses/animation-and-vfx/page.jsx` | `src/views/AnimationAndVFX.jsx` |
| `/courses/jewellery-designing` | `src/app/courses/jewellery-designing/page.jsx` | `src/views/JewelleryDesigning.jsx` |
| `/courses/uiux-designing` | `src/app/courses/uiux-designing/page.jsx` | `src/views/UIUXDesigning.jsx` |
| `/courses/beauty-and-makeup` | `src/app/courses/beauty-and-makeup/page.jsx` | `src/views/BeautyAndMakeup.jsx` |
| `/courses/photography` | `src/app/courses/photography/page.jsx` | `src/views/Photography.jsx` |
| `/courses/textile-designing` | `src/app/courses/textile-designing/page.jsx` | `src/views/TextileDesigning.jsx` |
| `/courses/aviation` | `src/app/courses/aviation/page.jsx` | `src/views/Aviation.jsx` |
| `/courses/undergraduate` | `src/app/courses/undergraduate/page.jsx` | `src/views/Undergraduate.jsx` |
| `/courses/postgraduate` | `src/app/courses/postgraduate/page.jsx` | `src/views/Postgraduate.jsx` |
| `/courses/diploma-and-certificates` | `src/app/courses/diploma-and-certificates/page.jsx` | `src/views/DiplomaAndCertificate.jsx` |
| `/courses/short-term-courses` | `src/app/courses/short-term-courses/page.jsx` | `src/views/ShortTermCourse.jsx` |
| `/courses/short-term-interior-design`| `src/app/courses/short-term-interior-design/page.jsx` | `src/views/short-term-interior-design.jsx` |
| `/courses/diploma-in-graphic-design` | `src/app/courses/diploma-in-graphic-design/page.jsx` | `src/views/diploma-in-graphic-design.jsx` |
| `/courses/diploma-in-textile-design` | `src/app/courses/diploma-in-textile-design/page.jsx` | `src/views/diploma-in-textile-design.jsx` |
| `/courses/bachelors-in-graphic-design`| `src/app/courses/bachelors-in-graphic-design/page.jsx` | `src/views/bachelors-in-graphic-design.jsx` |
| `/courses/masters-in-animation` | `src/app/courses/masters-in-animation/page.jsx` | `src/views/masters-in-animation.jsx` |
| `/courses/advanced-diploma-in-animation`| `src/app/courses/advanced-diploma-in-animation/page.jsx` | `src/views/advanced-diploma-in-animation.jsx` |
| `/courses/diploma-in-jewellery-design`| `src/app/courses/diploma-in-jewellery-design/page.jsx` | `src/views/diploma-in-jewellery-design.jsx` |
| `/courses/msc-luxury-brand-management`| `src/app/courses/msc-luxury-brand-management/page.jsx` | `src/views/luxury-brand-management-msc.jsx` |
| `/courses/online-courses` | `src/app/courses/online-courses/page.jsx` | `src/views/OnlineCourse.jsx` |
| `/campuses` | `src/app/campuses/page.jsx` | `src/views/Campus.jsx` |
| `/campuses/[campusId]` | `src/app/campuses/[campusId]/page.jsx` | `src/views/Campus.jsx` (Dynamic) |
| `/campuses/paris-cdp` | `src/app/campuses/paris-cdp/page.jsx` | `src/views/Paris(CDP).jsx` |
| `/course-apply-now` | `src/app/course-apply-now/page.jsx` | `src/views/Admission.jsx` |
| `/contact-us` | `src/app/contact-us/page.jsx` | `src/views/Contact.jsx` |
| `/insd-360/blog` | `src/app/insd-360/blog/page.jsx` | `src/views/Blog.jsx` |
| `/insd-360/fashion-week` | `src/app/insd-360/fashion-week/page.jsx` | `src/views/FashionWeek.jsx` |
| `/insd-360/paris-project` | `src/app/insd-360/paris-project/page.jsx` | `src/views/ParisProject.jsx` |
| `/locations` | `src/app/locations/page.jsx` | `src/views/location.jsx` |
| `/student` | `src/app/student/page.jsx` | `src/views/Student.jsx` |
| `/student-careers` | `src/app/student-careers/page.jsx` | `src/views/StudentCareers.jsx` |
| `/success-stories` | `src/app/success-stories/page.jsx` | `src/views/SuccessStory.jsx` |
| `/gallery` | `src/app/gallery/page.jsx` | `src/views/Gallery.jsx` |
| `/events` | `src/app/events/page.jsx` | `src/views/Events.jsx` |
| `/mentors` | `src/app/mentors/page.jsx` | `src/views/Mentors.jsx` |
| `/15-years-legacy` | `src/app/15-years-legacy/page.jsx` | `src/views/Legacy.jsx` |
| `/awards-recognition` | `src/app/awards-recognition/page.jsx` | `src/views/AwardsRecognition.jsx` |
| `/entrepreneur` | `src/app/entrepreneur/page.jsx` | `src/views/Entrepreneur.jsx` |
| `/industry-interaction` | `src/app/industry-interaction/page.jsx` | `src/views/IndustryInteraction.jsx` |
| `/industry-potential` | `src/app/industry-potential/page.jsx` | `src/views/IndustryPotential.jsx` |
| `/placement` | `src/app/placement/page.jsx` | `src/views/Placement.jsx` |
| `/placementandtraining` | `src/app/placementandtraining/page.jsx` | `src/views/PlacementAndTraining.jsx` |
| `/franchise` | `src/app/franchise/page.jsx` | `src/views/Franchise.jsx` |
| `/international-partners` | `src/app/international-partners/page.jsx` | `src/views/InternationalPartner.jsx` |
| `/insd-luxe` | `src/app/insd-luxe/page.jsx` | `src/views/InsdLuxe.jsx` |
| `/future-of-design` | `src/app/future-of-design/page.jsx` | `src/views/FutureOfDesign.jsx` |
| `/profile` | `src/app/profile/page.jsx` | `src/views/ProfileDashboard.jsx` |
| `/privacy-policy` | `src/app/privacy-policy/page.jsx` | `src/views/PrivacyPolicy.jsx` |
| `/terms-and-conditions` | `src/app/terms-and-conditions/page.jsx` | `src/views/TermsAndConditions.jsx` |
| `/cookie-policy` | `src/app/cookie-policy/page.jsx` | `src/views/CookiePolicy.jsx` |
| `/faq` | `src/app/faq/page.jsx` | `src/views/FAQ.jsx` |
| `/thank-you` | `src/app/thank-you/page.jsx` | `src/views/ThankYou.jsx` |
| `/aviation-thankyou` | `src/app/aviation-thankyou/page.jsx` | `src/views/AviationThankYou.jsx` |

---

## 6. Compatibility & SSR Safety Enhancements

### 1. Navigation Bridge (`src/utils/navigation.jsx`)
Created Next.js App Router implementations of `react-router-dom` APIs:
- `Link`: Next.js `next/link` wrapper supporting both `to` and `href`.
- `NavLink`: Next.js active-link detector based on current `usePathname()`.
- `useNavigate()`: Maps `navigate('/url')` to `useRouter().push('/url')` and `navigate(-1)` to `useRouter().back()`.
- `useLocation()`: Extracts `pathname`, `search`, `hash` with SSR fallback.
- `useParams()`: Next.js `useParams()` wrapper.

### 2. SSR Window / LocalStorage / DOM Guards
- **`Navbar.jsx` & `Campus.jsx` & `Admission.jsx`**: Replaced direct `useState(window.innerWidth < 1024)` with client `useEffect` listener to eliminate server hydration mismatches.
- **`NotFound.jsx`**: Replaced direct `useState(!navigator.onLine)` with client `useEffect` listener.
- **`Blog.jsx`**: Wrapped direct `localStorage.getItem` and `localStorage.setItem` inside `typeof window !== 'undefined'` safety guards.
- **`HeroSlider.jsx`**: Fixed React DOM attribute warning by converting `fetchpriority="high"` to `fetchPriority="high"`.
- **`ShortTermCourse.jsx`**: Restored commented-out component definition.

---

## 7. Backend & Nodemon Stability Fixes

1. **ES Module Configuration (`api/package.json`)**:
   - Added `"type": "module"` to `api/package.json` to allow `api/server.js` ES module `import` syntax to execute seamlessly under Node.js.
2. **Undeclared Variable Fix**:
   - Fixed `localOptions` reference in `api/server.js` fallback MongoDB connection logic.
3. **Port 5001 Cleanup**:
   - Released orphaned process holding port 5001.

---

## 8. Verification Results

### Build Test (`npm run build`)
```text
▲ Next.js 16.3.1 (Turbopack)
- Environments: .env.local, .env
✓ Running next.config.mjs took 100ms
✓ Compiled successfully in 17.1s
✓ Generating static pages using 3 workers (60/60) in 8.0s
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /15-years-legacy
├ ○ /aviation-thankyou
├ ○ /awards-recognition
├ ○ /campuses
├ ƒ /campuses/[campusId]
...
└ ○ /thank-you

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```
**Status**: `100% Pass (60/60 static pages generated)`.

### Live Route HTTP Verification
- `/` -> `200 OK`
- `/courses` -> `200 OK`
- `/courses/fashion-designing` -> `200 OK`
- `/courses/interior-designing` -> `200 OK`
- `/campuses` -> `200 OK`
- `/campuses/paris-cdp` -> `200 OK`
- `/course-apply-now` -> `200 OK`
- `/contact-us` -> `200 OK`
- `/insd-360/blog` -> `200 OK`
- `/insd-360/fashion-week` -> `200 OK`
- `/admissions` -> `308 Permanent Redirect` -> `/course-apply-now`
- `/non-existent-404-page` -> `404 Not Found` (Handled by `not-found.jsx`)

---

## 9. How to Run the Application

### Development (Frontend + Backend concurrently)
```bash
npm run dev:all
```
- **Next.js Frontend**: [http://localhost:3000](http://localhost:3000)
- **Express Backend**: [http://localhost:5001](http://localhost:5001)

### Frontend Only
```bash
npm run dev
```

### Production Build & Start
```bash
npm run build
npm run start
```
