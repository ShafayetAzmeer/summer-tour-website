import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import TouristSpot from '../TouristSpot/TouristSpot';
import './TouristSpots.css'

const TouristSpots = () => {

      const [touristSpots, setTouristSpot] = useState([]);

      const [cart, setCart] = useState([]);

      useEffect(()=> {
        fetch('./spots.json')
            .then(res => res.json())
            .then(data => setTouristSpot(data));
      }, [])

    const handleAddToCart = (touristSpot) => {
        const newCart =[...cart, touristSpot];
        setCart(newCart);
    }

    
    
    return (
        <div className="container">
            <div className="touristSpots-container">
            {
                touristSpots.map(touristSpot => <TouristSpot 
                key ={touristSpot.place}

                touristSpot={touristSpot} 
                
                handleAddToCart={handleAddToCart}
                ></TouristSpot>)
            }
            </div>

            <div>
                <Cart cart={cart}></Cart>
            </div>
                        
        </div>
    );
};

export default TouristSpots;