# 🏦 UberBanking Platform

> B2B Banking Marketplace - Connecting businesses with banking partners worldwide

[![Railway Deploy](https://railway.app/button.svg)](https://railway.app/project/d93f6b89-f4bb-4e77-a3af-bae744678dd6)

**Live URL:** [Coming Soon]  
**Status:** 🚧 In Development

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)

---

## 🎯 About

UberBanking is a B2B marketplace platform that connects businesses seeking banking services with banking partners worldwide. The platform features:

- 🏦 **Public Bank Catalog** - Browse and compare banking partners
- 📝 **Client Registration** - Multi-step onboarding for businesses
- 🤝 **Partner System** - Bank profile management
- 🎯 **Smart Matching** - Algorithm-based bank proposals
- 💬 **Secure Chat** - Direct communication channel
- 👨‍💼 **Admin Panel** - Complete management dashboard
- 💰 **Monetization** - Subscription-based access

---

## ✨ Features

### For Clients (Businesses)
- Browse bank catalog with advanced filters
- Detailed bank profiles with pricing and reviews
- Company profile creation with document upload
- Automated bank matching based on criteria
- Secure chat with selected banks
- Application status tracking

### For Partners (Banks)
- Partner landing page and registration
- Comprehensive bank profile management
- Lead management dashboard
- Client communication system
- Criteria and pricing configuration

### For Administrators
- Analytics dashboard with statistics
- Client and partner management
- Lead moderation and approval
- User management system
- Content and SEO management

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Re UI
- **Routing:** React Router v6
- **State:** Context API + React Query (TBD)
- **Forms:** React Hook Form + Zod

### Design
- **Fonts:** Inter (UI) + JetBrains Mono (Mono)
- **Colors:** Blue Primary (#3b82f6)
- **Icons:** Lucide React
- **Theme:** Light/Dark mode support

### Deployment
- **Hosting:** Railway
- **CI/CD:** Auto-deploy from GitHub
- **Repository:** GitHub

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/digitalcluster25/uberbanking.git
cd uberbanking

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔄 Development Workflow

### Session-Based Development

This project uses a **session-based workflow** optimized for AI-assisted development:

1. Each session = 1 complete feature
2. After each session: commit + push + deploy
3. Progress tracked in `PROGRESS.md`
4. Session logs in `docs/session-logs/`

### Starting a New Session

```bash
# Read current status
cat PROGRESS.md
cat ROADMAP.md

# Start development
npm run dev

# After completing session
git add .
git commit -m "feat(session-X): description"
git push origin main

# Update progress
# Update PROGRESS.md
# Create docs/session-logs/session-X.md
```

### Continuing Development (New Chat)

Use this command:
```
Продолжаем разработку UberBanking.

Статус: [прочитай PROGRESS.md]
Задача: [прочитай ROADMAP.md - текущая сессия]

Начинай работу с текущего этапа без объяснений.
```

---

## 📁 Project Structure

```
uberbanking/
├── src/
│   ├── components/
│   │   ├── ui/              # Base UI components (shadcn/ui)
│   │   ├── layout/          # Layout components
│   │   ├── home/            # Home page components
│   │   ├── banks/           # Bank components
│   │   ├── auth/            # Auth components
│   │   ├── profile/         # Profile components
│   │   ├── proposals/       # Proposals components
│   │   ├── partner/         # Partner components
│   │   ├── chat/            # Chat components
│   │   ├── admin/           # Admin components
│   │   └── pricing/         # Pricing components
│   ├── pages/               # Page components
│   ├── layouts/             # Layout wrappers
│   ├── routes/              # Route configuration
│   ├── hooks/               # Custom hooks
│   ├── utils/               # Utility functions
│   ├── lib/                 # Third-party configs
│   ├── styles/              # Global styles
│   ├── data/                # Mock data
│   └── types/               # TypeScript types
├── docs/
│   ├── session-logs/        # Session logs
│   ├── issues/              # Issue documentation
│   ├── decisions/           # Technical decisions
│   ├── brd.md              # Business requirements
│   ├── modules-breakdown.md # Modules structure
│   ├── design-system.md    # Design system
│   └── ...
├── public/                  # Static assets
├── PROGRESS.md             # Current progress
├── ROADMAP.md              # Development roadmap
├── CHANGELOG.md            # Change history
├── PROJECT_RULES.md        # Project rules
└── README.md               # This file
```

---

## 📚 Documentation

### Core Documents
- **[SYSTEM_RULES.md](SYSTEM_RULES.md)** - 🔐 **MAIN FILE** - Complete system rules (how to use all docs)
- **[PROJECT_RULES.md](PROJECT_RULES.md)** - Development rules and workflow
- **[ROADMAP.md](ROADMAP.md)** - Development plan with sessions
- **[PROGRESS.md](PROGRESS.md)** - Current progress tracker
- **[CHANGELOG.md](CHANGELOG.md)** - Change history
- **[QUICKSTART.md](QUICKSTART.md)** - Quick start for new sessions

### Design & Architecture
- **[docs/design-system.md](docs/design-system.md)** - Complete design system
- **[docs/design-tokens-reference.md](docs/design-tokens-reference.md)** - Quick reference
- **[docs/responsive-design-system.md](docs/responsive-design-system.md)** - Responsive guidelines
- **[docs/modules-breakdown.md](docs/modules-breakdown.md)** - Modules architecture

### Research & Analysis
- **[docs/brd.md](docs/brd.md)** - Business requirements
- **[docs/components-research.md](docs/components-research.md)** - UI components research
- **[docs/mcp-access-report.md](docs/mcp-access-report.md)** - MCP server report

---

## 🔗 Links

- **GitHub:** https://github.com/digitalcluster25/uberbanking
- **Railway:** https://railway.app/project/d93f6b89-f4bb-4e77-a3af-bae744678dd6
- **Live URL:** [Coming Soon]

---

## 👨‍💻 Development Status

### Current Phase: Foundation
- [x] Phase 0: Planning & Documentation ✅
- [ ] Phase 1: Foundation (Sessions 1-3)
- [ ] Phase 2: Module 0 - Public Portal (Sessions 4-7)
- [ ] Phase 3: Module 1 - Registration (Sessions 8-9)
- [ ] Phase 4: Module 3 - Matching (Session 10)
- [ ] Phase 5: Module 2 - Partners (Sessions 11-12)
- [ ] Phase 6: Module 4 - Chat (Session 13)
- [ ] Phase 7: Module 5 - Admin (Sessions 14-15)
- [ ] Phase 8: Module 6 - Monetization (Session 16)
- [ ] Phase 9: Polish & Deploy (Sessions 17-18)

**Progress:** 0 / 18 sessions completed

See [PROGRESS.md](PROGRESS.md) for detailed status.

---

## 🤝 Contributing

### Git Workflow

1. Each session is a separate feature branch (optional)
2. Commit messages follow conventional commits
3. Push to main triggers auto-deploy to Railway
4. All PRs must pass CI checks (TBD)

### Commit Message Format

```
<type>(scope): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting
- `refactor` - Code restructuring
- `test` - Tests
- `chore` - Maintenance

**Example:**
```bash
git commit -m "feat(session-1): initialize project with tailwind and shadcn/ui

- Added Vite + React + TypeScript setup
- Configured Tailwind CSS with custom theme
- Installed shadcn/ui components
- Set up dark mode support

Session 1 completed ✅"
```

---

## 📝 Session Logs

All session logs are available in [`docs/session-logs/`](docs/session-logs/)

- [Template](docs/session-logs/TEMPLATE.md) - Session log template
- Session logs will be added as development progresses

---

## 🐛 Issue Tracking

Issues and problems are documented in [`docs/issues/`](docs/issues/)

Format: `YYYY-MM-DD-issue-name.md`

---

## 💡 Technical Decisions

Major technical decisions are documented in [`docs/decisions/`](docs/decisions/)

Format: `YYYY-MM-DD-decision-name.md`

---

## 📜 License

[TBD]

---

## 🙏 Acknowledgments

- **UI Components:** [shadcn/ui](https://ui.shadcn.com), [Re UI](https://reui.io)
- **Icons:** [Lucide](https://lucide.dev)
- **Fonts:** [Inter](https://rsms.me/inter/), [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Deployment:** [Railway](https://railway.app)

---

**Built with ❤️ for the fintech industry**
