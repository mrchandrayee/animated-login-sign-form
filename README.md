# Animated Login / Sign Form

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/animated-login-sign-form/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive login interface recreated from the supplied 11.5-second screen recording.

## Visible flow reproduced
- Dark navy background with animated connected particle/network lines.
- Centered System Login card.
- Email Address and Password inputs.
- Purple Authenticate button.
- Loading spinner while the demo authenticates.
- Green success panel with checkmark and "Welcome In".
- Back to Login action.

## Run locally
No dependencies or build step required.

1. Extract the ZIP.
2. Open `index.html` in a modern browser.

Or run:
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000.

## Project files
- `index.html` — login and success screen markup
- `style.css` — dark glass-style card, inputs, button and responsive styling
- `script.js` — animated network canvas and demo login interaction

## Authentication note
The video demonstrates the visual login flow but does not show a backend API or authentication service. This project validates the email format and a minimum password length, then displays a simulated success state after a short loading animation. It does not authenticate real accounts. Connect the form to a secure backend endpoint for production use.

## Source fidelity
The HTML source visible in the lower part of the video is too small to transcribe reliably. This is a runnable reconstruction of the visible interface and behaviour, not a byte-for-byte extraction of the original source code.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
