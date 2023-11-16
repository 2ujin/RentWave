import React from "react";
import { Link } from "react-router-dom";
const houseImage = require("../images/3d-electric-car-building.jpg");

function PropertyList({ propertyOwned }: any) {
  return (
    <div className="all-property">
      {propertyOwned.map((item: any) => (
        <div key={item.ID}>
          <div className="image-container">
            <h1 className="property-name">{item.PropertyName}</h1>
            <Link to={`/summary/${item.ID}`}>
              <img src={houseImage} className="house" alt="House" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
