
# Zaggonaut Agent Instructions

This document provides instructions for a developer agent to work on the Zaggonaut website.

## Project Overview

Zaggonaut is a retro-inspired, open-source portfolio theme for the Astro web framework. It is built with TypeScript, TailwindCSS, and Astro's Content Collections feature. The goal of this project is to provide a fully customizable, accessible, and SEO-friendly website template for developers to showcase their work.

- **Framework:** Astro
- **Styling:** TailwindCSS
- **Content:** Markdown files with frontmatter, managed by Astro Content Collections.
- **Package Manager:** pnpm

## Getting Started

To set up and run the project locally, follow these steps:

1.  **Install Dependencies:** This project uses `pnpm` as its package manager. To install the necessary dependencies, run the following command in the project's root directory:

    ```bash
    pnpm install
    ```

2.  **Run the Development Server:** Once the dependencies are installed, you can start the local development server:

    ```bash
    pnpm run dev
    ```

    This will start the website on a local server, typically at `http://localhost:4321`.

## Project Structure

The project follows a standard Astro project structure. Here are the most important files and directories for development:

-   `astro.config.mjs`: The main configuration file for the Astro project.
-   `package.json`: Defines the project's dependencies and scripts.
-   `public/`: Contains static assets like images and fonts.
-   `src/`: Contains the source code for the website.
-   `src/components/`: Reusable Astro components.
-   `src/content/`: Contains the content for the website, such as blog posts and project descriptions.
-   `src/layouts/`: Defines the basic HTML structure and layout for different page types.
-   `src/pages/`: Contains the pages of the website. Each file in this directory corresponds to a route on the site.
-   `src/styles/`: Contains the global CSS styles for the project.

## Content Management

The website's content is managed through Markdown files stored in the `content/` directory.

### Configuration

The main site configuration is located in `content/configuration.toml`. This file contains metadata, social media links, and other text content that appears throughout the site.

### Blog Posts

To add a new blog post, create a new Markdown file in the `content/blogs/` directory. The file should include frontmatter at the top to define the post's metadata, such as the title, description, and publication date.

### Projects

To add a new project to the portfolio, create a new Markdown file in the `content/projects/` directory. Similar to blog posts, each project file should have frontmatter defining its metadata.

## Customization

### Colors

The theme's colors can be customized by editing the CSS variables in `src/styles/global.css`. This file uses Tailwind CSS to apply styles.

## Building for Production

To create a production-ready build of the website, run the following command:

```bash
pnpm run build
```

This will generate a `dist/` directory containing the optimized, static files for the website, which can then be deployed to any static hosting service.
