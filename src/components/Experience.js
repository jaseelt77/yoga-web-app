import React from 'react';
import "./Choose.css";
import Newexp from "../assets/images/experience.jpg";
// import Button from './Button';
import { Button } from './Button';

function Experience() {
    return (
        <div className="experience-wrap">
         
            <div className="grid-temp">
                <div className="grid-item">
                    <img src={Newexp} alt="" />
                </div>
                <div className="grid-item">
                <h1>BEST<br/> INSTRUCTOR </h1>
               <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
               <Button className="btn" buttonStyle="btn--primary"
              buttonSize="btn--large">READ MORE</Button>
                </div>
            </div>
        </div>
    )
}

export default Experience
