import React from 'react'

function Header(probs) {
  return (
    <header>
    <section className="header">
      <div>

      <h1 className="header-title">RNN Color Quest Game</h1>
      <p className="header-description">
        RNN Color Quest is an interactive game that challenges your knowledge of 
        programming languages and their corressponding color.
        Guess the correct color for a given language, receive instant feedback, and 
        track your progress to refine your coding skills in this engaging and
        color-based puzzle Game.
      </p>
      </div>
     
      <div>
      <img className="tagheader-img" src="./img/planguages-nobg.png" alt="" />
      </div>

      <h4 style={{
        fontWeight:'bolder',
      }}>YOU HAVE 4 SECONDS TO SEE THE
         LANGUAGES AND THEIR RESPECTIVE COLORS</h4>
    <br /> <br />
      <div className="btn-cta" onClick={probs.handleStart}>Start Playing Now</div>
    </section>
  </header>   )
}

export default Header
