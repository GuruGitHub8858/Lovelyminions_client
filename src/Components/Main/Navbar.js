import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assests/lmlogo3.png'; // Ensure the correct path
import './css/Navbar.css';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [subDropdown, setSubDropdown] = useState(null);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Skole Logo" className="logo-img" />
            </div>
            <ul className="nav-items">
                <Link to="/">
                    <li className="active">Home</li>
                </Link>
                <Link to="/preschooling">
                    <li>Pre Schooling</li>
                </Link>
                <li
                    className="dropdown"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => {
                        setDropdown(false);
                        setSubDropdown(null);
                    }}
                >
                    Programs
                    {dropdown && (
                        <ul className="dropdown-menu">
                            <li
                                className="dropdown-item"
                                onMouseEnter={() => setSubDropdown("technical")}
                                onMouseLeave={() => setSubDropdown(null)}
                            >
                                Technical
                                {subDropdown === "technical" && (
                                    <ul className="sub-dropdown">
                                        <li><Link to="/programs/technical/robotics-iot">Robotics And IoT</Link></li>
                                        <li><Link to="/programs/technical/coding-ai">Coding and AI</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li
                                className="dropdown-item"
                                onMouseEnter={() => setSubDropdown("phonics")}
                                onMouseLeave={() => setSubDropdown(null)}
                            >
                                Language & Literacy
                                {subDropdown === "phonics" && (
                                    <ul className="sub-dropdown">
                                        <li><Link to="/programs/language-literacy/hindi">Hindi</Link></li>
                                        <li><Link to="/programs/language-literacy/phonics">Phonics</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li
                                className="dropdown-item"
                                onMouseEnter={() => setSubDropdown("martial-art")}
                                onMouseLeave={() => setSubDropdown(null)}
                            >
                                Martial Art & Strategy
                                {subDropdown === "martial-art" && (
                                    <ul className="sub-dropdown">
                                        <li><Link to="/programs/martial-art-strategy/silambam">Silambam</Link></li>
                                        <li><Link to="/programs/martial-art-strategy/chess">Chess</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li
                                className="dropdown-item"
                                onMouseEnter={() => setSubDropdown("logical-thinking")}
                                onMouseLeave={() => setSubDropdown(null)}
                            >
                                Logical Thinking
                                {subDropdown === "logical-thinking" && (
                                    <ul className="sub-dropdown">
                                        <li><Link to="/programs/logical-thinking/vedic-math">Vedic Math</Link></li>
                                        <li><Link to="/programs/logical-thinking/rubiks-cube">Rubik's Cube</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li
                                className="dropdown-item"
                                onMouseEnter={() => setSubDropdown("arts")}
                                onMouseLeave={() => setSubDropdown(null)}
                            >
                                Performing Arts & Creativity
                                {subDropdown === "arts" && (
                                    <ul className="sub-dropdown">
                                        <li><Link to="/programs/performing-arts-creativity/dance">Dance</Link></li>
                                        <li><Link to="/programs/performing-arts-creativity/craft">Craft</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li className="dropdown-item">
                                <Link to="/programs/summer-camp">Summer Camp</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <Link to="/about">
                    <li>About us</li>
                </Link>
                <Link to="/contact">
                    <li>Contact us</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
