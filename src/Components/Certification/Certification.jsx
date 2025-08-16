import React from 'react';
import './Certification.css'
import ibm from '../../assets/ibm.jpeg'
import aws from '../../assets/aws.png'
import azure from '../../assets/azure.png'
import duke from '../../assets/duke.png'
import web from '../../assets/web.png'
import python from '../../assets/python.png'
import redhat from '../../assets/redhat.png'
import meta from '../../assets/meta.png'
import html from '../../assets/html.png'
import cloud from '../../assets/cloud.png'

const Certification = () => {
    return (
        <div id='certification' className='title' >
            <h1>Certifications</h1>
            <p>Continuous learning and professional skills in Cloud Computing and related fields</p>
            <ul className="certificates">
                <li className="image">
                    <a href='https://coursera.org/verify/VT90YBM9JPK8' target="_blank">
                    <img src={azure} alt="" />
                    <div className="details">
                        <h4>Introduction to Microsoft Azure Cloud Services</h4>
                        <i>an online non-credit course authorized by Microsoft and offered through Coursera</i>
                    </div>
                    </a>
                </li>
                <li className="image">
                    <a href="https://coursera.org/verify/RG77RGL6MFSD" target="_blank">
                        <img src={aws} alt="" />
                    <div className="details">
                        <h4>AWS Cloud Technical Essentials</h4>
                        <i>an online non-credit course authorized by Amazon Web Services and offered through Coursera</i>
                    </div> 
                    </a> 
                </li>
                <li className="image">
                    <a href="https://www.coursera.org/account/accomplishments/verify/G5QMH54KJHKX" target="_blank">
                        <img src={redhat} alt="" />
                    <div className="details">
                        <h4>Fundamentals of Red Hat Enterprise Linux</h4>
                        <i>an online non-credit course authorized by Red Hat and offered through Coursera</i>
                    </div>
                    </a>
                </li>
                <li className="image">
                    <a href="https://coursera.org/verify/HU9PMY9JEKAL" target="_blank">
                        <img src={cloud} alt="" />
                    <div className="details">
                        <h4>Introduction to Cloud Computing</h4>
                        <i>an online non-credit course authorized by IBM and offered through Coursera</i>
                    </div>
                    </a>
                </li>
                <li className="image">
                    <a href="https://open.uom.lk/verify" target="_blank">
                        <img src={python} alt="" />
                    <div className="details">
                        <h4>Python for Beginners</h4>
                        <i>Comprehensive program in Python programming fundamentals conducted by the Department of Computer Science & Engineering</i>
                    </div>
                    </a>
                </li>
                <li className="image">
                    <a href="https://coursera.org/verify/247JX9W002L0" target="_blank">
                        <img src={ibm} alt="" />
                    <div className="details">
                        <h4>Node.js & MongoDB: Developing Back-end Database Applications</h4>
                        <i>Advanced course in backend development using Node.js and MongoDB, offered through Coursera</i>
                    </div>
                    </a>
                </li>
                <li className="image">
                    <a href="https://open.uom.lk/verify" target="_blank">
                        <img src={web} alt="" />
                    <div className="details">
                        <h4>Web Design for Beginners</h4>
                        <i>Comprehensive program in Web Design fundamentals conducted by the Department of Computer Science & Engineering</i>
                    </div>
                    </a>
                </li>
                <li className="image">
                    <a href="https://coursera.org/verify/KA9PTZMGDT9W" target="_blank">
                        <img src={duke} alt="" />
                    <div className="details">
                        <h4>Programming Foundations with JavaScript, HTML and CSS</h4>
                        <i>An online non-credit course authorized by Duke University and offered through Coursera</i>
                    </div>
                    </a>
                </li>
                <li className="image">
                    <a href="https://coursera.org/verify/FNCER7G5FTBV" target="_blank">
                        <img src={meta} alt="" />
                    <div className="details">
                        <h4>Introduction to Front-End Development</h4>
                        <i>An online non-credit course authorized by Meta and offered through Coursera</i>
                    </div>
                    </a>
                </li>
                <li className="image">
                    <a href="https://coursera.org/verify/C9VDBQ2M5R1R" target="_blank">
                        <img src={html} alt="" />
                    <div className="details">
                        <h4>Introduction to HTML</h4>
                        <i>An online non-credit course authorized by Coursera</i>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Certification;
