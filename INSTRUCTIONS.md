# React TypeScript Component Library - Development Instructions

## Project Overview

This is a React component library built with TypeScript, Tailwind CSS, and Vite. It provides reusable UI components for React applications with a modern development stack focused on performance, type safety, and developer experience.

### Tech Stack
- **React 19** - UI library
- **TypeScript 5.7** - Type safety
- **Vite 6** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Biome** - Linting and formatting
- **Vitest** - Testing framework
- **Ladle** - Component development environment (alternative to Storybook)

## Project Structure

```
react-ts-component-library/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.tsx
│   │   ├── Text/
│   │   └── Image/
│   ├── types/               # TypeScript type definitions
│   │   ├── Button.types.ts
│   │   ├── Text.types.ts
│   │   └── Image.types.ts
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API and service utilities
│   ├── assets/              # Static assets
│   ├── pages/               # Page components
│   └── routes/              # Routing configuration
├── biome.json               # Biome configuration
├── vite.config.ts           # Vite configuration
├── vitest.config.js         # Testing configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd react-ts-component-library

# Install dependencies
npm install
```

### Available Scripts

```bash
# Development server
npm run dev                  # Start Vite dev server

# Component development
npm run ladle               # Start Ladle component explorer

# Building
npm run build               # Build library for production

# Testing
npm run test                # Run tests with Vitest

# Code quality
npm run lint                # Check code with Biome
npm run lint:fix            # Fix linting issues automatically
npm run lint:format         # Format code with Biome

# Preview
npm run preview             # Preview production build
```

## Component Development Guidelines

### 1. Component Structure

Each component should follow this structure:
```
ComponentName/
├── ComponentName.tsx        # Main component implementation
├── ComponentName.stories.tsx # Ladle stories for development
├── ComponentName.test.tsx   # Unit tests
└── index.tsx               # Export file
```

### 2. Component Template

```tsx
// ComponentName.tsx
import type { ComponentNameProps } from '../../types/ComponentName.types';

const ComponentName: React.FunctionComponent<ComponentNameProps> = ({
  prop1,
  prop2,
  ...props
}) => {
  return (
    <div className="component-class" {...props}>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

### 3. Type Definitions

Create type definitions in `src/types/ComponentName.types.ts`:

```typescript
// ComponentName.types.ts
export interface ComponentNameProps {
  prop1: string;
  prop2?: boolean;
  className?: string;
  children?: React.ReactNode;
}
```

### 4. Stories (Ladle)

Create component stories for development and documentation:

```tsx
// ComponentName.stories.tsx
import type { Story } from "@ladle/react";
import ComponentName from "./ComponentName";

export const Default: Story = () => (
  <ComponentName prop1="example" />
);

export const WithVariant: Story = () => (
  <ComponentName prop1="example" prop2={true} />
);
```

### 5. Testing

Write comprehensive tests using Vitest and React Testing Library:

```tsx
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName prop1="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
```

## Development Workflow

### 1. Creating a New Component

1. Create component directory: `src/components/NewComponent/`
2. Create component files following the structure above
3. Add type definitions in `src/types/`
4. Create stories for Ladle
5. Write unit tests
6. Export from `index.tsx`

### 2. Development Process

1. **Start development environment:**
   ```bash
   npm run ladle  # For component development
   # OR
   npm run dev    # For full app development
   ```

2. **Code with type safety:**
   - TypeScript will provide compile-time error checking
   - Use proper type definitions for all props

3. **Style with Tailwind:**
   - Use Tailwind utility classes
   - Follow responsive design principles
   - Maintain consistent spacing and colors

4. **Test your components:**
   ```bash
   npm run test          # Run tests
   npm run test -- --watch  # Watch mode
   ```

5. **Maintain code quality:**
   ```bash
   npm run lint:fix      # Auto-fix issues
   npm run lint:format   # Format code
   ```

### 3. Building and Distribution

```bash
# Build the library
npm run build

# The built files will be in the dist/ directory
```

## Code Quality Standards

### Biome Configuration
- **Formatting:** Tab indentation, consistent formatting
- **Linting:** Recommended rules enabled
- **Import organization:** Automatic import sorting

### TypeScript Standards
- Use strict type checking
- Define interfaces for all component props
- Avoid `any` types
- Use proper generic types when needed

### Testing Standards
- Write tests for all components
- Test user interactions and edge cases
- Use descriptive test names
- Maintain good test coverage

## Component Library Best Practices

### 1. API Design
- Keep component APIs simple and intuitive
- Use consistent naming conventions
- Provide sensible defaults
- Support common use cases out of the box

### 2. Accessibility
- Include proper ARIA attributes
- Support keyboard navigation
- Provide meaningful alt text for images
- Ensure good color contrast

### 3. Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Avoid unnecessary re-renders
- Lazy load heavy components when possible

### 4. Documentation
- Document component props in TypeScript interfaces
- Provide comprehensive stories showing different use cases
- Include usage examples in comments

## Troubleshooting

### Common Issues

1. **TypeScript errors:**
   - Check type definitions in `src/types/`
   - Ensure proper imports
   - Verify tsconfig.json settings

2. **Build failures:**
   - Check for TypeScript compilation errors
   - Ensure all dependencies are installed
   - Verify Vite configuration

3. **Test failures:**
   - Check test setup in `setupTests.ts`
   - Ensure testing-library is properly configured
   - Verify jsdom environment setup

### Getting Help

1. Check the console for detailed error messages
2. Review the relevant configuration files
3. Ensure all dependencies are up to date
4. Check the component implementation against the guidelines

## Future Enhancements

Consider implementing:
- [ ] Component variant system
- [ ] Theme provider for consistent styling
- [ ] More comprehensive component library (forms, modals, etc.)
- [ ] Automated documentation generation
- [ ] CI/CD pipeline for automated testing and deployment
- [ ] NPM package publishing workflow
- [ ] Accessibility testing automation
- [ ] Visual regression testing

## Contributing

1. Follow the established component structure
2. Write tests for new components
3. Update type definitions
4. Create comprehensive stories
5. Ensure code passes all linting and formatting checks
6. Update documentation as needed

---

*This component library is designed to be a solid foundation for building reusable React components with modern tooling and best practices.*