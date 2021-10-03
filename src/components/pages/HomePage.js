
import React from "react";
import Card from "../Card";
import Choose from "../Choose";
import Experience from "../Experience";
import Footer from "../Footer";
import Home from "../Home";
import Instructor from "../Instructor";
import StatusComp from "../StatusComp";
import Testimonials from "../Testimonials";
function HomePage() {
    return (
        
        <div className="HomePages">
            <Home />
            <Choose />
            <StatusComp />
            <Instructor />
            <Experience />
            {/* <Card /> */}
            <Card />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default HomePage;
