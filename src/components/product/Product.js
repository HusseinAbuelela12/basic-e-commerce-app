import { Link } from "react-router-dom";
import "./style-product.css";


function Product (props) {
    const {product} = props ;
    return (
        <>
        <div className="card mt-5 mb-2">
            <img src={product.image} className="card-img-top h-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title.slice(0 , 50)}</h5>
                <p className="card-text">{product.description.slice(0 , 130)}</p>
                <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>
            </div>
        </div>
        </>
    );
};

export default Product;