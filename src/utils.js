/**
 * @fileoverview Utility Functions
 * @file src/utils.js
 * @description Contains helper functions for game logic and word management.
 *              Provides core functionality for word selection and message generation.
 */

import { words } from "./words.js";

/**
 * Generates a random word from the words array for the player to guess.
 * 
 * This function is responsible for selecting a word at the start of each game round.
 * It randomly selects a word from the pre-defined word list stored in words.js,
 * converts it to uppercase for consistent display throughout the application,
 * and logs it to the console for debugging purposes during development.
 * 
 * The random selection uses Math.random() to generate a floating-point number
 * between 0 and 1, multiplies it by the words array length, and floors it to
 * get a valid array index. This ensures each word has an equal probability of
 * being selected.
 * 
 * **Note**: The console.log statement is included for development/debugging and
 * can be removed in production builds if desired. It helps developers see which
 * word was selected for testing purposes.
 * 
 * @returns {string} A randomly selected word from the words array, converted to
 *                  uppercase format. The word will contain only letters A-Z,
 *                  no spaces or special characters.
 * 
 * @example
 * // Get a random word for a new game
 * const word = getRandomWord();
 * console.log(word); // "HELLO" (example output)
 * 
 * @example
 * // Use in game initialization
 * const [currentWord, setCurrentWord] = useState(getRandomWord());
 */
export function getRandomWord() {
  // Generate a random index within the bounds of the words array
  // Math.random() returns [0, 1), so multiplying by words.length gives [0, words.length)
  // Math.floor() converts to integer index in range [0, words.length - 1]
  const randomIndex = Math.floor(Math.random() * words.length);
  
  // Retrieve the word at the random index and convert to uppercase
  // Uppercase ensures consistent comparison and display throughout the game
  const word = words[randomIndex].toUpperCase();
  
  // Debug: Log the selected word for testing purposes
  // This can be removed in production or replaced with a debug flag
  console.log(word);
  
  return word;
}

/**
 * Generates a random farewell message for when a programming language is lost.
 * 
 * When a player makes an incorrect guess, one of the programming languages is
 * considered "lost" and a farewell message is displayed to provide feedback and
 * add personality to the game. This function randomly selects from a predefined
 * list of humorous and varied farewell message templates, inserting the language
 * name into the appropriate position in each template.
 * 
 * The function maintains a collection of 12 different message templates, each
 * with a unique tone and style. This variety prevents the messages from becoming
 * repetitive across multiple game sessions. Messages range from formal ("Farewell")
 * to casual ("it's been real") to dramatic ("your watch has ended").
 * 
 * The random selection mechanism ensures that players won't always see the same
 * message for the same language, adding unpredictability and freshness to the
 * user experience.
 * 
 * @param {string} language - The name of the programming language that was lost.
 *                           Should match the language name from languages.js.
 *                           Examples: "JavaScript", "Python", "React"
 * 
 * @returns {string} A randomly selected farewell message with the language name
 *                  inserted. The message will be one of 12 possible templates,
 *                  each providing a unique farewell style.
 * 
 * @example
 * // Generate a farewell message for JavaScript
 * const message = getFarewellText("JavaScript");
 * console.log(message); // "Farewell, JavaScript" or "Oh no, not JavaScript!"
 * 
 * @example
 * // Use when a language is lost
 * const farewellMessage = getFarewellText(languages[wrongGuessCount - 1].name);
 * // Display message to user
 */
export function getFarewellText(language) {
  /**
   * Array of farewell message templates.
   * Each template uses template literal syntax with ${language} placeholder
   * to insert the language name dynamically. The templates provide variety
   * in tone and style to keep messages fresh and engaging.
   * 
   * @type {Array<string>}
   */
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P., ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`
  ];

  // Select a random message from the options array
  // Uses same random selection algorithm as getRandomWord()
  const randomIndex = Math.floor(Math.random() * options.length);
  
  // Return the randomly selected message with language name inserted
  return options[randomIndex];
}
