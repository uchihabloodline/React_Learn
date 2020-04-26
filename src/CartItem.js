import React from 'react';

class CartItem extends React.Component {

  constructor(){
    super();
    this.state = {
      price: 1000,
      title: "phone",
      qty: 1,
      img: '',
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);  //binding this trivial style

  }

  increaseQuantity = () =>{             //binding this using arrow function
    console.log('this', this.state);
  }

  render () {
    const {price, title, qty} = this.state;
    return (
      <div className="cart-item">
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
                onClick = {this.increaseQuantity}
              />
              
              < img alt="decrease"
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
              
              < img alt="delete" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                
          </div>
        </div>
      </div>
    );
  }
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