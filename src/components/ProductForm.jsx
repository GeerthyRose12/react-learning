import { useState, useEffect } from "react";
import "./Product.css";

const empty = { title: "", category: "", thumbnail: "", rating: "", price: "" };

function ProductForm({ editProduct, onClose, onSave }) {
    const [form, setForm] = useState(empty);

    useEffect(() => {
        if (editProduct) {
            setForm({
                title: editProduct.title || "",
                category: editProduct.category || "",
                thumbnail: editProduct.thumbnail || "",
                rating: editProduct.rating || "",
                price: editProduct.price || "",
            });
        } else {
            setForm(empty);
        }
    }, [editProduct]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => setForm((prev) => ({ ...prev, thumbnail: reader.result }));
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...form, rating: Number(form.rating), price: Number(form.price) };

        if (editProduct) {
            fetch(`https://dummyjson.com/products/${editProduct.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })
                .then((res) => res.json())
                .then((data) => onSave(data, "edit"));
        } else {
            fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })
                .then((res) => res.json())
                .then((data) => onSave(data, "create"));
        }
    };

    return (
        <div className="modal">
            <h2>{editProduct ? "Edit Product" : "Add Product"}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input name="title" placeholder="Enter title" value={form.title} onChange={handleChange} required />

                    <label>Category</label>
                    <input name="category" placeholder="Enter category" value={form.category} onChange={handleChange} required />

                    <label>Image</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="input-file" />
                    {form.thumbnail && <img src={form.thumbnail} alt="preview" className="img-preview" />}

                    <label>Rating</label>
                    <input name="rating" type="number" step="0.1" min="0" max="5" placeholder="0.0 - 5.0" value={form.rating} onChange={handleChange} />

                    <label>Price ($)</label>
                    <input name="price" type="number" placeholder="Enter price" value={form.price} onChange={handleChange} required />

                    <div className="modal-actions">
                        <button type="submit">{editProduct ? "Update" : "Add"}</button>
                        <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
                    </div>
                </form>
        </div>
    );
}

export default ProductForm;
