import logoDark from '../assets/image/logo-dark.svg';
import '../css/components/Header.css';

const Header = () => {
    return (  
        <header>
            <nav>
                <img src={logoDark} width="180px" alt="logo-dark" />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                </ul>
                <button>Request Invite</button>
            </nav>
        </header>
    );
}
 
export default Header;