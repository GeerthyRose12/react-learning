import "./Product.css";

const LIMIT = 10;

function ProductPagination({ skip, total, onPageChange }) {
    const goTo = (newSkip) => {
        fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${newSkip}`)
            .then((res) => res.json())
            .then((data) => onPageChange(data.products, data.total, newSkip));
    };

    return (
        <div className="pagination">
            <button onClick={() => goTo(skip - LIMIT)} disabled={skip === 0}>← Prev</button>
            <span>Page {Math.floor(skip / LIMIT) + 1} of {Math.ceil(total / LIMIT) || "..."}</span>
            <button onClick={() => goTo(skip + LIMIT)} disabled={skip + LIMIT >= total}>Next →</button>
        </div>
    );
}

export default ProductPagination;
