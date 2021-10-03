import React from 'react';
import "./Choose.css";

function Choose_card({title,imageUrl,body}) {
   
    return (
        <div className="choose_container">
         <div className="image_container">
             <img src={imageUrl} alt="" />
         </div>
         <div className="title">
             <h3>{title}</h3>
         </div>
         <div className="card-body">
             <p>{body}</p>
         </div>
        </div>
    )
}

export default Choose_card;
