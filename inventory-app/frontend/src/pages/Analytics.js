import React, { useEffect, useState } from 'react';
import StatsCard from '../components/StatsCard';

const Analytics = () => {
    const [analytics, setAnalytics] = useState({
        totalRevenue: 0,
        totalOrders: 0,
        averageOrderValue: 0,
        conversionRate: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setAnalytics({
                totalRevenue: 45250,
                totalOrders: 1240,
                averageOrderValue: 36.49,
                conversionRate: 3.2
            });
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <div>Chargement...</div>;

    return (
        <div>
            <div className="page-header">
                <h1>📊 Analytiques</h1>
                <p>Analysez vos performances et tendances</p>
            </div>

            <div className="stats">
                <StatsCard title="Chiffre d'Affaires" value={`$${analytics.totalRevenue.toLocaleString()}`} />
                <StatsCard title="Commandes Totales" value={analytics.totalOrders} />
                <StatsCard title="Valeur Moyenne" value={`$${analytics.averageOrderValue.toFixed(2)}`} />
                <StatsCard title="Taux de Conversion" value={`${analytics.conversionRate}%`} />
            </div>

            <div style={{ marginTop: '40px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h2>Tendances Mensuelles</h2>
                <p style={{ color: '#7f8c8d', marginTop: '10px' }}>Les données graphiques seront intégrées avec une bibliothèque de graphiques.</p>
            </div>
        </div>
    );
};

export default Analytics;
