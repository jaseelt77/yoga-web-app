import React from "react";
import './Home.css';
import Logo from "../assets/images/yoga-lady.png";
import Choose from "./Choose";
import { Button } from "./Button";

function Home() {
    return (
        
        <div className="hero__container">
            
          <div className="hero__item">
          <img src={Logo} alt="" />
          
          </div>
          <div className="hero__item">
           <h1>YOGA CLASS</h1>
           <p>The old posters and signs in the traditional Montserrat neighborhood of Buenos Aires inspired Julieta.</p>
                <div className="home-cta">
              <button className="btn-join">JOIN NOW</button>
              </div>
            </div>
          </div>
         
        // </div>
    );
}

export default Home;
