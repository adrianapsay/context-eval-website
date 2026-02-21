# ContextEval Website

Website for our capstone project with 99P Labs / HRI & HDSI.

🔗 [https://adrianapsay.github.io/context-eval-website/](https://adrianapsay.github.io/context-eval-website/)

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (React)
- **Styling:** [TailwindCSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Deployment:** GitHub Pages (via GitHub Actions)

## Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- npm (comes with Node.js)

## Getting Started

```bash
# Clone the repo
git clone https://github.com/adrianapsay/context-eval-website.git
cd context-eval-website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000/context-eval-website/](http://localhost:3000/context-eval-website/) in your browser.

## Editing Content

The main page content lives in [`app/(landing)/page.tsx`](app/(landing)/page.tsx). Edit that file to update sections like Abstract, Results, etc.

To add images, place them in `public/images/` and reference them in your components.

## Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deployment

Deployment is automatic — pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/nextjs.yml`) which builds and deploys to GitHub Pages.

> **Note:** In your GitHub repo settings, make sure **Settings → Pages → Source** is set to **"GitHub Actions"** (not "Deploy from a branch").
