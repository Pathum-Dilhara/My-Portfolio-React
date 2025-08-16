import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import cv from '../../assets/PathumDilhara_CV.pdf'

const Hero = () => {
    return (
        <div id='home' className='hero' >
            <div className="hero-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="hero-right">
                <h2>Hi, I'm </h2>
                <h1>Pathum Dilhara </h1> 
                <h2>Cloud | DevOps | Network Intern </h2>
                <p>I am a passionate and driven Computer Science graduate with a solid  foundation in cloud technologies, computer networking, and  automation testing. I have hands-on experience with industry standard tools such as AWS, Azure, and various CI/CD platforms. I’m  also confident working in CLI-based operating systems like Linux and  Ubuntu, where I enjoy handling system-level tasks and  configurations. With strong problem-solving abilities and a  collaborative mindset, I thrive in team environments and genuinely  enjoy working with others to build effective, real-world solutions. </p>
                <div className="hero-action">
                    <a href={cv} download>
                    <div className="hero-resume">Get My Resume</div>
                    </a>
                    <div className="hero-works">View My Works</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
