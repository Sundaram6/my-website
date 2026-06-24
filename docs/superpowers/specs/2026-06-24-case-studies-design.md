# Case Studies Design Specification

## Overview
To cater to both Engineering Managers (evaluating technical depth) and Freelance Clients (evaluating ROI and business value), the portfolio will transition from simple project links to dedicated "Case Study" pages.

## Data Structure Updates
**File:** `data/projects.ts`

The `Project` type will be expanded to include:
- `slug`: Unique identifier for the URL (e.g., `ai-saas-builder`).
- `challenge`: A paragraph explaining the business or technical problem.
- `technicalApproach`: A detailed explanation of the architecture, tools chosen, and complex problems solved.
- `roi`: Measurable outcomes or business value delivered.
- `role`: The role played (e.g., Lead Full Stack Engineer).
- `timeline`: Project duration.

## Routing
**Path:** `app/projects/[slug]/page.tsx`
- A new dynamic route in the Next.js App Router.
- Will fetch the specific project data from `data/projects.ts` based on the URL slug.
- Will handle a 404/not-found state if the slug does not exist.

## UI/UX Design

### Case Study Page
1.  **Hero Section:** 
    - Full-width visually engaging header using the project's brand colors or gradient.
    - Title, Tagline, and a prominent Mockup/Image.
2.  **Two-Column Body Layout:**
    - **Main Content (Left, 2/3 width):**
        - *The Challenge*: Focuses on the initial problem.
        - *Technical Architecture*: Highlights the stack, system design, and engineering decisions.
        - *The Results*: Focuses on ROI, performance metrics, and user feedback.
    - **Metadata Sidebar (Right, 1/3 width, sticky):**
        - Role, Timeline, Tech Stack (using existing badges).
        - Primary Call to Actions (CTAs): "View Live Site" and "View GitHub Repo".

### Homepage Modifications
**File:** `components/sections/Projects.tsx`
- Update the project cards.
- Change the main card CTA button to "Read Case Study" pointing to `/projects/[slug]`.
- Existing external links (GitHub/Live) will be moved to secondary icon buttons on the card (e.g., in the top right corner or beside the CTA).

## Security & Performance Considerations
- The dynamic pages will be statically generated at build time using `generateStaticParams` for optimal performance.
- Case study images will use `next/image` to prevent unoptimized heavy payload sizes.
