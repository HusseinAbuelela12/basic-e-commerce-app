import Image1 from "../images-slider/eCommerce-1.jpg";
import Image2 from "../images-slider/ecommerce-seo-tips.jpg";
import Image3 from "../images-slider/ecommerce-web-page-concept-illustration_114360-8204.avif";
import Image4 from "../images-slider/ecommerce.jpg";
import "./style-slider.css"
function Slider () {
    return (
        <>
        <div id="carouselExample" className="carousel slide w-75 m-auto mt-5 mb-5">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Image1} className="d-block w-100 height-300" alt="image" />
                </div>
                <div className="carousel-item">
                <img src={Image2} className="d-block w-100 height-300" alt="image" />
                </div>
                <div className="carousel-item">
                <img src={Image3} className="d-block w-100 height-300" alt="image" />
                </div>
                <div className="carousel-item">
                <img src={Image4} className="d-block w-100 height-300" alt="image" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon br bg-black" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon br bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
};

export default Slider;