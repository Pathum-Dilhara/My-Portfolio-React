import React from 'react';
import './Education.css'
import uni from '../../assets/uni.jpg'
import scl from '../../assets/scl.jpg'

const Education = () => {
    return (
        <div className='about' >
            <h1>Education</h1>
            <div className="about-title">
                <div className="education">
                    <div className="uni">
                        <div className="uni-left">
                            <p>2022 - 2025</p>
                            <img src={uni} alt="" />
                        </div>
                        <div className="uni-right">
                            <h3>University of Sri Jayewardenepura</h3>
                            <h4>BSc in Physical Science</h4>
                            <p> - Computer Science, Mathematics and Physics followed as subjects</p>
                        </div>
                    </div>
                    <div className="scl">
                        <div className="scl-left">
                            <p>2006 - 2019</p>
                            <img src={scl} alt="" />
                        </div>
                        <div className="scl-right">
                            <h3>Christ Church Boys' College</h3>
                            <h4>GCE A/Ls (2017-2020) </h4>
                            <p> - Physical Science Stream</p>
                            <h4>GCE O/Ls (2016)</h4>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Education;
