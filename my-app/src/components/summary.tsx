import React, { useEffect, useState } from "react";
import Rentals from "./Rentals";
import { useParams } from "react-router-dom";
import "../ComponentStyling/summaryStyling.css";
import { GetPropertysummary } from "../ApiServices/propertylanding";

function Summary() {
  const [propertysummary, setpropertysummary] = useState([]);

  const params = useParams();

  async function fetchPropertySummary(id: any) {
    const property = await GetPropertysummary(id);
    setpropertysummary(property);
  }

  useEffect(() => {
    const id = params.id;
    fetchPropertySummary(id);
  }, [params.id]);

  return (
    <div>
      <div className="summary">{<h1>Summary for {1}</h1>}</div>

      <div>
        <Rentals propertyId={2} />
      </div>
    </div>
  );
}

export default Summary;
