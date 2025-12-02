# Medical Clinic - Color Pattern & Codes

## Primary Color Palette

### Main Colors
- **Primary Blue**: `#0d6efd` (Main brand color - buttons, links, highlights)
- **Secondary Gray**: `#6c757d` (Secondary text, borders)
- **Success Green**: `#198754` (Success messages, confirmations)
- **Danger Red**: `#dc3545` (Error messages, warnings)
- **Warning Yellow**: `#ffc107` (Warnings, alerts)
- **Info Cyan**: `#0dcaf0` (Information messages)
- **Light Gray**: `#f8f9fa` (Light backgrounds, cards)
- **Dark Black**: `#212529` (Dark text, headings)
- **White**: `#ffffff` (Background, text on dark)

## Light Mode Colors

### Background Colors
- **Page Background**: `#ffffff` (White)
- **Card Background**: `#ffffff` (White)
- **Navbar Background**: `#ffffff` (White)
- **Input Background**: `#ffffff` (White)
- **Dropdown Background**: `#ffffff` (White)

### Text Colors
- **Primary Text**: `#212529` (Dark black)
- **Secondary Text**: `#6c757d` (Medium gray)
- **Headings**: `#212529` (Dark black)

### Border Colors
- **Border Color**: `#dee2e6` (Light gray)

## Dark Mode Colors

### Background Colors
- **Page Background**: `#1a1a1a` (Very dark gray)
- **Card Background**: `#2d2d2d` (Dark gray)
- **Navbar Background**: `#1f1f1f` (Dark gray)
- **Input Background**: `#2d2d2d` (Dark gray)
- **Dropdown Background**: `#2d2d2d` (Dark gray)

### Text Colors
- **Primary Text**: `#e0e0e0` (Light gray)
- **Secondary Text**: `#a0a0a0` (Medium gray)
- **Headings**: `#ffffff` (White)

### Border Colors
- **Border Color**: `#404040` (Medium dark gray)

## Component-Specific Colors

### Buttons
- **Primary Button**: `#0d6efd` (Blue background, white text)
- **Primary Button Hover**: `#0b5ed7` (Darker blue)
- **Outline Button**: Transparent background, `#0d6efd` border and text
- **Outline Button Hover**: `#0d6efd` background, white text

### Testimonials
- **Testimonial Text**: `#212529` (Black)
- **Testimonial Author**: `#212529` (Black)
- **Stars**: `#ffc107` (Yellow/Gold)

### Cards
- **Card Background (Light)**: `#212529`
- **Card Background (Dark)**: `#2d2d2d` (Dark gray)
- **Card Shadow**: `rgba(0, 0, 0, 0.1)` (Light mode)
- **Card Shadow**: `rgba(0, 0, 0, 0.3)` (Dark mode)

### Hero Section
- **Hero Background**: Linear gradient from `#0d6efd` to `#0b5ed7`
- **Hero Text**: `#ffffff` (White)

### Ready to Start Card
- **Card Background**: Linear gradient from `#0d6efd` to `#0b5ed7`
- **Card Text**: `#ffffff` (White)
- **Button Background**: `#ffffff` (White)
- **Button Text**: `#0d6efd` (Blue)

## Color Usage Summary

```
PRIMARY BLUE (#0d6efd)
├── Buttons
├── Links
├── Icons
├── Highlights
└── Brand elements

DARK BLACK (#212529)
├── Headings
├── Primary text
├── Testimonial text
└── Author names

WHITE (#ffffff)
├── Backgrounds (light mode)
├── Text on dark backgrounds
└── Card backgrounds (light mode)

GRAY SCALE
├── #6c757d - Secondary text (light mode)
├── #a0a0a0 - Secondary text (dark mode)
├── #f8f9fa - Light backgrounds
├── #dee2e6 - Borders (light mode)
└── #404040 - Borders (dark mode)
```

## CSS Variables Reference

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --success-color: #198754;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #0dcaf0;
    --light-color: #f8f9fa;
    --dark-color: #212529;
    --white: #ffffff;
    --bg-color: #ffffff;
    --text-color: #212529;
    --card-bg: #ffffff;
    --border-color: #dee2e6;
}

[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #e0e0e0;
    --heading-color: #ffffff;
    --card-bg: #2d2d2d;
    --border-color: #404040;
    --secondary-color: #a0a0a0;
}
```

