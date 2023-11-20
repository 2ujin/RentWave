import React, { useEffect, useState } from "react";
import Monthly from "./Monthly";
import "../styles/RentalsStyling.css";
import { useParams, useNavigate } from "react-router-dom";
import {
  AddpropertyRents,
  MonthlyInterest,
  MonthlyCapital,
  GetMonthlyRents,
  GetMonthlyInterestExpense,
  GetMonthlyCapitalRepayments,
  DeleteProperty,
} from "../api/apiService";
import { propertyData } from "../types/types";
const houseImage = require("../assets/3d-electric-car-building.jpg");

function Rentals() {
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    StartPeriod: "",
    EndPeriod: "",
    Rental: "",
    LoanInterest: 0,
    CapitalRepayment: 0,
  });
  const navigate = useNavigate();

  const params = useParams();
  const [showAllowableExpenses, SetAllowableExpenses] = useState([]);
  const [showDisallowableExpenses, SetDisallowableExpenses] = useState([]);
  const [showRentalIncome, SetRentalIncome] = useState<any>([]);
  const [showInterestExpense, SetRentalExpense] = useState<any>([]);
  const [showCapitalRepayment, SetCapitalRepayment] = useState<any>([]);

  const handleChange = (event: any) => {
    console.log(event);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
    console.log(formValues);
  };

  function reverseDate(date: any) {
    const parts = date.split("-");
    return [parts[2], parts[1], parts[0]].join("-");
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const StartPeriod = event.target.elements.StartPeriod.value;
    const EndPeriod = event.target.elements.EndPeriod.value;

    const startPeriodreverse = reverseDate(StartPeriod);
    const endPeriodreverse = reverseDate(EndPeriod);

    const MonthlyRentals: propertyData = {
      StartPeriod: startPeriodreverse,
      EndPeriod: endPeriodreverse,
      PropertyID: params.id,
      Rental: Number(event.target.elements.Rental.value),
    };

    const InterestRepayment: propertyData = {
      StartPeriod: startPeriodreverse,
      EndPeriod: endPeriodreverse,
      PropertyID: params.id,
      LoanInterest: Number(event.target.elements.LoanInterest.value),
    };

    const CapitalRepayment: propertyData = {
      StartPeriod: startPeriodreverse,
      EndPeriod: endPeriodreverse,
      PropertyID: params.id,
      CapitalRepaid: Number(event.target.elements.CapitalRepayment.value),
    };

    try {
      const rentalResponse: any = await AddpropertyRents(MonthlyRentals);
      const interestResponse: any = await MonthlyInterest(InterestRepayment);
      const capitalResponse: any = await MonthlyCapital(CapitalRepayment);

      if (rentalResponse.status === 201) {
        SetRentalIncome((prevRents: any) => [
          ...prevRents,
          rentalResponse.data,
        ]);
      } else {
        console.log(rentalResponse.error);
      }

      if (interestResponse.status === 201) {
        SetRentalExpense((prevExpenses: any) => [
          ...prevExpenses,
          interestResponse.data,
        ]);
      } else {
        console.log(interestResponse.error);
      }

      if (capitalResponse.status === 201) {
        SetCapitalRepayment((prevRepayments: any) => [
          ...prevRepayments,
          capitalResponse.data,
        ]);
      } else {
        console.log(capitalResponse.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMonthlyData();
  }, []);

  async function fetchMonthlyData() {
    try {
      const id = params.id;
      const GetMonthlyRentals = await GetMonthlyRents(String(id));
      const propertyInterestExpense = await GetMonthlyInterestExpense(
        String(id)
      );
      const getPropertyCapitalrepayment = await GetMonthlyCapitalRepayments(
        String(id)
      );

      SetRentalIncome(GetMonthlyRentals);
      SetRentalExpense(propertyInterestExpense);
      SetCapitalRepayment(getPropertyCapitalrepayment);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteProperty() {
    const id = params.id;
    await DeleteProperty(String(id));
    navigate("/");
  }

  return (
    <div className="rental-summary">
      <img className="rental-house" src={houseImage} />
      <div className="rental-wrapper">
        <div className="title-wrapper">
          <h1 className="title">Rental Summary</h1>
          <div className="wrap">
            <div
              style={{ width: "100px" }}
              className="btn"
              onClick={() => handleDeleteProperty()}
            >
              Delete
            </div>

            {!showForm && (
              <div className="btn" onClick={() => setShowForm(true)}>
                + Add Month
              </div>
            )}
          </div>
        </div>

        {showForm && (
          <form className="form-submit" onSubmit={handleSubmit}>
            <div className="inputname">
              <label className="inputlabel">Start period: </label>
              <input
                className="inputbar"
                type="date"
                name="StartPeriod"
                value={formValues.StartPeriod}
                onChange={handleChange}
              />
            </div>

            <div className="inputname">
              <label className="inputlabel">End period:</label>
              <input
                className="inputbar"
                type="date"
                name="EndPeriod"
                value={formValues.EndPeriod}
                onChange={handleChange}
              />
            </div>

            <div className="inputname">
              <label className="inputlabel">Rental income for the month:</label>
              <input
                className="inputbarvalue"
                type="number"
                name="Rental"
                value={formValues.Rental}
                onChange={handleChange}
              />
            </div>

            <div className="inputname">
              <label className="inputlabel">Loan Interest: </label>
              <input
                className="inputbarvalue"
                type="number"
                name="LoanInterest"
                value={formValues.LoanInterest}
                onChange={handleChange}
              />
            </div>

            <div className="inputname">
              <label className="inputlabel">Capital Repayment: </label>
              <input
                className="inputbarvalue"
                type="number"
                name="CapitalRepayment"
                value={formValues.CapitalRepayment}
                onChange={handleChange}
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn"
              style={{ width: "100%", marginTop: "15px" }}
            />
          </form>
        )}

        <Monthly
          showAllowableExpenses={showAllowableExpenses}
          SetAllowableExpenses={SetAllowableExpenses}
          showDisallowableExpenses={showDisallowableExpenses}
          SetDisallowableExpenses={SetDisallowableExpenses}
          showRentalIncome={showRentalIncome}
          SetRentalIncome={SetRentalIncome}
          showInterestExpense={showInterestExpense}
          SetRentalExpense={SetRentalExpense}
          showCapitalRepayment={showCapitalRepayment}
          SetCapitalRepayment={SetCapitalRepayment}
        />
      </div>
    </div>
  );
}

export default Rentals;
