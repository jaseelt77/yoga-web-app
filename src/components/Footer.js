import React from "react";
import './Footer.css';
import {Link} from "react-router-dom";
function Footer() {
    return (
        <div>
        <div className="miss__wrap">
          <h1>DONT MISS OUR UPDATE</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece </p>
          <form>
                <input type="text" placeholder="Your Email" />
                <input type="submit" className="btn_submit" value="Subscribe" />
            </form>
        </div>
        <div className="footer">
        <div className="footer__grids">
            <div className="grid__item">
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="grid__item">
                <h4>About</h4>

                <ul className="grid_ul">
                <Link to="/" className="foot-item">
                <li>History</li>
                </Link>
                <Link to="/" className="foot-item">
                <li>Our Team</li>
                </Link>
                <Link to="/" className="foot-item">
                <li>Branch Guidelines</li>
                </Link>
                <Link to="/" className="foot-item">
                <li>Terms & Conditions</li>
                </Link>
                <Link to="/" className="foot-item">
                <li>Privacy Policy</li>
                </Link>
                </ul>
                
            </div>
            <div className="grid__item">
            <h4>Services</h4>

            <ul className="grid_ul">
                <Link to="/" className="foot-item">
                <li>How to Order</li>
                </Link>
                <Link to="/" className="foot-item">
                <li>Our Product</li>
                </Link>
                <Link to="/" className="foot-item">
                <li>Order Status</li>
                </Link>
                <Link to="/" className="foot-item">
                <li>Promo</li>
                </Link>
                <Link to="/" className="foot-item">
                <li>Payment Method</li>
                </Link>
                </ul>
            </div>
            <div className="grid__item">
            <h4>Follow</h4>
            <ul className="grid_ul">
                <Link to="/" className="foot-item">
                <li><i class="fab fa-facebook-f"></i>Facebook</li>
                </Link>
                <Link to="/" className="foot-item">
                <li><i class="fab fa-twitter"></i>Twitter</li>
                </Link>
                <Link to="/" className="foot-item">
                <li><i class="fab fa-instagram"></i>Instagram</li>
                </Link>
                <Link to="/" className="foot-item">
                <li><i class="fab fa-whatsapp"></i>Whatsapp</li>
                </Link>
                
                </ul>
            </div>
            </div>  
        </div>
        </div>
    )
}

export default Footer;
