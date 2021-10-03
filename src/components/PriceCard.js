import React from 'react';
import { Button } from './Button';
import "./PriceCard.css";

function PriceCard({title, price,content,imageBg}) {
    return (
        <div>
        
            <div className="price__wrapper">
                <div className="price_title">
                <h3>{title}</h3>
                </div>
                <div className="price_price">
                 <h4>{price}</h4>
                </div>
                
                <div className="price_image">
                    <img src={imageBg} alt="" />
                </div>
                <div className="price_desc">
                    <p>{content}</p>
                </div>
                <div className="price_cta">
                <Button className="btn" buttonStyle="btn--primary"
              buttonSize="btn--large">READ MORE</Button>
                </div>
          
            </div>
          
            
        </div>
    )
}

export default PriceCard;
