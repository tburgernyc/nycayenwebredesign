# Nycayen Moore Hair Artistry

A luxury, neumorphism-themed marketing website for Nycayen Moore Hair Artistry, built with Next.js 16, Tailwind CSS 4, and Motion.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nycayen-web-redesign.git
   cd nycayen-web-redesign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `env.example` to `.env`:
     ```bash
     cp env.example .env
     ```
   - Update `.env` with your actual keys (optional for local dev).

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run typecheck`: Runs TypeScript compiler check.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
  - `(site)/`: Route group for the main site.
    - `components/`: Shared UI components (Button, NeumoCard, etc.).
    - `sections/`: Page sections (Hero, Services, Portfolio, etc.).
  - `api/`: Server-side API routes.
  - `globals.css`: Global styles and Tailwind configuration.
- `components/ui/`: Generic UI components.
- `lib/`: Utility functions (analytics, etc.).
- `public/`: Static assets (images, icons).

## Features

- **Neumorphism Design**: Custom shadow tokens and utility classes for a soft, tactile feel.
- **Responsive Layout**: Mobile-first design that adapts to all screen sizes.
- **Interactivity**:
  - Sticky navigation with smooth scrolling.
  - Portfolio filtering and image modal.
  - Contact form with server-side handling stub.
- **Animations**: Subtle entrance and scroll animations using Motion.
- **Accessibility**: Semantic HTML, ARIA attributes, and focus management.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fnycayen-web-redesign)

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Import the project into Vercel.
3. Set the environment variables in Vercel project settings.
4. Deploy!

See `DEPLOYMENT_CHECKLIST.md` for a pre-launch checklist.
