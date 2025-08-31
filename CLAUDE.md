# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js landing page for Singularity Voices, configured as a static site export. It's a temporary landing page used when the main website is under maintenance or being updated. The page displays "We're working on it" with responsive design for both mobile and desktop layouts.

## Commands

### Development
```bash
npm run dev        # Start development server with Turbopack on http://localhost:3000
npm run build      # Build for production with Turbopack
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Installation
```bash
npm install        # Install all dependencies
```

## Architecture

### Core Structure
- **Next.js 15.4.1** with React 19, TypeScript, and Tailwind CSS
- **Static export** configuration (`output: 'export'`) for deployment
- **App Router** architecture with layout.tsx and page.tsx
- **Responsive design** with mobile-first approach using window resize detection

### Key Components
- `src/app/layout.tsx` - Root layout with Inter font, metadata, and favicon
- `src/app/page.tsx` - Home page that renders the LandingPage component
- `src/components/LandingPage.tsx` - Main landing page with responsive mobile/desktop layouts
- `src/lib/utils.ts` - Utility functions (standard shadcn/ui setup)

### Styling & UI
- **Tailwind CSS** with custom theme extensions and shadcn/ui components
- **CSS-in-JS** approach with background images via inline styles
- **Responsive breakpoints**: Mobile (<768px) shows simplified layout
- **Assets**: SVG icons and graphics stored in `/public` directory

### Configuration
- **TypeScript** with path mapping (`@/*` → `./src/*`)
- **Static export** with trailing slashes and unoptimized images
- **Turbopack** enabled for faster development and builds
- **ESLint** with Next.js configuration

## Deployment

### Docker Deployment
```bash
# Build and run with Docker
docker build -t singularity-voices .
docker run -p 3002:80 singularity-voices

# Or use Docker Compose
docker-compose up -d
```

### Dokploy Deployment
1. Connect your Git repository to Dokploy
2. Set build configuration:
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Port**: `3002`
3. Configure domains in Dokploy:
   - Go to your application → **Domains** tab
   - Add domain: `yourdomain.com:3002` (if using custom domain)
   - Or use: `your-server-ip:3002` (direct IP access)
   - Enable SSL if needed for custom domains
4. Deploy using the provided Dockerfile and docker-compose.yml
5. The app will be available at your configured domain on port 3002

## Key Features
- Adaptive layout that detects mobile vs desktop viewport
- External links to social media (小红书/RedNote)
- Background graphics and branding assets
- Chinese and English text content