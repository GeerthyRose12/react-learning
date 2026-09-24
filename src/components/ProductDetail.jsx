import { useState, useEffect } from "react";
import "./Product.css";

function ProductDetail({ product: initialProduct, onBack }) {
    const [product, setProduct] = useState(initialProduct);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${initialProduct.id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.id) setProduct(data);
            });
    }, [initialProduct.id]);

    return (
        <div className="product-detail">
            <button className="btn-back" onClick={onBack}>← Back</button>
            <div className="detail-card">
                <img src={product.thumbnail} alt={product.title} />
                <div className="detail-info">
                    <h2>{product.title}</h2>
                    <p className="product-category">{product.category}</p>
                    <p className="detail-description">{product.description}</p>
                    <p className="product-price">${product.price}</p>
                    <p className="product-rating">⭐ {product.rating} &nbsp;|&nbsp; Stock: {product.stock}</p>
                    <p className="detail-brand">Brand: {product.brand}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
