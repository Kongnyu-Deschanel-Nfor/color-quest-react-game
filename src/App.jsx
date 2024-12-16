import React, { useEffect, useState } from "react";
import "./css/App.css";
import Header from "./component/Header";
import PLanguage from "./component/PLanguage";
import { myProgrammingLanguageDataRandomized } from "./data/prog-color";
import Form from "./pages/Form";
import ResultsTable from "./pages/Results";

function App() {
    const [start, setStart] = useState(false);
    const [countdown, setCountdown] = useState(4);
    const [isGameOver, setIsGameOver] = useState(false);
    const [correct, setCorrect] = useState([]) //All corrected answers
    const [triesLeft, setTriesLeft] = useState(20) //All corrected answers
    const [successiveFailedAttempts, setSuccessiveFailAttempts] = useState(0);

    useEffect(() => {
        if (start && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [start, countdown]);

    function handleStart() {
        setStart(true);
    }

    return (
        <div className="main-wrapper">
            {!start ? (
                <Header handleStart={handleStart} />
            ) : countdown > 0 ? (
                <>
                    <h2 style={{ padding: "20px" }}>RNN Color Quest</h2>
                    <br />
                    <h4 className="countdown-text">
                        The game starts in {countdown} seconds...
                    </h4>
                    <PLanguage />
                </>
            ) : isGameOver ? (
                <ResultsTable correct={correct} triesLeft={triesLeft} successiveFailedAttempts={successiveFailedAttempts}/>
            ) : (
                <Form
                    isGameOver={isGameOver}
                    setIsGameOver={setIsGameOver}
                    correct={correct}
                    setCorrect={setCorrect}
                    triesLeft={triesLeft}
                    setTriesLeft={setTriesLeft}
                    successiveFailedAttempts={successiveFailedAttempts}
                    setSuccessiveFailAttempts={setSuccessiveFailAttempts}
                />
            )}
        </div>
    );
}

export default App;
