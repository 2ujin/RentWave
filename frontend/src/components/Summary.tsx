import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPropertysummary } from "../api/apiService";
import "../styles/summaryStyling.css";
import Header from "./Header";
import Rentals from "./Rentals";

function Summary() {
  const [propertysummary, setpropertysummary] = useState([]);
  const params = useParams();
  let id: string = "";

  async function fetchPropertySummary(id: string) {
    const property = await GetPropertysummary(id);
    setpropertysummary(property);
  }

  useEffect(() => {
    id = String(params.id);
    fetchPropertySummary(id);
  }, [params.id]);

  return (
    <>
      <Header />
      <Rentals key={id} />
    </>
  );
}

export default Summary;
