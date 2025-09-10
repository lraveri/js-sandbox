# TypeScript Sandbox

A modern, fully configured TypeScript sandbox environment for rapid development, testing, and experimentation.

## 🚀 Features

- **TypeScript 5.8+** with modern ES2022 target
- **ESLint + Prettier** for code quality and formatting
- **Vitest** for testing with coverage reports
- **TSX** for fast TypeScript execution
- **Path aliases** (`@/*` → `src/*`) for clean imports
- **VS Code integration** with debugging support
- **Environment variables** support with `.env` file

## 📁 Project Structure

```
ts-sandbox/
├── src/                    # Source code
│   └── index.ts           # Entry point with sample code
├── tests/                 # Test files
│   └── index.test.ts      # Sample tests
├── .vscode/               # VS Code configuration
│   ├── launch.json        # Debug configuration
│   └── settings.json      # Editor settings
├── coverage/              # Test coverage reports
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vitest.config.ts       # Test runner configuration
├── eslint.config.js       # ESLint configuration
└── .prettierrc            # Prettier formatting rules
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run the main TypeScript file with tsx and environment variables |
| `npm test` | Run tests with Vitest |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Lint TypeScript files with ESLint |
| `npm run format` | Format code with Prettier |

## 🏃‍♂️ Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the sandbox:**
   ```bash
   npm run dev
   ```

3. **Run tests:**
   ```bash
   npm test
   ```

4. **View test coverage:**
   ```bash
   npm run test:coverage
   open coverage/index.html
   ```

## 🔧 Configuration Details

### TypeScript Configuration
- **Target:** ES2022
- **Module:** ESNext with Node resolution
- **Strict mode:** Enabled with flexible `noImplicitAny`
- **Source maps:** Enabled for debugging
- **Path mapping:** `@/*` resolves to `src/*`

### Testing Setup
- **Framework:** Vitest with global APIs
- **Coverage:** V8 provider with HTML and text reports
- **Alias support:** Same path mapping as main project

### Code Quality
- **ESLint:** TypeScript-ESLint with recommended rules
- **Prettier:** 4-space tabs, single quotes, 100 character line width
- **VS Code:** Auto-format on save enabled

### Development Experience
- **Fast execution:** tsx for TypeScript without compilation
- **Environment variables:** Loaded from `.env` file
- **VS Code debugging:** Pre-configured launch configuration
- **Hot reload:** Instant feedback during development

## 🎯 Usage Examples

### Basic TypeScript Development
```typescript
// src/index.ts
export function calculate(a: number, b: number): number {
    return a + b;
}

console.log(calculate(5, 3)); // Output: 8
```

### Writing Tests
```typescript
// tests/calculate.test.ts
import { describe, it, expect } from 'vitest';
import { calculate } from '@/index';

describe('calculate', () => {
    it('should add two numbers', () => {
        expect(calculate(2, 3)).toBe(5);
    });
});
```

### Environment Variables
```typescript
// Access environment variables
const env = process.env.APP_ENV; // 'dev' from .env file
```

## 🐛 Debugging

### VS Code Debugging
1. Set breakpoints in your TypeScript files
2. Press `F5` or use the "Debug TS con tsx" configuration
3. Debug directly in the TypeScript source with full type information

### Console Debugging
```bash
# Run with Node.js inspector
npm run dev --inspect

# Run tests in watch mode
npm test -- --watch
```

## 📊 Testing & Coverage

The sandbox includes comprehensive testing setup:

- **Unit tests** with Vitest
- **Coverage reports** in HTML and text format
- **Path alias support** in tests
- **Global test APIs** (describe, it, expect)

View coverage reports by opening `coverage/index.html` after running tests with coverage.

## 🎨 Code Formatting

Prettier is configured with consistent formatting rules:
- 4-space indentation
- Single quotes
- 100-character line width
- No trailing commas
- Semicolons enabled

Format code automatically with VS Code on save, or manually run `npm run format`.

## 🔄 Development Workflow

1. **Write code** in `src/` directory
2. **Run instantly** with `npm run dev`
3. **Write tests** in `tests/` directory
4. **Verify quality** with `npm run lint`
5. **Check coverage** with `npm run test:coverage`
6. **Debug issues** with VS Code debugger

## 🚀 Getting Started with Your Project

1. Replace the sample code in `src/index.ts`
2. Add your dependencies to `package.json`
3. Write tests in the `tests/` directory
4. Customize configuration files as needed
5. Start building your TypeScript project!

This sandbox provides a solid foundation for any TypeScript project, from simple scripts to complex applications.