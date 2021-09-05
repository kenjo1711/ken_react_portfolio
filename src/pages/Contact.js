import React from 'react'

function Contact() {
    return (
        <section className='text-white'>
            <div className='container'>
                <div className='row'>
                    <h1 className='text-center mt-5' style={{ fontSize: '60px' }}>Contact Me</h1>

                    <div class="wrapper mt-5 p-5">
                        <form>
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" name="Name" id="name" placeholder="Full Name" required minlength="3" maxlength="25" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" name="Email" id="email" placeholder="email@email.com" required />
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea name="Message" id="message" rows="5" placeholder="Type your message here...."></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="submit"><i class="contact-i fa fa-paper-plane"></i>Send</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
