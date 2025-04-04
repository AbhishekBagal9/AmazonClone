import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
  return (
    <div className='home'>
        <div className="homecontainer">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home-image" />
         
        <div className="home-row">
    <Product 
        id={124513}
        title="Apple iPhone 15 Pro (128 GB) - Natural Titanium"
        price={"₹1,34,900"}
        image="https://m.media-amazon.com/images/I/41lQuD3zXhL._SX300_SY300_QL70_FMwebp_.jpg"
        rating={4}
        author="by Apple"
    />
    <Product 
        id={124514}
        title="Sony WH-1000XM5 Wireless Noise-Canceling Headphones - Black"
        price={"₹25,988"}
        image="https://m.media-amazon.com/images/I/51aXvjzcukL._SX522_.jpg"
        rating={5}
        author="by Sony"
    />
</div>

<div className="home-row">
    <Product 
        id={124515}
        title="Apple Vision Pro - 256GB Storage, Advanced Spatial Computing"
        price={"₹2,87,000"}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wqohB1CTStqnAsnocc6pKoj5YpbDFFEWlw&s"
        rating={5}
        author="by Apple"
    />
    <Product 
    id={124517}
    title="Apple MacBook Pro (14-inch, M3, 2023) - 16GB RAM, 512GB SSD - Space Black"
    price={"₹1,99,900"}
    image="https://m.media-amazon.com/images/I/61vFO3R5UNL._SL1500_.jpg"
    rating={5}
    author="by Apple"
/>
</div>
   

<div className="home-row">

     <Product 
        id={124516}
        title="Samsung 49-inch Odyssey G9 Dual QHD Curved Gaming Monitor"
        price={"₹1,48,450"}
        image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
        rating={5}
        author="by Samsung"
    />
</div>


</div>
</div>
  )
}

export default Home;