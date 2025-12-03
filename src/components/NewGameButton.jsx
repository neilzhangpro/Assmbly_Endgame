/**
 * @fileoverview New Game Button Component
 * @file src/components/NewGameButton.jsx
 * @description Button component to restart the game after it has ended.
 *              Provides a clear call-to-action for starting a new round.
 */

/**
 * NewGameButton Component
 * 
 * A presentational button component that allows players to start a new game
 * after the current game has ended (either won or lost). The button provides
 * a prominent, clearly labeled action for restarting gameplay.
 * 
 * This component is typically rendered conditionally when the game is over,
 * appearing alongside the keyboard interface. It uses a distinct blue color
 * scheme to differentiate it from the alphabet buttons and draw attention
 * as the primary action available to the player.
 * 
 * The button has a fixed width optimized for mobile and desktop displays,
 * and uses consistent styling with the rest of the application's dark theme.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Callback function invoked when the button is clicked.
 *                                  Should reset the game state, including:
 *                                  - Clearing guessed letters
 *                                  - Selecting a new random word
 *                                  - Resetting any game state flags
 *                                  No parameters are passed to this callback.
 * 
 * @returns {JSX.Element} A button element with className "new-game-button"
 *                        displaying "New Game" text
 * 
 * @example
 * // Usage in parent component
 * {isGameOver && (
 *   <NewGameButton onClick={restartGame} />
 * )}
 */
function NewGameButton({ onClick }) {
  return (
    <button className="new-game-button" onClick={onClick}>
      New Game
    </button>
  );
}

export default NewGameButton;

