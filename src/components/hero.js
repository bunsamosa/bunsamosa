import React from 'react'
import LandingText from '../assets/landing.png'

export default function hero() {
    return (
        <div className='hero-section'>
            <img src={LandingText} alt='landing-text' className='landing-text' />
            <div>
                <svg class="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
        </div>
    )
}
