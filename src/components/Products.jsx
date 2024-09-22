import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import iphone11pro from '../assets/iphone15.jpg';
import iphone12pro from '../assets/iphone16.jpg';
import iphone15pro from '../assets/iphone15.jpg';
import iphone16pro from '../assets/iphone16.jpg';
import iphone15 from '../assets/iphone15.jpg';
import iphone16 from '../assets/iphone16.jpg';
import { Link } from 'react-router-dom';
import './Products.css';
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$10.00',
    description: 'iPhone 11 - 64GB',
    image: iphone11pro,
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$20.00',
    description: 'iPhone 12 - 128GB',
    image: iphone12pro,
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$30.00',
    description: 'iPhone 13 - 256GB, Pink',
    image: iphone15pro,
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$40.00',
    description: 'iPhone 14 - 64GB, Lavendar',
    image: iphone16pro,
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$50.00',
    description: 'iPhone 15 pro - 128GB, Red',
    image: iphone15,
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$60.00',
    description: 'iPhone 16 - 256GB',
    image: iphone16,
  },
];

const Products = () => {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row justify-content-between align-items-center mb-4">
        {/* Heading */}
        <div className="col-auto">
          <h2 className="text-dark mb-0">Our Premium Products</h2>
        </div>

        {/* Button */}
        <div className="col-auto">
          <Link to="/Sidebar">
            <button type="button" className="btn btn-primary btn-lg">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
      {/* <h2 className='text-center p-2  text-dark'>Our Premium Products</h2> */}
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-lg border-0 product-card">
              
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top product-image" />

              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted">{product.description}</p>
                <p className="card-text font-weight-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Products;
