import React, { useState } from 'react';
import '../css/Form.css';
import { myProgrammingLanguageDataRandomized } from '../data/prog-color';

function Form({ setIsGameOver, correct, setCorrect,triesLeft,setTriesLeft,successiveFailedAttempts,setSuccessiveFailAttempts }) {
  const [languageName, setLanguageName] = useState('');
  const [langColor, setLanguageColor] = useState('');
  const [hintText, setHintText] = useState('');
  
  const [passed, setPassed] = useState(false);
 

  const handleGameSubmit = (e) => {
    e.preventDefault();

    if (!languageName || !langColor) {
      setHintText('Both fields are required!');
      setPassed(false);
      return;
    }

    if (triesLeft <= 0) {
      setIsGameOver(true);
      return;
    }

    const isMatch = myProgrammingLanguageDataRandomized.find(
      (language) =>
        language.language.toLowerCase() === languageName.toLowerCase() &&
        language.color.toLowerCase() === langColor.toLowerCase()
    );

    const alreadyTried = correct.some(
      (item) =>
        item.language.toLowerCase() === languageName.toLowerCase() &&
        item.color.toLowerCase() === langColor.toLowerCase()
    );

    if (alreadyTried) {
      setHintText('You already passed this one. Try again.');
      setPassed(false);
      setSuccessiveFailAttempts((prev) => prev + 1)
    } else if (isMatch) {
      setCorrect((prev) => [...prev, isMatch]);
      setHintText('Correct!');
      setPassed(true);
      setSuccessiveFailAttempts(0); // Reset successive failed attempts on success
    } else {
      setHintText('No match found. Try again.');
      setPassed(false);
      setSuccessiveFailAttempts((prev) => prev + 1);

      if (successiveFailedAttempts + 1 >= 5) {
        setIsGameOver(true); // Set game over after 5 successive failed attempts
        return;
      }
    }

    setTriesLeft((prev) => prev - 1);
    setLanguageName('');
    setLanguageColor('');
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleGameSubmit}>
        <h4 style={{ textAlign: 'center', color: 'blue' }}>Tries Left: {triesLeft}</h4>
        <hr />
        <br />
        <p style={{ color: passed ? 'green' : 'red' }}>
          :: {hintText} (Correct Answers: {correct.length})
        </p>
        <br />
        <div>
          <div className="lang-container">
            <label htmlFor="lang">Programming Language:</label>
            <input
              type="text"
              id="lang"
              placeholder="Enter the programming language"
              value={languageName}
              onChange={(e) => {
                setHintText('');
                setLanguageName(e.target.value);
              }}
            />
          </div>
          <div className="lang-container">
            <label htmlFor="color">Color:</label>
            <input
              type="text"
              id="color"
              placeholder="Enter the color"
              value={langColor}
              onChange={(e) => {
                setHintText('');
                setLanguageColor(e.target.value);
              }}
            />
          </div>
          <button type="submit">Submit Answer</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
