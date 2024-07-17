import "./Places.css";
import React, { useEffect, useState } from "react";
import Place from "../Place/Place";

const Places = ({ btnOnClickHandler }) => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch("place.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPlaces(data);
            });
    }, []);
    return (
        <div className="places-container">
            {places.map(place => (
                <Place
                    key={place.id}
                    place={place}
                    btnOnClickHandler={btnOnClickHandler}
                ></Place>
                
            ))}
        </div>
    );
};

export default Places;
