/**
 * @fileoverview Constants used throughout the application
 * @file src/constants.js
 * @description Contains game configuration constants and shared values.
 *              Centralizes magic numbers and strings for easy maintenance and modification.
 */

/**
 * The complete alphabet string used for generating the virtual keyboard.
 * 
 * This constant contains all 26 uppercase letters of the English alphabet in
 * standard order. It is used by the Keyboard component to generate button elements
 * for each letter. The string is split into individual characters to create
 * the button array.
 * 
 * The alphabet is stored in uppercase format to ensure consistency with the
 * game's word format (all words are converted to uppercase during gameplay).
 * 
 * @type {string}
 * @constant
 * 
 * @example
 * // Usage in Keyboard component
 * ALPHABET.split("") // Returns ['A', 'B', 'C', ..., 'Z']
 * 
 * @example
 * // Check if a character is a letter
 * ALPHABET.includes('E') // true
 */
export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Maximum number of wrong guesses allowed before the game ends.
 * 
 * This constant defines how many incorrect letter guesses a player can make
 * before losing the game. It corresponds directly to the number of programming
 * languages that can be "lost" during gameplay. When a player makes a wrong
 * guess, one language is marked as lost. Once the wrong guess count reaches
 * this maximum, the game ends with a loss condition.
 * 
 * The value should match the number of languages defined in languages.js
 * (excluding Assembly, which is the "final boss"). Currently set to 8 to
 * match the 8 languages that can be lost: HTML, CSS, JavaScript, React,
 * TypeScript, Node.js, Python, and Ruby.
 * 
 * **Important**: If you modify the languages array in languages.js, you may
 * need to update this constant accordingly to maintain game balance.
 * 
 * @type {number}
 * @constant
 * 
 * @example
 * // Check if game is lost
 * if (wrongGuessCount >= MAX_WRONG_GUESSES) {
 *   // Game over - player has lost
 * }
 * 
 * @example
 * // Calculate remaining attempts
 * const remainingAttempts = MAX_WRONG_GUESSES - wrongGuessCount;
 */
export const MAX_WRONG_GUESSES = 8;

