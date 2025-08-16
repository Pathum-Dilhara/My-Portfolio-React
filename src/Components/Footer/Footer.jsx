import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-left">
                <i>All Rights Reserved - 2025</i>
            </div>
            <div className="footer-right"> 
                <a href="https://www.linkedin.com/in/dilhara2001" class="social-link" target='_balnk'><i class="fa-brands fa-linkedin" > 
                </i></a>
                <a href="https://github.com/Pathum-Dilhara" class="social-link" target='_balnk'><i class="fa-brands fa-github" > 
                </i></a>
                <a href="https://www.facebook.com/share/1FxBMmeeSy/" class="social-link" target='_balnk'><i class="fa-brands fa-facebook" > 
                </i></a>
                <a href="https://www.instagram.com/d_lhara.15?igsh=MWs2emY0MGxweGQydQ==" class="social-link" target='_balnk'><i class="fa-brands fa-instagram" > 
                </i></a>
            </div>
        </div>
    );
}

export default Footer;
