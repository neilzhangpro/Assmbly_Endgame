# Assembly: Endgame

A word guessing game built with React where players must guess hidden words within 8 attempts to save programming languages from being lost to Assembly. Think of it as Hangman meets the programming world!

![Game Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)

## Table of Contents

- [Project Overview](#project-overview)
- [Game Rules](#game-rules)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Running](#installation--running)
- [Development Guide](#development-guide)
- [How to Play](#how-to-play)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

**Assembly: Endgame** is an interactive word guessing game that combines the classic Hangman gameplay with a programming theme. Players are challenged to guess a hidden word by selecting letters, but beware—each wrong guess costs you a programming language! Your goal is to guess the word before all 8 programming languages are lost to Assembly.

### Concept

The game presents a unique twist on the traditional word guessing game:
- Instead of drawing a hangman figure, programming languages disappear one by one
- Each wrong letter guess results in losing a programming language (marked with a skull emoji)
- You have 8 attempts (corresponding to 8 programming languages) before the game ends
- Special farewell messages appear when languages are lost
- Confetti celebration when you win!

## Game Rules

### Objective
Guess the hidden word by selecting letters from the alphabet before running out of attempts.

### How It Works

1. **Starting the Game**
   - A random word is selected from a predefined word list
   - The word is displayed as blank spaces (one per letter)
   - 8 programming languages are shown, ready to be protected

2. **Making Guesses**
   - Click on any letter from the virtual keyboard
   - Correct guesses reveal all instances of that letter in the word
   - Wrong guesses result in losing a programming language

3. **Language Loss**
   - Each wrong guess causes one programming language to be "lost"
   - Lost languages are marked with a skull emoji (💀) overlay
   - A random farewell message is displayed when a language is lost

4. **Winning Conditions**
   - **Win**: Guess all letters in the word before making 8 wrong guesses
   - **Lose**: Make 8 wrong guesses (lose all programming languages)

5. **Game Over**
   - When the game ends, all unguessed letters in the word are revealed in red
   - A "New Game" button appears to start a new round

### Visual Feedback

- **Yellow buttons**: Unguessed letters
- **Green buttons**: Correctly guessed letters (letter is in the word)
- **Red buttons**: Incorrectly guessed letters (letter is not in the word)
- **Lost languages**: Marked with skull emoji overlay

## Features

### Core Features
- 🎮 Interactive word guessing gameplay
- 🎯 8 programming languages to protect (HTML, CSS, JavaScript, React, TypeScript, Node.js, Python, Ruby)
- 🎉 Confetti animation on victory
- 💀 Visual feedback for lost languages
- 📝 Random farewell messages for lost languages
- 🔄 New game functionality
- 🎨 Modern, dark-themed UI with custom color schemes for each language

### UI/UX Features
- Responsive design that works on different screen sizes
- Intuitive keyboard interface with visual state indicators
- Clear game status messages (win/lose/farewell)
- Disabled buttons when game is over
- Smooth transitions and visual feedback

## Tech Stack

### Core Technologies
- **React** `19.2.0` - UI library for building interactive components
- **Vite** `7.2.4` - Fast build tool and development server
- **React DOM** `19.2.0` - React renderer for the web

### Key Dependencies
- **react-confetti** `6.4.0` - Confetti animation effect for victory celebrations

### Development Tools
- **ESLint** `9.39.1` - Code linting and quality checking
- **@vitejs/plugin-react** `5.1.1` - Vite plugin for React support
- **babel-plugin-react-compiler** `1.0.0` - React Compiler support

### Browser Support
- Modern browsers supporting ES6+ features
- Tested on Chrome, Firefox, Safari, and Edge

## Project Structure

```
Assmbly Endgame/
├── public/                  # Static assets
│   └── vite.svg
├── src/
│   ├── components/         # React components
│   │   ├── GameHeader.jsx      # Game title and description
│   │   ├── LanguageList.jsx    # Programming languages display
│   │   ├── WordDisplay.jsx     # Word reveal area
│   │   ├── Keyboard.jsx        # Virtual alphabet keyboard
│   │   ├── GameStatus.jsx      # Win/lose/farewell messages
│   │   └── NewGameButton.jsx   # Restart game button
│   ├── App.jsx             # Main application component
│   ├── App.css             # Main application styles
│   ├── main.jsx            # Application entry point
│   ├── constants.js        # Game constants and configuration
│   ├── utils.js            # Utility functions
│   ├── words.js            # Word database
│   ├── languages.js        # Programming languages configuration
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── README.md               # This file
```

### Component Breakdown

#### `App.jsx`
- Main container component
- Manages game state and business logic
- Coordinates between all child components
- Handles user interactions and game flow

#### Components
- **GameHeader**: Static header with game title and description
- **LanguageList**: Displays programming languages with their status (active/lost)
- **WordDisplay**: Shows the word being guessed with letter visibility
- **Keyboard**: Interactive alphabet buttons with state indicators
- **GameStatus**: Conditional rendering of win/lose/farewell messages
- **NewGameButton**: Button to restart the game

#### Data Files
- **words.js**: Array of ~480 common English words
- **languages.js**: Configuration for 8 programming languages with colors
- **constants.js**: Shared constants like alphabet string and max wrong guesses

#### Utilities
- **utils.js**: Helper functions for random word selection and farewell messages

## Installation & Running

### Prerequisites
- **Node.js** version 16.x or higher
- **npm** or **yarn** package manager

### Installation Steps

1. **Clone or download the project**
   ```bash
   cd "Assmbly Endgame"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will be available at `http://localhost:5173` (or the port shown in terminal)
   - Vite will automatically open the app in your default browser

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

### Building for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory, optimized and ready for deployment.

## Development Guide

### Code Style

- Use functional components with hooks
- Follow React best practices and conventions
- Maintain consistent naming conventions:
  - Components: PascalCase (e.g., `GameHeader`)
  - Functions: camelCase (e.g., `handleUserInput`)
  - Constants: UPPER_SNAKE_CASE (e.g., `MAX_WRONG_GUESSES`)
  - Files: Match component/function names (e.g., `GameHeader.jsx`)
- Write comprehensive English comments for all code sections
- Organize imports by category (third-party, internal modules, components, styles)
- Group related code with section comments

### Adding New Words

To add words to the game:

1. Open `src/words.js`
2. Add new word strings to the `words` array:
   ```javascript
   export const words = [
       "existing",
       "words",
       "newword",  // Add your word here
       // ...
   ];
   ```
3. Ensure words are:
   - In lowercase
   - Only contain letters (A-Z)
   - No spaces or special characters

### Adding New Languages

To add or modify programming languages:

1. Open `src/languages.js`
2. Add a new language object to the `languages` array:
   ```javascript
   {
       name: "Go",
       backgroundColor: "#00ADD8",
       color: "#FFFFFF",
   }
   ```
3. Update `MAX_WRONG_GUESSES` in `src/constants.js` if the number of languages changes
4. Ensure colors provide good contrast for readability

### Component Structure

Each component follows a consistent, well-documented structure:
- File header with `@fileoverview` and `@file` tags
- Comprehensive component description
- Detailed JSDoc-style prop documentation with types and examples
- Inline comments for complex logic
- Component implementation
- Export statement

Example:
```javascript
/**
 * @fileoverview Component Name
 * @file src/components/ComponentName.jsx
 * @description Brief description of the component's purpose
 */

/**
 * ComponentName Component
 * 
 * Detailed description of what the component does, including its purpose,
 * behavior, and any important implementation details.
 * 
 * @param {Object} props - Component props
 * @param {string} props.exampleProp - Description of prop with expected format
 * @returns {JSX.Element} Description of returned element
 * 
 * @example
 * // Usage example
 * <ComponentName exampleProp="value" />
 */
function ComponentName({ exampleProp }) {
  // Implementation with inline comments for complex logic
}

export default ComponentName;
```

### Code Documentation Standards

The project follows comprehensive documentation standards:

- **File Headers**: Every file includes `@fileoverview` and `@file` tags with descriptions
- **Function Documentation**: All functions include JSDoc comments with:
  - Detailed descriptions
  - Parameter documentation with types (`@param`)
  - Return value documentation (`@returns`)
  - Usage examples (`@example`) where helpful
- **Inline Comments**: Complex logic and algorithms include explanatory comments
- **Type Annotations**: JSDoc type annotations used throughout for better IDE support
- **Component Props**: All component props are fully documented with types and descriptions

This documentation approach ensures:
- Easy onboarding for new developers
- Better IDE autocomplete and hints
- Clear understanding of component APIs
- Maintainable codebase over time

### Styling Guidelines

- Styles are organized in `App.css` with clear section comments
- Component-specific styles are grouped together
- Use consistent spacing and naming conventions
- Maintain the dark theme color scheme

## How to Play

1. **Start**: The game automatically begins with a random word
2. **Guess**: Click on letter buttons to guess letters
3. **Observe**: Watch as correct letters appear and languages disappear with wrong guesses
4. **Win**: Complete the word before losing all 8 languages
5. **Restart**: Click "New Game" after a game ends to play again

### Tips

- Common letters like E, A, R, I, O, T, N, S are good starting guesses
- Pay attention to word length and pattern
- Each wrong guess is costly—choose carefully!

## Contributing

Contributions are welcome! Here are some ways you can help:

1. **Report bugs**: Open an issue describing the problem
2. **Suggest features**: Share your ideas for improvements
3. **Submit pull requests**: Fix bugs or add features
4. **Improve documentation**: Help make the README or code comments clearer

### Contribution Guidelines

- Follow the existing code style
- Add comments for new features
- Test your changes before submitting
- Update documentation as needed

## License

This project is open source and available under the MIT License.

---

**Enjoy playing Assembly: Endgame!** 🎮 Save the programming languages and prove your word-guessing skills!
