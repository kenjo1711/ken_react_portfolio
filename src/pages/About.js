import React from 'react';
// import Ken from '../image/ken_half.png';
import Ken from '../image/ken.png';

// IMAGES
import GRAYSCALE from '../image/grayscale.png';
import TENCENT from '../image/tencent.png';
import PORTFOLIO from '../image/portfolio.png';

const About = () => {
    return (
        <section className='text-white'>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center mt-5' style={{ fontSize: '60px' }}>About Me</h1>
                    <div id='about_image' className='mt-2 text-center'>
                        <img className='img-fluid img-bw' src={Ken} alt='KenPic' />
                    </div>
                    <div id='about_text' className='mt-5'>
                        <h1 className='text-center'>Something About Me</h1>
                        <p className='text-center'>
                            Hello there! My Name's Kenrick, I'm 20 years old, and I love learning new things.
                            I'm currently a student at Forward School pursuing my Diploma in Software Engineering.
                            My desire is to become a successful Software Engineer and to pursue further in this career.
                            I'm creative, zestful, a fast learner and I believe in Teamwork.
                        </p>

                        <h3 className='mt-5'>Career Goals:</h3>
                        <h4>I want to upgrade my skills by taking up short courses in fields related to Web Design, Data Science, and AI. I plan to further my degree in Software Engineering.</h4>

                        <h5 className='mt-5' style={{ fontStyle: 'oblique' }}>~ Giving Up Should Never Be A First Choice ~ </h5>
                    </div>

                    <hr style={{ width: '100%' }} size="3" />

                    {/* SKILLS */}

                    <div>
                        <h1 className='text-center mt-5' style={{ fontSize: '40px' }}>&lt; Skills &gt;</h1>

                        <div className="row mt-5 mb-5">
                            <div className='col-lg-4'>
                                <div className="card mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">Programming</h4>
                                        <div className="card-image" style={{ color: '#fff' }}>
                                            <i className="fa fa-code fa-5x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">Music Production</h4>
                                        <div className="card-image" style={{ color: '#fff' }}>
                                            <i className="fa fa-headphones fa-5x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">Videography</h4>
                                        <div className="card-image" style={{ color: '#fff' }}>
                                            <i className="fa fa-video-camera fa-5x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">Video Editing</h4>
                                        <div className="card-image" style={{ color: '#fff' }}>
                                            <i className="fa fa-film fa-5x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">Building A PC</h4>
                                        <div className="card-image" style={{ color: '#fff' }}>
                                            <i className="fa fa-wrench fa-5x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LANGUAGES */}

                    <div>
                        <h1 className='text-center mt-5' style={{ fontSize: '40px' }}>&lt; Languages &gt;</h1>

                        <div className='row mb-5 mt-5'>
                            <div className='col-lg-4'>
                                <div className="card-2 mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">English</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card-2 mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">Bahasa Malaysia</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card-2 mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">Tamil (Native)</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card-2 mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">Mandarin (Pursuing Level 1)</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card-2 mt-2">
                                    <div className="card-body">
                                        <h4 className="card-title-2 mt-5">Spanish (Pursuing Level 1)</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PROJECTS */}

                    <div>
                        <h1 className='text-center mt-5' style={{ fontSize: '40px' }}>&lt; Projects &gt;</h1>

                        <div className='row mb-5 mt-5'>

                            <div className='col-lg-4'>
                                <div className="card-2 mt-2">
                                    <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1071826114&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className='soundcloud'><a href="https://soundcloud.com/ktkm-220801" title="KTKM Official" target="_blank" className='soundcloud-2'>KTKM Official</a> · <a href="https://soundcloud.com/ktkm-220801/yiruma-may-be-ktkm-chill-remix" title="Yiruma - May Be (KTKM Chill Remix)" target="_blank" className='soundcloud-2'>Yiruma - May Be (KTKM Chill Remix)</a></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card-2 mt-2">
                                    <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861661531&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className='soundcloud'><a href="https://soundcloud.com/ktkm-220801" title="KTKM Official" target="_blank" className='soundcloud-2'>KTKM Official</a> · <a href="https://soundcloud.com/ktkm-220801/ktkm-time" title="KTKM - Time" target="_blank" className='soundcloud-2'>KTKM - Time</a></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card-2 mt-2">
                                    <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/861624787&color=%23111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className='soundcloud'><a href="https://soundcloud.com/ktkm-220801" title="KTKM Official" target="_blank" className='soundcloud-2'>KTKM Official</a> · <a href="https://soundcloud.com/ktkm-220801/look-at-all-those-chickens-ktkm-remix" title="Look At All Those Chickens (KTKM Remix)" target="_blank" className='soundcloud-2'>Look At All Those Chickens (KTKM Remix)</a></div>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='card-2 mt-2'>
                                    <img className='img-fluid card-image' src={GRAYSCALE} />
                                    <div className='card-body'>
                                        <h1 className='card-title mb-4'>Grayscale</h1>
                                        <a target='_blank' className='project-links' href='https://lucid-panini-cb63db.netlify.app'>Visit Site</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='card-2 mt-2'>
                                    <img className='img-fluid card-image' src={TENCENT} />
                                    <div className='card-body'>
                                        <h1 className='card-title mb-4'>Tencent</h1>
                                        <a target='_blank' className='project-links' href='https://xenodochial-nobel-8391db.netlify.app'>Visit Site</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='card-2 mt-2'>
                                    <img className='img-fluid card-image' src={PORTFOLIO} />
                                    <div className='card-body'>
                                        <h1 className='card-title mb-4'>My First Portfolio</h1>
                                        <a target='_blank' className='project-links' href='https://quizzical-williams-04b309.netlify.app'>Visit Site</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>


                    <hr style={{ width: '100%' }} className='mb-5 mt-5' size="3" />

                    {/* MAPS */}
                    <h1 className='mt-4 mb-4 text-center'>I live somewhere here!</h1>
                    <iframe className='p-3 mt-3'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31778.489099324055!2d100.38494503855026!3d5.369429426877476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac666a5698f73%3A0x421813bea68af537!2sPerai%2C%20Penang!5e0!3m2!1sen!2smy!4v1630843858378!5m2!1sen!2smy"
                        height='400' allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default About