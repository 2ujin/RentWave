import React, { useEffect, useState } from "react";
import Rentals from "./Rentals";
import { useParams } from "react-router-dom";
import "../ComponentStyling/summaryStyling.css";
import { GetPropertysummary } from "../ApiServices/propertylanding";
import Header from "./Header";

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
