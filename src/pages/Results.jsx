import React, { useEffect } from 'react';
import '../css/Results.css';
import { myProgrammingLanguageDataRandomized } from '../data/prog-color';

function ResultsTable({ correct, triesLeft, isGameOver,successFailedAttempts }) {
    const sampleDataArray = myProgrammingLanguageDataRandomized;

    const successSoundPath = 'sounds/success.mp3'; // Replace with your actual success sound file path
    const failSoundPath = 'sounds/failed.mp3'; // Replace with your actual fail sound file path

    useEffect(() => {
            // Play the appropriate sound based on the score
            if (correct.length >= 10) {
                const successSound = new Audio(successSoundPath);
                successSound.play();
            } else {
                const failSound = new Audio(failSoundPath);
                failSound.play();
            }
    }, []); // Trigger when `isGameOver` or score changes

    return (
        <div className="results-table">
            <h2 style={{
                color: 'black',
                fontSize: '54px'
            }}>GAME RESULTS</h2>
            {correct.length >= 10 ? (
                <h3 style={{ color: 'green' }}>
                    SCORE: {correct.length}/ {20-triesLeft+1}
                </h3>
            ) : (
                <h3 style={{ color: 'red' }}>
                    SCORE: {correct.length}/ {20 - triesLeft+1}
                </h3>
            )}
            
            {successFailedAttempts>=5&&<p>Game Stopped because you have 5 success failed attempts</p>}
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Attempt Number</th>
                        <th>Programming Language</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleDataArray.map((item, index) => {
                        const isCorrect = correct.find(
                            (correctItem) =>
                                correctItem.language === item.language &&
                                correctItem.color === item.color
                        );

                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td style={{ backgroundColor: item.color, color: '#fff' }}>
                                    {item.language}
                                </td>
                                <td>
                                    {isCorrect ? (
                                        <span className="status success">✓</span>
                                    ) : (
                                        <span className="status fail">✗</span>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <br />
            <div>
                <button 
                    onClick={() => window.location.reload()}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
}

export default ResultsTable;
