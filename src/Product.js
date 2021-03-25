import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
function Product({id, title, image, price, rating}) {
    const [ {basket}, dispatch] = useStateValue();
    console.log(basket);
    const addToBasket = () =>{
        dispatch({
        type: 'ADD_TO_BASKET',
        item:{
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
    });
    }
    return (
        <div className='product'>
            <div className='product_info' >
                <p>{title}</p>
                <p className='product_price'>
                    <medium>$</medium>
                    <strong>{price}</strong>
                </p>
                <div style={{display: 'flex'} }
                >
                    {Array(rating)
                    .fill()
                    .map((_ , i) =>(
                        <p id = 'star' key = {i}>★</p>
                    ))}
                </div>
            </div>
            <img 
            src={image} 
            alt = 'pic'/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}
export default Product; 