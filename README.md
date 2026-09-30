# Stefanos Siathas Portfolio

A personal portfolio and project showcase built with SvelteKit, Vite, and Vercel. It highlights my software engineering, data, and STEM work through a fast static site and a set of project pages.

## Tech stack

- SvelteKit 2 + Svelte 5
- Vite
- JavaScript
- Vercel deployment via adapter-vercel
- Static pages and prerendered routes for SEO

## Local development

1. Install dependencies:
   npm install
2. Start the dev server:
   npm run dev
3. Open the local URL shown in the terminal.

## Production build

npm run build
npm run preview

## Deployment

This project is configured for Vercel. Push the repository to GitHub and import it into Vercel, or deploy via the Vercel dashboard using the default SvelteKit adapter settings.

## Project structure

- src/routes — page routes and layouts
- src/lib — reusable components and SEO helpers
- static — images, certifications, and public assets

## Notes

The site includes canonical URLs, sitemap generation, robots metadata, and legacy redirects to keep search engines indexing the correct public pages.
