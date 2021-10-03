import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css";
import Home from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";

function Header() {
    return (
        <header className="header">
            <Router>
                 <Navbar />
                 <Switch>
                     <Route path="/" component={Home} exact>
                         <Home />
                     </Route>
                     <Route path="/contactus" component={ContactUs} exact>
                         <ContactUs />
                     </Route>
                     <Route path="/Services" component={Services} exact>
                         <Services />
                     </Route>
                     <Route path="/Aboutus" component={Aboutus} exact>
                         <Aboutus />
                     </Route>
                 </Switch>
            </Router>
            {/* <div className="header__wrapper">
                <h1>hello</h1>
            </div> */}
          
        </header>
    )
}

export default Header;
