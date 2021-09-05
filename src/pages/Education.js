import React from 'react';

// IMAGES
import STMARK from '../image/stmark.png';
import SRIWANGI from '../image/sriwangi.png';
import AOP from '../image/aop.png';
import BERKLEE from '../image/berklee.jpg';
import PMI from '../image/pmi.png';
import ONEPLACE from '../image/kjOneplace.png';
import ITPA from '../image/itpa.png';
import FS from '../image/fs.png';

import BERKLEE_CERT from '../image/berklee-cert.png';
import PMI_CERT from '../image/pmi-cert.jpeg';
import KJ_CERT from '../image/kj-cert.jpeg';
import ITPA_CERT from '../image/itpa-cert.jpeg';


function Education() {
    return (
        <section className='text-white'>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center mt-5' style={{ fontSize: '60px' }}>Education</h1>

                    <div className='card col-lg-6 mt-5'>
                        <div className='card-body'>
                            <h1 className='card-title'>Sekolah Kebangsaan St. Mark Butterworth</h1>
                            <h3>Primary Standard 1 | 2008 - 2009</h3>
                        </div>
                        <img src={STMARK} />
                    </div>

                    <div className='card col-lg-6 mt-5'>
                        <div className='card-body'>
                            <h1 className='card-title'>Sekolah Rendah Kebangsaan Sri Wangi Gua Musang, Kelantan</h1>
                            <h3>Primary Standard 2 | 2009 - 2010</h3>
                        </div>
                        <img src={SRIWANGI} />
                    </div>

                    <div className='card col-lg-6 mt-5'>
                        <div className='card-body'>
                            <h1 className='card-title'>Alpha Omega Publications</h1>
                            <h3>Homeschooled | 2011 - 2017</h3>
                        </div>
                        <img src={AOP} />
                    </div>

                    <div className='card col-lg-6 mt-5'>
                        <div className='card-body'>
                            <h1 className='card-title'>Berklee (Coursera)</h1>
                            <h3>Certificate In Technology of Music Production</h3>
                        </div>
                        <img src={BERKLEE} />
                    </div>

                    <div className='card col-lg-6 mt-5'>
                        <div className='card-body'>
                            <h1 className='card-title'>PMI (Piano)</h1>
                            <h3>Certificate in Piano (Grade 1-6) | 2019 - 2020</h3>
                        </div>
                        <img src={PMI} />
                    </div>

                    <div className='card col-lg-6 mt-5'>
                        <div className='card-body'>
                            <h1 className='card-title'>KJ Oneplace Training Centre</h1>
                            <h3>Certificate In Leadership Training (L.I.O.N.@WORK)</h3>
                        </div>
                        <img src={ONEPLACE} />
                    </div>

                    <div className='card col-lg-6 mt-5'>
                        <div className='card-body'>
                            <h1 className='card-title'>Infotech Pro Academy</h1>
                            <h3>Certificate In Computer Systems Operation (SKM)</h3>
                        </div>
                        <img src={ITPA} />
                    </div>

                    <div className='card col-lg-6 mt-5'>
                        <div className='card-body'>
                            <h1 className='card-title'>Forward School</h1>
                            <h3>Currently Pursuing NitroDegree in Applied Software Engineering | 2020 - 2022</h3>
                        </div>
                        <img src={FS} />
                    </div>

                    <a className='mt-4' target='_blank' id='cert-link' href='https://imgur.com/a/j3emZ9T'>Click Here To View My Certificates</a>

                </div>

            </div>
        </section>
    )
}

export default Education