# 📱 Responsive Design System - UberBanking

> Полная система адаптивной верстки для всех модулей проекта

---

## 📋 Оглавление

1. [Базовая конфигурация](#базовая-конфигурация)
2. [Система Grid и Container](#система-grid-и-container)
3. [Правила адаптивности по модулям](#правила-адаптивности-по-модулям)
4. [Компоненты и их поведение](#компоненты-и-их-поведение)
5. [Breakpoints стратегия](#breakpoints-стратегия)
6. [CSS переменные](#css-переменные)

---

## 🎯 Базовая конфигурация

### 1. Tailwind Config (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    // Breakpoints (Mobile-first подход)
    screens: {
      'xs': '475px',   // Extra small devices
      'sm': '640px',   // Small devices (phones landscape)
      'md': '768px',   // Medium devices (tablets)
      'lg': '1024px',  // Large devices (desktops)
      'xl': '1280px',  // Extra large devices
      '2xl': '1536px', // 2X large devices
    },
    
    extend: {
      // Система отступов (base unit: 4px)
      spacing: {
        '4.5': '1.125rem',  // 18px
        '7.5': '1.875rem',  // 30px
        '8.5': '2.125rem',  // 34px
        '13': '3.25rem',    // 52px
        '15': '3.75rem',    // 60px
        '18': '4.5rem',     // 72px
        '22': '5.5rem',     // 88px
        '26': '6.5rem',     // 104px
        '30': '7.5rem',     // 120px
        '88': '22rem',      // 352px
        '128': '32rem',     // 512px
      },
      
      // Container настройки
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',    // 16px mobile
          sm: '1.5rem',       // 24px
          md: '2rem',         // 32px
          lg: '3rem',         // 48px
          xl: '4rem',         // 64px
          '2xl': '5rem',      // 80px
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1400px',  // Max container width
        },
      },
      
      // Размеры для специфичных элементов
      maxWidth: {
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
      },
      
      // Grid колонки
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
```

---

## 🏗️ Система Grid и Container

### Container Component

```tsx
// components/ui/container.tsx
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'default' | 'narrow' | 'wide' | 'full'
}

export function Container({ 
  children, 
  className, 
  size = 'default',
  ...props 
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-7xl',      // 1280px
    narrow: 'max-w-4xl',       // 896px (для текстового контента)
    wide: 'max-w-[1400px]',    // 1400px (для широких таблиц)
    full: 'max-w-full',        // Full width
  }

  return (
    <div
      className={cn(
        "mx-auto w-full",
        "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

### Grid System Component

```tsx
// components/ui/grid.tsx
import { cn } from "@/lib/utils"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    '2xl'?: number
  }
  gap?: string
}

export function Grid({ 
  children, 
  className, 
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'gap-6',
  ...props 
}: GridProps) {
  const gridCols = `
    grid-cols-${cols.default}
    ${cols.sm ? `sm:grid-cols-${cols.sm}` : ''}
    ${cols.md ? `md:grid-cols-${cols.md}` : ''}
    ${cols.lg ? `lg:grid-cols-${cols.lg}` : ''}
    ${cols.xl ? `xl:grid-cols-${cols.xl}` : ''}
    ${cols['2xl'] ? `2xl:grid-cols-${cols['2xl']}` : ''}
  `.trim()

  return (
    <div
      className={cn("grid", gridCols, gap, className)}
      {...props}
    >
      {children}
    </div>
  )
}
```

### Section Component

```tsx
// components/ui/section.tsx
import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerSize?: 'default' | 'narrow' | 'wide' | 'full'
  noPadding?: boolean
}

export function Section({ 
  children, 
  className,
  containerSize = 'default',
  noPadding = false,
  ...props 
}: SectionProps) {
  return (
    <section
      className={cn(
        !noPadding && "py-12 sm:py-16 md:py-20 lg:py-24",
        className
      )}
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}
```

---

## 📐 Правила адаптивности по модулям

### **МОДУЛЬ 0: Публичный портал**

#### Hero Section
```tsx
// Правила поведения:
// Mobile: Single column, centered, padding 20px
// Tablet: Same as mobile, larger text
// Desktop: Can add side content, max-width container

<Section className="bg-gradient-to-b from-primary/5 to-background">
  <div className="
    flex flex-col items-center text-center
    lg:flex-row lg:text-left lg:items-start
    gap-8 lg:gap-12
  ">
    {/* Content */}
    <div className="flex-1 space-y-4 lg:space-y-6">
      <h1 className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold tracking-tight
      ">
        Find Your Perfect Bank
      </h1>
      <p className="
        text-base sm:text-lg md:text-xl 
        text-muted-foreground
        max-w-2xl mx-auto lg:mx-0
      ">
        Connect with banking partners worldwide
      </p>
      {/* CTA Buttons */}
      <div className="
        flex flex-col sm:flex-row 
        gap-3 sm:gap-4
        justify-center lg:justify-start
      ">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </div>
    
    {/* Image/Illustration (desktop only) */}
    <div className="hidden lg:block flex-1">
      <img src="/hero.png" alt="Hero" />
    </div>
  </div>
</Section>
```

#### Bank Cards Grid
```tsx
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 3 columns
// Large: 4 columns

<Grid 
  cols={{ default: 1, sm: 2, lg: 3, xl: 4 }}
  gap="gap-4 md:gap-6"
>
  {banks.map(bank => (
    <BankCard key={bank.id} {...bank} />
  ))}
</Grid>
```

#### Filter Sidebar
```tsx
// Mobile: Sheet (slide from left)
// Desktop: Fixed sidebar

{/* Mobile */}
<div className="lg:hidden">
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="sm">
        <Filter className="mr-2 h-4 w-4" />
        Filters
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <FilterContent />
    </SheetContent>
  </Sheet>
</div>

{/* Desktop */}
<div className="hidden lg:block w-64 shrink-0">
  <FilterContent />
</div>
```

#### Bank Detail Page Layout
```tsx
<div className="
  grid grid-cols-1 lg:grid-cols-12 
  gap-6 lg:gap-8
">
  {/* Main Content */}
  <div className="lg:col-span-8 space-y-6">
    {/* Bank Header */}
    <Card className="p-4 sm:p-6">
      <div className="
        flex flex-col sm:flex-row 
        gap-4 sm:gap-6 
        items-start
      ">
        <img 
          src={bank.logo} 
          className="w-16 h-16 sm:w-20 sm:h-20" 
        />
        <div className="flex-1 space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">
            {bank.name}
          </h1>
          <div className="flex items-center gap-2">
            <StarRating value={bank.rating} />
            <span className="text-sm text-muted-foreground">
              ({bank.reviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </Card>
    
    {/* Tabs */}
    <Tabs defaultValue="overview">
      <TabsList className="w-full sm:w-auto">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="pricing">Pricing</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      {/* Tab Content */}
    </Tabs>
  </div>
  
  {/* Sidebar (Desktop only) */}
  <div className="lg:col-span-4">
    <div className="sticky top-24 space-y-4">
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Quick Actions</h3>
        <Button className="w-full" size="lg">Apply Now</Button>
      </Card>
    </div>
  </div>
</div>
```

---

### **МОДУЛЬ 1: Регистрация клиентов**

#### Multi-step Form
```tsx
// Mobile: Full screen, one step at a time
// Desktop: Sidebar with steps, form on the right

<div className="min-h-screen bg-muted/30">
  <Container size="wide">
    <div className="
      grid grid-cols-1 lg:grid-cols-12 
      gap-0 lg:gap-8
      py-8 lg:py-12
    ">
      {/* Steps Sidebar - Mobile: Top, Desktop: Left */}
      <div className="
        lg:col-span-3
        mb-6 lg:mb-0
      ">
        <div className="
          flex flex-row lg:flex-col
          gap-3 lg:gap-4
          overflow-x-auto lg:overflow-x-visible
          pb-4 lg:pb-0
        ">
          {steps.map((step, i) => (
            <StepItem 
              key={i} 
              step={step} 
              active={currentStep === i}
              className="
                min-w-[120px] lg:min-w-0
                flex-shrink-0 lg:flex-shrink
              "
            />
          ))}
        </div>
      </div>
      
      {/* Form Content */}
      <div className="lg:col-span-9">
        <Card className="p-4 sm:p-6 md:p-8">
          <FormContent />
        </Card>
      </div>
    </div>
  </Container>
</div>
```

#### Form Fields Responsive Layout
```tsx
// Adaptive form grid based on field types

<div className="space-y-6">
  {/* Full width fields (textarea, select with search) */}
  <div className="grid grid-cols-1 gap-4">
    <FormField name="companyName" />
    <FormField name="description" type="textarea" />
  </div>
  
  {/* Two columns on tablet+ */}
  <div className="
    grid grid-cols-1 sm:grid-cols-2 
    gap-4 sm:gap-6
  ">
    <FormField name="country" />
    <FormField name="industry" />
  </div>
  
  {/* Three columns on desktop */}
  <div className="
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    gap-4 sm:gap-6
  ">
    <FormField name="uboResidence" />
    <FormField name="directorResidence" />
    <FormField name="monthlyTurnover" />
  </div>
</div>
```

---

### **МОДУЛЬ 2: Партнеры (Банки)**

#### Partner Landing Page
```tsx
<div className="space-y-16 md:space-y-24">
  {/* Hero */}
  <Section>
    <div className="
      text-center max-w-3xl mx-auto
      space-y-6
    ">
      <Badge className="mx-auto">For Banks</Badge>
      <h1 className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-bold
      ">
        Join Our Network
      </h1>
    </div>
  </Section>
  
  {/* Features Grid */}
  <Section>
    <Grid 
      cols={{ default: 1, md: 2, lg: 3 }}
      gap="gap-6 lg:gap-8"
    >
      {features.map(feature => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </Grid>
  </Section>
</div>
```

#### Bank Profile Management
```tsx
// Complex form with tabs and multiple sections

<div className="space-y-6">
  <Tabs defaultValue="general">
    {/* Scrollable tabs on mobile */}
    <TabsList className="
      w-full justify-start
      overflow-x-auto
      sm:w-auto
    ">
      <TabsTrigger value="general">General</TabsTrigger>
      <TabsTrigger value="criteria">Criteria</TabsTrigger>
      <TabsTrigger value="fees">Fees</TabsTrigger>
      <TabsTrigger value="services">Services</TabsTrigger>
    </TabsList>
    
    <TabsContent value="general" className="space-y-6">
      {/* Logo Upload */}
      <div className="
        flex flex-col sm:flex-row
        items-start sm:items-center
        gap-4 sm:gap-6
      ">
        <div className="
          w-24 h-24 sm:w-32 sm:h-32
          border-2 border-dashed rounded-lg
          flex items-center justify-center
        ">
          {logo ? <img src={logo} /> : <Upload />}
        </div>
        <div className="flex-1 space-y-2">
          <Label>Bank Logo</Label>
          <Input type="file" accept="image/*" />
        </div>
      </div>
      
      {/* Other fields... */}
    </TabsContent>
  </Tabs>
</div>
```

---

### **МОДУЛЬ 3: Алгоритм подбора**

#### Proposals Table
```tsx
// Mobile: Cards
// Desktop: Table

{/* Mobile View */}
<div className="lg:hidden space-y-4">
  {proposals.map(proposal => (
    <Card key={proposal.id} className="p-4">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{proposal.bankName}</h3>
            <p className="text-sm text-muted-foreground">
              {proposal.country}
            </p>
          </div>
          <Badge>{proposal.accountType}</Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground">Open Fee:</span>
            <span className="font-medium ml-1">€{proposal.openFee}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Incoming:</span>
            <span className="font-medium ml-1">{proposal.incomingFee}%</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            Details
          </Button>
          <Button size="sm" className="flex-1">
            Apply
          </Button>
        </div>
      </div>
    </Card>
  ))}
</div>

{/* Desktop View */}
<div className="hidden lg:block">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Country</TableHead>
        <TableHead>Type</TableHead>
        <TableHead>Open Fee</TableHead>
        <TableHead>Incoming</TableHead>
        <TableHead>Outgoing</TableHead>
        <TableHead>Time</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {proposals.map(proposal => (
        <TableRow key={proposal.id}>
          {/* Table cells */}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>
```

---

### **МОДУЛЬ 4: Чат**

#### Chat Layout
```tsx
// Mobile: Full screen chat
// Desktop: Split view with list

<div className="
  h-[calc(100vh-4rem)]
  flex flex-col lg:flex-row
">
  {/* Conversations List */}
  <div className="
    lg:w-80 lg:border-r
    hidden lg:block
  ">
    <ConversationsList />
  </div>
  
  {/* Mobile: Show list or chat based on state */}
  <div className="lg:hidden">
    {selectedChat ? (
      <ChatWindow />
    ) : (
      <ConversationsList />
    )}
  </div>
  
  {/* Chat Window */}
  <div className="
    hidden lg:flex flex-1 flex-col
  ">
    <ChatWindow />
  </div>
</div>
```

#### Chat Messages
```tsx
<div className="
  flex-1 overflow-y-auto
  p-4 sm:p-6
  space-y-4
">
  {messages.map(msg => (
    <div
      key={msg.id}
      className={cn(
        "flex",
        msg.isOwn ? "justify-end" : "justify-start"
      )}
    >
      <div className={cn(
        "max-w-[85%] sm:max-w-[75%] lg:max-w-[65%]",
        "rounded-lg p-3 sm:p-4",
        msg.isOwn 
          ? "bg-primary text-primary-foreground" 
          : "bg-muted"
      )}>
        {msg.content}
      </div>
    </div>
  ))}
</div>
```

---

### **МОДУЛЬ 5: Админка**

#### Dashboard Layout
```tsx
<div className="space-y-6 lg:space-y-8">
  {/* Stats Grid */}
  <Grid 
    cols={{ default: 1, sm: 2, lg: 4 }}
    gap="gap-4 md:gap-6"
  >
    {stats.map(stat => (
      <Card key={stat.id}>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              {stat.label}
            </p>
            <p className="text-2xl sm:text-3xl font-bold">
              {stat.value}
            </p>
          </div>
        </CardContent>
      </Card>
    ))}
  </Grid>
  
  {/* Charts - Responsive grid */}
  <div className="
    grid grid-cols-1 lg:grid-cols-2
    gap-6
  ">
    <Card>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <LineChart data={revenueData} />
      </CardContent>
    </Card>
    
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart data={usersData} />
      </CardContent>
    </Card>
  </div>
</div>
```

#### Admin Tables
```tsx
// Mobile: Scrollable cards
// Desktop: Full data table with filters

<div className="space-y-4">
  {/* Filters */}
  <div className="
    flex flex-col sm:flex-row
    gap-3 sm:gap-4
  ">
    <Input 
      placeholder="Search..." 
      className="sm:max-w-xs"
    />
    <Select>
      <SelectTrigger className="sm:w-[180px]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
    </Select>
    <Button variant="outline" className="sm:ml-auto">
      <Filter className="mr-2 h-4 w-4" />
      Filters
    </Button>
  </div>
  
  {/* Table */}
  <DataTable 
    columns={columns}
    data={data}
    mobileCardView={true}
  />
</div>
```

---

### **МОДУЛЬ 6: Монетизация**

#### Pricing Cards
```tsx
<Section>
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="
      text-3xl sm:text-4xl md:text-5xl
      font-bold mb-4
    ">
      Choose Your Plan
    </h2>
  </div>
  
  <Grid 
    cols={{ default: 1, md: 2, lg: 3 }}
    gap="gap-6 lg:gap-8"
  >
    {plans.map(plan => (
      <Card 
        key={plan.id}
        className={cn(
          "p-6 sm:p-8",
          plan.featured && "border-primary shadow-lg scale-105"
        )}
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">
                ${plan.price}
              </span>
              <span className="text-muted-foreground">
                /month
              </span>
            </div>
          </div>
          
          <ul className="space-y-3">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className="w-full"
            variant={plan.featured ? "default" : "outline"}
          >
            {plan.cta}
          </Button>
        </div>
      </Card>
    ))}
  </Grid>
</Section>
```

---

## 🎨 CSS Переменные (globals.css)

```css
@layer base {
  :root {
    /* Spacing System */
    --spacing-unit: 0.25rem; /* 4px */
    --spacing-xs: calc(var(--spacing-unit) * 2);  /* 8px */
    --spacing-sm: calc(var(--spacing-unit) * 3);  /* 12px */
    --spacing-md: calc(var(--spacing-unit) * 4);  /* 16px */
    --spacing-lg: calc(var(--spacing-unit) * 6);  /* 24px */
    --spacing-xl: calc(var(--spacing-unit) * 8);  /* 32px */
    --spacing-2xl: calc(var(--spacing-unit) * 12); /* 48px */
    --spacing-3xl: calc(var(--spacing-unit) * 16); /* 64px */
    
    /* Container */
    --container-padding-mobile: 1rem;
    --container-padding-tablet: 2rem;
    --container-padding-desktop: 3rem;
    --container-max-width: 1280px;
    
    /* Grid */
    --grid-gap-mobile: 1rem;
    --grid-gap-tablet: 1.5rem;
    --grid-gap-desktop: 2rem;
    
    /* Borders */
    --radius-sm: 0.375rem;  /* 6px */
    --radius-md: 0.5rem;    /* 8px */
    --radius-lg: 0.75rem;   /* 12px */
    --radius-xl: 1rem;      /* 16px */
  }
}

/* Responsive Typography */
@layer base {
  html {
    font-size: 16px;
  }
  
  @media (max-width: 640px) {
    html {
      font-size: 14px;
    }
  }
  
  @media (min-width: 1536px) {
    html {
      font-size: 18px;
    }
  }
}

/* Scrollbar Styling */
@layer utilities {
  .scrollbar-thin::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  .scrollbar-thin::-webkit-scrollbar-track {
    @apply bg-transparent;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb {
    @apply bg-muted-foreground/20 rounded-full;
  }
  
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    @apply bg-muted-foreground/30;
  }
}
```

---

## 📏 Breakpoints Стратегия

### Правила принятия решений:

#### 1. **Content-first подход**
- Адаптивность основана на контенте, а не на устройствах
- Брейкпоинты устанавливаются там, где ломается layout

#### 2. **Mobile-first разработка**
- Базовые стили для мобильных
- Расширение функционала через `sm:`, `md:`, `lg:` префиксы

#### 3. **Критические брейкпоинты**

```tsx
// XS (< 475px) - Small phones
- Single column
- Full width buttons
- Collapsed navigation
- Minimal padding

// SM (475px - 640px) - Phones landscape
- 2 column grid где возможно
- Inline form fields
- Side-by-side buttons

// MD (640px - 768px) - Tablets portrait
- 2-3 column layouts
- Sidebar начинает появляться
- Расширенные формы

// LG (768px - 1024px) - Tablets landscape, small laptops
- 3-4 column grids
- Fixed sidebars
- Full data tables

// XL (1024px - 1280px) - Desktops
- 4+ column grids
- Multi-panel layouts
- Rich interactions

// 2XL (1280px+) - Large desktops
- Max container width
- Increased spacing
- Enhanced visuals
```

---

## 🎯 Общие правила компонентов

### Navigation

```tsx
// Mobile: Hamburger menu
// Desktop: Horizontal nav

<header className="border-b sticky top-0 z-50 bg-background">
  <Container>
    <div className="
      flex items-center justify-between
      h-16 sm:h-20
    ">
      <Logo className="h-8 sm:h-10" />
      
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
      
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-6">
        <NavLinks />
      </nav>
      
      <div className="hidden lg:flex items-center gap-3">
        <Button variant="ghost">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  </Container>
</header>
```

### Cards

```tsx
<Card className="
  p-4 sm:p-6 lg:p-8
  hover:shadow-lg transition-shadow
">
  <CardHeader className="
    flex flex-col sm:flex-row
    items-start sm:items-center
    justify-between
    space-y-2 sm:space-y-0
    pb-4
  ">
    <CardTitle className="text-lg sm:text-xl">
      {title}
    </CardTitle>
    <Badge>{status}</Badge>
  </CardHeader>
  
  <CardContent className="space-y-4">
    {content}
  </CardContent>
</Card>
```

### Buttons

```tsx
// Адаптивные размеры кнопок
<div className="
  flex flex-col sm:flex-row
  gap-3 sm:gap-4
">
  <Button 
    size="default"
    className="w-full sm:w-auto"
  >
    Primary Action
  </Button>
  <Button 
    variant="outline" 
    size="default"
    className="w-full sm:w-auto"
  >
    Secondary
  </Button>
</div>
```

### Modals/Dialogs

```tsx
<Dialog>
  <DialogContent className="
    max-w-full sm:max-w-lg
    max-h-[90vh] overflow-y-auto
    p-4 sm:p-6
  ">
    <DialogHeader>
      <DialogTitle className="text-xl sm:text-2xl">
        {title}
      </DialogTitle>
    </DialogHeader>
    <div className="space-y-4 sm:space-y-6">
      {content}
    </div>
    <DialogFooter className="
      flex-col sm:flex-row
      gap-3 sm:gap-4
    ">
      <Button className="w-full sm:w-auto">Confirm</Button>
      <Button variant="outline" className="w-full sm:w-auto">
        Cancel
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## ✅ Чеклист адаптивности

### Перед релизом каждого модуля проверить:

- [ ] **Mobile (< 640px)**
  - [ ] Все элементы видны без горизонтального скролла
  - [ ] Кнопки достаточно большие для тапа (min 44x44px)
  - [ ] Формы удобны для заполнения
  - [ ] Изображения оптимизированы

- [ ] **Tablet (640px - 1024px)**
  - [ ] Layout адаптируется к ширине экрана
  - [ ] Навигация работает корректно
  - [ ] Таблицы читаемы или заменены на карточки

- [ ] **Desktop (1024px+)**
  - [ ] Используется все пространство экрана
  - [ ] Multi-column layouts работают
  - [ ] Hover states функционируют

- [ ] **Общее**
  - [ ] Текст читаем на всех размерах
  - [ ] Spacing консистентен
  - [ ] Нет лишних scroll bars
  - [ ] Touch targets достаточного размера

---

## 📝 Примеры использования

### Полная страница с адаптивным layout

```tsx
export default function BanksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Section className="bg-muted/30">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Find Your Bank
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Browse through our curated list of banking partners
          </p>
        </div>
      </Section>
      
      {/* Main Content */}
      <Section>
        <div className="
          grid grid-cols-1 lg:grid-cols-12
          gap-6 lg:gap-8
        ">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-3">
            <FiltersSidebar />
          </aside>
          
          {/* Results */}
          <main className="lg:col-span-9 space-y-6">
            {/* Sort & View Toggle */}
            <div className="
              flex flex-col sm:flex-row
              items-start sm:items-center
              justify-between
              gap-4
            ">
              <p className="text-sm text-muted-foreground">
                {results.length} banks found
              </p>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                </Select>
              </div>
            </div>
            
            {/* Results Grid */}
            <Grid 
              cols={{ default: 1, md: 2, xl: 3 }}
              gap="gap-4 md:gap-6"
            >
              {results.map(bank => (
                <BankCard key={bank.id} {...bank} />
              ))}
            </Grid>
          </main>
        </div>
      </Section>
    </div>
  )
}
```

---

*Документ создан для обеспечения консистентной адаптивной верстки во всех модулях проекта UberBanking*
