// src/components/Dashboard.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Graph from './Graph';
import Transactions from './Transactions';
import Coupons from './Coupons';
import UserProfile from './UserProfile';
import AssetTable from './AssetTable';
import APIKeyPage from './APIKeyPage'; 
// Import APIKeyPage component

const Dashboard = () => {
  return (
    <Router>
      <div className="flex h-screen animated-gradient">
        <Sidebar />
        <div className="flex-grow p-6 overflow-y-auto">
          <UserProfile />
          <AssetTable />
          {/* Add APIKeyPage component */}
          <Routes>
            <Route path="/" element={<Graph />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/analytics" element={<Graph />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/apikey" element={<APIKeyPage />} />
            {/* Add more routes here for other pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
