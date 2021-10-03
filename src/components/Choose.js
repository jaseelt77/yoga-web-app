import React from "react";
import "./Choose.css";
import ChooseCard from "./ChooseCard";


function Choose() {
    return (
        <div className="section__two ">
            <h1 className="headline">CHOOSE CLASS</h1>
            <p className="description">The old posters and signs in the traditional Montserrat neighborhood of Buenos Aires inspired Julieta.</p>
           <div className="grid">
            <ChooseCard title="NEWBIE CLASS"
           imageUrl="https://raw.githubusercontent.com/jaseelt77/okay_humans/main/okey-humans/img/choose_1.png"
           body="Lorem Ipsum is simply dummy text of the printing and typesetting." />
           

           <ChooseCard title="ADVANCED CLASS"
           imageUrl="https://raw.githubusercontent.com/jaseelt77/okay_humans/main/okey-humans/img/choose_2.png"
           body="Lorem Ipsum is simply dummy text of the printing and typesetting." />

            <ChooseCard title="EXPERT CLASS"
           imageUrl="https://raw.githubusercontent.com/jaseelt77/okay_humans/main/okey-humans/img/choose_3.png"
           body="Lorem Ipsum is simply dummy text of the printing and typesetting." />
          </div>
        </div>
    );
};

export default Choose;
