import React from 'react';
import "./Choose.css";
import PriceCard from './PriceCard';

function Card() {
    return (
        <div className="price__Section">
            <h1 className="titles">Pricing</h1>
<p className="desc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        
         <div className="flex">
           
             <PriceCard title="NEWBIEW CLASS"
              price="$00.00"
               content="Contrary to popular belief, Lorem Ipsum is not simply random text."
               imageBg="https://raw.githubusercontent.com/jaseelt77/okay_humans/main/okey-humans/img/yoga_14.jpg"  />
             <PriceCard title="ADVANCED CLASS"
              price="$00.00"
               imageBg="https://raw.githubusercontent.com/jaseelt77/okay_humans/main/okey-humans/img/yoga_14.jpg"
               content="Contrary to popular belief, Lorem Ipsum is not simply random text."  />
             <PriceCard title="EXPERT CLASS"
              price="$00.00" 
              imageBg="https://raw.githubusercontent.com/jaseelt77/okay_humans/main/okey-humans/img/yoga_14.jpg"
              content="Contrary to popular belief, Lorem Ipsum is not simply random text."  />
            
             </div>
          
        </div>
    )
}

export default Card
