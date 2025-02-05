import './Header.css';
import LOGO from '../images/Logo.png';
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='Header'>
            <div className={`Header1 ${isMenuOpen ? 'active' : ''}`}>
                <div><img src={LOGO} alt="Logo" /></div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul>
                    <li><a href='#'>SERVICES</a></li>
                    <li><a href='#'>ABOUT US</a></li>
                    <li><a href='#'>CONTACT US</a></li>
                    <li><a href='#'>CAREERS</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
