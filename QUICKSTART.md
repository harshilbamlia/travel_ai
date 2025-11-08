# 🚀 Quick Start Guide - TravelAI Platform

Get up and running in 5 minutes!

---

## 📋 Prerequisites

Make sure you have these installed:
- **Node.js** 18.0+ ([Download](https://nodejs.org))
- **npm** 9.0+ (comes with Node.js)
- **Git** (optional, for cloning)

Check versions:
```bash
node --version  # Should be 18+
npm --version   # Should be 9+
```

---

## ⚡ Installation

### Step 1: Install Dependencies

```bash
npm install
```

This installs:
- Next.js 14 (React framework)
- React 18 (UI library)
- Tailwind CSS (styling)
- Framer Motion (animations)
- TypeScript (type safety)
- Lucide React (icons)

### Step 2: Start Development Server

```bash
npm run dev
```

Open your browser to:
```
http://localhost:3000
```

You should see the welcome screen! 🎉

---

## 📱 Available Pages

Once running, visit these routes:

| Route | Description |
|-------|-------------|
| `/` | Home - Welcome screen + onboarding |
| `/plan-trip` | Trip planning with AI recommendations |
| `/booking` | Booking summary and checkout |
| `/live-trip` | Live trip dashboard (in-progress trips) |

---

## 🎨 Project Tour

### 1. Welcome & Onboarding (`/`)

**Flow:**
1. **Welcome Screen** - Landing page with features
2. **Preferences Wizard** - 5-step onboarding
   - Travel style selection
   - Interest preferences
   - Budget range
   - Group size
   - Travel frequency
3. **Dashboard** - Personalized home screen

**Try it:** Click "Get Started Free" → Complete the wizard

### 2. Trip Planning (`/plan-trip`)

**Features:**
- View 3 AI-generated trip plans
- Compare prices and features
- See detailed flight cards
- View hotel information
- Check price trends chart
- Enable auto-booking

**Try it:** Select different plans and explore options

### 3. Booking (`/booking`)

**Features:**
- Enter traveler information
- Add payment details
- Review order summary
- See price breakdown
- Complete secure checkout

**Try it:** Fill out the form and explore the UI

### 4. Live Trip (`/live-trip`)

**Features:**
- Real-time flight status
- Hotel check-in information
- Today's itinerary
- AI assistant access
- Local weather
- Quick actions

**Try it:** Experience the in-trip dashboard

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#d946ef', // Change to your brand color
  }
}
```

### Add New Pages

Create a new file in `app/`:

```tsx
// app/my-page/page.tsx
export default function MyPage() {
  return <div>My Custom Page</div>
}
```

Visit at: `http://localhost:3000/my-page`

### Create Components

Add to `components/`:

```tsx
// components/ui/MyComponent.tsx
export default function MyComponent() {
  return <div>My Component</div>
}
```

Import and use:
```tsx
import MyComponent from '@/components/ui/MyComponent'
```

---

## 🏗️ Build for Production

### Build

```bash
npm run build
```

This creates an optimized production build in `.next/`

### Preview Production Build

```bash
npm start
```

Visit: `http://localhost:3000`

### Deploy

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Other platforms:**
- Netlify
- AWS Amplify
- Railway
- Render

All support Next.js out of the box!

---

## 📁 Key Files

### Core Files

```
app/
  ├── page.tsx              # Home page (START HERE)
  ├── layout.tsx            # Root layout with navbar
  ├── globals.css           # Global styles
  └── [route]/page.tsx      # Other pages

tailwind.config.js          # Design system config
package.json                # Dependencies
tsconfig.json               # TypeScript config
```

### Component Organization

```
components/
  ├── ui/                   # Reusable UI components
  │   ├── Button.tsx
  │   ├── Card.tsx
  │   ├── Input.tsx
  │   └── ...
  │
  ├── onboarding/           # Onboarding screens
  ├── dashboard/            # Dashboard views
  ├── trip/                 # Trip planning
  ├── booking/              # Booking flow
  └── execution/            # Live trip monitoring
```

---

## 🎯 Common Tasks

### Add a Button

```tsx
import Button from '@/components/ui/Button'

<Button variant="primary" size="lg">
  Click Me
</Button>
```

### Create a Card

```tsx
import { Card } from '@/components/ui/Card'

<Card variant="premium" hover>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Add Animation

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

### Use Gradients

```tsx
<div className="bg-gradient-primary">
  Gradient background
</div>

<h1 className="text-gradient">
  Gradient text
</h1>
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clean build
rm -rf .next
npm run build
```

### TypeScript Errors

```bash
# Restart TypeScript server in VSCode
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

---

## 📚 Learn More

### Documentation
- [Full README](./README.md) - Complete documentation
- [Design System](./DESIGN_SYSTEM.md) - Design guidelines
- [Next.js Docs](https://nextjs.org/docs) - Framework docs
- [Tailwind Docs](https://tailwindcss.com/docs) - CSS framework

### Key Concepts

**Next.js App Router:**
- File-based routing
- Server components by default
- Add `'use client'` for client components

**Tailwind CSS:**
- Utility-first styling
- Custom classes in `globals.css`
- Configure in `tailwind.config.js`

**Framer Motion:**
- Animation library
- Use `motion.div` for animated elements
- Check [docs](https://www.framer.com/motion/)

---

## 🎨 Design System Quick Reference

### Colors
```tsx
bg-primary-500      // Main purple
bg-secondary-500    // Teal
bg-gradient-primary // Purple gradient
bg-gradient-ocean   // Blue gradient
text-gradient       // Gradient text
```

### Spacing
```tsx
p-6    // Padding 24px
m-8    // Margin 32px
gap-4  // Gap 16px
```

### Shadows
```tsx
shadow-soft      // Subtle shadow
shadow-float     // Elevated shadow
shadow-glow-purple // Glowing shadow
```

### Borders
```tsx
rounded-xl   // 16px radius
rounded-2xl  // 24px radius
rounded-3xl  // 32px radius
rounded-full // Pill shape
```

---

## ✨ Tips & Tricks

### Hot Module Replacement

Changes auto-reload in browser. Edit any file and see instant updates!

### Component Inspector

Right-click → Inspect to see Tailwind classes applied

### Responsive Design

Test different screen sizes:
```
Mobile:   375px width
Tablet:   768px width
Desktop:  1440px width
```

### VS Code Extensions

Recommended:
- **Tailwind CSS IntelliSense** - Class autocomplete
- **ES7+ React Snippets** - React shortcuts
- **Prettier** - Code formatting

---

## 🚀 Next Steps

1. ✅ Run `npm run dev`
2. ✅ Explore all pages (`/`, `/plan-trip`, `/booking`, `/live-trip`)
3. ✅ Try the onboarding flow
4. ✅ Customize colors in `tailwind.config.js`
5. ✅ Create your first component
6. ✅ Read the [full documentation](./README.md)
7. ✅ Check out the [design system](./DESIGN_SYSTEM.md)

---

## 💬 Need Help?

- 📖 Read the [README](./README.md)
- 🎨 Check [Design System](./DESIGN_SYSTEM.md)
- 🐛 [Report bugs](https://github.com/your-repo/issues)
- 💬 [Join Discord](#)

---

## 🎉 You're Ready!

Start building amazing travel experiences! 🌍✈️

Happy coding! 🚀
