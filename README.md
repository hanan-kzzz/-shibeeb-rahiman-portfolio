# Shibeeb Rahiman — Portfolio & Design Systems

A high-performance, motion-led creative design portfolio featuring editorial layouts, scroll reveals, tilt-responsive project showcase, interactive video showreel, dedicated project archive, and GEO/SEO-optimized design insights.

## Project Directory Structure

```text
├── assets/
│   ├── css/
│   │   └── styles.css              # Core responsive design styles, themes & typography
│   ├── js/
│   │   └── script.js               # Interactive motion, navigation, lightbox & triggers
│   ├── images/
│   │   ├── favicon.svg             # Vector brand icon
│   │   ├── shibeeb-portrait.png    # Hero editorial cutout portrait
│   │   └── posters/                # Curated project gallery & editorial posters
│   │       ├── educraft-*.png      # Educraft awards, mementos & trophies
│   │       ├── reel-frame.jpg      # Video showreel cinematic poster fallback
│   │       └── ...                 # Ad campaigns & commercial design works
│   └── videos/
│       └── shibeeb-cv.mp4          # High-definition showreel video
├── 404.html                        # Custom 404 Artboard Not Found error page
├── 505.html                        # HTTP 505 Version Not Supported error page
├── 500.html                        # HTTP 500 Internal Server Crash error page
├── 503.html                        # HTTP 503 Service Unavailable / Maintenance page
├── 403.html                        # HTTP 403 Restricted Access / Forbidden page
├── error.html                      # Interactive HTTP Status & Error Simulator Hub
├── offline.html                    # Offline & Network Disconnection fallback page
├── sw.js                           # Progressive Web App Service Worker for offline caching
├── _redirects                      # Render & Netlify clean URLs, 301 redirects & 404 handler
├── vercel.json                     # Vercel cleanUrls configuration
├── .htaccess                       # Apache & LiteSpeed clean URL rewrite rules
├── blog.html                       # Insights, GEO-targeted design articles & guides (/blog)
├── favicon.svg                     # Root favicon for legacy browser & crawler discovery
├── index.html                      # Homepage & curated featured works (/)
├── projects.html                   # Complete 20-work categorized project archive (/projects)
├── robots.txt                      # Search engine & AI bot indexing rules
├── sitemap.xml                     # XML sitemap with canonical page priority
└── .gitignore                      # Standard ignores for OS, editor & build artifacts
```

## Deployment

Deploy this folder directly to **Netlify**, **Render**, **GitHub Pages**, or **Vercel**. No compilation or build command required.
All URLs use extensionless clean URLs (e.g. `/`, `/projects`, `/blog`, `/error`) with automatic 301 redirection from legacy `.html` requests handled across Render, Netlify, Vercel, Apache, and in-browser history.

## Highlights & Features

- **Standardized Architecture**: Separated stylesheet, script, and organized media assets (`css/`, `js/`, `images/`, `videos/`).
- **Showreel Video Player**: Native video with custom play trigger, ambient backlight glow, and video poster fallback.
- **Project Archive (`projects.html`)**: Interactive category filtering (`All`, `Ads & Commercial`, `Educraft Trophies`, `Posters & Editorial`) with responsive fullscreen lightbox inspection.
- **Blog & Design Insights (`blog.html`)**: Deep-dive design articles optimized for Generative Engine Optimization (GEO) and search indexing (Schema.org `Person`, `ProfessionalService`, `BlogPosting`, and `BreadcrumbList`).
- **Clean Git Tracking**: Duplicate and temporary frame-extraction artifacts removed.
- **Network Disconnection & Offline Support**: Progressive Web App Service Worker (`sw.js`) intercepts offline connection drops (`ERR_INTERNET_DISCONNECTED`) and seamlessly renders a custom `offline.html` page featuring auto-reconnection detection, offline studio emergency contacts, and an interactive "Catch the Keyframe" mini-game.
- **Custom Error Experience Suite**: High-impact editorial dark-luxury error pages (`404.html`, `505.html`, `500.html`, `503.html`, `403.html`, and dynamic `error.html` hub) equipped with real-time request diagnostics, quick simulation switchers, and direct navigation back to home or projects.
