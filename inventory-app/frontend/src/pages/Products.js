import React, { useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, status: 'in-stock' },
        { id: 2, name: 'Mouse', category: 'Accessories', price: 29.99, stock: 45, status: 'in-stock' },
        { id: 3, name: 'Keyboard', category: 'Accessories', price: 79.99, stock: 8, status: 'low-stock' },
        { id: 4, name: 'Monitor', category: 'Electronics', price: 349.99, stock: 0, status: 'out-of-stock' },
        { id: 5, name: 'USB Cable', category: 'Accessories', price: 9.99, stock: 120, status: 'in-stock' }
    ]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const getStatusClass = (status) => {
        switch(status) {
            case 'in-stock': return 'completed';
            case 'low-stock': return 'pending';
            case 'out-of-stock': return 'cancelled';
            default: return 'pending';
        }
    };

    const getStatusText = (status) => {
        switch(status) {
            case 'in-stock': return 'En Stock';
            case 'low-stock': return 'Stock Faible';
            case 'out-of-stock': return 'Rupture';
            default: return status;
        }
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: products.length ? Math.max(...products.map(product => product.id)) + 1 : 1,
            name,
            category,
            price: parseFloat(price),
            stock: parseInt(stock),
            status: parseInt(stock) > 0 ? (parseInt(stock) < 10 ? 'low-stock' : 'in-stock') : 'out-of-stock'
        };
        setProducts(prev => [...prev, newProduct]);
        setName("");
        setCategory("");
        setPrice("");
        setStock("");
        setShowForm(false);
    };
    return (
        <div>
            <div className="page-header">
                <h1>📦 Gestion des Produits</h1>
                <p>Gérez votre inventaire de produits</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <button className="btn btn-primary"  onClick={() => setShowForm(true)}>+ Ajouter un Produit</button>
            </div>
            {showForm && (
                <div className="form-container">
                    <h2>Ajouter un produit</h2>

                    <form onSubmit={handlesubmit}>
                        <input type="text" placeholder="Nom du produit" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input type="text" placeholder="Catégorie" value={category} onChange={(e)=>setCategory(e.target.value)} />
                        <input type="number" placeholder="Prix" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        <input type="number" placeholder="Stock" value={stock} onChange={(e)=>setStock(e.target.value)}/>

                        <button type="submit">Enregistrer</button>
                        <button type="button" onClick={() => setShowForm(false)}>
                            Annuler
                        </button>
                    </form>
                </div>
            )}

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom du Produit</th>
                        <th>Catégorie</th>
                        <th>Prix</th>
                        <th>Stock</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>#{product.id}</td>
                            <td style={{ fontWeight: '600' }}>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <span className={`status-badge ${getStatusClass(product.status)}`}>
                                    {getStatusText(product.status)}
                                </span>
                            </td>
                            <td>
                                <button className="btn btn-secondary" style={{ padding: '5px 10px', fontSize: '12px', marginRight: '5px' }}>Éditer</button>
                                <button className="btn" style={{ padding: '5px 10px', fontSize: '12px', backgroundColor: '#e74c3c', color: 'white' }}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
