import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct.js';
import { useStateValue } from './StateProvider';
function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    console.log(dispatch);
    return (
        <div className ='checkout'>
            <div className = 'checkout_left'>
                <img 
                src = 'https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg' 
                className = 'checkout_ad' 
                alt = 'desc'/>
                <div>
                    <h2 className ='checkout_title'>
                        Your Shopping Basket
                    </h2> 
                    {basket.map(item =>(
                       <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}/> 
                    ))}
                </div>
            </div> 
                <div className = 'checkout_right'>
                <Subtotal/>
                </div>
        </div>
    )
}
export default Checkout;
