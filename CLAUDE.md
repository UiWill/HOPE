# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HOPE is a React + TypeScript tattoo studio portfolio website built with Vite. The application showcases tattoo artists and body piercers, their work portfolios, and provides contact functionality via WhatsApp. The site is deployed to GitHub Pages.

**Live URL**: https://uiwill.github.io/HOPE/

## Commands

### Development
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build production bundle (outputs to dist/)
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint on TypeScript/TSX files
```

### Deployment
```bash
npm run predeploy    # Builds the project (runs automatically before deploy)
npm run deploy       # Deploy to GitHub Pages (gh-pages branch)
```

## Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router DOM 6 with HashRouter (for GitHub Pages compatibility)
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (base path: `/HOPE/`)

### Project Structure

```
src/
├── main.tsx           # Entry point, renders App with HashRouter
├── App.tsx            # Main routing configuration (Home and ArtistPage routes)
├── index.css          # Global styles and Tailwind directives
├── pages/
│   ├── Home.tsx       # Main landing page with sections for artists, gallery, contact form
│   └── ArtistPage.tsx # Individual artist profile and gallery view
└── data/
    └── artists.ts     # Artist data array (profiles, specialties, contact info, galleries)
```

### Key Architectural Patterns

**1. Data Structure**
- Artist data is centrally managed in `src/data/artists.ts` as an exported array
- Each artist object contains: id, name, firstName, specialty, instagram, whatsapp, images, bio, and gallery
- Some artists are commented out in the data file but can be easily enabled

**2. Routing Strategy**
- Uses HashRouter instead of BrowserRouter for GitHub Pages compatibility
- Two main routes:
  - `/` - Home page with all sections
  - `/artist/:id` - Dynamic artist profile page
- Artist ID from URL params is used to filter the artists array

**3. Asset Management**
- Static assets (images) are stored in `public/img/`
- All asset paths use the base path `/HOPE/` prefix (configured in vite.config.ts)
- External images from Unsplash are used for some placeholder content

**4. WhatsApp Integration**
- Direct WhatsApp links are generated using `wa.me` protocol
- Pre-filled messages include artist's first name for personalization
- Format: `https://wa.me/${whatsapp}?text=Olá%20${firstName},%20gostaria%20de%20fazer%20uma%20tatuagem!`

**5. Form Handling**
- Contact form in Home.tsx simulates submission (currently logs to console)
- Includes status feedback (success/error states)
- TODO: Implement actual backend API integration for form submissions
- Intended destination: `https://api.hopetattoo.com/candidates` (not yet implemented)

### Styling Approach

- Uses Tailwind utility classes throughout
- Custom font family: `font-didot` used for headings
- Dark theme: black background with white text and subtle gradients
- Hover effects and transitions for interactive elements
- Responsive design with mobile-first approach using Tailwind breakpoints

### Important Configuration Details

**Vite Config (`vite.config.ts`)**
- Base path set to `/HOPE/` for GitHub Pages deployment
- Lucide React is excluded from optimization dependencies
- React plugin enabled with Fast Refresh support

**ESLint Config (`eslint.config.js`)**
- TypeScript ESLint configuration with recommended rules
- React Hooks plugin for hook usage validation
- React Refresh plugin for proper component exports
- Only lints `*.ts` and `*.tsx` files, ignores `dist/`

**TypeScript Config**
- Uses project references for app and node configurations
- Separate configs for application code and build tooling

## Development Guidelines

### Adding New Artists

1. Add artist object to `src/data/artists.ts` following the existing structure
2. Ensure images are placed in `public/img/` with the `/HOPE/` prefix
3. Include all required fields: id (kebab-case), name, firstName, specialty, instagram, whatsapp, images, bio, gallery
4. The artist will automatically appear on the home page and have a dedicated profile page

### Modifying Routes

Routes are defined in `src/App.tsx`. When adding new routes:
- Import the new page component
- Add a new `<Route>` element within the `<Routes>` wrapper
- Remember the app uses HashRouter for GitHub Pages compatibility

### Asset Paths

All static assets must include the `/HOPE/` base path prefix:
```typescript
// Correct
<img src="/HOPE/img/artist.png" />

// Incorrect (will break in production)
<img src="/img/artist.png" />
```

### Form Backend Integration

The candidate submission form in Home.tsx is currently using mock submission. To implement real functionality:
1. Uncomment and configure the fetch call around line 35-40 of `src/pages/Home.tsx`
2. Update the API endpoint URL
3. Add proper error handling for network failures
4. Consider adding CORS configuration on the backend

## Deployment Notes

- Site deploys to GitHub Pages on the `gh-pages` branch
- Base URL is configured as `/HOPE/` in vite.config.ts
- HashRouter is required for proper routing on GitHub Pages
- Run `npm run deploy` to build and deploy in one command
- Assets are served from the `dist/` directory after build
