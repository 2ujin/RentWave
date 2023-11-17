import React from "react";
import { Link } from "react-router-dom";
const houseImage = require("../images/3d-electric-car-building.jpg");

function PropertyList({ propertyOwned }: any) {
  return (
    <div className="all-property">
      {propertyOwned.map((item: any) => (
        <div className="image-container">
          <Link to={`/summary/${item.ID}`}>
            <div className="house-wrapper">
              <img src={houseImage} className="house" alt="House" />
              <div className="property-wrapper">
                <div className="property-name">{item.PropertyName}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
