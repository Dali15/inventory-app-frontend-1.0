import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>📊 Inventory</h2>
      <ul>
        <li>
          <Link to="/">📈 Dashboard</Link>
        </li>
        <li>
          <Link to="/products">📦 Produits</Link>
        </li>
        <li>
          <Link to="/orders">📋 Commandes</Link>
        </li>
        <li>
          <Link to="/analytics">📊 Analytiques</Link>
        </li>
        <li>
          <Link to="/settings">⚙️ Paramètres</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
