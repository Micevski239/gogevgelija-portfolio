# GoGevgelija Portfolio Website

A professional portfolio website showcasing the GoGevgelija mobile application - your complete guide to discovering the best of Gevgelija, North Macedonia.

## Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **React.js**: Built with React 19 and Vite for optimal performance
- **Framer Motion**: Smooth scroll animations and transitions
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Sections**:
  - Hero with app branding
  - Comprehensive features showcase
  - Screenshots gallery (Light/Dark mode)
  - Download section with App Store & Google Play links
  - Contact form with social media links
  - Professional footer

## Tech Stack

- **React** 19.2.0
- **Vite** 7.1.12 (Fast build tool)
- **Framer Motion** 12.23.24 (Animations)
- **React Icons** 5.5.0 (Icon library)
- **CSS3** with custom variables

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The development server will start at `http://localhost:3000` and automatically open in your browser.

## Project Structure

```
gogevgelija-website/
├── public/
│   ├── logo.png
│   ├── GoGevgelija-01.jpg
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Screenshots.jsx
│   │   ├── Download.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Customization

### Colors

The website uses CSS variables defined in `src/index.css`:

- Primary Red: `#B91C1C`
- Secondary Red: `#DC2626`
- Dark Crimson: `#991B1B`

### Content

Update component files in `src/components/` to modify content, including:
- Download links (App Store & Google Play)
- Contact information
- Social media links
- Feature descriptions

## About GoGevgelija App

GoGevgelija is a comprehensive mobile tourism application featuring:

- 100+ local listings (restaurants, hotels, attractions)
- 50+ monthly events
- Exclusive promotions and deals
- Travel blog with guides and stories
- Bilingual support (English/Macedonian)
- Dark mode support
- Wishlist system
- Cross-platform (iOS & Android)

## License

MIT License - © 2025 GoGevgelija Team

## Contact

- Email: info@gogevgelija.com
- Website: [Coming Soon]
- Location: Gevgelija, North Macedonia
