# 🌍 TravelAI - Premium AI-Powered Travel Platform

> A luxury, Layla-inspired travel planning platform with AI-first design, featuring intelligent recommendations, automated booking, and real-time trip management.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![React](https://img.shields.io/badge/React-18.3-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6)

---

## ✨ Features

### 🎯 Core Functionality
- **AI-Powered Trip Planning** - Generate multiple personalized itineraries with one click
- **Smart Recommendations** - ML-based destination and activity suggestions
- **Auto-Booking** - Set price targets and let AI book automatically
- **Real-Time Trip Monitoring** - Live flight tracking, weather, and alerts
- **Price Intelligence** - Historical price trends and booking predictions
- **Group Travel** - Collaborative planning with voting and split payments
- **Corporate Travel** - Policy compliance and approval workflows

### 🎨 Design Excellence
- **Layla-Inspired UI** - Premium aesthetic with luxury travel vibes
- **Glassmorphism** - Modern glass effects and backdrop blur
- **Gradient Artistry** - Beautiful color gradients throughout
- **Micro-interactions** - Smooth animations and delightful transitions
- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **Dark Mode Ready** - Design system supports theme switching

---

## 🚀 Quick Start

### Prerequisites
```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. **Clone & Install**
```bash
git clone <repo-url>
cd travel
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
```
http://localhost:3000
```

4. **Build for Production**
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
travel/
├── app/                          # Next.js 14 App Router
│   ├── page.tsx                 # Home page (onboarding + dashboard)
│   ├── plan-trip/page.tsx       # Trip planning interface
│   ├── booking/page.tsx         # Booking summary
│   ├── live-trip/page.tsx       # Live trip dashboard
│   ├── layout.tsx               # Root layout with navbar
│   └── globals.css              # Global styles
│
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx          # Premium button variants
│   │   ├── Card.tsx            # Card components (glass, float, premium)
│   │   ├── Input.tsx           # Form input with premium styling
│   │   ├── SearchBar.tsx       # Hero search bar
│   │   ├── DestinationCard.tsx # Travel destination cards
│   │   ├── FlightCard.tsx      # Flight information cards
│   │   ├── HotelCard.tsx       # Hotel booking cards
│   │   ├── ProgressBar.tsx     # Step progress indicators
│   │   ├── PriceChart.tsx      # Price trend visualization
│   │   └── AIChat.tsx          # AI assistant chat interface
│   │
│   ├── layout/                  # Layout components
│   │   └── Navbar.tsx          # Main navigation with sticky header
│   │
│   ├── onboarding/              # User onboarding flow
│   │   ├── WelcomeScreen.tsx   # Landing/welcome page
│   │   └── PreferencesWizard.tsx # 5-step preference collection
│   │
│   ├── dashboard/               # Dashboard views
│   │   └── HomeDashboard.tsx   # Main user dashboard
│   │
│   ├── trip/                    # Trip planning
│   │   └── TripPlanning.tsx    # Multi-plan comparison interface
│   │
│   ├── booking/                 # Booking flow
│   │   └── BookingSummary.tsx  # Checkout and payment
│   │
│   └── execution/               # Trip execution
│       └── LiveTripDashboard.tsx # Real-time trip monitoring
│
├── lib/                         # Utility libraries
│   ├── design-system.ts        # Design tokens and constants
│   └── utils.ts                # Helper functions
│
├── public/                      # Static assets
│   ├── images/                 # Image assets
│   └── fonts/                  # Custom fonts
│
├── styles/                      # Additional styles
│
└── Configuration files
    ├── tailwind.config.js      # Tailwind with custom theme
    ├── tsconfig.json           # TypeScript configuration
    ├── next.config.js          # Next.js configuration
    └── package.json            # Dependencies
```

---

## 🎨 Design System

### Color Palette

#### Primary Colors
```js
primary-500: #d946ef    // Main brand color
primary-600: #c026d3    // Darker variant
secondary-500: #14b8a6  // Teal accent
```

#### Accent Colors
```js
coral: #FF6B6B
lavender: #C5A3FF
sky: #4FACFE
mint: #43E97B
peach: #FFBE76
rose: #FF88DC
```

#### Gradients
- **Primary**: Purple to violet (#667eea → #764ba2)
- **Ocean**: Blue to cyan (#4facfe → #00f2fe)
- **Sunset**: Pink to coral (#f093fb → #f5576c)
- **Mint**: Green gradient (#43e97b → #38f9d7)
- **Hero**: Multi-stop gradient (#667eea → #764ba2 → #f093fb)

### Typography

#### Font Families
- **Display**: Playfair Display (luxury serif for hero text)
- **Heading**: DM Sans (modern sans for headings)
- **Body**: Inter (clean sans for body text)

#### Font Sizes
- **Hero**: 6rem (96px) - Main hero headlines
- **Display XL**: 5rem (80px)
- **Display LG**: 4rem (64px)
- **H1**: 3rem (48px)
- **H2**: 2.25rem (36px)
- **Body**: 1rem (16px)

### Spacing
- **xs**: 0.5rem (8px)
- **sm**: 0.75rem (12px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### Border Radius
- **xl**: 1rem (16px)
- **2xl**: 1.5rem (24px)
- **3xl**: 2rem (32px)
- **4xl**: 3rem (48px)
- **full**: 9999px (pills)

### Shadows
- **soft**: 0 2px 40px rgba(0, 0, 0, 0.08)
- **soft-lg**: 0 4px 60px rgba(0, 0, 0, 0.1)
- **float**: 0 10px 40px rgba(0, 0, 0, 0.12)
- **float-lg**: 0 20px 60px rgba(0, 0, 0, 0.15)
- **glow-purple**: 0 0 40px rgba(217, 70, 239, 0.3)
- **glow-blue**: 0 0 40px rgba(79, 172, 254, 0.3)

### Animations
- **float**: Gentle up/down floating (6s infinite)
- **fade-in**: Opacity fade (0.5s)
- **slide-up**: Slide from bottom (0.5s)
- **scale-in**: Scale from 95% (0.3s)
- **glow**: Pulsing glow effect (2s infinite)

---

## 🧩 Components Library

### Button
```tsx
<Button variant="primary" size="lg" icon={<Icon />}>
  Click Me
</Button>
```
**Variants**: primary, secondary, ghost, gradient
**Sizes**: sm, md, lg, xl

### Card
```tsx
<Card variant="premium" hover>
  Content here
</Card>
```
**Variants**: default, premium, glass, float

### Destination Card
```tsx
<DestinationCard
  image="url"
  title="Paris"
  location="France"
  rating={4.8}
  reviews={1234}
  price={899}
  trending={true}
/>
```

### Flight Card
```tsx
<FlightCard
  airline="United"
  departure={{ time: "10:30", code: "JFK" }}
  arrival={{ time: "18:45", code: "NRT" }}
  duration="14h 15m"
  price={599}
  stops={0}
/>
```

### Price Chart
```tsx
<PriceChart
  data={pricePoints}
  currentPrice={1299}
  bestPrice={1199}
  predictedPrice={1250}
/>
```

### AI Chat
```tsx
<AIChat
  placeholder="Ask me anything..."
  welcomeMessage="How can I help?"
/>
```

---

## 🔄 User Flows

### 1. New User Onboarding

```
┌─────────────┐
│   Welcome   │ → User lands on platform
│   Screen    │    • Hero section with value props
└──────┬──────┘    • Feature highlights
       │           • CTA: "Get Started"
       ↓
┌─────────────┐
│ Preferences │ → 5-step wizard
│   Wizard    │    Step 1: Travel style (Adventure, Beach, etc.)
└──────┬──────┘    Step 2: Interests (Food, Museums, etc.)
       │           Step 3: Budget range
       │           Step 4: Group size
       │           Step 5: Travel frequency
       ↓
┌─────────────┐
│    Home     │ → Personalized dashboard
│  Dashboard  │    • Upcoming trips
└─────────────┘    • AI recommendations
                   • Price alerts
```

### 2. Trip Planning Flow

```
┌─────────────┐
│   Search    │ → User enters destination + dates
│ Destination │    • Hero search bar
└──────┬──────┘    • Date picker with price calendar
       │           • Traveler count
       ↓
┌─────────────┐
│     AI      │ → System generates 3 plans
│  Generates  │    • Budget option
└──────┬──────┘    • Mid-range option
       │           • Luxury option
       ↓
┌─────────────┐
│   Compare   │ → Side-by-side comparison
│    Plans    │    • Price breakdown
└──────┬──────┘    • Highlight differences
       │           • User selects preferred plan
       ↓
┌─────────────┐
│   Review    │ → Detailed plan view
│  Itinerary  │    • Flight details
└──────┬──────┘    • Hotel information
       │           • Activity schedule
       │           • Price trends chart
       ↓
┌─────────────┐
│   Set Auto  │ → Optional: Enable auto-booking
│   Booking   │    • Set target price
└──────┬──────┘    • Approval preferences
       │
       ↓
┌─────────────┐
│   Manual    │ → Book immediately
│   Booking   │    or
└─────────────┘    Wait for auto-booking
```

### 3. Booking Flow

```
┌─────────────┐
│   Traveler  │ → Collect passenger info
│    Info     │    • Name, DOB, passport
└──────┬──────┘    • Contact details
       │
       ↓
┌─────────────┐
│   Payment   │ → Secure payment
│   Details   │    • Card information
└──────┬──────┘    • Billing address
       │           • Encryption notice
       ↓
┌─────────────┐
│   Review &  │ → Order summary sidebar
│   Confirm   │    • Flight: $XXX
└──────┬──────┘    • Hotel: $XXX
       │           • Total: $XXX
       │           • Savings displayed
       ↓
┌─────────────┐
│ Confirmation│ → Booking complete
│   Screen    │    • Booking reference
└──────┬──────┘    • Email confirmation
       │           • Add to calendar
       ↓
┌─────────────┐
│  Dashboard  │ → Return to dashboard
│   Update    │    • Show upcoming trip
└─────────────┘
```

### 4. Trip Execution Flow

```
┌─────────────┐
│ Pre-flight  │ → 24 hours before
│   Alerts    │    • Check-in reminder
└──────┬──────┘    • Weather update
       │           • Local tips
       ↓
┌─────────────┐
│   Flight    │ → Real-time tracking
│  Tracking   │    • Departure status
└──────┬──────┘    • Gate changes
       │           • Delay notifications
       ↓
┌─────────────┐
│   Arrival   │ → Landed
│    Mode     │    • Baggage claim info
└──────┬──────┘    • Transport options
       │           • Hotel directions
       ↓
┌─────────────┐
│    Live     │ → Active trip dashboard
│    Trip     │    • Hotel check-in status
└──────┬──────┘    • Today's itinerary
       │           • Local assistant
       │           • Weather & tips
       ↓
┌─────────────┐
│   Return    │ → Post-trip
│   Flight    │    • Check-in reminder
└──────┬──────┘    • Trip summary
       │
       ↓
┌─────────────┐
│  Feedback   │ → Rate experience
│  & Review   │    • Photos upload
└─────────────┘    • Next trip suggestions
```

### 5. Auto-Rebooking Flow (Disruption)

```
┌─────────────┐
│   Flight    │ → System detects delay/cancellation
│   Delay     │    • Real-time monitoring
└──────┬──────┘
       │
       ↓
┌─────────────┐
│     AI      │ → Finds alternatives
│   Analyzes  │    • Same airline options
└──────┬──────┘    • Partner flights
       │           • Next available
       ↓
┌─────────────┐
│   Notify    │ → Push notification + SMS
│    User     │    • "We found alternatives"
└──────┬──────┘    • Show options (A, B, C)
       │
       ↓
┌─────────────┐
│    User     │ → User selects option
│   Approves  │    or
└──────┬──────┘    Auto-approve if enabled
       │
       ↓
┌─────────────┐
│   Auto      │ → System rebooks
│   Rebook    │    • New confirmation
└──────┬──────┘    • Hotel adjustments
       │           • Refund processing
       ↓
┌─────────────┐
│   Updated   │ → Dashboard reflects changes
│  Itinerary  │    • New flight details
└─────────────┘    • Compensation info
```

### 6. Group Trip Flow

```
┌─────────────┐
│   Create    │ → Trip organizer creates
│   Group     │    • Destination + dates
└──────┬──────┘    • Invite members
       │
       ↓
┌─────────────┐
│   Members   │ → All members join
│    Join     │    • Accept invitation
└──────┬──────┘    • Set preferences
       │
       ↓
┌─────────────┐
│     AI      │ → Generate group plans
│  Generates  │    • Consider all preferences
└──────┬──────┘    • Multiple options
       │
       ↓
┌─────────────┐
│   Voting    │ → Democratic selection
│   Process   │    • Members vote on options
└──────┬──────┘    • Vote on activities
       │           • Vote on budget
       ↓
┌─────────────┐
│  Finalize   │ → Winning option selected
│    Plan     │    • Booking summary
└──────┬──────┘
       │
       ↓
┌─────────────┐
│   Split     │ → Payment distribution
│  Payments   │    • Calculate per person
└──────┬──────┘    • Collect payments
       │           • Track who paid
       ↓
┌─────────────┐
│   Group     │ → Shared dashboard
│  Dashboard  │    • Live updates
└─────────────┘    • Group chat
                   • Shared itinerary
```

### 7. Corporate Travel Flow

```
┌─────────────┐
│  Employee   │ → Submit travel request
│  Request    │    • Business justification
└──────┬──────┘    • Budget category
       │           • Preferred dates
       ↓
┌─────────────┐
│     AI      │ → Check company policy
│   Policy    │    • Budget limits
└──────┬──────┘    • Booking class rules
       │           • Preferred vendors
       ↓
┌─────────────┐
│  Compliant  │ → Green: Auto-approve
│   Check     │    Yellow: Manager review
└──────┬──────┘    Red: Out of policy
       │
       ↓
┌─────────────┐
│  Manager    │ → If needed
│  Approval   │    • Review request
└──────┬──────┘    • Approve/Deny/Modify
       │
       ↓
┌─────────────┐
│     AI      │ → Generate compliant options
│  Generates  │    • Within budget
└──────┬──────┘    • Approved vendors
       │           • Policy adherence
       ↓
┌─────────────┐
│  Employee   │ → Select from options
│  Selects    │    • All pre-approved
└──────┬──────┘
       │
       ↓
┌─────────────┐
│   Book &    │ → Automatic booking
│   Report    │    • Expense tracking
└─────────────┘    • Receipt management
                   • Report generation
```

---

## 🎯 Key Screens

### 1. Welcome Screen (`WelcomeScreen.tsx`)
- Large hero section with gradient background
- Feature grid (2x2 cards)
- Stats display (countries, bookings, etc.)
- Primary CTA: "Get Started Free"

### 2. Preferences Wizard (`PreferencesWizard.tsx`)
- 5-step onboarding process
- Progress bar with step indicators
- Interactive selection cards
- Smooth transitions between steps

### 3. Home Dashboard (`HomeDashboard.tsx`)
- Hero search bar
- Upcoming trips section
- AI-powered recommendations grid
- Price drop alerts sidebar
- Saved destinations
- Quick actions

### 4. Trip Planning (`TripPlanning.tsx`)
- 3-plan comparison cards
- Auto-booking toggle
- Detailed flight and hotel cards
- Price trend chart
- Activity breakdown
- Booking CTA

### 5. Booking Summary (`BookingSummary.tsx`)
- Traveler information form
- Secure payment section
- Order summary sidebar
- Price breakdown
- Terms & conditions
- Complete booking CTA

### 6. Live Trip Dashboard (`LiveTripDashboard.tsx`)
- Real-time flight status
- Hotel check-in information
- Today's itinerary
- AI assistant access
- Local weather
- Quick actions
- Emergency contacts

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **UI Library** | React 18 |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Date Handling** | date-fns |
| **Fonts** | Google Fonts (Inter, Playfair Display, DM Sans) |

---

## 🎨 Design Principles

### 1. **Luxury First**
Every element should feel premium and high-end, inspired by Layla's polished aesthetic.

### 2. **White Space**
Generous spacing between elements for breathing room and elegance.

### 3. **Soft Shadows**
Use subtle shadows (soft, float) instead of harsh borders.

### 4. **Gradient Magic**
Leverage gradients for visual interest without overwhelming.

### 5. **Smooth Animations**
Every interaction should feel fluid and delightful.

### 6. **Typography Hierarchy**
Clear distinction between display, heading, and body text.

### 7. **Glassmorphism**
Use backdrop blur and transparency for modern depth.

### 8. **Rounded Corners**
Generous border radius (xl, 2xl, 3xl) for friendly feel.

---

## 📱 Responsive Design

### Breakpoints
- **sm**: 640px (Mobile landscape)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)
- **2xl**: 1536px (Extra large)

### Mobile-First Approach
All components are built mobile-first with progressive enhancement for larger screens.

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Works with any Next.js hosting:
- Netlify
- AWS Amplify
- Railway
- Render

---

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

## 🤝 Contributing

Contributions welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Follow the existing code style
4. Write clear commit messages
5. Submit a pull request

---

## 💬 Support

For questions or issues:
- Open an issue on GitHub
- Email: support@travelai.com
- Discord: [Join our community]

---

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Core UI components
- ✅ Onboarding flow
- ✅ Trip planning
- ✅ Booking system
- ✅ Live trip tracking

### Phase 2 (Upcoming)
- [ ] Backend API integration
- [ ] Real flight data (Amadeus/Skyscanner)
- [ ] Payment processing (Stripe)
- [ ] User authentication
- [ ] Database integration

### Phase 3 (Future)
- [ ] Mobile apps (React Native)
- [ ] Advanced AI features
- [ ] Social features
- [ ] Loyalty program
- [ ] Multi-currency support

---

## 🙏 Acknowledgments

- Inspired by Layla AI's premium design aesthetic
- Icons by Lucide React
- Fonts from Google Fonts
- Unsplash for placeholder images

---

Made with ❤️ by the TravelAI team
