import { useState } from "react";
import "./Product.css";
import ProductCategory from "./ProductCategory";

function ProductSearch({ onResults }) {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (!value.trim()) return onResults(null);

        fetch(`https://dummyjson.com/products/search?q=${value}`)
            .then((res) => res.json())
            .then((data) => onResults(data.products));
    };

    const handleCategoryResults = (results) => {
        setQuery("");
        onResults(results);
    };

    return (
        <div className="product-toolbar">
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={handleSearch}
            />
            <ProductCategory onResults={handleCategoryResults} />
        </div>
    );
}

export default ProductSearch;
