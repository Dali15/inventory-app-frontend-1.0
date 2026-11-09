import React from 'react';

const RecentOrdersTable = ({ orders }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Numéro</th>
                    <th>Produit</th>
                    <th>Quantité</th>
                    <th>Statut</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td style={{ fontWeight: '600' }}>{order.product}</td>
                        <td>{order.quantity}</td>
                        <td>
                            <span className={`status-badge ${order.status.toLowerCase()}`}>
                                {order.status}
                            </span>
                        </td>
                        <td>{new Date(order.date).toLocaleDateString('fr-FR')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RecentOrdersTable;