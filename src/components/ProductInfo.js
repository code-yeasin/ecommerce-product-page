import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useGlobalContext } from '../context';

function ProductInfo() {
  const { handleAddToCart } = useGlobalContext();
  const [amount, setAmount] = useState(0);

  const increaseAmount = (amount) => {
    setAmount(amount + 1);
    if (amount >= 10) {
      setAmount(10);
    }
  };
  const decreaseAmount = (amount) => {
    setAmount(amount - 1);
    if (amount <= 0) {
      setAmount(0);
    }
  };

  return (
    <section className='product-info-container'>
      <h3>HEADPHONES COMPANY</h3>
      <h1>Wirless Headphon</h1>
      <p>
        Enjoy high-quality sound and freedom of movement with these sleek wireless headphones. Comfortable, lightweight, and perfect for everyday use.
      </p>
      <div className='price-container'>
        <div className='current-price'>
          <h2>$350.00</h2>
          <div className='percentage-container'>
            <h3>30%</h3>
          </div>
        </div>
        <span>$500.00</span>
      </div>
      <div className='add-to-cart-container'>
        <button className='quantity-btn'>
          <span
            className='quantity-icon'
            onClick={() => decreaseAmount(amount)}
          >
            -
          </span>
          <span className='quantity-number'>{amount}</span>
          <span
            className='quantity-icon'
            onClick={() => increaseAmount(amount)}
          >
            +
          </span>
        </button>
        <button className='add-to-cart-btn'>
          <AiOutlineShoppingCart />
          <span onClick={() => handleAddToCart(amount)}>Add to cart</span>
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
