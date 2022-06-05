import React from 'react'
import LandingText from '../assets/landing.png'
import landinglogo from '../assets/bs.png'
import githublogo from '../assets/github.png'

export default function hero() {
    return (
        <div>
            <div className='hero-section'>
                <img src={landinglogo} alt='landing' className='landing-logo' />
                <img src={LandingText} alt='landing-text' className='landing-text' />
                <a href="https://github.com/bunsamosa" target="_blank" rel="noopener noreferrer">
                <img src={githublogo} alt='github' className='github-logo' />
                </a>
            </div>
        </div>
    )
}
