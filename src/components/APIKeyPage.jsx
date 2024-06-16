// src/components/APIKeyPage.jsx
import React from 'react';

const APIKeyPage = () => {
  const apiLogs = [
    { id: 1, method: 'GET', endpoint: '/users', status: 200, responseTime: '50ms' },
    { id: 2, method: 'POST', endpoint: '/login', status: 401, responseTime: '100ms' },
    { id: 3, method: 'PUT', endpoint: '/products/123', status: 200, responseTime: '80ms' },
    { id: 4, method: 'DELETE', endpoint: '/users/456', status: 204, responseTime: '120ms' },
    { id: 5, method: 'GET', endpoint: '/analytics', status: 200, responseTime: '60ms' },
    { id: 6, method: 'POST', endpoint: '/logout', status: 200, responseTime: '70ms' },
    { id: 7, method: 'GET', endpoint: '/orders', status: 404, responseTime: '90ms' },
    { id: 8, method: 'PATCH', endpoint: '/profile', status: 200, responseTime: '110ms' },
    { id: 9, method: 'POST', endpoint: '/cart', status: 201, responseTime: '55ms' },
    { id: 10, method: 'PUT', endpoint: '/settings', status: 200, responseTime: '75ms' },
  ];

  return (
    <div className="bg-indigo-800 p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-200">API Key Logs</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-indigo-700 rounded-lg overflow-hidden">
          <thead className="bg-indigo-800 text-indigo-200">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Method</th>
              <th className="py-2 px-4">Endpoint</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Response Time</th>
            </tr>
          </thead>
          <tbody className="text-indigo-100">
            {apiLogs.map(log => (
              <tr key={log.id} className="hover:bg-indigo-600">
                <td className="py-2 px-4">{log.id}</td>
                <td className="py-2 px-4">{log.method}</td>
                <td className="py-2 px-4">{log.endpoint}</td>
                <td className="py-2 px-4">{log.status}</td>
                <td className="py-2 px-4">{log.responseTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default APIKeyPage;
