# Soramap Website
Website fow Soramap, a Software company providing web development, AI application solution, cloud services, cybersecurity and mobile application solution

## Tech Stack
Next.js (App Router)
React + TypeScript
Tailwind CSS
pnpm as the package manager

## Prerequisites

Make sure you have the following installed before setting up the project:

Node.js 20.x (check with node -v)
pnpm (check with pnpm -v) — install via:
bash
  corepack enable
  corepack prepare pnpm@latest --activate
Getting Started
Clone the repo
bash
   git clone git@github.com:soramap/website.git
   cd website
Install dependencies
bash
   pnpm install

First time only: if you see [ERR_PNPM_IGNORED_BUILDS], run pnpm approve-builds and select sharp and unrs-resolver, then run pnpm install again.
Set up environment variables Copy the example file and fill in any required values:
bash
   cp .env.example .env.local
Run the development server
bash
   pnpm dev

Open http://localhost:3000 to view the site. The page auto-updates as you edit files.