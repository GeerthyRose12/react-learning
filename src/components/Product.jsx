import { useState, useEffect } from "react";
import "./Product.css";
import ProductSearch from "./ProductSearch";
import ProductPagination from "./ProductPagination";
import ProductForm from "./ProductForm";
import ProductDetail from "./ProductDetail";

const LIMIT = 10;

function Product() {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState(null);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=0`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setTotal(data.total);
            });
    }, []);

    const handlePageChange = (pageProducts, pageTotal, newSkip) => {
        setSearchResults(null);
        setProducts(pageProducts);
        setTotal(pageTotal);
        setSkip(newSkip);
    };

    const handleSave = (data, type) => {
        if (type === "edit") {
            setProducts((prev) => prev.map((p) => (p.id === data.id ? { ...p, ...data } : p)));
        } else {
            setProducts((prev) => [data, ...prev]);
        }
        setShowForm(false);
        setEditProduct(null);
    };

    const handleDelete = (id) => {
        fetch(`https://dummyjson.com/products/${id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then(() => setProducts((prev) => prev.filter((p) => p.id !== id)));
    };

    const openEdit = (product) => {
        setEditProduct(product);
        setShowForm(true);
    };

    const displayProducts = searchResults !== null ? searchResults : products;

    return (
        <div className="product-page">
            {selectedProduct ? (
                <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
            ) : showForm ? (
                <div className="form-center">
                    <ProductForm
                        editProduct={editProduct}
                        onClose={() => { setShowForm(false); setEditProduct(null); }}
                        onSave={handleSave}
                    />
                </div>
            ) : (
                <>
                    <div className="product-header">
                        <h1>Products</h1>
                        <button className="btn-create" onClick={() => { setEditProduct(null); setShowForm(true); }}>+ Create</button>
                    </div>
                    <ProductSearch onResults={setSearchResults} />
                    <div className="product-grid">
                        {displayProducts.map((product) => (
                            <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
                                <img src={product.thumbnail} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p className="product-category">{product.category}</p>
                                <p className="product-price">${product.price}</p>
                                <p className="product-rating">⭐ {product.rating}</p>
                                <div className="card-actions">
                                    <button className="btn-edit" onClick={(e) => { e.stopPropagation(); openEdit(product); }}>Edit</button>
                                    <button className="btn-delete" onClick={(e) => { e.stopPropagation(); handleDelete(product.id); }}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ProductPagination skip={skip} total={total} onPageChange={handlePageChange} />
                </>
            )}
        </div>
    );
}

export default Product;