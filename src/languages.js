/**
 * @fileoverview Programming Languages Configuration
 * @file src/languages.js
 * @description Defines the list of programming languages used in the game.
 *              Contains visual styling and display information for each language.
 * 
 * This file exports a configuration array containing all programming languages
 * that can be "lost" when the player makes incorrect guesses. Each language
 * is represented as an object with visual styling properties that determine
 * how it appears in the game interface.
 * 
 * **Language Properties:**
 * - `name`: The display name of the programming language (string)
 * - `backgroundColor`: Hex color code for the language chip background (string)
 * - `color`: Hex color code for the language name text (string)
 * 
 * **Game Mechanics:**
 * The languages are displayed as colored chips/tags in the LanguageList component.
 * When a wrong guess is made, languages become "lost" sequentially (starting from
 * index 0) and are marked with a skull emoji (💀) overlay. The order of languages
 * in this array determines the order in which they are lost during gameplay.
 * 
 * **Color Contrast:**
 * Each language has carefully chosen colors to match its brand identity while
 * maintaining good readability. Dark backgrounds use light text colors, and
 * light backgrounds use dark text colors to ensure sufficient contrast.
 * 
 * **Modification Guidelines:**
 * - To add a new language: Add a new object to the array with required properties
 * - To remove a language: Delete the language object and update MAX_WRONG_GUESSES
 * - To reorder languages: Rearrange objects in the array (affects loss order)
 * - Always ensure color contrast meets accessibility standards
 * 
 * @see {@link ../constants.js} for MAX_WRONG_GUESSES constant
 * @see {@link ./components/LanguageList.jsx} for component using this data
 */

/**
 * Array of programming languages with their visual styling configuration.
 * 
 * Each language object contains display information and color scheme used
 * to render the language chip in the game interface. The languages are
 * displayed in the order they appear in this array, and they are lost
 * sequentially from first to last when wrong guesses are made.
 * 
 * **Language List:**
 * 1. HTML - Orange background
 * 2. CSS - Blue background
 * 3. JavaScript - Yellow background
 * 4. React - Cyan background
 * 5. TypeScript - Blue background
 * 6. Node.js - Green background
 * 7. Python - Yellow background
 * 8. Ruby - Red background
 * 9. Assembly - Blue background (final language, cannot be lost)
 * 
 * @type {Array<Object>}
 * @property {string} name - Display name of the programming language
 * @property {string} backgroundColor - Hex color code for background (e.g., "#E2680F")
 * @property {string} color - Hex color code for text (e.g., "#F9F4DA" or "#1E1E1E")
 */
export const languages = [
    {
        name: "HTML",
        backgroundColor: "#E2680F",
        color: "#F9F4DA",
    },
    {
        name: "CSS",
        backgroundColor: "#328AF1",
        color: "#F9F4DA",
    },
    {
        name: "JavaScript",
        backgroundColor: "#F4EB13",
        color: "#1E1E1E",
    },
    {
        name: "React",
        backgroundColor: "#2ED3E9",
        color: "#1E1E1E",
    },
    {
        name: "TypeScript",
        backgroundColor: "#298EC6",
        color: "#F9F4DA",
    },
    {
        name: "Node.js",
        backgroundColor: "#599137",
        color: "#F9F4DA",
    },
    {
        name: "Python",
        backgroundColor: "#FFD742",
        color: "#1E1E1E",
    },
    {
        name: "Ruby",
        backgroundColor: "#D02B2B",
        color: "#F9F4DA",
    },
    {
        name: "Assembly",
        backgroundColor: "#2D519F",
        color: "#F9F4DA",
    },
];
