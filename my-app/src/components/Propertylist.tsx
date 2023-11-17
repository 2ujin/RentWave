import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetProperties, AddNewProperty } from "../ApiServices/homepage";
import Header from "./Header";
import "../App.css";
const houseImage = require("../images/3d-electric-car-building.jpg");

function PropertyList() {
  const [propertyOwned, setPropertyOwned] = useState<any>([]);
  const [showForm, setShowForm] = useState(false);
  const [newProperty, setNewProperty] = useState("");

  useEffect(() => {
    const fetchproperties = async () => {
      try {
        const data = await GetProperties();
        setPropertyOwned(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchproperties();
  }, []);
  async function handleAddProperty(propertyinfo: any) {
    try {
      const response: any = await AddNewProperty(propertyinfo);
      if (response.status === 201) {
        const newPropertyinfo = response.data;
        setNewProperty("");
        setShowForm(false);
        setPropertyOwned((property: any) => [...property, newPropertyinfo]);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <div className="page">
        <div className="title-wrapper">
          <h1 className="title">
            {!showForm ? "Property Portfolio" : "Add New Property"}
          </h1>
          {!showForm && (
            <div className="btn" onClick={() => setShowForm(true)}>
              + Add new property
            </div>
          )}
        </div>
        {showForm && (
          <form
            onSubmit={(newProperty: any) => {
              newProperty.preventDefault();
              const newPropertyInfo = {
                name: newProperty.target.elements.propertyName.value,
              };
              handleAddProperty(newPropertyInfo);
            }}
          >
            <input
              className="input"
              type="text"
              defaultValue={newProperty}
              name="propertyName"
              required
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        )}

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
      </div>
    </>
  );
}

export default PropertyList;
