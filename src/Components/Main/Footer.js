import React from 'react';
import './css/Footer.css';
import Logo from '../Assests/lmlogo3.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li>About</li>
                        <li>Pre Schooling</li>
                    </ul>
                </div>

                <div className="footer-center">
                    <img src={Logo} alt="" />
                </div>

                <div className="footer-right">
                    <p>Near Erode Bus Stand</p>
                    <p>Anna Nagar, Near SPB Colony</p>
                    <p>Online Classes Also Available!</p>
                    <a href="https://maps.app.goo.gl/gaenqXCDHfPGMp1V6?g_st=aw" style={{ color: "yellow" }}>Location</a>
                    <p>Phone: <span> 95006 33123</span></p>
                    <a href="mailto:mylovelyminion@gmail.com" className="email">mylovelyminions@gmail.com</a>
                </div>
            </div>

            <div className="footer-bottom">

                <div className="social-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>

            <div className='footer-datas'>

                <p className="copyright">
                    © 2021-2025 Lovely Minions Preschool. All rights reserved.
                </p>
                <p className="copyright">
                    Powered by <a href="https://yellowmatics.ai" className='footer-text'>Yellowmatics.ai</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
