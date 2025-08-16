# IU Study Planner

A comprehensive study planning application for IU students to manage courses, assignments, schedules, and study sessions.

## 🏗️ Project Structure

```
iu-study-planner/
├── frontend/          # React TypeScript application
├── backend/           # Node.js API server (planned)
├── database/          # Database schemas and migrations (planned)
├── docs/              # Documentation and guides
└── README.md         # This file
```

## ✨ Features

### 📚 Course Management
- Track enrolled courses with credits and grades
- Calculate GPA automatically
- Organize courses by semester

### 📝 Assignment Tracking
- Create and manage assignments with due dates
- Set priorities and estimated completion time
- Track completion status

### 📅 Study Session Planning
- Schedule focused study sessions
- Track study time and progress
- Link sessions to specific courses or assignments

### 📊 Analytics Dashboard
- GPA calculation and trends
- Study time analytics
- Assignment deadline overview
- Progress tracking

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Vitest** - Fast testing framework

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **TypeScript Strict Mode** - Maximum type safety
- **Path Aliases** - Clean import statements

## 📦 Project Status

### ✅ Completed
- **Frontend Foundation** - React + TypeScript + Vite setup
- **UI Component Library** - Reusable components with design system
- **Routing System** - React Router with protected routes
- **State Management** - Context providers for auth and theming
- **Build System** - Production-ready build pipeline
- **Testing Framework** - Vitest with 80% coverage requirements

### 🔄 In Progress
- Authentication system implementation
- Course management features
- Assignment tracking functionality

### 📋 Planned
- Backend API development
- Database integration
- Study session planning
- Analytics dashboard

## 🧪 Testing

```bash
cd frontend
npm run test:run      # Run tests once
npm run test:coverage # Run with coverage report
npm run test:watch    # Run in watch mode
```

**Coverage Requirements**: 80% minimum for lines, functions, branches, and statements

## 🎨 Code Quality

```bash
cd frontend
npm run lint          # Check code quality
npm run format        # Format code
npm run type-check    # TypeScript validation
npm run pre-commit    # Full quality check
```

## 🚀 Deployment

```bash
cd frontend
npm run build        # Production build
npm run preview      # Preview production build
```

## 📚 Documentation

- [Frontend README](./frontend/README.md) - Detailed frontend documentation
- [Setup Complete](./frontend/SETUP-COMPLETE.md) - Initial setup summary
- [Phase 2 Progress](./frontend/PHASE-2-PROGRESS.md) - Development progress

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following our code quality standards
4. Run tests and quality checks (`npm run pre-commit`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Commit Convention
We use [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎓 About

Built with ❤️ for IU students to help manage their academic journey more effectively.

---

**Current Status**: Frontend foundation complete, feature implementation in progress
**Last Updated**: August 16, 2025
