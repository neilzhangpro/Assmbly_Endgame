/**
 * @fileoverview Game Status Component
 * @file src/components/GameStatus.jsx
 * @description Displays game status messages including win, lose, and farewell messages.
 *              Conditionally renders different status indicators based on game state.
 */

import Confetti from 'react-confetti';

/**
 * GameStatus Component
 * 
 * Conditionally renders different status messages and visual feedback based on the
 * current game state. The component supports three distinct status types, each with
 * unique styling and behavior:
 * 
 * 1. **Win Status** (highest priority):
 *    - Green background with celebration message
 *    - Includes animated confetti effect for visual celebration
 *    - Displayed when all letters in the word have been correctly guessed
 * 
 * 2. **Lose Status**:
 *    - Red background with defeat message
 *    - Shown when maximum wrong guesses have been reached
 *    - Indicates all programming languages have been lost
 * 
 * 3. **Farewell Status**:
 *    - Purple background with dashed border
 *    - Temporary message shown when a programming language is lost
 *    - Only displayed if game is still active (not won or lost)
 *    - Uses a randomly selected farewell message template
 * 
 * **Priority Logic**: Only one status message is shown at a time. The component
 * checks conditions in priority order: Win > Lose > Farewell. This ensures that
 * game-ending states (win/lose) always take precedence over temporary messages.
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isGameWon - Whether the player has successfully won the game.
 *                                   When true, win status is displayed with confetti.
 * @param {boolean} props.isGameLost - Whether the player has lost the game.
 *                                    When true, lose status is displayed.
 *                                    Note: isGameWon and isGameLost should not both be true.
 * @param {string|null} props.farewellText - Optional farewell message text to display
 *                                          when a language is lost. Should contain the
 *                                          language name in a farewell phrase.
 *                                          Example: "Farewell, JavaScript"
 * @param {boolean} props.showFarewell - Whether to show the farewell message.
 *                                      Should be true when a wrong guess was just made
 *                                      and the game is still active. Ignored if game
 *                                      has ended (won or lost).
 * 
 * @returns {JSX.Element|null} A section element with appropriate className and content,
 *                            or null if no status should be displayed
 * 
 * @example
 * // Win state
 * <GameStatus 
 *   isGameWon={true}
 *   isGameLost={false}
 *   farewellText={null}
 *   showFarewell={false}
 * />
 * 
 * @example
 * // Farewell message after wrong guess
 * <GameStatus 
 *   isGameWon={false}
 *   isGameLost={false}
 *   farewellText="Oh no, not JavaScript!"
 *   showFarewell={true}
 * />
 */
function GameStatus({ isGameWon, isGameLost, farewellText, showFarewell }) {
  // Priority 1: Render win status with confetti animation
  // Win state takes highest priority and includes celebration effects
  if (isGameWon) {
    return (
      <section className="game-status">
        {/* Confetti animation covers entire viewport for celebration effect */}
        <Confetti width={window.innerWidth} height={window.innerHeight} />
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
    );
  }

  // Priority 2: Render lose status
  // Displayed when player has exhausted all attempts
  if (isGameLost) {
    return (
      <section className="game-status lost">
        <h2>You lose!</h2>
        <p>You lose! Better start learning Assembly 😭</p>
      </section>
    );
  }

  // Priority 3: Render farewell message
  // Only shown if game is still active and a language was just lost
  // This provides immediate feedback when a wrong guess is made
  if (showFarewell && farewellText) {
    return (
      <section className="game-status farewell">
        <p className="farewell-text">{farewellText}</p>
      </section>
    );
  }

  // No status to display - return null to render nothing
  return null;
}

export default GameStatus;

