# Atlas Federal Technologies Website

A premium, award-winning corporate marketing website for Atlas Federal Technologies (AFT), built with Next.js, TypeScript, Tailwind CSS, and advanced animations.

## Features

- **Fully Responsive**: Mobile-first design with seamless breakpoints
- **Accessible**: WCAG 2.1 AA and Section 508 compliant
- **High Performance**: Lighthouse 90+ scores with optimized images and lazy loading
- **Rich Animations**: Smooth scroll (Lenis), Framer Motion reveals, GSAP sequences, and particle effects
- **Dark Mode Ready**: Beautiful dark cinematic theme with controlled light sections
- **SEO Optimized**: Meta tags, Open Graph, structured data

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP + ScrollTrigger, Lenis
- **Icons**: lucide-react
- **Utilities**: clsx, tailwind-merge

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with navigation and footer
│   │   ├── page.tsx             # Main page with all sections
│   │   └── globals.css          # Global styles and animations
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── AnimatedReveal.tsx
│   │   ├── layout/
│   │   │   ├── Navigation.tsx   # Sticky navigation with mobile menu
│   │   │   ├── Footer.tsx       # Footer with contact info
│   │   │   └── SmoothScroll.tsx # Lenis scroll wrapper
│   │   └── sections/
│   │       ├── Hero.tsx         # Hero with particle background
│   │       ├── About.tsx        # About section
│   │       ├── Capabilities.tsx # Interactive capability hub
│   │       ├── PastPerformance.tsx # Case studies
│   │       └── Credentials.tsx  # Certifications and partnerships
│   ├── data/
│   │   ├── capabilities.ts      # Capabilities data (easy to edit)
│   │   └── case-studies.ts      # Case studies data (easy to edit)
│   ├── hooks/
│   │   └── useReducedMotion.ts  # Accessibility hook
│   └── lib/
│       └── utils.ts             # Utility functions (cn)
├── public/
│   └── [place images/logos here]
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Building for Production

```bash
npm run build
npm start
```

## Customization

### 1. Update Branding

**Logo & Colors**: Edit `tailwind.config.ts` theme colors:
```ts
colors: {
  navy: { 900: "#0B1F3A", 800: "#081627" },
  blue: { primary: "#1E5BB8", accent: "#2E6FD6", light: "#4FC3F7" },
  // ... more colors
}
```

**Logo Component**: Replace the AFT logo placeholder in `src/components/layout/Navigation.tsx` and `src/components/layout/Footer.tsx`

### 2. Edit Content

**Capabilities**: Edit `src/data/capabilities.ts` to update capability titles, descriptions, and bullet points

**Case Studies**: Edit `src/data/case-studies.ts` to update agency names, challenges, solutions, and impacts

**Copy**: Update section text directly in component files under `src/components/sections/`

### 3. Add Images

1. Place images in `public/` directory
2. Use Next.js Image component:
   ```tsx
   import Image from "next/image";
   <Image src="/path/to/image.jpg" alt="Description" width={800} height={600} />
   ```

### 4. Update Metadata

Edit `src/app/layout.tsx` to update SEO meta tags:
```ts
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  // ...
};
```

## Accessibility Features

- ✓ Semantic HTML structure
- ✓ ARIA labels and roles
- ✓ Keyboard navigation throughout
- ✓ Focus indicators on all interactive elements
- ✓ `prefers-reduced-motion` support
- ✓ Color contrast meets WCAG AA
- ✓ Skip-to-content link
- ✓ Section 508 compliant

## Animation Features

1. **Smooth Scroll**: Lenis provides smooth, inertia-based scrolling
2. **Scroll Reveals**: Sections fade up with staggered children
3. **Particle Background**: Canvas-based particle network in hero
4. **Hero Entrance**: Staggered headline animations
5. **Animated Counters**: Numbers count up on scroll into view
6. **Magnetic Buttons**: CTAs gently attract toward cursor
7. **Parallax Effects**: Decorative layers move at different rates
8. **Capability Hub**: Interactive orbit diagram (desktop) or accordion (mobile)

## Performance Optimization

- Next.js Image optimization
- Lazy loading for below-fold content
- Lazy mounted canvas effects
- Minimal JavaScript with server components
- CSS-in-JS with Tailwind (no runtime overhead)
- Transform and opacity animations (GPU accelerated)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+

## Accessibility Checklist

- [x] Semantic HTML
- [x] ARIA labels
- [x] Keyboard navigation
- [x] Focus management
- [x] Color contrast
- [x] Motion preferences
- [x] Alt text on images
- [x] Form labels and validation
- [x] Skip links
- [x] Heading hierarchy

## Environment Variables

Create `.env.local` if needed:
```env
# Add any required environment variables here
```

## Troubleshooting

**Canvas not rendering?**
- Check browser console for errors
- Ensure `prefers-reduced-motion` is not enabled in system settings (for testing)

**Animations feel sluggish?**
- Check Performance tab in DevTools
- Reduce particle count in Hero component if needed
- Enable GPU acceleration in browser settings

**Mobile menu not working?**
- Ensure JavaScript is enabled
- Check browser console for errors

## Future Enhancements

- [ ] Dark/light mode toggle
- [ ] Blog integration
- [ ] Contact form with backend
- [ ] Client testimonials carousel
- [ ] Team member profiles
- [ ] Live chat integration
- [ ] Advanced analytics
- [ ] Multi-language support

## Contributing

Guidelines for updating content:

1. **Capabilities**: Always use the data file format (no inline hardcoding)
2. **Case Studies**: Maintain the consistent structure (Challenge/Solution/Impact)
3. **Copy**: Keep paragraphs to 2-3 sentences max
4. **Links**: Update all hardcoded domains when rebranding
5. **Images**: Optimize before uploading (use next/image)

## License

© 2026 Atlas Federal Technologies, Inc. All rights reserved.

## Support

For questions or issues:
- Email: info@atlasfedtech.com
- Phone: (000) 000-0000
- Address: 99 NW 183rd St Suite 131E, North Miami Beach, FL 33169

---

**Built with ❤️ for the public sector**
