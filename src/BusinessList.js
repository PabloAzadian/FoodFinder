import React from 'react';
import Business from './Business';
import './BusinessList.css';

const businesses = [
  {
    id: '1',
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Sample Restaurant 1',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 100
  },
  {
    id: '2',
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Sample Restaurant 2',
    address: '456 Elm St',
    city: 'Sometown',
    state: 'NY',
    zipCode: '67890',
    category: 'American',
    rating: 4.0,
    reviewCount: 50
  },
  {
    id: '3',
    imageSrc: 'https://via.placeholder.com/150',
    name: 'Sample Restaurant 3',
    address: '789 Oak St',
    city: 'Othertown',
    state: 'TX',
    zipCode: '45678',
    category: 'Mexican',
    rating: 3.5,
    reviewCount: 75
  }
];

const BusinessList = () => {
  return (
    <div className='BusinessList'>
      {businesses.map(business => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
