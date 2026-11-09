import React from 'react';

const StatsCard = ({ title, value }) => {
    return (
        <div className="stats-card">
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    );
};

export default StatsCard;