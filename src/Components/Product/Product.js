import React from 'react';
import './Product.css';

function Product(props) {
  const { good, removeProduct, pinToTop } = props;
  return (
    <div className="card">
      <img src={good.img} alt={good.name} />
      <p className="product-details">{good.details} </p>
      <div className="bottom-card-text">
        <p className="price"> {good.price + ' $'}</p>
        <p className="product-title"> {good.name}</p>
      </div>
      <button
        className="remove-product"
        onClick={() => {
          removeProduct(good);
        }}
      >
        Х
      </button>
      <button
        className="to-top"
        onClick={() => {
          pinToTop(good.id);
        }}
      >
        top
      </button>
    </div>
  );
}
export default Product;
