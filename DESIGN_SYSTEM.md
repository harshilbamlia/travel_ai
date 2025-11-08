# 🎨 TravelAI Design System

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Patterns & Best Practices](#patterns--best-practices)
7. [Animation Guidelines](#animation-guidelines)

---

## Design Philosophy

### Inspired by Layla AI

Our design system draws inspiration from Layla's premium, luxury travel aesthetic:

**Core Principles:**
- **Elegance Over Complexity**: Clean, spacious layouts
- **Luxury Feel**: High-end hotel/travel vibes
- **AI-First**: Emphasize intelligence and automation
- **Travel Story**: Every screen tells a journey
- **Emotional Design**: Evoke excitement for travel

### Visual Style

```
┌──────────────────────────────────────────┐
│  ░░░░░░░░░░ PREMIUM AESTHETIC ░░░░░░░░░│
│                                          │
│  ✓ Large imagery & hero sections        │
│  ✓ Soft shadows & glassmorphism          │
│  ✓ Pastel gradients throughout           │
│  ✓ Generous white space                  │
│  ✓ Rounded corners (2xl+)                │
│  ✓ Micro-interactions everywhere         │
│  ✓ Floating card designs                 │
│  ✓ Elegant typography                    │
└──────────────────────────────────────────┘
```

---

## Color System

### Primary Palette

```
Purple (Primary Brand)
━━━━━━━━━━━━━━━━━━━━
50   #fdf4ff  ████████
100  #fae8ff  ████████
200  #f5d0fe  ████████
300  #f0abfc  ████████
400  #e879f9  ████████
500  #d946ef  ████████  ← Main brand
600  #c026d3  ████████
700  #a21caf  ████████
800  #86198f  ████████
900  #701a75  ████████
```

```
Teal (Secondary)
━━━━━━━━━━━━━━━━━━━━
50   #f0fdfa  ████████
100  #ccfbf1  ████████
200  #99f6e4  ████████
300  #5eead4  ████████
400  #2dd4bf  ████████
500  #14b8a6  ████████  ← Secondary
600  #0d9488  ████████
700  #0f766e  ████████
800  #115e59  ████████
900  #134e4a  ████████
```

### Accent Colors

```
┌──────────────┬──────────┬─────────────────┐
│ Name         │ Hex      │ Usage           │
├──────────────┼──────────┼─────────────────┤
│ Coral        │ #FF6B6B  │ Alerts, CTAs    │
│ Lavender     │ #C5A3FF  │ Luxury elements │
│ Sky          │ #4FACFE  │ Flight/travel   │
│ Mint         │ #43E97B  │ Success states  │
│ Peach        │ #FFBE76  │ Warm accents    │
│ Rose         │ #FF88DC  │ Romance/sunset  │
└──────────────┴──────────┴─────────────────┘
```

### Gradients

**Primary Gradient**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
Use for: Main CTAs, premium badges, key highlights

**Ocean Gradient**
```css
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```
Use for: Flight cards, water activities, beach destinations

**Sunset Gradient**
```css
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```
Use for: Trending badges, hot deals, urgent actions

**Mint Gradient**
```css
background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
```
Use for: Success messages, eco-friendly options

**Hero Gradient**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```
Use for: Hero sections, splash screens, major headlines

### Glow Effects

```
Glow Purple   rgba(217, 70, 239, 0.5)
Glow Blue     rgba(79, 172, 254, 0.5)
Glow Pink     rgba(255, 136, 220, 0.5)
Glow Teal     rgba(45, 212, 191, 0.5)
```

**Application:**
```css
.element-with-glow {
  box-shadow: 0 0 40px rgba(217, 70, 239, 0.3);
}
```

---

## Typography

### Font Stack

**Display Font**: Playfair Display (Serif)
```
Use for: Hero headlines, luxury emphasis, brand moments
Weight: 400, 700, 900
```

**Heading Font**: DM Sans (Sans-serif)
```
Use for: Section headers, card titles, navigation
Weight: 400, 500, 600, 700
```

**Body Font**: Inter (Sans-serif)
```
Use for: Paragraphs, descriptions, UI text
Weight: 300, 400, 500, 600
```

### Type Scale

```
┌──────────┬──────────┬────────┬────────────────┐
│ Name     │ Size     │ Line   │ Usage          │
├──────────┼──────────┼────────┼────────────────┤
│ Hero     │ 6rem     │ 1.0    │ Landing hero   │
│ Display XL│ 5rem    │ 1.1    │ Page headers   │
│ Display LG│ 4rem    │ 1.1    │ Section heads  │
│ Display MD│ 3rem    │ 1.2    │ Sub-sections   │
│ H1       │ 3rem     │ 1.2    │ Main headings  │
│ H2       │ 2.25rem  │ 1.3    │ Card titles    │
│ H3       │ 1.875rem │ 1.4    │ Sub-headings   │
│ H4       │ 1.5rem   │ 1.4    │ Small headings │
│ Body     │ 1rem     │ 1.6    │ Body text      │
│ Small    │ 0.875rem │ 1.5    │ Captions       │
│ Tiny     │ 0.75rem  │ 1.4    │ Fine print     │
└──────────┴──────────┴────────┴────────────────┘
```

### Text Styles

**Gradient Text**
```css
.text-gradient {
  background: linear-gradient(to right, #667eea, #764ba2, #14b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Usage Examples:**
```jsx
<h1 className="text-hero font-display text-gradient">
  Discover Paradise
</h1>

<h2 className="text-display-lg font-heading text-gray-900">
  Trending Destinations
</h2>

<p className="text-body font-body text-gray-600">
  Explore the world with AI-powered recommendations.
</p>
```

---

## Spacing & Layout

### Spacing Scale

```
┌─────┬───────┬─────────┬───────────────────┐
│ Key │ Rem   │ Pixels  │ Usage             │
├─────┼───────┼─────────┼───────────────────┤
│ xs  │ 0.5   │ 8px     │ Tight spacing     │
│ sm  │ 0.75  │ 12px    │ Small gaps        │
│ md  │ 1     │ 16px    │ Default spacing   │
│ lg  │ 1.5   │ 24px    │ Component gaps    │
│ xl  │ 2     │ 32px    │ Section spacing   │
│ 2xl │ 3     │ 48px    │ Large sections    │
│ 3xl │ 4     │ 64px    │ Major sections    │
│ 4xl │ 6     │ 96px    │ Hero spacing      │
│ 5xl │ 8     │ 128px   │ Page sections     │
└─────┴───────┴─────────┴───────────────────┘
```

### Container Widths

```
max-w-sm     640px     Mobile content
max-w-md     768px     Tablet content
max-w-lg     1024px    Standard content
max-w-xl     1280px    Wide content
max-w-2xl    1536px    Extra wide
max-w-7xl    1280px    Our standard container
```

### Grid Layouts

**2-Column (Desktop)**
```html
<div class="grid lg:grid-cols-2 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

**3-Column (Cards)**
```html
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

**Dashboard Layout (Sidebar)**
```html
<div class="grid lg:grid-cols-3 gap-8">
  <div class="lg:col-span-2">Main</div>
  <div>Sidebar</div>
</div>
```

---

## Components

### Buttons

**Variants:**

```jsx
// Primary - Main actions
<Button variant="primary">Book Now</Button>
// Gradient background, white text, glow hover

// Secondary - Alternative actions
<Button variant="secondary">Learn More</Button>
// White background, gray text, soft shadow

// Ghost - Tertiary actions
<Button variant="ghost">Cancel</Button>
// Transparent, minimal styling

// Gradient - Premium actions
<Button variant="gradient">Unlock Premium</Button>
// Hero gradient, emphasis
```

**Sizes:**
```jsx
<Button size="sm">Small</Button>    // Compact
<Button size="md">Medium</Button>   // Default
<Button size="lg">Large</Button>    // Prominent
<Button size="xl">X-Large</Button>  // Hero CTA
```

**With Icons:**
```jsx
<Button icon={<Sparkles />}>
  AI Generate
</Button>
```

### Cards

**Card Variants:**

```jsx
// Default Card
<Card variant="default">
  Standard white card with soft shadow
</Card>

// Premium Card
<Card variant="premium" hover>
  Elevated card with float shadow, hover animation
</Card>

// Glass Card
<Card variant="glass">
  Glassmorphism effect with backdrop blur
</Card>

// Floating Card
<FloatingCard delay={0.2}>
  Animated entrance with floating effect
</FloatingCard>
```

**Visual Examples:**

```
┌─────────────────────────────────┐
│  DEFAULT CARD                   │
│  • White background             │
│  • Rounded-2xl corners          │
│  • Soft shadow                  │
│  • 6px padding                  │
└─────────────────────────────────┘

┌═════════════════════════════════┐
║  PREMIUM CARD                   ║
║  • White background             ║
║  • Rounded-3xl corners          ║
║  • Float shadow                 ║
║  • 8px padding                  ║
║  • Hover: lift + scale          ║
└═════════════════════════════════┘

╔═══════════════════════════════╗
║  ░░░ GLASS CARD ░░░           ║
║  • Semi-transparent           ║
║  • Backdrop blur              ║
║  • Rounded-3xl                ║
║  • Subtle border              ║
╚═══════════════════════════════╝
```

### Input Fields

```jsx
<Input
  label="Email Address"
  placeholder="you@example.com"
  icon={<Mail />}
  error="Invalid email"
/>
```

**Styling:**
- Rounded-2xl corners
- 2px border (gray-100)
- Focus: primary-400 border + ring
- Generous padding (px-6 py-4)
- Icon support (left side)

### Search Bar

**Hero Variant:**
```jsx
<SearchBar variant="hero" />
```
- Glassmorphism effect
- Rounded-full shape
- Multi-input (destination, dates, guests)
- Prominent search button
- Floating appearance

**Default Variant:**
```jsx
<SearchBar variant="default" />
```
- Compact glass design
- Single input field
- Minimal styling

---

## Patterns & Best Practices

### Card Hover Effects

```css
/* Standard hover: lift + shadow */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

/* Scale hover: subtle grow */
.card:hover {
  transform: scale(1.02);
}
```

### Destination Cards

**Anatomy:**
```
┌─────────────────────────────┐
│  ╔═══════════════════════╗  │
│  ║                       ║  │
│  ║   [Large Image]       ║  │
│  ║                       ║  │
│  ║   Trending Badge      ║  │
│  ║            ♡ Like     ║  │
│  ║                       ║  │
│  ║   [Gradient Overlay]  ║  │
│  ║   ──────────────────  ║  │
│  ║   Title               ║  │
│  ║   📍 Location         ║  │
│  ║   ⭐ Rating  •  Price ║  │
│  ╚═══════════════════════╝  │
└─────────────────────────────┘
```

**Key Features:**
- 288px height
- Image overlay gradient (black 80% → transparent)
- Trending badge (top-left)
- Like button (top-right)
- Content overlay (bottom)
- Hover: scale image 110%

### Flight Cards

**Layout:**
```
┌────────────────────────────────────────┐
│  [✈ Logo] Airline Name      $XXX      │
│           Economy Class     -$50 ↓     │
├────────────────────────────────────────┤
│                                        │
│  10:30 AM   ──✈──→ 14h 15m   6:45 PM │
│  JFK         Direct          NRT      │
│  New York                    Tokyo    │
│                                        │
├────────────────────────────────────────┤
│  [WiFi] [Meal] [Luggage]   [Select]  │
└────────────────────────────────────────┘
```

**Key Features:**
- Airline logo + info (top)
- Price display (top-right)
- Timeline visualization (middle)
- Amenity icons (bottom)
- Select button (bottom-right)

### Price Charts

**Components:**
- Line graph with gradient fill
- Data points (hover tooltips)
- Y-axis labels (price range)
- X-axis labels (dates)
- Current price indicator
- Best price highlight
- AI prediction box

```
    $1500 ┤
          │     ╱╲
    $1400 ┤    ╱  ╲    ╱
          │   ╱    ╲  ╱
    $1300 ┤  ╱      ╲╱    ← Current
          │ ╱
    $1200 ┤╱
          └─────────────────────
          Nov 1    Nov 15   Nov 30
```

---

## Animation Guidelines

### Timing Functions

```css
/* Entrance animations */
ease-out: cubic-bezier(0, 0, 0.2, 1)

/* Exit animations */
ease-in: cubic-bezier(0.4, 0, 1, 1)

/* Interactive elements */
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)

/* Bouncy/playful */
spring: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Duration Standards

```
┌──────────┬─────────┬──────────────────┐
│ Speed    │ Time    │ Usage            │
├──────────┼─────────┼──────────────────┤
│ Fast     │ 150ms   │ Micro-inter      │
│ Normal   │ 300ms   │ Standard         │
│ Slow     │ 500ms   │ Major trans      │
│ Slower   │ 700ms   │ Dramatic         │
└──────────┴─────────┴──────────────────┘
```

### Common Animations

**Fade In**
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>
```

**Slide Up**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>
```

**Scale In**
```jsx
<motion.div
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.3 }}
/>
```

**Hover Lift**
```jsx
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
/>
```

**Stagger Children**
```jsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    />
  ))}
</motion.div>
```

### Micro-interactions

**Button Press**
```jsx
whileTap={{ scale: 0.98 }}
```

**Checkbox Toggle**
```jsx
animate={{ x: checked ? 32 : 0 }}
transition={{ type: 'spring', stiffness: 500, damping: 30 }}
```

**Loading Dots**
```jsx
animate={{ scale: [1, 1.2, 1] }}
transition={{ repeat: Infinity, duration: 1 }}
```

---

## Shadows & Depth

### Shadow Hierarchy

```
Level 1 (Soft)       0 2px 40px rgba(0,0,0,0.08)
Level 2 (Soft-lg)    0 4px 60px rgba(0,0,0,0.1)
Level 3 (Float)      0 10px 40px rgba(0,0,0,0.12)
Level 4 (Float-lg)   0 20px 60px rgba(0,0,0,0.15)
```

**Usage:**
- Level 1: Default cards
- Level 2: Hover state, modals
- Level 3: Premium cards, floating elements
- Level 4: Prominent cards, dropdowns

### Glow Shadows

```css
/* Purple glow - Primary actions */
box-shadow: 0 0 40px rgba(217, 70, 239, 0.3);

/* Blue glow - Secondary actions */
box-shadow: 0 0 40px rgba(79, 172, 254, 0.3);

/* Pink glow - Special offers */
box-shadow: 0 0 40px rgba(255, 136, 220, 0.3);
```

---

## Iconography

### Icon Library: Lucide React

**Size Standards:**
```
Small:    w-4 h-4 (16px)
Medium:   w-5 h-5 (20px)
Large:    w-6 h-6 (24px)
XL:       w-8 h-8 (32px)
```

**Common Icons:**
```jsx
import {
  Sparkles,      // AI features
  Plane,         // Flights
  Hotel,         // Accommodations
  MapPin,        // Locations
  Calendar,      // Dates
  Users,         // Travelers
  Heart,         // Favorites
  TrendingUp,    // Trending
  Bell,          // Notifications
  Settings,      // Settings
  Check,         // Success
  X,             // Close
  ArrowRight,    // Navigation
} from 'lucide-react'
```

**Icon in Gradient Circle:**
```jsx
<div className="bg-gradient-primary p-3 rounded-xl">
  <Sparkles className="w-6 h-6 text-white" />
</div>
```

---

## Responsive Design

### Mobile-First Breakpoints

```jsx
// Mobile (default)
<div className="px-4">

// Tablet (768px+)
<div className="px-4 md:px-6">

// Desktop (1024px+)
<div className="px-4 md:px-6 lg:px-8">
```

### Grid Responsive Patterns

**2-Column → 1-Column**
```jsx
<div className="grid lg:grid-cols-2 gap-6">
```

**3-Column → 2-Column → 1-Column**
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**4-Column → 2-Column → 1-Column**
```jsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
```

### Hide/Show Elements

```jsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">

// Show on mobile, hide on desktop
<div className="block lg:hidden">
```

---

## Accessibility

### Color Contrast

All text must meet WCAG AA standards:
- Normal text: 4.5:1
- Large text: 3:1

### Focus States

```css
focus:outline-none
focus:ring-4
focus:ring-primary-100
focus:border-primary-400
```

### Screen Readers

```jsx
<button aria-label="Close menu">
  <X className="w-5 h-5" />
</button>
```

---

## Code Examples

### Complete Card Example

```tsx
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  className="bg-white rounded-3xl shadow-soft hover:shadow-float-lg transition-all p-6 cursor-pointer"
>
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-gradient-primary p-2 rounded-xl">
      <Sparkles className="w-5 h-5 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900">
      AI Recommendations
    </h3>
  </div>

  <p className="text-gray-600 mb-6">
    Get personalized travel suggestions based on your preferences.
  </p>

  <Button variant="primary" size="md" fullWidth>
    Explore Now
  </Button>
</motion.div>
```

### Complete Form Example

```tsx
<div className="space-y-4">
  <Input
    label="Full Name"
    placeholder="John Doe"
    icon={<User />}
  />

  <Input
    label="Email"
    type="email"
    placeholder="john@example.com"
    icon={<Mail />}
  />

  <div className="grid grid-cols-2 gap-4">
    <Input
      label="Check-in"
      type="date"
    />
    <Input
      label="Check-out"
      type="date"
    />
  </div>

  <Button variant="gradient" size="lg" fullWidth>
    Search Availability
  </Button>
</div>
```

---

## Best Practices Checklist

### Design
- [ ] Use generous white space
- [ ] Apply rounded-3xl for premium cards
- [ ] Add hover states to interactive elements
- [ ] Use gradients sparingly for emphasis
- [ ] Implement glassmorphism for overlays
- [ ] Add soft shadows to elevate content

### Performance
- [ ] Optimize images (WebP format)
- [ ] Lazy load off-screen content
- [ ] Use CSS transforms for animations
- [ ] Minimize Framer Motion usage
- [ ] Implement skeleton loading states

### Accessibility
- [ ] Test keyboard navigation
- [ ] Add aria-labels to icons
- [ ] Ensure color contrast ratios
- [ ] Provide focus indicators
- [ ] Support screen readers

### Responsive
- [ ] Test on mobile devices
- [ ] Use responsive images
- [ ] Implement touch-friendly hit targets (44x44px min)
- [ ] Hide non-essential content on mobile
- [ ] Test in landscape orientation

---

Made with ❤️ for premium travel experiences
