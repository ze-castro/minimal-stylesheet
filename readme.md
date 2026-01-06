# Minimal Stylesheet

A lightweight and modern CSS stylesheet designed to provide a simple, elegant, and responsive styling framework. It includes predefined colors, typography, button styles, input fields, and more, making it easy to integrate into any web project.

## Features

- 8.21 KB CSS file;
- Fast loading;
- Clean design;
- Color, shadows, fonts, sizes and other variables;
- Styled buttons, inputs, and other elements;

## Getting Started

To use the Minimal Stylesheet in your project, simply include the `<link>` tag in the `<head>` section of your HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ze-castro/minimal-stylesheet@main/defaults.css" />
```

## Usage

For variables, you can use the following CSS variables:

### 🎨 Colors

```css
/* MUTED COLORS */
--white: #fdfdfd;
--whitesmoke: #f5f5f5;
--gray-1: #ececec;
--gray-2: #dedede;
--gray-3: #b4b4b4;
--gray-4: #676767;
--gray-5: #434343;
--black: #1d1d1f;

/* COLORS */
--green: #288d52;
--light-green: #3dbf6d;
--red: #be3939;
--yellow: #f5c518;
--orange: #e46248;
--blue: #0071e3;
--light-blue: #00a0e3;
--purple: #ac92ec;
--pink: #f7a8b8;

/* TRANSPARENT COLORS */
--transparent-blue: #0071e34b;
--transparent-green: #288d52ab;
--transparent-red: #be3939ab;
--transparent-yellow: #f5c518ab;
--transparent-orange: #e46248ab;
--transparent-purple: #ac92ecab;
--transparent-pink: #f7a8b8ab;
--transparent: transparent;
--transparent-white: #fdfdfd80;
--transparent-gray-1: #f5f5f580;
--transparent-gray-2: #dedede80;
--transparent-gray-3: #b4b4b480;
--transparent-gray-4: #67676780;
--transparent-gray-5: #43434380;
--transparent-black: #1d1d1f80;
```

### 🧱 Background

```css
/* TRANSPARENT BACKGROUND */
--transparent-background-1: #ffffff1a;
--transparent-background-2: #ffffff33;
--transparent-background-3: #ffffff66;
--transparent-background-4: #ffffff99;
--transparent-background-5: #ffffffcc;
```

### ⭐️ Shadows

```css
/* SHADOWS */
--shadow-1: #0000001a;
--shadow-2: #00000033;
--shadow-3: #0000004d;
```

### 🖋 Fonts

```css
/* FONTS */
--font-1: 'Poppins', sans-serif;
--font-2: 'Roboto', sans-serif;
--font-3: 'Montserrat', sans-serif;
--font-4: 'Playwrite BR', cursive;
--font-5: 'Courier New', monospace;

/* FONT SIZES */
--title-1: 2rem;
--title-2: 2.5rem;
--title-3: 3rem;
--subtitle-1: 1.2rem;
--subtitle-2: 1.4rem;
--subtitle-3: 1.6rem;
--paragraph-1: 0.8rem;
--paragraph-2: 0.9rem;
--paragraph-3: 1rem;

/* FONT WEIGHTS */
--thin: 100;
--extra-light: 200;
--light: 300;
--regular: 400;
--semi-bold: 500;
--bold: 600;
--heavy: 700;
--extra-bold: 800;
```

### 🔲 Border Radius

```css
/* BORDER RADIUS */
--radius-1: 10rem;
--radius-2: 2rem;
--radius-3: 1rem;
--radius-4: 0.5rem;
--radius-5: 0.3rem;
```

### ⚡ Transitions

```css
/* TRANSITIONS */
--loading: 1s;
--slow: 0.5s;
--steady: 0.3s;
--fast: 0.1s;
```

### 📏 Text Spacing

```css
/* TEXT SPACING */
--line-height: 1.3;
--letter-spacing: 0.022em;
```

## Customization

Override the variables in your own stylesheet:

```css
:root {
  --red: #ff5733;
  --font-1: 'Arial', sans-serif;
}
```

## ⚠️ Warning

### Video and Image Interaction

Videos and images have `user-select: none` and `pointer-events: none` by default. This is to prevent users from selecting or interacting with them. If you want to enable interaction, you can override this in your CSS:

```css
img,
video {
  user-select: unset;
  pointer-events: unset;
}
```

## License

You can use this in your projects, either personal or commercial.

## Contact

For any questions, reach out via GitHub Issues.
