import React from 'react';
import "./Choose.css";
import insbg from "../assets/images/design-banner_9.jpg";
import { Button } from './Button';

function Instructor() {
    return (
        <div className="instructor_wrapper">
            <div className="instructor__item">
               <h1>BEST<br/> INSTRUCTOR </h1>
               <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
            <Button className="btn" buttonStyle="btn--outline"
              buttonSize="btn--large">READ MORE</Button>
            </div>
            <div className="instructor__item">
                <img src={insbg} alt="" />
                
            </div>
            
        </div>
    )
}

export default Instructor;
