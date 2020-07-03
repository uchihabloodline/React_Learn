import React from 'react';
import './App.css';
//import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore();
  }

  // componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .onSnapshot(snapshot => {
  //       const products = snapshot.docs.map(doc => {
  //         const data = doc.data();
  //         data["id"] = doc.id;
  //         return data;
  //       });
  //       this.setState({ products: products, loading: false });
  //     });
  // }

    componentDidMount() {
      this.db.collection("products").onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
    }

    //Increase quantity function
    handleIncreaseQuantity = (product) => {
      console.log('INC qty of product in DB ', product);
      //getting current state
      const { products } = this.state;
      //getting index of product in parameter
      const index = products.indexOf(product);
  
      // products[index].qty += 1;
  
      // this.setState({
      //   products
      // })
      
      //getting product in DB for which info will update
      const docRef = this.db.collection('products').doc(products[index].id);
      //updating info in DB using the update() method.
      docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(()=>{
        console.log("updated successfully");
      })
      .catch((err)=>{
        console.log("Error in Increase qty func*** ",err);
      });
    };

    //delete product method
    handleDeleteProduct = (id)=> {
      console.log("deleting product with id--> ",id);
      //const {products} = this.state;
      // const items = products.filter((item)=>item.id !== id);
      // this.setState({
      //   products:items
      // })
      const docRef = this.db.collection('products').doc(id);
      docRef
        .delete()
          .then(()=>{
            console.log("Deleted successfully!!");
          })
          .catch((err)=>{
            console.log("Error in deletion method**** ",err);
          })
    };

    //Decrease quantity method
    handleDecreaseQuantity = (product)=>{
      console.log("decrease qty-->current quantity-->",product.props);
      const {products} = this.state;
      const index = products.indexOf(product)
      // if(products[index].qty > 0){
      // products[index].qty -= 1
      // }else{
      //     return;
      // }
      // this.setState({
      //   products,
      // })
      const docRef = this.db.collection('products').doc(products[index].id);
      if(products[index].qty > 0){
        docRef.update({
          qty: products[index].qty - 1
        })
        .then(()=>{
          console.log("qty decreased successfully");
        })
        .catch((err)=>{
          console.log("error in decrease qty method*** ",err);
        });
      };
    };

    //Cart count total method for navbar count detail
    getCartCount = ()=>{
      const {products} = this.state;
      let count = 0;
      products.forEach((product)=>{
        count = count + product.qty;
      });
      return count;
    }

    //total price method to calculate total price section at the end.
    getTotalPrice = () =>{
      const {products} = this.state;
      let totalprice = 0;
      products.forEach((product)=>{
        console.log("price ",product.price);
        totalprice += (product.qty * product.price);
      })
      return totalprice;
    }

    //SELECTIVE USAGE :- implemented to understand adding things to firebase DB
    // addProduct = () =>{
    //   this.db
    //     .collection('products')
    //     .add({
    //       img:'',
    //       title: 'washing machine',
    //       price: 9000,
    //       qty: 2
    //     })
    //     .then((docRef)=>{
    //       docRef.get().then(snapshot =>{
    //       console.log("product has been added ",docRef);
    //     });
    //   })
    //     .catch(err =>{
    //       console.log('Error in addProduct func****** ',err);
    //     });
    // };

  render(){
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar 
        count = {this.getCartCount()}
        />
        {/* <button onClick={this.addProduct} style={{padding:20, fontsize:20}}>
          Add product
        </button> */}
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct} />
        <div className="TotalPrice" style={{padding:10, fontSize:20}}>
          TOTAL_PRICE: {this.getTotalPrice()}
          {loading && <h1>Loading Products...</h1>}
        </div>
      </div>
    );
  }
}


export default App;


