import '../css/components/Welcome.css';
import Mockups from '../assets/image/image-mockups.png';
const Welcome = () => {
    return (
        <div className="welcome">
            <div className="container__banking">
                <div className="description__banking">
                    <h1>
                        Next generation digital banking
                    </h1>
                    <p>
                        Take your financial life online. Your Digitalbank account will be a one-stop for spending, saving, budgeting, investingm and much more.
                    </p>
                    <button>Request Invite</button>
                </div>
                <div className="img__banking">
                    <img src={Mockups} alt="mockups" />
                </div>
            </div>
        </div>
    );
}
 
export default Welcome;