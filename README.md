# CS Hub Frontend

## Overview
This is a React frontend project managed with Yarn.

## Requirements
- **Node.js**
- **Yarn**

## Quick Start

### 1. Install Dependencies

Run the following command to install all required packages:

```bash
yarn install
```

### 2. Start the Development Server
Start the development server using:

```bash
yarn start
```

The app will be available at:

```arduino
http://localhost:3000
```

## Project Structure

This project is a frontend built using React and TypeScript, structured to ensure scalability and maintainability. Below is a breakdown of the project structure.

```bash
.
├── public
│   ├── fonts
│   │   └── # Custom fonts used in the project.
│   ├── images
│   │   └── # Image assets like logos, icons, etc.
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── apis
│   │   └── # API request functions and integrations with backend services.
│   ├── components
│   │   └── # Reusable UI components (buttons, modals, forms, etc.).
│   ├── pages
│   │   └── # Page-level components for routing and content structure.
│   ├── styles
│       └── # Global and component-specific styles (CSS/SCSS).
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── config.ts
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .eslintrc.json
├── .gitignore
├── README.md
├── eslint.config.mjs
├── package.json
├── tsconfig.json
└── yarn.lock
```

## Notes
Make sure Node.js and Yarn are installed globally.
