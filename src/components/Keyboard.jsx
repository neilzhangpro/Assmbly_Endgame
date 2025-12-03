/**
 * @fileoverview Keyboard Component
 * @file src/components/Keyboard.jsx
 * @description Renders a virtual keyboard with all alphabet letters and handles letter selection.
 *              Provides visual feedback for guessed letters based on their correctness.
 */

import { ALPHABET } from '../constants.js';

/**
 * Keyboard Component
 * 
 * Displays a virtual keyboard interface with all 26 alphabet letters as clickable buttons.
 * Each button's appearance dynamically reflects its state:
 * - **Unguessed**: Yellow background (default state)
 * - **Correct guess**: Green background (letter exists in the word)
 * - **Wrong guess**: Red background (letter does not exist in the word)
 * 
 * All buttons are disabled when the game ends (isGameOver = true) to prevent further
 * interaction. The keyboard uses a responsive flex layout that wraps on smaller screens.
 * 
 * The component provides immediate visual feedback to help players track which letters
 * they've tried and which guesses were correct or incorrect. This is essential for
 * effective word-guessing strategy.
 * 
 * @param {Object} props - Component props
 * @param {Array<string>} props.guessedLetters - Array of letters that have been guessed.
 *                                               Each letter should be an uppercase string.
 *                                               Used to determine button states.
 * @param {string} props.currentWord - The word currently being guessed, in uppercase format.
 *                                    Used to determine if a guessed letter is correct.
 * @param {boolean} props.isGameOver - Whether the game has ended (won or lost).
 *                                    When true, all buttons are disabled.
 * @param {Function} props.onLetterClick - Callback function invoked when a letter button is clicked.
 *                                        Receives the clicked letter (string) as an argument.
 *                                        Should handle adding the letter to guessedLetters.
 *                                        Ignored when isGameOver is true.
 * 
 * @returns {JSX.Element} A div element with className "alphabet-container" containing
 *                        button elements for each letter of the alphabet
 * 
 * @example
 * // Active gameplay
 * <Keyboard 
 *   guessedLetters={['A', 'E', 'S']}
 *   currentWord="HELLO"
 *   isGameOver={false}
 *   onLetterClick={(letter) => handleGuess(letter)}
 * />
 */
function Keyboard({ guessedLetters, currentWord, isGameOver, onLetterClick }) {
  /**
   * Generates button elements for each letter in the alphabet.
   * Each button's appearance and functionality is determined by:
   * - Whether the letter has been guessed (checked against guessedLetters array)
   * - Whether the guess was correct (checked against currentWord)
   * - Whether the game is over (affects button interactivity)
   * 
   * Button states and corresponding CSS classes:
   * - Not guessed: default yellow styling, no additional class
   * - Correct guess: "correct" class (green background)
   * - Wrong guess: "wrong" class (red background)
   * 
   * @type {Array<JSX.Element>}
   */
  const alphabetButtons = ALPHABET.split("").map((letter) => {
    // Check if this letter has been guessed by the player
    const isGuessed = guessedLetters.includes(letter);
    
    // Determine if the guess was correct (letter exists in current word)
    // Only meaningful if the letter has been guessed
    const isCorrect = isGuessed && currentWord.includes(letter);
    
    // Determine CSS class based on guess status
    // Empty string for unguessed letters uses default styling
    const buttonClass = isGuessed ? (isCorrect ? "correct" : "wrong") : "";
    
    return (
      <button
        key={letter}
        className={`alphabet-button ${buttonClass}`}
        onClick={isGameOver ? null : () => onLetterClick(letter)}
        disabled={isGameOver}
      >
        {letter}
      </button>
    );
  });

  return <div className="alphabet-container">{alphabetButtons}</div>;
}

export default Keyboard;

