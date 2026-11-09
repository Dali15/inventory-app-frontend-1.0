import React, { useState } from 'react';

const Settings = () => {
    const [settings, setSettings] = useState({
        storeName: 'Inventory App',
        email: 'admin@inventory.com',
        currency: 'USD',
        language: 'fr',
        notifications: true,
        darkMode: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSave = () => {
        console.log('Paramètres sauvegardés:', settings);
        alert('Paramètres sauvegardés avec succès!');
    };

    return (
        <div>
            <div className="page-header">
                <h1>⚙️ Paramètres</h1>
                <p>Configurez votre application</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: '600px' }}>
                <h2 style={{ marginBottom: '20px' }}>Paramètres Généraux</h2>
                
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Nom du Magasin</label>
                    <input
                        type="text"
                        name="storeName"
                        value={settings.storeName}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '14px'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '14px'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Devise</label>
                    <select
                        name="currency"
                        value={settings.currency}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '14px'
                        }}
                    >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                    </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Langue</label>
                    <select
                        name="language"
                        value={settings.language}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            fontSize: '14px'
                        }}
                    >
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="es">Español</option>
                    </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleChange}
                            style={{ marginRight: '10px', width: '18px', height: '18px' }}
                        />
                        <span style={{ fontWeight: '600' }}>Activer les notifications</span>
                    </label>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input
                            type="checkbox"
                            name="darkMode"
                            checked={settings.darkMode}
                            onChange={handleChange}
                            style={{ marginRight: '10px', width: '18px', height: '18px' }}
                        />
                        <span style={{ fontWeight: '600' }}>Mode Sombre</span>
                    </label>
                </div>

                <button
                    onClick={handleSave}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '12px' }}
                >
                    Enregistrer les Paramètres
                </button>
            </div>
        </div>
    );
};

export default Settings;
