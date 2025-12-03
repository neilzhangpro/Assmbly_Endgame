/**
 * @fileoverview Word Display Component
 * @file src/components/WordDisplay.jsx
 * @description Displays the word being guessed with letter visibility based on guessed letters.
 *              Supports both active gameplay and game-over states with different visual styles.
 */

/**
 * WordDisplay Component
 * 
 * Renders the word that the player is attempting to guess. Each letter in the word
 * is displayed in its own container with visibility controlled by whether the letter
 * has been guessed. The component supports two display modes:
 * 
 * 1. **Active Mode** (isGameOver = false):
 *    - Guessed letters are displayed in uppercase
 *    - Unguessed letters are shown as blank spaces (empty containers)
 * 
 * 2. **Game Over Mode** (isGameOver = true):
 *    - All letters are revealed
 *    - Guessed letters are displayed normally
 *    - Unguessed letters are highlighted in red using bold text
 *    - This provides feedback on what letters were missed
 * 
 * The word is displayed horizontally with each letter in a styled container
 * that has a bottom border, creating a classic word-guessing game appearance.
 * 
 * @param {Object} props - Component props
 * @param {string} props.word - The word currently being guessed, in uppercase format.
 *                              Expected to contain only letters A-Z, no spaces or special characters.
 * @param {Array<string>} props.guessedLetters - Array of letters that have been guessed so far.
 *                                               Each letter should be an uppercase string (A-Z).
 *                                               Duplicates are handled gracefully.
 * @param {boolean} props.isGameOver - Whether the game has ended (either won or lost).
 *                                    When true, all letters are revealed regardless of guess status.
 * 
 * @returns {JSX.Element} A div element with className "word-container" containing
 *                        span elements for each letter in the word
 * 
 * @example
 * // Active gameplay - word partially guessed
 * <WordDisplay 
 *   word="HELLO" 
 *   guessedLetters={['H', 'E', 'L']} 
 *   isGameOver={false} 
 * />
 * // Displays: H E L L _
 * 
 * @example
 * // Game over - reveal all letters
 * <WordDisplay 
 *   word="HELLO" 
 *   guessedLetters={['H', 'E']} 
 *   isGameOver={true} 
 * />
 * // Displays: H E L L O (with L, L, O in red)
 */
function WordDisplay({ word, guessedLetters, isGameOver }) {
  /**
   * Splits the word into individual letters and creates a span element for each.
   * Each letter's visibility and styling depends on:
   * - Whether it has been guessed (checked via guessedLetters.includes)
   * - Whether the game is over (determines display mode)
   * 
   * @type {Array<JSX.Element>}
   */
  const letterSpans = word.split("").map((letter, index) => {
    // Check if this specific letter has been guessed by the player
    const isLetterGuessed = guessedLetters.includes(letter);
    
    // Normal display mode: show letter only if guessed, otherwise blank
    // This maintains the mystery during active gameplay
    const normalDisplay = (
      <span key={index}>
        {isLetterGuessed ? letter.toUpperCase() : ""}
      </span>
    );
    
    // Failed/reveal display mode: show all letters when game is over
    // Unguessed letters are wrapped in <b> tags for red highlighting via CSS
    const failedDisplay = (
      <span key={index} className="failed">
        {isLetterGuessed ? (
          letter.toUpperCase()
        ) : (
          <b>{letter.toUpperCase()}</b>
        )}
      </span>
    );
    
    // Return the appropriate display based on game state
    return isGameOver ? failedDisplay : normalDisplay;
  });

  return <div className="word-container">{letterSpans}</div>;
}

export default WordDisplay;

