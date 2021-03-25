import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
            <img 
            className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB657651956_.jpg' 
            alt ='description'
            />
            <div className='home_row'>
            <Product 
            id= {12345}
            title='The lean startup' 
            price={29.66} 
            image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
            rating={5}
            />
            <Product
            id= {123456}
            title='Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)'
            price={265.44}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg'
            />
            </div>
            <div className='home_row'>
            <Product 
            id= {1234567}
            title='GATE Computer Science and Information Technology 2021' 
            price={10.55} 
            image='https://m.media-amazon.com/images/I/51owgb6PkzL.jpg'
            rating={5}
            />
            <Product
            id= {12345678}
            title='GATE 2021 - Topic-wise Previous Solved Papers - 31 Years Solved Papers-'
            price={8.66}
            rating={4}
            image='https://images-eu.ssl-images-amazon.com/images/I/51ApR7hmpFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
            />
            <Product
            id= {123456789}
            title='GATE 2021 - Guide - Computer Science and Information Technology'
            price={9.56}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/41AuD45xe9L._SX359_BO1,204,203,200_.jpg'
            />
            </div>
            </div>
        </div>
    )
}

export default Home;
