import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    
    render(){
        const arr = [1,2,3,4,5];
        return (
           
            <div className='cart'>
                
                {arr.map(function(item){
                    return item+4
                })}
                <div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        );
    }
    
}

export default Cart;