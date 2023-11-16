import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Summary from "./components/summary";
import "./App.css";
import PropertyList from "./components/Propertylist";
import { GetProperties, AddNewProperty } from "./ApiServices/homepage";

function App(): JSX.Element {
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
    <Router>
      <div className="page">
        <h1 className="title">Property Portfolio</h1>
        <Link to="/">
          <button onClick={() => setShowForm(false)}>home</button>
        </Link>

        <button onClick={() => setShowForm(true)}>Add New property</button>
        {showForm ? (
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
              type="text"
              defaultValue={newProperty}
              name="propertyName"
              required
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<PropertyList propertyOwned={propertyOwned} />}
            />
            <Route path="/summary/:id" element={<Summary />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
