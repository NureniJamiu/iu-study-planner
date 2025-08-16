# IU Study Planner - Frontend

A modern, responsive React TypeScript application for managing academic schedules, courses, assignments, and study sessions for IU students.

## 🚀 Features

- **Course Management**: Add, edit, and track academic courses
- **Assignment Tracking**: Create and manage assignments with due dates and priorities
- **Study Planning**: Schedule study sessions and track progress
- **Progress Analytics**: View GPA calculations and academic progress
- **Responsive Design**: Mobile-first design with TailwindCSS
- **Type Safety**: Full TypeScript implementation
- **Testing**: Comprehensive test coverage with Vitest
- **Accessibility**: WCAG 2.1 AA compliant

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom design system
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier
- **State Management**: React Context (with potential for Zustand/Redux)
- **HTTP Client**: Custom fetch-based service layer
- **Icons**: Lucide React (when added)

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   └── features/        # Feature-specific components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── services/            # API and external service integrations
├── utils/               # Utility functions and helpers
├── types/               # TypeScript type definitions
├── constants/           # Application constants
├── contexts/            # React Context providers
├── assets/              # Static assets
└── test/                # Test utilities and setup
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iu-study-planner/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 🧪 Testing

### Running Tests

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with coverage report
npm run test:coverage

# Run tests with UI
npm run test:ui
```

### Test Coverage Requirements

- **Minimum Coverage**: 80% for lines, functions, branches, and statements
- **Test Types**: Unit tests, integration tests, and component tests
- **Test Pattern**: AAA (Arrange, Act, Assert)

### Writing Tests

```typescript
// Example component test
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## 🎨 Styling Guidelines

### TailwindCSS Usage

- **Mobile-first approach**: Start with mobile styles, then add responsive breakpoints
- **Design tokens**: Use predefined colors, spacing, and typography
- **Custom components**: Create reusable component classes in `@layer components`

### Custom Component Classes

```css
@layer components {
  .btn {
    @apply inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors;
  }
  
  .btn-primary {
    @apply btn bg-primary-600 text-white hover:bg-primary-700;
  }
}
```

## 📝 Code Quality

### Linting and Formatting

```bash
# Check linting issues
npm run lint

# Fix auto-fixable linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check

# Type checking
npm run type-check

# Run all pre-commit checks
npm run pre-commit
```

### Code Standards

- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Functions**: Explicit return types for exported functions
- **Components**: Proper TypeScript interfaces for all props
- **Imports**: Use path aliases (`@/`) for clean imports
- **Error Handling**: Implement proper error boundaries and handling

### Git Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and commit**
   ```bash
   # Run pre-commit checks
   npm run pre-commit
   
   # Commit with conventional format
   git commit -m "feat: add course management functionality"
   ```

3. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🏗️ Building and Deployment

### Development Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|  
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:3000/api` |

### Performance Considerations

- **Bundle Optimization**: Code splitting and lazy loading implemented
- **Image Optimization**: Serve images in modern formats (WebP, AVIF)
- **Caching**: Appropriate caching strategies for static assets
- **Bundle Analysis**: Use `npm run build -- --report` to analyze bundle size

## 🔧 Configuration Files

### Key Configuration Files

- `vite.config.ts` - Vite build configuration
- `vitest.config.ts` - Test configuration
- `tailwind.config.js` - TailwindCSS configuration
- `tsconfig.app.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `.prettierrc` - Prettier configuration

### Path Aliases

The project uses TypeScript path mapping for cleaner imports:

```typescript
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/utils';
import { User } from '@/types';
```

## 🚀 Performance Targets

- **Page Load Time**: < 3 seconds for initial load
- **Time to Interactive**: < 5 seconds
- **Bundle Size**: Monitored and optimized
- **Lighthouse Score**: 90+ for Performance, Accessibility, Best Practices, and SEO

## 🔍 Debugging

### Development Tools

- **React Developer Tools**: For component debugging
- **Vite DevTools**: For build process debugging
- **Browser DevTools**: For performance and network debugging

### Common Issues

1. **Import Path Issues**: Ensure path aliases are configured in both `vite.config.ts` and `tsconfig.app.json`
2. **TypeScript Errors**: Run `npm run type-check` to identify type issues
3. **Build Issues**: Check for unused imports and console statements

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Follow code quality guidelines**
4. **Write comprehensive tests**
5. **Submit a pull request**

### Before Submitting PR

- [ ] All tests pass (`npm run test:run`)
- [ ] Code is properly formatted (`npm run format`)
- [ ] No linting errors (`npm run lint`)
- [ ] TypeScript compiles without errors (`npm run type-check`)
- [ ] Test coverage meets requirements (80%+)
- [ ] Documentation is updated

## 📞 Support

For issues and questions:
- Create an issue in the repository
- Follow the issue template
- Provide reproducible examples

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for IU students
