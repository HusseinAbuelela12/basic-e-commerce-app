import { useEffect, useState } from "react";
import Product from "../product/Product";
import "./style-products-list.css";


function ProductsList () {
    const api_url = 'https://fakestoreapi.com/products';
    const [products, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
        fetch(api_url)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    };

    const getCategories = () => {
        fetch(`${api_url}/categories`)
        .then(res=>res.json())
        .then(data=>setCategories(data));
    };

    const getProductInCategory = (catName) => {
        fetch(`${api_url}/category/${catName}`)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    };

    useEffect (() => {
        getCategories();
        getProducts();

    }, []);

    return (
        <>
        <h2 className="text-center p-4">Our Products</h2>
        <div className="container">
        <button onClick={()=> {getProducts();}} className="btn me-3 mb-3 btn-info">All</button>
            {
                categories.map((cat)=> {
                    return(
                        <>
                        <button key={cat} onClick={()=> {
                            getProductInCategory(cat);
                        }} className="btn me-3 mb-3 btn-info">{cat}</button>
                        </>
                    )
                })
            }
            <div className="row">
                {products.map((product)=> {
                    return (
                        <>
                        <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                            <Product product={product} />
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    );
};

export default ProductsList;