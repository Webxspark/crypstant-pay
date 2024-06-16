// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-purple-500 p-6 rounded-lg shadow-lg mb-6 flex items-center">
      <img
        src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
        alt="Profile"
        className="w-24 h-24 rounded-full mr-6 border-4 border-purple-700"
      />
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-white">Elon Tusk</h3>
        <p className="text-purple-200 mb-1">Username: Elon Modi</p>
        <p className="text-purple-200">Email: teslatusk@gmail.com</p>
      </div>
    </div>
  );
};

export default UserProfile;
