import '../css/components/Articles.css';

const Articulos = [
    {
        id: 1,
        imagen: "/src/assets/image/image-currency.jpg",
        alt: "image-currency",
        autor: "By Claire Robinson",
        titulo: "Receive money in any currency with no fees",
        descripcion:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single…",
    },
    {
        id: 2,
        imagen: "/src/assets/image/image-restaurant.jpg",
        alt: "image-restaurant",
        autor: "By Wilson Hutton",
        titulo: "Treat yourself without worrying about money",
        descripcion:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…",
    },
    {
        id: 3,
        imagen: "/src/assets/image/image-plane.jpg",
        alt: "image-plane",
        autor: "By Wilson Hutton",
        titulo: "Take your Digitalbank card wherever you go",
        descripcion:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even…",
    },
    {
        id: 4,
        imagen: "/src/assets/image/image-confetti.jpg",
        alt: "image-confetti",
        autor: "By Claire Robinson",
        titulo: "Our invite-only Beta accounts are now live!",
        descripcion:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through…",
    },
];

const Articles = () => {

    return (  
        <div className="container__articles">
            <div className="articles">
                <div className="title__article">
                    <h1>Latest Articles</h1>
                </div>
                <div className="container__latest">
                    {Articulos.map((articulo) => (
                        <div className="card__article" key={articulo.id}>
                            <img src={articulo.imagen} alt={articulo.alt} />
                            <div className="description__article">
                                <sub>{articulo.autor}</sub>
                                <h3>{articulo.titulo}</h3>
                                <p>
                                    {articulo.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Articles;