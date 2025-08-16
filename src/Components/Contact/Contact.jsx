import React from 'react';
import './Contact.css'
import email from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'
import video from '../../assets/video.mp4'

const Contact = () => {
    return (
        <div className='contact-title' >
            <h1>Work Together</h1>
            <p>Have a project in mind or want to discuss design opportunities? I'd love to hear from you.</p>
            <div className="contact-description">
                <div className="description-left">
                    <h2>Let's Talk</h2>
                    <p className='dis' >Have a project in mind or want to discuss design opportunities? I'd love to hear from you. So feel free to send me a message about anything that you want me to wark on. You can contact anytime.</p>
                    <div className="contact-details">
                        <img src={email} alt="" /><p>hbgpathumdilhara@gmail.com</p>
                    </div>
                    <div className="contact-details">
                        <img src={call} alt="" /><p>076-7068463 / 071-5848143</p>
                    </div>
                    <div className="contact-details">
                        <img src={location} alt="" /><p>Nugegoda</p>
                    </div>
                    <div className="video">
                        <video src={video} autoPlay
                        muted
                        loop
                        playsInline></video>
                    </div>
                </div>
                <form className="description-right">
                    <label htmlFor="">Subject</label>
                    <input type="text" placeholder='Enter subject' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='submit-button'>Submit Now</button>
                </form>
            </div>
            
        </div>
    );
}

export default Contact;
