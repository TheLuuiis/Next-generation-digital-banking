import '../css/components/Choose.css';

import IconOnline from '../assets/image/icon-online.svg';
import IconBudgeting from '../assets/image/icon-budgeting.svg';
import IconOnboarding from '../assets/image/icon-onboarding.svg';
import IconApi from '../assets/image/icon-api.svg';

const cards = [
    {
        id: 1,
        imagen: IconOnline,
        titulo: "Online Banking",
        descripcion:
            "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
        id: 2,
        imagen: IconBudgeting,
        titulo: "Simple Budgeting",
        descripcion:
            "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    {
        id: 3,
        imagen: IconOnboarding,
        titulo: "Fast Onboarding",
        descripcion:
            "We don’t do branches. Open your account in minutes online and start taking control of your finances instantly."
    },
    {
        id: 4,
        imagen: IconApi,
        titulo: "Open API",
        descripcion:
            "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
];

const Choose = () => {
    return (
        <div className="container__choose">
            <div className="choose">
                <div className="description__choose">
                    <h1>Why choose Digitalbank?</h1>

                    <p>
                        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                    </p>
                </div>

                <div className="container__options">
                    {cards.map((card) => (
                        <div className="card__option" key={card.id}>
                            <img
                                src={card.imagen}
                                alt={card.titulo}
                            />

                            <div className="description__card">
                                <h2>{card.titulo}</h2>

                                <p>
                                    {card.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Choose;