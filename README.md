Empty README

## File structure

src
|── assets/
│ └── icons/ # SVGs, images, and other static assets
│ └── react.svg
│
├── components/ # Reusable UI components
│
├── hooks/
│ └── useUserQuery.ts # Custom React hooks for data fetching or logic reuse
│
├── modules/
│ └── Home/
│ └── Index.tsx # Home module's main component
│
├── routes/
│ └── index.tsx # Application routing configuration
│
├── services/
│ ├── https.ts # HTTP request utility
│ └── user.ts # API calls related to user data
│
├── types/
│ └── User.ts # TypeScript type definitions for user-related data
│
├── utils/
│ ├── App.tsx # Root application component
│ ├── index.css # Global styles
│ ├── main.tsx # Application entry point
│ └── vite-env.d.ts # TypeScript declarations for Vite
