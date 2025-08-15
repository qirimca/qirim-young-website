
# GEMINI.md

## Project Overview

This is the official website for QIRI'M YOUNG, an organization dedicated to preserving and developing the Crimean Tatar language and culture through digital innovation. The website is a single-page application built with React, TypeScript, and Tailwind CSS. It is designed to be performant and optimized for search engines.

**Key Technologies:**

*   **Frontend:** React 19, TypeScript, Tailwind CSS v4
*   **Build Tool:** Vite 7
*   **Routing:** React Router
*   **Internationalization:** i18next
*   **Deployment:** GitHub Pages

## Building and Running

### Prerequisites

*   Node.js and npm

### Development

To run the website in a local development environment, use the following commands:

```bash
npm install
npm run dev
```

This will start a development server with hot-reloading.

### Production Build

To create a production-ready build of the website, use the following command:

```bash
npm run build
```

This will generate a `dist` directory with the optimized and minified assets.

### Deployment

The website is deployed to GitHub Pages. The `deploy` script in `package.json` handles the deployment process:

```bash
npm run deploy
```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Customizations and theme extensions are defined in `tailwind.config.js`.
*   **Components:** The UI is built with a component-based architecture. Reusable components are located in `src/components`.
*   **Pages:** Each page of the website is a separate component located in `src/pages`.
*   **Performance:** The application is optimized for performance using techniques like lazy loading for pages and components, code splitting, and optimized font loading.
*   **Linting:** The project uses ESLint to enforce code quality and consistency. Run `npm run lint` to check for linting errors.
*   **Sitemap:** A sitemap is generated automatically using the `npm run sitemap` command.
