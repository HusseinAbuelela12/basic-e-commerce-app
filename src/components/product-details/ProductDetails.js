import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails () {
    const params = useParams();
    const api_url_pro = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    useEffect (() => {
        fetch(`${api_url_pro}/${params.productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    return(
    <>
    <div className="container">
        <div className="mt-5 mb-2 text-center">
            <img src={product.image} className="h-img mb-5" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="">{product.description}</p>
                <p>Price : {product.price}$</p>
            </div>
        </div>
    </div>
    </>
    );
}

export default ProductDetails;