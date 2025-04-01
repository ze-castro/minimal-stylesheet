# Minimal Stylesheet

A lightweight and modern CSS stylesheet designed to provide a simple, elegant, and responsive styling framework. It includes predefined colors, typography, button styles, input fields, and more, making it easy to integrate into any web project.

## Features

- Clean and minimal design
- Responsive layout
- Predefined color variables
- Styled buttons, inputs, and typography
- Smooth transitions and animations

## Getting Started

To use the Minimal Stylesheet in your project, simply include the following `<link>` and `<script>` tag in the `<head>` section of your HTML file:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/ZeCastroIPCA/minimal-stylesheet@main/defaults.css?v=1.0.0"
/>
<script defer src="https://cdn.jsdelivr.net/gh/ZeCastroIPCA/minimal-stylesheet@main/helper.js?v=1.0.0"></script>
```

## Todos

- Add footer
- Add navbar
- Add responsiveness

## Usage

For components, you can use the following HTML structure:

### Loading

```html
<div class="loading">
  <div></div>
</div>
```

### Cookies

```html
<div class="cookies">
  <p>We use cookies to improve your experience.</p>
  <button>Accept</button>
</div>
```

## Customization

Override the variables in your own stylesheet:

```css
:root {
  --primary-color: #ff5733;
  --font-1: 'Arial', sans-serif;
}
```

## License

This project is open-source and available under the MIT License.

## Contributions

Feel free to contribute by submitting a pull request or reporting issues.

## Contact

For any questions, reach out via GitHub Issues.

Happy coding! 🚀
