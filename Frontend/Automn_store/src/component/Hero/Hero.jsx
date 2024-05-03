import React from 'react';
import './Hero.css'
import arrow from '../Images/arrow.png'
import hero from '../Images/hero.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="heroleft">
            <h1>"You Deserve The Best,</h1>
            <h1> We Sell The Best"</h1>
                <div>
                    <div className="hand-hand-icon">
                        <p>
                            Step into confidence,dress in excellence.
                        </p>
                    </div>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow} alt="" />
                </div>
            </div>
            
        </div>
 
    );
};

export default Hero;
