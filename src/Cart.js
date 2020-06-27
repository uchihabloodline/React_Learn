import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: '',
          id: 2
        },
        {
          price: 99339,
          title: 'Laptop',
          qty: 1,
          img: '',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
}
    handleIncreaseQuantity = (product) => {
      console.log('Heyy please inc the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
  
      products[index].qty += 1;
  
      this.setState({
        products
      })
    }

    handleDeleteProduct = (id)=> {
      console.log("deleting product with id--> ",id);
      const {products} = this.state;
      const items = products.filter((item)=>item.id !== id);
      this.setState({
        products:items
      })
    }

    handleDecreaseQuantity = (product)=>{
        console.log("decrease qty-->current quantity-->",product.props);
        const {products} = this.state;
        const index = products.indexOf(product)
        if(products[index].qty > 0){
        products[index].qty -= 1
        }else{
           return;
        }
        this.setState({
          products
        })
    }

  render () {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product)=>{
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}
              onDeleteProduct = {this.handleDeleteProduct}
            />
          )
        })}
      </div>
    );
  }
}

export default Cart;