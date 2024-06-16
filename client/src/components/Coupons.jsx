// src/components/Coupons.jsx
import React from 'react';

const Coupons = () => {
  const coupons = [
    { id: 1, title: '20% off', description: 'Get 20% off on your next purchase', code: 'SAVE20' },
    { id: 2, title: 'Free Shipping', description: 'Enjoy free shipping on orders over $50', code: 'SHIPFREE' },
    { id: 3, title: '$10 Discount', description: 'Get $10 off on selected items', code: 'DISCOUNT10' },
    { id: 4, title: 'Buy 1 Get 1 Free', description: 'Buy one, get one free on all products', code: 'BOGO' },
    { id: 5, title: '25% off', description: 'Get 25% off on all purchases', code: 'SAVE25' },
    { id: 6, title: 'Summer Sale', description: 'Summer sale: up to 50% off', code: 'SUMMER50' },
    { id: 7, title: 'Holiday Special', description: 'Holiday special: extra 15% off', code: 'HOLIDAY15' },
    { id: 8, title: 'Student Discount', description: 'Students get 10% off on all items', code: 'STUDENT10' },
    { id: 9, title: 'Weekend Deal', description: 'Weekend deal: 30% off on selected items', code: 'WEEKEND30' },
    { id: 10, title: 'First Purchase', description: 'Get $5 off on your first purchase', code: 'FIRST5' },
  ];

  return (
    <div className="bg-purple-200 p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-semibold mb-4 text-purple-800">Coupons</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {coupons.map(coupon => (
          <div key={coupon.id} className="bg-purple-300 p-4 rounded-lg shadow-md hover:scale-105 drop-shadow-2xl">
            <h4 className="text-lg font-semibold mb-2">{coupon.title}</h4>
            <p className="text-purple-800 mb-2">{coupon.description}</p>
            <p className="text-purple-800 text-sm">{coupon.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;
