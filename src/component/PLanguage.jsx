import React from 'react';
import './../css/Planguage.css';

import { myProgrammingLanguageDataRandomized } from '../data/prog-color';


const PLanguage = () => {
    console.log(myProgrammingLanguageDataRandomized);


    return (
        <div className='prog-lang-container'>
            {myProgrammingLanguageDataRandomized.map((planguage, index) => (
                <div key={index}>
                    <section className='lang-card'>
                        <div className='lang-img'>
                            {/* Ensure the correct image path */}
                            <img className='lang-img' src={planguage.imgSrc || '/img/header-img.jpg'} alt={planguage.name || 'Programming Language'} />
                        </div>
                        <div className='lang-content'>
                            <h3 className='lang-name'>{planguage.language}</h3>
                            <p className='lang-color' style={{
                                background:planguage.color
                            }}>......</p>
                            <p style={{
                                fontSize: '20px'
                            }}>{planguage.color}</p>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    );
};

export default PLanguage;
