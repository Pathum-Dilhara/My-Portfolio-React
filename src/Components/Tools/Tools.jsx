import React from 'react';
import "./Tools.css"
import azure from '../../assets/tools/azure.png'


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
            </ul>
        </div>
    );
}

export default Tools;
