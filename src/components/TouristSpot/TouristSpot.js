import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import './TouristSpot.css'

const TouristSpot = (props) => {
    const {img, place, country, flights, corona, cost} = props.touristSpot;
    const hotel = <FontAwesomeIcon icon={faBed} />
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div className="touristSpot text-center">
            <img className="img-fluid mb-3 " src={img} alt="" />
            <h2>{place}</h2>
            <p className="fs-4">Country : {country}</p>
            <p className="fs-4">Daily Flights : { flights}</p> 
            <p className="fs-4">Require Corona Negative Certificate : {corona}</p> 
            <p className="fs-4">Travelling Cost : ${cost}</p>
            <button className = "btn btn-primary"
            onClick={() => props.handleAddToCart(props.touristSpot)}
            >Add to Cart</button> <br /><br />
            <h4>{hotel} Hotels {location} Location </h4>
        </div>
    );
};

export default TouristSpot;