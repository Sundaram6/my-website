# Core Developer 3D Portfolio Design

## Overview
A complete layout restructuring to prioritize the "Core Developer" aesthetic—direct, performant, and focused on proving technical capability rather than just stating it. The crown jewel of this design is a high-performance 3D WebGL hero section that provides an instant "Premium" feel.

## Architecture & Layout

### 1. The Hero Section (3D WebGL)
- **Component**: `Hero3D.tsx`
- **Technology**: React, `@splinetool/react-spline` (or raw `three.js` if Spline is too heavy).
- **Visuals**: A highly interactive 3D model (e.g., an abstract geometric glass shape, or a futuristic cyber-deck) that rotates slowly and tracks the user's mouse/touch movements via raycasting or Spline's native mouse tracking.
- **Typography**: Massive, bold, high-contrast typography layered on top of the 3D canvas (using `z-index`).
  - *Headline*: "Sundaram Sharma"
  - *Subheadline*: "Building Intelligent Systems"
- **Interactivity**: The 3D model reacts to scroll position, tilting downwards as the user scrolls to the next section.

### 2. Tech Stack Section
- **Component**: `TechStack.tsx` (Update)
- **Visuals**: Retain the existing glassmorphism grid and restored Light/Dark mode colors.
- **Enhancement**: Add a subtle `framer-motion` floating animation (up and down) to the icons to harmonize with the 3D depth established in the Hero section.

### 3. Projects Section (Technical Depth)
- **Component**: `Projects.tsx` (Update)
- **Visuals**: Modern card-based layout.
- **Enhancement**: Replace standard "description" paragraphs with "Architecture Highlights".
  - Each card will feature technical badges: e.g., `[Next.js 14]`, `[PostgreSQL]`, `[100/100 Lighthouse]`.
  - Emphasizes *how* it was built and *how well* it runs, proving senior-level engineering capability.

### 4. Contact Section (Terminal Minimalist)
- **Component**: `Contact.tsx` (Update)
- **Visuals**: A sleek, dark "Terminal" aesthetic.
- **Interactivity**: The contact form will look like a command-line prompt where users type their message. (e.g., `> Enter your email: `).

## Data Flow & State Management
- No complex global state required. All animations will be handled via CSS or `framer-motion` locally within components.
- 3D model loading state will be managed locally in the Hero component to show a sleek loading spinner or skeleton while the WebGL context initializes.

## Performance Considerations
- **WebGL Lazy Loading**: The 3D canvas must be wrapped in `next/dynamic` or `Suspense` with SSR disabled (`ssr: false`) to ensure it doesn't block the initial page paint and allows the typography to load instantly.
- **Bundle Size**: We will monitor the addition of any 3D libraries to ensure we don't degrade the Lighthouse score.

## Scope
This spec focuses purely on the visual overhaul and structural layout of the four core sections. It does not include backend form submissions for the contact page (which will use mailto or an existing API).
