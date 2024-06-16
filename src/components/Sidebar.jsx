// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full flex flex-col">
      <div className="text-2xl font-semibold p-4">Dashboard</div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Overview</Link>
        <Link to="/transactions" className="hover:bg-gray-700 p-2 rounded">Transactions</Link>
        <Link to="/apikey" className="hover:bg-gray-700 p-2 rounded">API Keys</Link>
        <Link to="/coupons" className="hover:bg-gray-700 p-2 rounded">Coupons</Link>
      </nav>
    </div>
  );
};

export default Sidebar;

