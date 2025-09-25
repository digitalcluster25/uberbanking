# 🎨 Design System - UberBanking Platform

> Полная дизайн-система: цвета, типографика, компоненты для финтех-платформы

---

## 📋 Оглавление

1. [Концепция дизайна](#концепция-дизайна)
2. [Цветовая палитра](#цветовая-палитра)
3. [Типографика](#типографика)
4. [Spacing & Layout](#spacing--layout)
5. [Компоненты](#компоненты)
6. [Dark Mode](#dark-mode)
7. [Конфигурация](#конфигурация)

---

## 🎯 Концепция дизайна

### Ключевые принципы:

1. **Доверие и Надежность** 
   - Финтех требует ощущения безопасности
   - Профессиональные цвета (синий, зеленый)
   - Четкая иерархия информации

2. **Современность**
   - Минималистичный интерфейс
   - Плавные анимации
   - Актуальные UI паттерны

3. **Международность**
   - Универсальная цветовая схема
   - Поддержка разных языков
   - Нейтральная символика

4. **Accessibility First**
   - WCAG 2.1 Level AA
   - Высокий контраст текста
   - Keyboard navigation

---

## 🎨 Цветовая палитра

### Primary Colors (Основные)

**Primary - Синий (Trust & Professional)**
```css
--color-primary-50:  #eff6ff;  /* Lightest */
--color-primary-100: #dbeafe;
--color-primary-200: #bfdbfe;
--color-primary-300: #93c5fd;
--color-primary-400: #60a5fa;
--color-primary-500: #3b82f6;  /* Base */
--color-primary-600: #2563eb;  /* Hover */
--color-primary-700: #1d4ed8;
--color-primary-800: #1e40af;
--color-primary-900: #1e3a8a;  /* Darkest */
```

**Usage:**
- Primary buttons
- Links
- Active states
- Brand elements

**Rationale:** Синий цвет ассоциируется с финансами, доверием и стабильностью. Используется большинством банков мира.

---

### Secondary Colors

**Secondary - Slate (Neutral & Modern)**
```css
--color-secondary-50:  #f8fafc;
--color-secondary-100: #f1f5f9;
--color-secondary-200: #e2e8f0;
--color-secondary-300: #cbd5e1;
--color-secondary-400: #94a3b8;
--color-secondary-500: #64748b;  /* Base */
--color-secondary-600: #475569;
--color-secondary-700: #334155;
--color-secondary-800: #1e293b;
--color-secondary-900: #0f172a;
```

**Usage:**
- Secondary buttons
- Borders
- Backgrounds
- Text hierarchy

---

### Semantic Colors (Статусы и действия)

**Success - Green**
```css
--color-success-50:  #f0fdf4;
--color-success-100: #dcfce7;
--color-success-500: #22c55e;  /* Base - Approved, Success */
--color-success-600: #16a34a;  /* Hover */
--color-success-700: #15803d;
```

**Warning - Amber**
```css
--color-warning-50:  #fffbeb;
--color-warning-100: #fef3c7;
--color-warning-500: #f59e0b;  /* Base - Pending, On Hold */
--color-warning-600: #d97706;  /* Hover */
--color-warning-700: #b45309;
```

**Error/Destructive - Red**
```css
--color-destructive-50:  #fef2f2;
--color-destructive-100: #fee2e2;
--color-destructive-500: #ef4444;  /* Base - Rejected, Error */
--color-destructive-600: #dc2626;  /* Hover */
--color-destructive-700: #b91c1c;
```

**Info - Violet**
```css
--color-info-50:  #faf5ff;
--color-info-100: #f3e8ff;
--color-info-500: #a855f7;  /* Base - Information */
--color-info-600: #9333ea;
--color-info-700: #7e22ce;
```

---

### Background & Surface Colors

```css
/* Light Mode */
--background: 0 0% 100%;           /* #ffffff - Main background */
--foreground: 222.2 84% 4.9%;      /* #020817 - Main text */

--card: 0 0% 100%;                 /* #ffffff - Card background */
--card-foreground: 222.2 84% 4.9%; /* Card text */

--popover: 0 0% 100%;              /* Dropdown, tooltips */
--popover-foreground: 222.2 84% 4.9%;

--muted: 210 40% 96.1%;            /* #f8fafc - Muted backgrounds */
--muted-foreground: 215.4 16.3% 46.9%; /* #64748b - Muted text */

--accent: 210 40% 96.1%;           /* Hover states */
--accent-foreground: 222.2 47.4% 11.2%;

--border: 214.3 31.8% 91.4%;       /* #e2e8f0 - Borders */
--input: 214.3 31.8% 91.4%;        /* Input borders */
--ring: 222.2 84% 4.9%;            /* Focus rings */
```

---

### Status Colors Mapping

**Application Status:**
```tsx
const statusColors = {
  // Лиды и заявки
  'new': 'blue',          // Новая заявка
  'in-review': 'amber',   // На рассмотрении
  'approved': 'green',    // Одобрена
  'rejected': 'red',      // Отклонена
  'on-hold': 'orange',    // На паузе
  
  // Account статусы
  'applied': 'blue',      // Подана
  'action-required': 'amber', // Требуется действие
  'opened': 'green',      // Открыт
  
  // Partner статусы
  'verified': 'green',    // Верифицирован
  'pending': 'amber',     // Ожидает
}
```

---

## 📝 Типографика

### Font Family

**Primary Font: Inter**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, sans-serif;
```

**Rationale:** 
- Inter — современный, высокочитаемый шрифт
- Отличная поддержка кириллицы
- Оптимизирован для UI/экранов
- Бесплатный, open-source

**Monospace Font: JetBrains Mono** (для кодов, ID, номеров)
```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

---

### Typography Scale

**Заголовки (Headings)**

```tsx
// H1 - Page titles, Hero
font-size: 3rem;        // 48px
font-weight: 800;       // Extra Bold
line-height: 1.1;
letter-spacing: -0.02em;

// H2 - Section titles
font-size: 2.25rem;     // 36px
font-weight: 700;       // Bold
line-height: 1.2;
letter-spacing: -0.01em;

// H3 - Card titles
font-size: 1.875rem;    // 30px
font-weight: 700;
line-height: 1.3;

// H4 - Subsections
font-size: 1.5rem;      // 24px
font-weight: 600;       // Semi-bold
line-height: 1.4;

// H5 - Small headings
font-size: 1.25rem;     // 20px
font-weight: 600;
line-height: 1.5;

// H6 - Labels
font-size: 1rem;        // 16px
font-weight: 600;
line-height: 1.5;
```

**Body Text**

```tsx
// Large body
font-size: 1.125rem;    // 18px
font-weight: 400;
line-height: 1.75;

// Base body
font-size: 1rem;        // 16px
font-weight: 400;
line-height: 1.5;

// Small text
font-size: 0.875rem;    // 14px
font-weight: 400;
line-height: 1.5;

// Extra small (captions, hints)
font-size: 0.75rem;     // 12px
font-weight: 400;
line-height: 1.4;
```

**UI Text**

```tsx
// Buttons
font-size: 0.875rem;    // 14px
font-weight: 500;       // Medium
letter-spacing: 0.01em;

// Labels
font-size: 0.875rem;    // 14px
font-weight: 500;
letter-spacing: 0.01em;

// Input placeholder
font-size: 0.875rem;    // 14px
font-weight: 400;
color: var(--muted-foreground);
```

---

### Tailwind Typography Classes

```tsx
// Headings
"text-5xl font-extrabold tracking-tight"  // H1
"text-4xl font-bold tracking-tight"       // H2
"text-3xl font-bold"                      // H3
"text-2xl font-semibold"                  // H4
"text-xl font-semibold"                   // H5
"text-base font-semibold"                 // H6

// Body
"text-lg"                                 // Large
"text-base"                               // Default
"text-sm"                                 // Small
"text-xs"                                 // Extra small

// Colors
"text-foreground"                         // Main text
"text-muted-foreground"                   // Secondary text
"text-primary"                            // Primary color
"text-destructive"                        // Error text
```

---

## 📏 Spacing & Layout

### Spacing Scale (базируется на 4px)

```css
/* Tailwind spacing */
--spacing-0: 0;           /* 0px */
--spacing-1: 0.25rem;     /* 4px */
--spacing-2: 0.5rem;      /* 8px */
--spacing-3: 0.75rem;     /* 12px */
--spacing-4: 1rem;        /* 16px */
--spacing-5: 1.25rem;     /* 20px */
--spacing-6: 1.5rem;      /* 24px */
--spacing-8: 2rem;        /* 32px */
--spacing-10: 2.5rem;     /* 40px */
--spacing-12: 3rem;       /* 48px */
--spacing-16: 4rem;       /* 64px */
--spacing-20: 5rem;       /* 80px */
--spacing-24: 6rem;       /* 96px */
```

### Layout Spacing Guidelines

**Section Padding:**
```tsx
// Mobile
"py-12"  // 48px

// Tablet
"sm:py-16"  // 64px

// Desktop
"lg:py-24"  // 96px
```

**Card Padding:**
```tsx
// Compact
"p-4"  // 16px

// Default
"p-6"  // 24px

// Spacious
"p-8"  // 32px
```

**Gap between elements:**
```tsx
// Tight
"gap-2"  // 8px

// Default
"gap-4"  // 16px

// Relaxed
"gap-6"  // 24px

// Loose
"gap-8"  // 32px
```

---

## 🔘 Border Radius

```css
--radius-sm: 0.375rem;  /* 6px - Small elements */
--radius: 0.5rem;       /* 8px - Default */
--radius-md: 0.5rem;    /* 8px - Cards, inputs */
--radius-lg: 0.75rem;   /* 12px - Modals, large cards */
--radius-xl: 1rem;      /* 16px - Hero sections */
--radius-2xl: 1.5rem;   /* 24px - Special cases */
--radius-full: 9999px;  /* Full - Pills, avatars */
```

**Usage:**
```tsx
// Buttons, badges
"rounded-md"  // 8px

// Cards
"rounded-lg"  // 12px

// Modals, dialogs
"rounded-xl"  // 16px

// Avatars, pills
"rounded-full"
```

---

## 🌑 Shadows

```css
/* Shadow scale */
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

**Usage:**
```tsx
// Cards
"shadow-sm"

// Hover states
"hover:shadow-md"

// Modals
"shadow-lg"

// Hero elements
"shadow-xl"
```

---

## 🎨 Component Styling Guide

### Buttons

#### Primary Button
```tsx
<Button className="
  bg-primary text-primary-foreground
  hover:bg-primary/90
  shadow-sm hover:shadow-md
  transition-all duration-200
">
  Apply Now
</Button>
```

#### Secondary Button
```tsx
<Button variant="outline" className="
  border-input bg-background
  hover:bg-accent hover:text-accent-foreground
">
  Learn More
</Button>
```

#### Destructive Button
```tsx
<Button variant="destructive" className="
  bg-destructive text-destructive-foreground
  hover:bg-destructive/90
">
  Reject
</Button>
```

#### Sizes
```tsx
<Button size="sm">Small</Button>      // h-8, text-xs
<Button size="default">Default</Button> // h-10, text-sm
<Button size="lg">Large</Button>      // h-11, text-base
```

---

### Cards

#### Default Card
```tsx
<Card className="
  border border-border
  bg-card
  rounded-lg
  shadow-sm
  hover:shadow-md
  transition-shadow duration-200
">
  <CardHeader>
    <CardTitle className="text-xl font-semibold">
      Bank Name
    </CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

#### Accent Card (для выделения)
```tsx
<Card className="
  border-2 border-primary
  bg-primary/5
  rounded-lg
">
  {/* Featured content */}
</Card>
```

---

### Inputs & Forms

#### Text Input
```tsx
<Input className="
  h-10
  border-input
  bg-background
  rounded-md
  px-3 py-2
  text-sm
  focus-visible:ring-2
  focus-visible:ring-ring
  focus-visible:ring-offset-2
  disabled:opacity-50
  disabled:cursor-not-allowed
"/>
```

#### Select
```tsx
<Select>
  <SelectTrigger className="
    h-10
    border-input
    bg-background
    rounded-md
  ">
    <SelectValue placeholder="Choose..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="opt1">Option 1</SelectItem>
  </SelectContent>
</Select>
```

#### Form Label
```tsx
<Label className="
  text-sm font-medium
  text-foreground
  mb-2
">
  Company Name
</Label>
```

---

### Badges & Status

#### Status Badge
```tsx
// Approved
<Badge variant="success" className="
  bg-success-100 text-success-700
  dark:bg-success-900 dark:text-success-300
">
  Approved
</Badge>

// Pending
<Badge variant="warning" className="
  bg-warning-100 text-warning-700
">
  Pending
</Badge>

// Rejected
<Badge variant="destructive" className="
  bg-destructive-100 text-destructive-700
">
  Rejected
</Badge>
```

#### Info Badge
```tsx
<Badge className="
  bg-primary/10 text-primary
  border border-primary/20
">
  New
</Badge>
```

---

### Tables

#### Responsive Table
```tsx
<Table className="
  border border-border
  rounded-lg
  overflow-hidden
">
  <TableHeader className="
    bg-muted/50
    border-b border-border
  ">
    <TableRow>
      <TableHead className="
        font-semibold text-sm
        text-muted-foreground
      ">
        Name
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="
      hover:bg-muted/50
      transition-colors
    ">
      <TableCell className="py-4">
        Content
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

### Navigation

#### Header
```tsx
<header className="
  sticky top-0 z-50
  border-b border-border
  bg-background/95 backdrop-blur
  supports-[backdrop-filter]:bg-background/60
">
  <div className="
    container
    flex h-16 items-center
    justify-between
  ">
    <Logo />
    <Nav />
  </div>
</header>
```

#### Sidebar
```tsx
<aside className="
  w-64
  border-r border-border
  bg-muted/30
  p-4
">
  {/* Navigation items */}
</aside>
```

---

### Modals & Dialogs

#### Dialog
```tsx
<Dialog>
  <DialogContent className="
    max-w-lg
    bg-card
    border border-border
    rounded-lg
    shadow-xl
    p-6
  ">
    <DialogHeader>
      <DialogTitle className="
        text-2xl font-bold
      ">
        Confirm Action
      </DialogTitle>
      <DialogDescription className="
        text-muted-foreground
        text-sm
      ">
        Description text
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="
      flex gap-3
      justify-end
    ">
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

### Chat Interface

#### Message Bubble
```tsx
// Own message
<div className="
  ml-auto
  max-w-[75%]
  bg-primary
  text-primary-foreground
  rounded-2xl rounded-br-sm
  px-4 py-2.5
  shadow-sm
">
  Message text
</div>

// Other's message
<div className="
  mr-auto
  max-w-[75%]
  bg-muted
  text-foreground
  rounded-2xl rounded-bl-sm
  px-4 py-2.5
">
  Message text
</div>
```

---

## 🌙 Dark Mode

### Color Tokens (Dark Mode)

```css
.dark {
  --background: 222.2 84% 4.9%;           /* #020817 */
  --foreground: 210 40% 98%;              /* #f8fafc */

  --card: 222.2 84% 4.9%;                 /* #020817 */
  --card-foreground: 210 40% 98%;

  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;

  --primary: 217.2 91.2% 59.8%;           /* #3b82f6 */
  --primary-foreground: 222.2 47.4% 11.2%;

  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;

  --muted: 217.2 32.6% 17.5%;             /* #1e293b */
  --muted-foreground: 215 20.2% 65.1%;    /* #94a3b8 */

  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;

  --border: 217.2 32.6% 17.5%;            /* #1e293b */
  --input: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}
```

### Dark Mode Toggle

```tsx
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

---

## ⚙️ Конфигурация

### Tailwind Config (`tailwind.config.ts`)

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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        info: {
          50: '#faf5ff',
          100: '#f3e8ff',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
```

### CSS Variables (`app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');

@layer base {
  :root {
    /* Colors */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    
    /* Border Radius */
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', sans-serif;
  }
}

/* Custom scrollbar */
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

## 📱 Module-Specific Styling

### Module 0: Public Portal

**Hero Section:**
```tsx
<section className="
  relative
  bg-gradient-to-b from-primary/5 via-background to-background
  py-16 sm:py-24 lg:py-32
">
  <Container>
    <div className="text-center space-y-6 max-w-3xl mx-auto">
      <Badge className="bg-primary/10 text-primary border-primary/20">
        Trusted by 500+ Companies
      </Badge>
      <h1 className="
        text-4xl sm:text-5xl lg:text-6xl
        font-extrabold tracking-tight
        bg-clip-text text-transparent
        bg-gradient-to-r from-primary to-primary/60
      ">
        Find Your Perfect Bank
      </h1>
      <p className="text-lg text-muted-foreground">
        Connect with banking partners worldwide
      </p>
    </div>
  </Container>
</section>
```

**Bank Card:**
```tsx
<Card className="
  group
  border border-border
  hover:border-primary/50
  hover:shadow-lg
  transition-all duration-200
  cursor-pointer
">
  <CardContent className="p-6 space-y-4">
    <div className="flex items-start justify-between">
      <img src={logo} className="w-12 h-12 rounded-lg" />
      <Badge variant="outline">{country}</Badge>
    </div>
    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
      {bankName}
    </h3>
    <div className="flex items-center gap-2">
      <StarRating value={rating} />
      <span className="text-sm text-muted-foreground">
        ({reviews})
      </span>
    </div>
  </CardContent>
</Card>
```

---

### Module 3: Matching Results

**Proposal Table Row:**
```tsx
<TableRow className="
  hover:bg-muted/50
  transition-colors
  cursor-pointer
">
  <TableCell className="font-medium">
    <div className="flex items-center gap-3">
      <img src={logo} className="w-10 h-10 rounded-full" />
      <span>{bankName}</span>
    </div>
  </TableCell>
  <TableCell>
    <Badge className="bg-primary/10 text-primary">
      {accountType}
    </Badge>
  </TableCell>
  <TableCell className="font-mono text-sm">
    €{openFee}
  </TableCell>
  <TableCell>
    <Button size="sm" className="w-full">
      Apply
    </Button>
  </TableCell>
</TableRow>
```

---

### Module 5: Admin Panel

**Stats Card:**
```tsx
<Card className="
  border-l-4 border-l-primary
  bg-gradient-to-br from-card to-muted/20
">
  <CardContent className="pt-6">
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        Total Leads
      </p>
      <p className="text-3xl font-bold">
        1,284
      </p>
      <div className="flex items-center gap-2 text-sm">
        <Badge variant="success" className="gap-1">
          <TrendingUp className="w-3 h-3" />
          12%
        </Badge>
        <span className="text-muted-foreground">vs last month</span>
      </div>
    </div>
  </CardContent>
</Card>
```

---

## ✅ Design Checklist

### Перед запуском:

- [ ] Все цвета проверены на contrast ratio (WCAG AA)
- [ ] Шрифты загружены и применены
- [ ] CSS переменные настроены
- [ ] Dark mode работает
- [ ] Компоненты консистентны
- [ ] Spacing system применен везде
- [ ] Border radius унифицирован
- [ ] Shadows применены корректно
- [ ] Hover states работают
- [ ] Focus states видны (accessibility)

---

*Дизайн-система создана для обеспечения визуальной консистентности и профессионального внешнего вида платформы UberBanking*
