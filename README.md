# Basha Plast — Web Platform

The official web application for **Basha Plast** (شركة الباشا بلاست), an industrial manufacturing company based in Damascus Countryside (Ashrafiyat Sahnaya), Syria. With over three decades of engineering heritage, the facility specializes in high-precision CNC machining, custom injection and blow mold engineering, and certified PPR piping networks.

Built with **React 19**, **Vite 8**, **React Router v7**, and **Framer Motion**, utilizing scoped **CSS Modules** and the experimental **React Compiler**.

---

## Technical Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | React 19 (`^19.2.4`) | Client-side SPA with route-level code splitting (`React.lazy` + `Suspense`) |
| **Build Tool** | Vite 8 (`^8.0.4`) | Fast HMR and Rollup/Rolldown production bundling |
| **Optimization** | React Compiler | Configured via `babel-plugin-react-compiler` and `@rolldown/plugin-babel` |
| **Routing** | React Router v7 (`^7.14.1`) | Data-router configuration via `createBrowserRouter` |
| **Animations** | Framer Motion (`^12.38.0`) | Viewport-triggered reveals, spring physics, and scroll parallax |
| **Data Animation** | React CountUp + Observer | `react-countup` coupled with `react-intersection-observer` |
| **Styling** | CSS Modules | Component-scoped stylesheets (`*.module.css`) with zero global collisions |
| **Icons & Media** | Inline SVGs + HTML5 Video | Optimized SVG assets and muted looping video textures |

---

## Architecture & Engineering Highlights

### 1. Dynamic Navigation & Tracking Indicator
* **Scroll Morphing:** The desktop navigation bar detects scroll depth (`scrollY > 50`) to shift from a high-contrast industrial blue (`hsl(211, 100%, 31%)`) to a frosted glassmorphic navbar with backdrop-filter blur and dark navy typography (`#1A2E4A`).
* **Active Indicator Tracking:** A custom SVG engineer helmet (`helmet-similar.svg`) dynamically slides across the navigation bar, measuring the active link's bounding client rect on route change and window resize.
* **Responsive Drawer:** Dedicated mobile navigation drawer with backdrop blur and page scroll lock when open.

### 2. Dual-Tier Product Catalog & WhatsApp RFQ
* **Hierarchical Filtering:** Two-level taxonomy separating **PPR Systems** (pipes PN10–PN25, specialized fittings) from **General Plastics** (detergent packaging, cosmetics bottles/jars, pharmaceutical containers, household articles).
* **Master-Detail Layout:** Split desktop view displaying a scrollable item list alongside an active specification panel with dimensional, pressure, and thermal ratings.
* **Instant RFQ Pipeline:** Context-aware WhatsApp button generating dynamic inquiry links with pre-filled product titles for the sales and engineering desk (`+963 944 515 413`).

### 3. Industrial Portfolio Grid
* **Masonry Showcase:** Dynamic filtering across manufacturing categories:
  * Injection Molds (e.g., 4-cavity P20 steel pharmaceutical molds, 8-cavity cap molds with automatic unscrewing)
  * Blow Molds (e.g., 7075 aluminum 1.5L PET beverage molds, 2L HDPE detergent molds)
  * CNC Machining (e.g., 4140 alloy steel gears with ±0.005mm tolerance, 5-axis 6061-T6 aluminum frames, S50C mold bases)
  * Complete turnkey production lines
* **Interactive Overlays:** Smooth hover states detailing technical specifications, materials used, and machine parameters.

### 4. Factory Hero & Telemetry
* Background video loop showing active CNC milling operations (`/videos/cnc_running.mp4`).
* Floating glassmorphic telemetry badge with an animated live pulse indicating active machine status and tolerance precision (`0.001mm`).

---

## Project Structure

```text
albasha-website/
├── public/
│   ├── _redirects              # Netlify SPA history routing rules
│   ├── images/
│   │   ├── fittings/           # PPR elbows, tees, unions, valves, adapters
│   │   ├── pipes/              # PPR pipes (PN10, PN16, PN20, PN25)
│   │   ├── portfolio/          # CNC parts, mold bases, cavities, production lines
│   │   ├── products/           # Cosmetic, medical, and household bottles
│   │   └── helmet-similar.svg  # Custom navigation tracking indicator
│   └── videos/
│       └── cnc_running.mp4     # Factory hero looping video
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, and Master Layout wrapper
│   │   ├── sections/           # Modular page sections:
│   │   │   ├── HeroSection     # Video hero with floating telemetry badge
│   │   │   ├── ProductsCatalog # Dual-filtered product catalog with RFQ generator
│   │   │   ├── PortfolioGallery# Categorized masonry portfolio
│   │   │   ├── ServiceDetails  # Industrial service rows with feature badges
│   │   │   ├── AboutStory      # Parallax company heritage section
│   │   │   └── ContactSection  # Sales inquiry, WhatsApp desk, map embed
│   │   └── ui/                 # Reusable buttons, section titles, loaders, counters
│   ├── pages/                  # Route views (Home, Products, Services, Portfolio, About, Contact)
│   ├── App.jsx                 # Lazy-loaded route table & Suspense configuration
│   ├── index.css               # Global reset
│   └── main.jsx                # DOM entry point
├── eslint.config.js            # Flat ESLint 9 configuration with React Hooks plugins
├── vercel.json                 # Vercel SPA rewrite configuration
├── vite.config.js              # Vite bundler config with React Compiler preset
└── package.json                # Project dependencies and script definitions
```

---

## Route Overview

| Path | Component | Code Splitting | Description |
|---|---|---|---|
| `/` | `Home.jsx` | Lazy Chunk | Hero video, company summary, featured services, interactive metrics |
| `/products` | `Products.jsx` | Lazy Chunk | Filterable PPR & plastic product catalog with specs & WhatsApp RFQ |
| `/services` | `Services.jsx` | Lazy Chunk | Detailed capabilities (Molds, CNC, Production, PPR systems) |
| `/portfolio` | `Portfolio.jsx` | Lazy Chunk | Engineering portfolio masonry gallery with category filters |
| `/about` | `About.jsx` | Lazy Chunk | 30+ year company story with parallax imagery and core values |
| `/contact` | `Contact.jsx` | Lazy Chunk | Direct contact info, WhatsApp dispatch, and embedded Google Map |

---

## Getting Started

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher (or pnpm / yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abdallhmh99/albasha-website.git
   cd albasha-website
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Development

Run the Vite development server with Hot Module Replacement:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build

Compile and bundle the project for production:
```bash
npm run build
```
The optimized static build output will be generated in the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check for code standard conformance:
```bash
npm run lint
```

---

## Deployment & SPA Routing

The application is configured for deployment on modern static hosting platforms:

* **Vercel (`vercel.json`):**
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```
* **Netlify (`public/_redirects`):**
  ```text
  /*    /index.html   200
  ```

Both configurations ensure that client-side deep links (e.g. `/portfolio` or `/products`) are routed to `index.html` without 404 errors on browser refresh.

---

## Facility & Contact

* **Location:** Ashrafiyat Sahnaya, Damascus Countryside, Syria (`C7M6+V82`)
* **Sales & Engineering Desk:** [+963 944 515 413](tel:+963944515413)
* **Direct WhatsApp:** [Chat with Basha Plast](https://wa.me/963944515413)
