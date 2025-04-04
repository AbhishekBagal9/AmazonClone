import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className='header'>
      
     <Link to="/">
     <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""  className='logo'/>
     </Link>
        <div className="searchBar">
            <input type="text" name="" className="searchfield" />
             <SearchIcon className='searchicon'/>
        </div>
        <div className="headerNav">
            <div className="headerOption">
               <span className="optionLineOne">
                Hello
               </span>
              <p className="optionLineTwo">
                Sign in
              </p>
            </div>
            <div className="headerOption">
            <span className="optionLineOne">
                Return
               </span>
              <p className="optionLineTwo">
                & Orders
              </p>
            </div>
            <div className="headerOption">
            <span className="optionLineOne">
                Your
               </span>
              <p className="optionLineTwo">
                Prime
              </p>
            </div>
            <Link to="/Checkout">
            <div className="headerBasket">
             <ShoppingBasketIcon/>
              <span>0</span>
            </div>
            </Link>
            
            
        </div>
           
        
    </div>
  )
}

export default Header