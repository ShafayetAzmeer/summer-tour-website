import React from 'react';
import './Cart.css'

const cart = (props) => {
    const {cart} = props;
    let selectedPlaces = '';
    let total = 0;
    for (const touristSpot of cart){
        selectedPlaces = selectedPlaces + touristSpot.place;
        total = total + touristSpot.cost;
    }
    return (
        <div className = "cart text-center">
            <h3>No. of Selected Places : {props.cart.length}</h3>
            <h3>Total Cost : $ {total}</h3><br />
                <h3 className="fs-3"> Selected Places</h3> <br />
                <p className="fs-5">{selectedPlaces}</p>
        </div>
    );
};

export default cart;  