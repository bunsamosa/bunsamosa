import React from 'react'
import ideas from '../assets/ideas.gif'
import process from '../assets/process.gif'
import reality from '../assets/reality.gif'
import party from '../assets/party.gif'

export default function whyBunsamosa() {
    return (
        <div className='why-section'>
            <h1>What is <span style={{ color: '#FFE69A' }}>BunSamosa?</span></h1>
            <h3>BunSamosa is an <span style={{ color: '#FFE69A' }}>Emotion</span> 🥺!</h3>
            <br />
            <div className='bunsamosa-process'>
                <div className='align-cards'>
                    <img src={ideas} alt='ideas' className='ideas-gif' />
                    <h4>Come up with <span style={{ color: '#FFE69A' }}>crazy</span> ideas</h4>
                </div>
                <div className='align-cards'>
                    <img src={process} alt='process' className='ideas-gif' />
                    <h4><span style={{ color: '#FFE69A' }}>Refine</span> ideas</h4>
                </div>
                <div className='align-cards'>
                    <img src={reality} alt='reality' className='ideas-gif' />
                    <h4>Convert ideas into <span style={{ color: '#FFE69A' }}>reality</span>!</h4>
                </div>
                <div className='align-cards'>
                    <img src={party} alt='party' className='ideas-gif' />
                    <h4>Aaaanddd <span style={{ color: '#FFE69A' }}>Parttyyy</span>!!</h4>
                </div>
            </div>
        </div>
    )
}
