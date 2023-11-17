import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPropertysummary } from "../api/apiService";
import "../styles/summaryStyling.css";
import Header from "./Header";
import Rentals from "./Rentals";

function Summary() {
  const [propertysummary, setpropertysummary] = useState([]);
  const params = useParams();
  let id: any = "";

  async function fetchPropertySummary(id: any) {
    const property = await GetPropertysummary(id);
    setpropertysummary(property);
  }

  useEffect(() => {
    id = params.id;
    fetchPropertySummary(id);
  }, [params.id]);

  return (
    <>
      <Header />
      <Rentals propertyId={id} />
    </>
  );
}

export default Summary;
