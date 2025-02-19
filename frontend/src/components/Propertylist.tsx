import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../App.css";
import {
  GetProperties,
  AddNewProperty,
  DeleteProperty,
} from "../api/apiService";
import { AxiosResponse, newPropertyInfo } from "../types/types";
const houseImage = require("../assets/3d-electric-car-building.jpg");

function PropertyList() {
  const [propertyOwned, setPropertyOwned] = useState<newPropertyInfo[]>([]);
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

  async function handleAddProperty(propertyinfo: newPropertyInfo) {
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

  async function handleDeleteProperty() {
    propertyOwned.map(
      async (item: any) => await DeleteProperty(String(item.ID))
    );
    setPropertyOwned([]);
  }

  return (
    <>
      <Header />
      <div className="page">
        <div className="title-wrapper">
          <h1 className="title">
            {!showForm ? "Property Portfolio" : "Add New Property"}
          </h1>
          <div className="wrap">
            <div
              style={{ width: "120px" }}
              className="btn"
              onClick={() => handleDeleteProperty()}
            >
              Delete all
            </div>

            {!showForm && (
              <div className="btn" onClick={() => setShowForm(true)}>
                + Add new property
              </div>
            )}
          </div>
        </div>
        {showForm && (
          <form
            onSubmit={(newProperty: any) => {
              newProperty.preventDefault();
              const newPropertyInfo = {
                PropertyName: newProperty.target.elements.propertyName.value,
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
            <div key={item.ID} className="image-container">
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
