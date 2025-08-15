import React from 'react';
import "./Tools.css"
import azure from '../../assets/tools/azure.png'
import aws from '../../assets/tools/aws.png'
import kubernetes from '../../assets/tools/kubernetes.png'
import docker from '../../assets/tools/docker.png'
import terraform from '../../assets/tools/terraform.png'
import jenkins from '../../assets/tools/jenkins.png'
import linux from '../../assets/tools/linux.png'
import ubuntu from '../../assets/tools/ubuntu.png'
import mongodb from '../../assets/tools/mongodb.png'
import figma from '../../assets/tools/figma.png'
import html from '../../assets/tools/html.png'
import css from '../../assets/tools/css.png'
import react from '../../assets/tools/react.png'
import github from '../../assets/tools/github.png'

const Tools = () => {
    return (
        <div className='title' >
            <h1>Tools & Technologies</h1>
            <p>Proficient in industry-standard tools and technologies</p>
            <ul className="tools">
                <li className="item">
                    <img src={azure} alt="" />
                    <div className="name">
                        Azure
                    </div>
                </li>
                <li className="item">
                    <img src={aws} alt="" />
                    <div className="name">
                        AWS
                    </div>
                </li>
                <li className="item">
                    <img src={terraform} alt="" />
                    <div className="name">
                        Terraform
                    </div>
                </li>
                <li className="item">
                    <img src={jenkins} alt="" />
                    <div className="name">
                        Jenkins
                    </div>
                </li>
                <li className="item">
                    <img src={docker} alt="" />
                    <div className="name">
                        Docker
                    </div>
                </li>
                <li className="item">
                    <img src={kubernetes} alt="" />
                    <div className="name">
                        Kubernetes
                    </div>
                </li>
                <li className="item">
                    <img src={github} alt="" />
                    <div className="name">
                        Github
                    </div>
                </li>
                <li className="item">
                    <img src={linux} alt="" />
                    <div className="name">
                        Linux
                    </div>
                </li>
                <li className="item">
                    <img src={ubuntu} alt="" />
                    <div className="name">
                        Ubuntu
                    </div>
                </li>
                <li className="item">
                    <img src={mongodb} alt="" />
                    <div className="name">
                        Mongodb
                    </div>
                </li>
                <li className="item">
                    <img src={react} alt="" />
                    <div className="name">
                        React
                    </div>
                </li>
                <li className="item">
                    <img src={html} alt="" />
                    <div className="name">
                        HTML
                    </div>
                </li>
                <li className="item">
                    <img src={css} alt="" />
                    <div className="name">
                        CSS
                    </div>
                </li>
                <li className="item">
                    <img src={figma} alt="" />
                    <div className="name">
                        Figma
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Tools;
