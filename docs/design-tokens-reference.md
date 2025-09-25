# 🎨 Design Tokens Quick Reference

> Быстрый доступ к цветам, типографике и примерам компонентов

---

## 🎨 Color Palette

### Primary Colors

#### Blue (Primary)
```
█ #eff6ff  primary-50   | Lightest backgrounds
█ #dbeafe  primary-100  | Light backgrounds
█ #bfdbfe  primary-200  | Subtle highlights
█ #93c5fd  primary-300  | Light interactive
█ #60a5fa  primary-400  | Medium interactive
█ #3b82f6  primary-500  | 🎯 BASE - Main brand color
█ #2563eb  primary-600  | 🔷 HOVER - Primary hover state
█ #1d4ed8  primary-700  | Dark interactive
█ #1e40af  primary-800  | Darker elements
█ #1e3a8a  primary-900  | Darkest text/borders
```

**Usage:**
- Main buttons, links, active states
- Brand elements, hero sections
- Primary CTAs

---

### Semantic Colors

#### Success (Green) ✅
```
█ #f0fdf4  success-50   | Success background light
█ #dcfce7  success-100  | Success background
█ #22c55e  success-500  | 🎯 BASE - Approved, Success
█ #16a34a  success-600  | Success hover
█ #15803d  success-700  | Success dark
```

**Status Usage:**
- ✅ Approved leads
- ✅ Opened accounts
- ✅ Success messages
- ✅ Positive metrics (+12% growth)

#### Warning (Amber) ⚠️
```
█ #fffbeb  warning-50   | Warning background light
█ #fef3c7  warning-100  | Warning background
█ #f59e0b  warning-500  | 🎯 BASE - Pending, On Hold
█ #d97706  warning-600  | Warning hover
█ #b45309  warning-700  | Warning dark
```

**Status Usage:**
- ⚠️ In Review leads
- ⚠️ Action Required
- ⚠️ Pending verification
- ⚠️ On Hold status

#### Error (Red) ❌
```
█ #fef2f2  destructive-50  | Error background light
█ #fee2e2  destructive-100 | Error background
█ #ef4444  destructive-500 | 🎯 BASE - Rejected, Error
█ #dc2626  destructive-600 | Error hover
█ #b91c1c  destructive-700 | Error dark
```

**Status Usage:**
- ❌ Rejected leads
- ❌ Declined applications
- ❌ Error messages
- ❌ Failed operations

#### Info (Violet) ℹ️
```
█ #faf5ff  info-50   | Info background light
█ #f3e8ff  info-100  | Info background
█ #a855f7  info-500  | 🎯 BASE - Information
█ #9333ea  info-600  | Info hover
█ #7e22ce  info-700  | Info dark
```

**Status Usage:**
- ℹ️ Information alerts
- ℹ️ Tips and hints
- ℹ️ Neutral notifications

---

### Neutral Colors (Slate)

#### Background & Surfaces
```
█ #ffffff  background      | Main background (light)
█ #020817  background      | Main background (dark)
█ #f8fafc  muted          | Subtle backgrounds
█ #e2e8f0  border         | Borders, dividers
█ #cbd5e1  border-strong  | Emphasized borders
```

#### Text Colors
```
█ #020817  foreground           | Main text (light mode)
█ #f8fafc  foreground           | Main text (dark mode)
█ #64748b  muted-foreground     | Secondary text
█ #94a3b8  muted-light          | Tertiary text
```

---

## 📝 Typography

### Font Families
```
Primary:  Inter (300, 400, 500, 600, 700, 800, 900)
Monospace: JetBrains Mono (400, 500, 600)
```

### Scale & Usage

```
H1 | 48px / 800 | -0.02em
   | Hero titles, main headlines
   | text-5xl font-extrabold tracking-tight

H2 | 36px / 700 | -0.01em
   | Section titles, page headings
   | text-4xl font-bold tracking-tight

H3 | 30px / 700 | normal
   | Card titles, subsections
   | text-3xl font-bold

H4 | 24px / 600 | normal
   | Small headings, groups
   | text-2xl font-semibold

H5 | 20px / 600 | normal
   | Labels, small groups
   | text-xl font-semibold

H6 | 16px / 600 | normal
   | Form labels, captions
   | text-base font-semibold

Body Large | 18px / 400 | 1.75
           | Lead paragraphs, important text
           | text-lg

Body       | 16px / 400 | 1.5
           | Default body text
           | text-base

Small      | 14px / 400 | 1.5
           | Secondary text, metadata
           | text-sm

Extra Small | 12px / 400 | 1.4
            | Captions, hints, footnotes
            | text-xs
```

---

## 🎯 Component Examples

### Buttons

#### Primary Button
```tsx
bg-primary text-primary-foreground
hover:bg-primary/90
shadow-sm hover:shadow-md
h-10 px-4 rounded-md

// Sizes
sm:  h-8  px-3  text-xs   (Small)
md:  h-10 px-4  text-sm   (Default)
lg:  h-11 px-6  text-base (Large)
```

#### Secondary Button
```tsx
border border-input bg-background
hover:bg-accent hover:text-accent-foreground
```

#### Destructive Button
```tsx
bg-destructive text-destructive-foreground
hover:bg-destructive/90
```

---

### Status Badges

```tsx
// Approved ✅
bg-success-100 text-success-700
px-2.5 py-0.5 rounded-md text-xs font-medium

// Pending ⚠️
bg-warning-100 text-warning-700
px-2.5 py-0.5 rounded-md text-xs font-medium

// Rejected ❌
bg-destructive-100 text-destructive-700
px-2.5 py-0.5 rounded-md text-xs font-medium

// In Review 🔄
bg-primary-100 text-primary-700
px-2.5 py-0.5 rounded-md text-xs font-medium
```

---

### Cards

```tsx
// Default Card
border border-border bg-card
rounded-lg shadow-sm
p-6

// Hover Effect
hover:shadow-md hover:border-primary/50
transition-all duration-200

// Featured Card (Accent)
border-2 border-primary
bg-primary/5
```

---

### Form Elements

#### Input
```tsx
h-10 w-full rounded-md
border border-input bg-background
px-3 py-2 text-sm
focus-visible:ring-2 focus-visible:ring-ring
focus-visible:ring-offset-2
disabled:opacity-50 disabled:cursor-not-allowed
```

#### Select
```tsx
h-10 w-full rounded-md
border border-input bg-background
px-3 py-2
```

#### Label
```tsx
text-sm font-medium text-foreground
mb-2
```

---

## 📏 Spacing Scale

```
0   →  0px      (0)
1   →  4px      (0.25rem)
2   →  8px      (0.5rem)
3   →  12px     (0.75rem)
4   →  16px     (1rem)     ⭐ Default gap
5   →  20px     (1.25rem)
6   →  24px     (1.5rem)   ⭐ Card padding
8   →  32px     (2rem)
10  →  40px     (2.5rem)
12  →  48px     (3rem)     ⭐ Section padding (mobile)
16  →  64px     (4rem)
20  →  80px     (5rem)
24  →  96px     (6rem)     ⭐ Section padding (desktop)
```

### Common Patterns
```tsx
// Card padding
p-4   (16px - compact)
p-6   (24px - default)
p-8   (32px - spacious)

// Gap between elements
gap-2  (8px - tight)
gap-4  (16px - default)
gap-6  (24px - relaxed)
gap-8  (32px - loose)

// Section padding
py-12         (48px mobile)
sm:py-16      (64px tablet)
lg:py-24      (96px desktop)
```

---

## 🔘 Border Radius

```
sm   →  6px   (0.375rem)  | Small elements, badges
md   →  8px   (0.5rem)    | ⭐ Buttons, inputs (default)
lg   →  12px  (0.75rem)   | ⭐ Cards
xl   →  16px  (1rem)      | Modals, dialogs
2xl  →  24px  (1.5rem)    | Hero sections
full →  ∞     (9999px)    | Pills, avatars, circles
```

---

## 🌑 Shadows

```
shadow-xs  | Subtle elevation
           | 0 1px 2px rgba(0,0,0,0.05)
           
shadow-sm  | Card default
           | 0 1px 3px rgba(0,0,0,0.1)
           
shadow     | Base elevation
           | 0 4px 6px rgba(0,0,0,0.1)
           
shadow-md  | Hover states
           | 0 10px 15px rgba(0,0,0,0.1)
           
shadow-lg  | Modals, popovers
           | 0 20px 25px rgba(0,0,0,0.1)
           
shadow-xl  | Hero elements
           | 0 25px 50px rgba(0,0,0,0.25)
```

---

## 💡 Real-World Examples

### Bank Card (Module 0)
```tsx
<Card className="group border hover:border-primary/50 hover:shadow-lg transition-all">
  <CardContent className="p-6 space-y-4">
    <div className="flex items-start justify-between">
      <img className="w-12 h-12 rounded-lg" />
      <Badge variant="outline">{country}</Badge>
    </div>
    <h3 className="text-lg font-semibold group-hover:text-primary">
      {name}
    </h3>
    <div className="flex items-center gap-2">
      <StarRating />
      <span className="text-sm text-muted-foreground">
        (245 reviews)
      </span>
    </div>
  </CardContent>
</Card>
```

### Status Badge Grid
```tsx
// Approved
<Badge className="bg-success-100 text-success-700">
  Approved
</Badge>

// In Review
<Badge className="bg-warning-100 text-warning-700">
  In Review
</Badge>

// Rejected
<Badge className="bg-destructive-100 text-destructive-700">
  Rejected
</Badge>

// Action Required
<Badge className="bg-warning-100 text-warning-700 animate-pulse">
  Action Required
</Badge>
```

### Stat Card (Module 5 - Admin)
```tsx
<Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-muted/20">
  <CardContent className="pt-6">
    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
      Total Leads
    </p>
    <p className="text-3xl font-bold mt-2">
      1,284
    </p>
    <div className="flex items-center gap-2 mt-2">
      <Badge variant="success" className="gap-1">
        <TrendingUp className="w-3 h-3" />
        12%
      </Badge>
      <span className="text-sm text-muted-foreground">
        vs last month
      </span>
    </div>
  </CardContent>
</Card>
```

### Proposal Table Row (Module 3)
```tsx
<TableRow className="hover:bg-muted/50 transition-colors cursor-pointer">
  <TableCell className="font-medium">
    <div className="flex items-center gap-3">
      <img className="w-10 h-10 rounded-full" />
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
    <Button size="sm" className="w-full">Apply</Button>
  </TableCell>
</TableRow>
```

---

## 🌙 Dark Mode Tokens

```css
/* Light Mode (Default) */
--background: #ffffff
--foreground: #020817
--muted: #f8fafc
--border: #e2e8f0

/* Dark Mode */
--background: #020817
--foreground: #f8fafc
--muted: #1e293b
--border: #1e293b
```

**Toggle Implementation:**
```tsx
<Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
  <Sun className="dark:hidden" />
  <Moon className="hidden dark:block" />
</Button>
```

---

## ✅ Quick Checklist

### Design Implementation
- [ ] Import Inter & JetBrains Mono fonts
- [ ] Set up CSS variables in globals.css
- [ ] Configure Tailwind with custom colors
- [ ] Implement dark mode toggle
- [ ] Test all semantic colors (success/warning/error)
- [ ] Verify contrast ratios (WCAG AA)
- [ ] Test responsive typography scaling
- [ ] Implement custom scrollbar
- [ ] Add hover/focus states to interactive elements
- [ ] Test dark mode on all components

### Component Styling
- [ ] Buttons (primary, secondary, destructive)
- [ ] Cards (default, hover, featured)
- [ ] Forms (inputs, selects, labels)
- [ ] Badges (all status colors)
- [ ] Tables (responsive layout)
- [ ] Navigation (header, sidebar)
- [ ] Modals/Dialogs
- [ ] Chat interface

---

*Референс создан для быстрого доступа к дизайн-токенам во время разработки*
