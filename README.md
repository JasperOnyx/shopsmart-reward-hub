# ShopSmart Landing Page

## Project Overview
Premium landing page for ShopSmart - Win £750 Amazon Shopping Rewards campaign. Built with React, TypeScript, and Tailwind CSS following strict design specifications for an exclusive, trustworthy experience.

## Key Features
- **Premium Design**: Soft glowing elements with Amazon orange (#FF9900) branding
- **Smooth Animations**: No harsh transitions, all movements are subtle and elegant
- **Floating Notifications**: Rotating testimonial notifications with precise timing
- **Particle Background**: Immersive moving particles with gradient overlay
- **A/B Testing**: Built-in headline and CTA variants for optimization
- **Regional Targeting**: Prominently displays UK, US, CA & AU eligibility
- **Mobile Responsive**: Optimized for all devices

## Quick Setup

### Changing the Affiliate Link
1. Open `src/components/ShopSmartLanding.tsx`
2. Find the `handleCtaClick` function (around line 25)
3. Replace `"YOUR_AFFILIATE_LINK_HERE"` with your actual affiliate URL
4. Save the file

### Customizing Notification Messages
1. Open `src/components/NotificationToast.tsx`
2. Edit the `names` array (line 4-8) to add/remove names
3. Edit the `messageTemplates` array (line 10-14) to modify messages
4. Notifications will cycle through all combinations automatically

### A/B Testing Variants
The page includes built-in A/B testing for:

**Headlines** (in `src/components/ShopSmartLanding.tsx`):
- "Unlock £750 Amazon Shopping Rewards — Join ShopSmart"
- "ShopSmart: Claim Your £750 Amazon Shopping Credit"

**CTA Buttons**:
- "Claim My £750 Reward"
- "Get My Amazon Shopping Credit"

## Design System

### Colors
- **Brand Orange**: #FF9900 (Amazon orange)
- **Deep Charcoal**: #0B0B0B (accent dark)
- **Muted**: #F7F7F7 (light accent)

### Typography
- **Font**: Poppins (geometric sans-serif)
- **Desktop**: H1 48-64px, H2 28-36px, Body 16px
- **Mobile**: H1 32-40px (responsive scaling)

### Animations
- **Hero entrance**: 700-900ms fade + translate
- **Button hover**: 200-300ms scale + glow increase
- **All transitions**: Smooth cubic-bezier easing

## Component Structure

```
src/
├── components/
│   ├── ParticleBackground.tsx    # Floating particle system
│   ├── NotificationToast.tsx     # Rotating testimonials
│   ├── ShopSmartLanding.tsx      # Main landing page
│   └── ui/                       # Shadcn UI components
├── pages/
│   └── Index.tsx                 # Main page wrapper
└── index.css                     # Design system & styles
```

## Notification Timing
- **Visible**: 5 seconds
- **Hidden**: 8 seconds
- **Total cycle**: 13 seconds per notification
- **Names pool**: 16 different names
- **Message variants**: 3 different templates

## Legal Compliance
- No misleading urgency claims
- Clear regional restrictions
- Privacy-focused messaging
- Terms & conditions linked
- GDPR-friendly cookie controls

## Performance Optimizations
- Lazy-loaded animations
- Efficient particle system
- Compressed gradients
- Mobile-first responsive design
- Semantic HTML structure

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Browser Support
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contact
For support or customizations, refer to the Lovable project documentation or contact the development team.

---
**Note**: This landing page is designed for affiliate marketing compliance. Ensure all links and claims meet your local advertising standards and affiliate program requirements.