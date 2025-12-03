/**
 * @fileoverview Game Header Component
 * @file src/components/GameHeader.jsx
 * @description Displays the game title and description in the header section.
 *              This is a presentational component that renders static content.
 */

/**
 * GameHeader Component
 * 
 * A stateless presentational component that renders the header section of the game.
 * Displays the game title "Assembly: Endgame" and a brief description explaining
 * the game's objective. This component has no internal state or props dependencies,
 * making it a pure presentational component.
 * 
 * The header serves as the visual introduction to the game, setting the tone
 * and providing context for the player about the game's theme and goal.
 * 
 * @returns {JSX.Element} A header element containing:
 *                        - h1: Game title "Assembly: Endgame"
 *                        - p: Game description text
 * 
 * @example
 * // Usage in parent component
 * <GameHeader />
 */
function GameHeader() {
  return (
    <header>
      <h1>Assembly: Endgame</h1>
      <p>
        Guess the word within 8 attempts to keep the
        programming world safe from Assembly!
      </p>
    </header>
  );
}

export default GameHeader;

