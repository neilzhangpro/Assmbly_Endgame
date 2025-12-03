/**
 * @fileoverview Main Application Component
 * @file src/App.jsx
 * @description Assembly: Endgame - A word guessing game where players must guess words
 *              within 8 attempts to save programming languages from being lost to Assembly.
 *              This is the root component that manages game state and coordinates all child components.
 */

// Third-party libraries
import { useState } from 'react';
import Confetti from 'react-confetti';

// Internal modules
import { languages } from './languages.js';
import { getFarewellText, getRandomWord } from './utils.js';
import { MAX_WRONG_GUESSES } from './constants.js';

// Components
import GameHeader from './components/GameHeader.jsx';
import LanguageList from './components/LanguageList.jsx';
import WordDisplay from './components/WordDisplay.jsx';
import Keyboard from './components/Keyboard.jsx';
import GameStatus from './components/GameStatus.jsx';
import NewGameButton from './components/NewGameButton.jsx';

// Styles
import './App.css';

/**
 * Main App Component
 * 
 * Manages the game state and business logic for the word guessing game.
 * Players guess letters to reveal a hidden word. Each wrong guess results
 * in losing a programming language. The game ends when either:
 * - All letters are guessed correctly (win)
 * - 8 wrong guesses are made (lose)
 * 
 * @returns {JSX.Element} The main game application
 */
function App() {
  // ==================== State Management ====================
  
  /**
   * Tracks all letters that have been guessed by the player
   * @type {Array<string>}
   */
  const [userInput, setUserInput] = useState([]);
  
  /**
   * The current word that needs to be guessed
   * @type {string}
   */
  const [currentWord, setCurrentWord] = useState(getRandomWord());

  // ==================== Game Logic Calculations ====================
  
  /**
   * Counts the number of wrong guesses made
   * A guess is wrong if the letter is not present in the current word
   * @type {number}
   */
  const wrongGuessCount = userInput.filter(
    letter => !currentWord.includes(letter)
  ).length;

  /**
   * Determines if the player has won the game
   * Win condition: all letters in the word have been guessed
   * @type {boolean}
   */
  const isGameWon = currentWord
    .split("")
    .every(letter => userInput.includes(letter));

  /**
   * Determines if the player has lost the game
   * Lose condition: number of wrong guesses equals or exceeds the maximum allowed
   * @type {boolean}
   */
  const isGameLost = wrongGuessCount >= MAX_WRONG_GUESSES;

  /**
   * Indicates if the game has ended (either won or lost)
   * @type {boolean}
   */
  const isGameOver = isGameWon || isGameLost;

  /**
   * The most recently guessed letter
   * Used to determine if a farewell message should be shown
   * @type {string|undefined}
   */
  const lastInput = userInput[userInput.length - 1];

  /**
   * Checks if the last input was a wrong guess
   * Used to conditionally display farewell messages when languages are lost
   * @type {boolean}
   */
  const isLastInputWrong = lastInput && !currentWord.includes(lastInput);

  /**
   * Gets the farewell text for the language that was just lost
   * Only calculated when a wrong guess is made and game is still active
   * @type {string|null}
   */
  const farewellText = isLastInputWrong && !isGameOver
    ? getFarewellText(languages[wrongGuessCount - 1].name)
    : null;

  // ==================== Event Handlers ====================
  
  /**
   * Handles letter button clicks from the keyboard
   * Adds the clicked letter to the guessed letters list if not already guessed.
   * Uses Set to prevent duplicate letters in the array.
   * 
   * @param {string} letter - The letter that was clicked
   */
  function handleUserInput(letter) {
    setUserInput(prev => {
      // Use Set to automatically remove duplicates
      const newSet = new Set([...prev, letter]);
      return Array.from(newSet);
    });
  }

  /**
   * Resets the game to start a new round
   * Clears all guessed letters and selects a new random word
   */
  function restartGame() {
    setUserInput([]);
    setCurrentWord(getRandomWord());
  }

  // ==================== Render ====================
  
  return (
    <main>
      <GameHeader />
      
      <GameStatus
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        farewellText={farewellText}
        showFarewell={isLastInputWrong && !isGameOver}
      />
      
      <LanguageList
        languages={languages}
        wrongGuessCount={wrongGuessCount}
      />
      
      <WordDisplay
        word={currentWord}
        guessedLetters={userInput}
        isGameOver={isGameOver}
      />
      
      <div className="alphabet-container">
        <Keyboard
          guessedLetters={userInput}
          currentWord={currentWord}
          isGameOver={isGameOver}
          onLetterClick={handleUserInput}
        />
        {isGameOver && <NewGameButton onClick={restartGame} />}
      </div>
    </main>
  );
}

export default App;
