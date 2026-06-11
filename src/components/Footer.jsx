import '../css/components/Footer.css';
import LogoWhite from '../assets/image/logo-light.svg';

import IconFacebook from '../assets/image/icon-facebook.svg';
import IconYoutube from '../assets/image/icon-youtube.svg';
import IconTwitter from '../assets/image/icon-twitter.svg';
import IconPinterest from '../assets/image/icon-pinterest.svg';
import IconInstagram from '../assets/image/icon-instagram.svg';

const Footer = () => {
    return (  
        <footer>
            <div className="container__footer">
                <div className="container__brand">
                    <img src={LogoWhite} alt="logo-white" />
                    <div className="container__networks">
                        <img src={IconFacebook} alt="icon-facebook" />
                        <img src={IconYoutube} alt="icon-youtube" />
                        <img src={IconTwitter} alt="icon-twitter" />
                        <img src={IconPinterest} alt="icon-pinterest" />
                        <img src={IconInstagram} alt="icon-instagram" />
                    </div>
                </div>
                <div className="container__links">
                    <div className="link">
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="link">
                        <ul>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container__author">
                    <button>Request Invite</button>
                    <a href="#">© TheLuis. All Rights Reserved</a>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;