# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

 ## Table of contents

- [Overview](#overview)
  - [Description](#description)
  - [Figma design](#figma-design)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Process](#process)
  - [Libraries/Dependencies](#libraries-dependencies)
  - [Continued development / tech debt](#continued-development)
- [Useful resources](#useful-resources)
  - [Relevant documentation](#relevant-documentation)(#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Overview

### Description

### Screenshots

### Figma design

### Links

Project locations:
- [Github](https://github.com/casserole27/invoice-tracker)
- [Live Site](https://invoice-tracker-drab.vercel.app/)

## My process

- Create Github repository
- UI/UX
- Project management / requirements
- setup React / TypeScript using Vite 
- Project work using Github issues as "tickets"
- Publish live URL
- Check markup and accessibility
  -(https://wave.webaim.org/)
- README file

### Libraries / Dependencies
- Github using command line
- semantic HTML5
- CSS custom properties
- Responsive Web Design
- React.js
- TypeScript
- RESTful API / CRUD endpoints
- PostgreSQL database with Prisma ORM
- accessibility

### Continued development / tech debt
- learning and takeaways
- continued Unit testing

## Useful resources

- Claude Code CLI for explanations and solidifying learning

### Relevant documentation

## Author

- Website - [C Lewis](https://casserole27.github.io)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/clewisdev/)

## Acknowledgments