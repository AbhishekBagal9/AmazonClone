import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className='header'>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""  className='logo'/>
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
            <div className="headerBasket">
             <ShoppingBasketIcon/>
              <span>0</span>
            </div>
            
        </div>
           
        
    </div>
  )
}

export default Header