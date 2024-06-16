// src/components/Transactions.jsx
import React from 'react';

const Transactions = () => {
  return (
    <div className="bg-purple-700 p-6 rounded-lg shadow-lg mb-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center filter blur-sm opacity-20" style={{ backgroundImage: 'url("/purple-background.jpg")' }}></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-80"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-purple-600 to-transparent opacity-60 mix-blend-multiply"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-transparent to-purple-800 opacity-40 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">Transactions</h3>
        <div className="grid grid-cols-1 gap-4">
          {/* Example transaction items */}
          <div className="bg-purple-600 p-4 rounded-lg shadow-md hover:scale-95">
            <p className="text-white">Sent 0.5 BTC to John Doe</p>
          </div>
          <div className="bg-purple-600 p-4 rounded-lg shadow-md hover:scale-95">
            <p className="text-white">Received 1 ETH from Jane Smith</p>
          </div>
          <div className="bg-purple-600 p-4 rounded-lg shadow-md hover:scale-95">
            <p className="text-white">Sent 1000 SHIB to Alice Johnson</p>
          </div>
          <div className="bg-purple-600 p-4 rounded-lg shadow-md hover:scale-95">
            <p className="text-white">Received 700 SHIB from Ana Laursen</p>
          </div>
        </div>
      </div>
      {/* White circles decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full opacity-20"></div>
      </div>
    </div>
  );
};

export default Transactions;
