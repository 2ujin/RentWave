import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PropertyList from "../components/Propertylist";
import Summary from "../components/Summary";

const RoutesComponent = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyList />} />
        <Route path="/summary/:id" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
