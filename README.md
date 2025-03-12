# Mai Colors

[![license-MIT](https://img.shields.io/badge/license-MIT-green)](https://github.com/shiraya-ma/mai-colors/blob/main/LICENSE)

## What`s this

Provide cute color set to
- Tailwind.CSS v3
- CSS variables

## Install

### npm

```bash
npm install @shiraya-ma/mai-colors
```

### bun

```bash
bun add @shiraya-ma/mai-colors
```

## Setup

### Tailwind.CSS v3

```js
// tailwind.config.js
import MaiColors from '@shiraya-ma/mai-colors';
// import { colors } from '@shiraya-ma/mai-colors';
// const MaiColors =  require('@shiraya-ma/mai-colors');
// const { colors } = require('@shiraya-ma/mai-colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        ...MaiColors.colors
        // ...colors
      }
    },
  },
  plugins: [],
}

```

### CSS variables

#### manual copy

```bash
cd [your-project]

cp ./node_modules/@shiraya-ma/mai-colors/mai-colors.css ./public/mai-colors.css
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>sample</title>
    <link rel="stylesheet" href="/public/mai-colors.css">
    <style>
      a {
        color: var(--mai-mint-400);
      }
    </style>
  </head>
  <body>
    <a href="/">HOME</a>
  </body>
</html>
```
