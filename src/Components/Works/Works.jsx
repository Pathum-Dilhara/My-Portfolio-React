import React from 'react';
import './Works.css'
import first from '../../assets/loadbalancing.jpg'
import second from '../../assets/landingpage.png'
import third from '../../assets/cicd.jpg'
import fourth from '../../assets/docker.png'
import fifth from '../../assets/qa.png'
import sixth from '../../assets/portfolio.png'
import seventh from '../../assets/ecommerce.png'
import eightth from '../../assets/coffeeshop.png'
import ninth from '../../assets/yoga.png'

const Works = () => {
    return (
        <div className='works-title' >
            <h1>My Works</h1>
            <p>Continuous learning and professional development in Cloud Computing and related fields</p>
            <ul className="projects">
                <li className="project">
                    <img src={first} alt="" />
                    <div className="project-details">
                        <div className="year">
                            <p>Cloud</p>
                            <p>2025</p>
                        </div>
                        <div className="project-name">
                            <h3>Load Balancing of Two Servers</h3>
                        </div>
                        <div className="description">
                            <i>Web Hosting with Load Balancing using Azure VM, Azure Application gateway and Terraform</i>
                        </div>
                        <div className="technologies">
                            <p>Azure</p>
                            <p>Terraform</p>
                            <p>Linux</p>
                        </div>
                        <div className="button">
                            <a href="https://github.com/Pathum-Dilhara/Azure-Load-Balancer-Terraform.git" target='_blank'><p>View Project</p></a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <img src={second} alt="" />
                    <div className="project-details">
                        <div className="year">
                            <p>CI/CD</p>
                            <p>2025</p>
                        </div>
                        <div className="project-name">
                            <h3>Web Application Deploying with CI/CD Pipeline</h3>
                        </div>
                        <div className="description">
                            <i>Build CI/CD Pipeline with AWS CodePipeline, AWS CodeBuild, AWS S3 Bucket and GitHub</i>
                        </div>
                        <div className="technologies">
                            <p>AWS</p>
                            <p>GitHub</p>
                            <p>Javascript</p>
                        </div>
                        <div className="button">
                            <a href="https://github.com/Pathum-Dilhara/saas-landingpage.git" target='_blank'><p>View Project</p></a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <img src={third} alt="" />
                    <div className="project-details">
                        <div className="year">
                            <p>CI/CD</p>
                            <p>2025</p>
                        </div>
                        <div className="project-name">
                            <h3>Web Application Deploying with CI/CD Pipeline</h3>
                        </div>
                        <div className="description">
                            <i>Build CI/CD Pipeline with Jenkins, Docker Hub and GitHub</i>
                        </div>
                        <div className="technologies">
                            <p>Jenkins</p>
                            <p>Docker</p>
                            <p>Github</p>
                        </div>
                        <div className="button">
                            <a href="https://github.com/Pathum-Dilhara/CICD-Jenkins-Docker.git" target='_blank'><p>View Project</p></a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <img src={fourth} alt="" />
                    <div className="project-details">
                        <div className="year">
                            <p>Container</p>
                            <p>2025</p>
                        </div>
                        <div className="project-name">
                            <h3>MERN Stack Application with Docker & Docker Compose</h3>
                        </div>
                        <div className="description">
                            <i>A MERN application containerized using Docker and orchestrated with Docker Compose</i>
                        </div>
                        <div className="technologies">
                            <p>Docker</p>
                            <p>Node</p>
                            <p>Mongodb</p>
                        </div>
                        <div className="button">
                            <a href="https://github.com/Pathum-Dilhara/Docker--MERN-Project.git" target='_blank'><p>View Project</p></a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <img src={fifth} alt="" />
                    <div className="project-details">
                        <div className="year">
                            <p>QA</p>
                            <p>2025</p>
                        </div>
                        <div className="project-name">
                            <h3>Automation Testing</h3>
                        </div>
                        <div className="description">
                            <i>An automated testing script using Selenium WebDriver in IntelliJ IDEA</i>
                        </div>
                        <div className="technologies">
                            <p>Selenium</p>
                            <p>Intellij</p>
                            <p>HTML</p>
                        </div>
                        <div className="button">
                            <a href="https://github.com/Pathum-Dilhara/QA-Test.git" target='_blank'><p>View Project</p></a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <img src={sixth} alt="" />
                    <div className="project-details">
                        <div className="year">
                            <p>Web Development</p>
                            <p>2025</p>
                        </div>
                        <div className="project-name">
                            <h3>Personal Portfolio</h3>
                        </div>
                        <div className="description">
                            <i>Develop Personal Portfolio Website using React, Javascript, HTML and CSS</i>
                        </div>
                        <div className="technologies">
                            <p>React</p>
                            <p>Javascript</p>
                            <p>HTML</p>
                        </div>
                        <div className="button">
                            <a href="https://github.com/Pathum-Dilhara/My-Portfolio-React.git" target='_blank'><p>View Project</p></a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <img src={seventh} alt="" />
                    <div className="project-details">
                        <div className="year">
                            <p>Web Development</p>
                            <p>2024</p>
                        </div>
                        <div className="project-name">
                            <h3>E-Commerce Website</h3>
                        </div>
                        <div className="description">
                            <i>Develop E-Commerce Website using React, Javascript, HTML and CSS</i>
                        </div>
                        <div className="technologies">
                            <p>React</p>
                            <p>Javascript</p>
                            <p>HTML</p>
                        </div>
                        <div className="button">
                            <a href="https://github.com/Pathum-Dilhara/e-commerce-web-site.git" target='_blank'><p>View Project</p></a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <img src={eightth} alt="" />
                    <div className="project-details">
                        <div className="year">
                            <p>Web Development</p>
                            <p>2024</p>
                        </div>
                        <div className="project-name">
                            <h3>Coffee Shop Website</h3>
                        </div>
                        <div className="description">
                            <i>Develop Coffee Website using Javascript, HTML and CSS</i>
                        </div>
                        <div className="technologies">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                        </div>
                        <div className="button">
                            <a href="https://github.com/Pathum-Dilhara/Coffee-Shop.git" target='_blank'><p>View Project</p></a>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <img src={ninth} alt="" />
                    <div className="project-details">
                        <div className="year">
                            <p>UI/UX</p>
                            <p>2025</p>
                        </div>
                        <div className="project-name">
                            <h3>Yoga Website Design</h3>
                        </div>
                        <div className="description">
                            <i>Design high fidelity prototype of Yoga website using Figma </i>
                        </div>
                        <div className="technologies">
                            <p>Figma</p>
                            <p>Photoshop</p>
                            <p>Canva</p>
                        </div>
                        <div className="button">
                            <a href="https://www.figma.com/proto/UbiwOACMWrddNWgzGochQb/Yoga?node-id=0-1" target='_blank'><p>View Project</p></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Works;
