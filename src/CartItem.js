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
  // Form-1  
  //   this.setState({
  //     qty: this.state.qty + 1
  // });
  
  //Form -2 -- when requirement of Inc and Dec state based on previous state then functional based form is preferred
  this.setState((previousState)=>{
    return{
    qty: previousState.qty+1
    }
  })
}

decreaseQuantity = () =>{
 // console.log('decrease quantity', this.state);
  try{
    if(this.state.qty >0){
      this.setState((prevState)=>{
        return {
          qty: prevState.qty - 1
        }
      });
    }
  }catch(err){
    console.log("error decreasing current quantity-->",err);
  }
}

  render () {
    console.log("props-->", this.props);
    const {price, title, qty} = this.props.product;
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
                src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                onClick = {this.decreaseQuantity}  
              />
              
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