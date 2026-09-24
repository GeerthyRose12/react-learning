import { useState, useEffect } from "react";
import "./Product.css";

function ProductCategory({ onResults }) {
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/products/category-list")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        if (!value) return onResults(null);

        fetch(`https://dummyjson.com/products/category/${value}`)
            .then((res) => res.json())
            .then((data) => onResults(data.products));
    };

    return (
        <select className="category-select" value={selected} onChange={handleChange}>
            <option value="">All Categories</option>
            {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
    );
}

export default ProductCategory;
