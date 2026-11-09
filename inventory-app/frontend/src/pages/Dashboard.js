import React, { useEffect, useState } from 'react';
import StatsCard from '../components/StatsCard';
import RecentOrdersTable from '../components/RecentOrdersTable';

const Dashboard = () => {
    const [stats, setStats] = useState({ 
        totalProducts: 254, 
        ordersToday: 42, 
        lowStock: 8,
        revenue: 12540
    });
    const [recentOrders, setRecentOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setRecentOrders([
                { id: 1, product: 'Laptop', quantity: 2, status: 'Completed', date: '2026-02-04' },
                { id: 2, product: 'Mouse', quantity: 5, status: 'Pending', date: '2026-02-03' },
                { id: 3, product: 'Keyboard', quantity: 3, status: 'Completed', date: '2026-02-03' },
                { id: 4, product: 'Monitor', quantity: 1, status: 'Processing', date: '2026-02-02' },
                { id: 5, product: 'USB Cable', quantity: 10, status: 'Completed', date: '2026-02-02' }
            ]);
            setLoading(false);
        }, 800);
    }, []);

    if (loading) return <div>Chargement du tableau de bord...</div>;

    return (
        <div>
            <div className="page-header">
                <h1>📈 Tableau de Bord</h1>
                <p>Bienvenue dans votre système de gestion d'inventaire</p>
            </div>

            <div className="stats">
                <StatsCard title="Produits Totaux" value={stats.totalProducts} />
                <StatsCard title="Commandes Aujourd'hui" value={stats.ordersToday} />
                <StatsCard title="Stock Faible" value={stats.lowStock} />
                <StatsCard title="Revenus" value={`$${stats.revenue.toLocaleString()}`} />
            </div>

            <h2 style={{ marginTop: '30px', marginBottom: '20px', color: '#2c3e50' }}>Commandes Récentes</h2>
            <RecentOrdersTable orders={recentOrders} />
        </div>
    );
};

export default Dashboard;
