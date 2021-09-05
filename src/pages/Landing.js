import React from 'react';
import { NavLink } from 'react-router-dom';
import KenHalf from '../image/ken_half.png';

function Landing() {
    return (
        <section className='text-white' style={{ height: '800px' }}>
            <div className='container'>
                <div className='row'>
                    <div className='landing-container'>
                        <h1 className='text-center mt-5' style={{ fontSize: '50px' }}>Welcome to my Portfolio!</h1>
                        <h2 className='text-center'>Let's learn a few things about me. You can start by clicking the beautiful button below</h2>
                        <a href="/about" id='landing-button' className='text-center text-white mt-5'>FIND OUT MORE ABOUT ME</a>
                    </div>

                    <hr style={{ width: '100%' }} className='mt-5' size="3" /> 
                </div>
            </div>
        </section>
    )
}

export default Landing
