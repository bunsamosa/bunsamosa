import React from 'react'
import rubix from '../assets/rubix.png'
import eggplant from '../assets/eggplant.png'

export default function journey() {
    return (
        <div className='journey-section'>
            <h1><span style={{ color: '#FFE69A' }}>Journey</span> so far...</h1>
            <div className='align-card'>
                <div className='journey-card'>
                    <img src={rubix} alt='rubix' className='rubix-img' />
                    <h3>Rubix</h3>
                    <a href="https://create.madhukar.dev/" target="_blank" rel="noopener noreferrer">View</a>
                </div>
                <div className='journey-card'>
                    <img src={eggplant} alt='rubix' className='eggplant-img' />
                    <h3>Eggplant</h3>
                    <a href="https://eggplant.bunsamosa.org/" target="_blank" rel="noopener noreferrer">View</a>
                </div>
            </div>
        </div>
    )
}
