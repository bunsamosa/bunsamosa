import React from 'react'
import logo from '../assets/logo.png'

export default function footer() {
    return (
        <div>
            <div className='footer-section'>
                <img src={logo} alt='logo' />
                <p>This is BunSamosa, a staple snacc(k) of
                    every (most of) college student in Bangalore!</p>
            </div>
        </div>
    )
}
