/**
 * @fileoverview Language List Component
 * @file src/components/LanguageList.jsx
 * @description Displays the list of programming languages with their current status.
 *              Languages that are "lost" due to wrong guesses are visually marked.
 */

/**
 * LanguageList Component
 * 
 * Renders a horizontal list of programming languages with their custom color schemes.
 * Each language is displayed as a styled list item with its name, custom background color,
 * and text color. Languages that have been "lost" as a result of wrong guesses are
 * visually marked with a skull emoji (💀) overlay and a semi-transparent dark background.
 * 
 * The component uses the wrongGuessCount prop to determine how many languages from
 * the start of the array should be marked as lost. Languages are lost in sequential
 * order based on their position in the languages array.
 * 
 * @param {Object} props - Component props
 * @param {Array<Object>} props.languages - Array of language configuration objects.
 *                                          Each object contains:
 *                                          - name {string}: Display name of the language
 *                                          - backgroundColor {string}: Hex color for background
 *                                          - color {string}: Hex color for text
 * @param {number} props.wrongGuessCount - Number of wrong guesses made so far.
 *                                         Determines how many languages are marked as lost.
 *                                         Should be between 0 and languages.length
 * 
 * @returns {JSX.Element} An unordered list (ul) element with className "language-list"
 *                        containing language items as list elements (li)
 * 
 * @example
 * // Usage in parent component
 * <LanguageList 
 *   languages={languages} 
 *   wrongGuessCount={3} 
 * />
 */
function LanguageList({ languages, wrongGuessCount }) {
  /**
   * Maps through the languages array to create styled list items.
   * Each language item displays its name with custom background and text colors
   * from the language configuration. Languages are marked as "lost" if their
   * index is less than the wrongGuessCount, which triggers the CSS overlay effect.
   * 
   * @type {Array<JSX.Element>}
   */
  const languageItems = languages.map((language, index) => {
    // Determine if this language has been lost based on wrong guess count
    // Languages are lost sequentially, starting from index 0
    const isLost = index < wrongGuessCount;
    
    return (
      <li
        key={index}
        className={isLost ? "lost" : ""}
        style={{
          backgroundColor: language.backgroundColor,
          color: language.color
        }}
      >
        {language.name}
      </li>
    );
  });

  return <ul className="language-list">{languageItems}</ul>;
}

export default LanguageList;

