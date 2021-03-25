import React from 'react';
import './Header.css'; 
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';
function Header() {
    const [{basket}] = useStateValue();
    let email = localStorage.getItem('User');
    return (
        <div className='header'>
            <Link to='/'>
            <img
            className='header_logo' 
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt=' descrption of pic'
            />
            </Link>
            <div className='header_search'>
            <input 
            type='text'
            className='header_searchInput'
            />
            <SearchIcon 
            className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <Link to='/'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello 
                    </span>
                    <span className='header_optionLineTwo'>
                        {email}
                    </span>
                </div>
                </Link>
                <div className='header_option'>
                <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header_optionLinetwo
                    header_basketCount'>{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;
