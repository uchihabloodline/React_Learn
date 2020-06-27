import React from 'react';
//import Cart from './Cart';

const CartItem = (props) => {
  console.log("props-->", props);
  const {price, title, qty} = props.product;
  const {product, onDecreaseQuantity, onIncreaseQuantity, onDeleteProduct} = props;
  return (
    <div className="cart-item">
      {props.jsx}
      <div className="left-block">
        <img style={styles.image} alt="" />
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Price:{price}</div>
        <div style={ { color: '#777' } }>Qty:{qty}</div>
        <div className="cart-item-actions">
          {/* Buttons */}
            < img alt="increase" 
              className="action-icons" 
              src="https://image.flaticon.com/icons/svg/992/992651.svg" 
              onClick = {()=> onIncreaseQuantity(product)}
            />
            
            < img alt="decrease"
              className="action-icons" 
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick = {()=> onDecreaseQuantity(product)}  
            />
            
            < img alt="delete" 
              className="action-icons" 
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick = {()=> onDeleteProduct(product.id)} />
              
        </div>
      </div>
    </div>
    );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;