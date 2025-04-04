import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
  return (
    <div className='home'>
        <div className="homecontainer">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home-image" />
         <div className="product__row">
         <Product title="The Legend Show" price={99.99}   image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg" rating={2}/>
         <Product title="The Legend Show" price={99.99}  image="https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SL1000_.jpg"/>
         </div>
         <div className="product__row">
          <Product/>
          <Product/>
          <Product/>
         </div>
         <div className="product__row">
          <Product/>
         </div>

        </div>
    </div>
  )
}

export default Home;