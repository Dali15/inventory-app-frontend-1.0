import React, { useState, useEffect } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setOrders([
                { id: 1001, customer: 'Jean Dupont', product: 'Laptop', quantity: 1, total: 999.99, status: 'Completed', date: '2026-02-04' },
                { id: 1002, customer: 'Marie Martin', product: 'Mouse x5', quantity: 5, total: 149.95, status: 'Completed', date: '2026-02-03' },
                { id: 1003, customer: 'Pierre Bernard', product: 'Keyboard x3', quantity: 3, total: 239.97, status: 'Processing', date: '2026-02-03' },
                { id: 1004, customer: 'Sophie Durand', product: 'Monitor', quantity: 1, total: 349.99, status: 'Pending', date: '2026-02-02' },
                { id: 1005, customer: 'Luc Fontaine', product: 'USB Cable x10', quantity: 10, total: 99.90, status: 'Completed', date: '2026-02-02' },
                { id: 1006, customer: 'Claire Lefevre', product: 'Laptop x2', quantity: 2, total: 1999.98, status: 'Cancelled', date: '2026-02-01' }
            ]);
            setLoading(false);
        }, 600);
    }, []);

    if (loading) return <div>Chargement des commandes...</div>;

    return (
        <div>
            <div className="page-header">
                <h1>📋 Gestion des Commandes</h1>
                <p>Suivez et gérez toutes vos commandes</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <button className="btn btn-primary">+ Nouvelle Commande</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Client</th>
                        <th>Produit</th>
                        <th>Quantité</th>
                        <th>Total</th>
                        <th>Statut</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td style={{ fontWeight: '600' }}>{order.customer}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>${order.total.toFixed(2)}</td>
                            <td>
                                <span className={`status-badge ${order.status === 'Completed' ? 'completed' : order.status === 'Cancelled' ? 'cancelled' : 'pending'}`}>
                                    {order.status}
                                </span>
                            </td>
                            <td>{order.date}</td>
                            <td>
                                <button className="btn btn-secondary" style={{ padding: '5px 10px', fontSize: '12px', marginRight: '5px' }}>Voir</button>
                                <button className="btn" style={{ padding: '5px 10px', fontSize: '12px', backgroundColor: '#3498db', color: 'white' }}>Éditer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
