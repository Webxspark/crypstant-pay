// src/components/AssetTable.jsx
import React, { useState, useEffect } from 'react';

const AssetTable = () => {
  const [assets, setAssets] = useState([
    { name: 'Bitcoin', value: 40000, change: 1.2 },
    { name: 'Dogecoin', value: 0.3, change: -0.5 },
    { name: 'Ethereum', value: 2500, change: 0.8 },
    { name: 'Shiba Inu', value: 0.0007, change: 2.3 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update values with random changes
      const updatedAssets = assets.map(asset => ({
        ...asset,
        value: getRandomValue(asset.value),
        change: getRandomChange(asset.change),
      }));
      setAssets(updatedAssets);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, [assets]);

  const getRandomValue = (value) => {
    const change = Math.random() * 0.05; // Random change between -5% to 5%
    return Math.round((value + (value * change)) * 100) / 100;
  };

  const getRandomChange = (change) => {
    const randomSign = Math.random() < 0.5 ? -1 : 1;
    return Math.round((change + (randomSign * Math.random() * 2)) * 10) / 10; // Random change between -2 to 2
  };

  return (
    <div className="bg-purple-500 p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-semibold mb-4 text-white">Total Assets</h3>
      <table className="min-w-full divide-y divide-purple-400">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="py-2 px-4 text-left">Asset</th>
            <th className="py-2 px-4 text-left">Value</th>
            <th className="py-2 px-4 text-left">1-Day Change</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index} className="bg-purple-700 text-white">
              <td className="py-2 px-4">{asset.name}</td>
              <td className="py-2 px-4">{asset.value}</td>
              <td className={`py-2 px-4 ${asset.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {asset.change >= 0 ? '+' : ''}{asset.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;
