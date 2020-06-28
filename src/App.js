import React from 'react';
import './App.css';
//import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 13,
          img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          price: 99339,
          title: 'Laptop',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=730&q=80',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);    //when using bind method or function keyword.
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

    getCartCount = ()=>{
      const {products} = this.state;
      let count = 0;
      products.forEach((product)=>{
        count = count + product.qty;
      })
      return count;
    }

    getTotalPrice = () =>{
      const {products} = this.state;
      let totalprice = 0;
      products.forEach((product)=>{
        totalprice += (product.qty * product.price);
      })
      return totalprice;
    }

  render(){
    const products = this.state;
    return (
      <div className="App">
        <Navbar 
        count = {this.getCartCount()}
        />
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct} />
        <div className="TotalPrice" style={{padding:10, fontSize:20}}>
          TOTAL_PRICE: {this.getTotalPrice()}
        </div>
      </div>
    );
  }
}


export default App;
