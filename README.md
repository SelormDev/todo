# Vite React Template with Deployment Configuration

This repository contains a Vite-powered React template with pre-configured deployment settings. Follow the instructions below to set up, develop, and deploy your project.

## Features

- **Vite** for fast development and optimized builds
- **React** for building user interfaces
- **GitHub Actions** for automated deployment to GitHub Pages

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Sel-Labs/vite-react-template.git
   cd vite-react-template
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```
   Your application should now be running on localhost:3000.
   <br>
   <br>

## Deployment

This repository is pre-configured to deploy to GitHub Pages using GitHub Actions.

### Configuration

To deploy your application, you need to adjust the base option in the `vite.comfig.js` file to point to your repository and branch.

Open `vite.comfig.js`.

Update the base option:

```sh
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-react-template/"
})
```

Replace `/vite-react-template/` with the name of your GitHub repository.

### Deploying

Build your project:

```sh
npm run build
```

Push your code to the main branch:

```sh
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions will automatically build and deploy your project to the gh-pages branch.
<br>
<br>

### Accessing Your Deployed Site

After the workflow completes, your site will be available at `https://your-username.github.io/your-repo-name`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.
