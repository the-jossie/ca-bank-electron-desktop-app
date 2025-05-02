
# CA Bank 🏦

CA Bank is a desktop application built with Electron, React, and TypeScript. It provides a secure and user-friendly interface for managing banking operations.

## Features

- **Authentication**: User login, signup, and OTP verification.
- **Dashboard**: View recent transactions and other banking details.
- **Responsive Design**: Optimized for various screen sizes.
- **State Management**: Context API for managing authentication state.
- **API Integration**: Axios for handling API requests.
- **Form Validation**: Yup for schema-based form validation.
- **Styling**: TailwindCSS for modern and responsive UI.

## Project Structure

```
.
├── src/
│   ├── api/               # API integration
│   ├── components/        # Reusable UI components
│   ├── configs/           # Configuration files
│   ├── contexts/          # Context API for state management
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Application pages
│   ├── types/             # TypeScript types
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main application component
│   ├── Main.tsx           # React entry point
│   ├── index.ts           # Electron main process entry point
│   ├── renderer.ts        # Electron renderer process entry point
│   └── index.html         # HTML template
├── webpack.*.config.ts    # Webpack configurations
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd desktop-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

## Scripts

- `npm start`: Start the Electron app in development mode.
- `npm run package`: Package the app for distribution.
- `npm run make`: Create distributable binaries.
- `npm run lint`: Run ESLint to check for code quality issues.

## Technologies Used

- **Electron**: For building cross-platform desktop applications.
- **React**: For building the user interface.
- **TypeScript**: For type-safe development.
- **TailwindCSS**: For styling.
- **React Query**: For data fetching and caching.
- **Yup**: For form validation.
- **Axios**: For API requests.

## Configuration

### TailwindCSS

The TailwindCSS configuration is located in [`tailwind.config.js`](tailwind.config.js). Custom colors and other theme extensions are defined here.

### Webpack

Webpack configurations for the main and renderer processes are located in:

- [`webpack.main.config.ts`](webpack.main.config.ts)
- [`webpack.renderer.config.ts`](webpack.renderer.config.ts)

### TypeScript

TypeScript settings are defined in [`tsconfig.json`](tsconfig.json).

## Folder Highlights

### Components

Reusable UI components like buttons, inputs, modals, and navigation links are located in the [`src/components`](src/components) folder.

### Pages

Application pages like login, signup, and dashboard are located in the [`src/pages`](src/pages) folder.

### API

API integration is handled in the [`src/api`](src/api) folder. Axios is used for making HTTP requests.

### Contexts

State management using React Context API is implemented in the [`src/contexts`](src/contexts) folder.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Developed by [Dev Jo](mailto:ayanfe.dev@gmail.com).

