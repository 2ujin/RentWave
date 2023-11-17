import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GetMonthlyAllowableExpenses,
  AddpropertyAllowableExpense,
} from "../api/apiService";
import "../styles/RentalsStyling.css";

function AllowableExpenses({
  itemId,
  showAllowableExpenses,
  SetAllowableExpenses,
}: any) {
  const params = useParams();
  const [showForm, setShowForm] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [dateIncurred, setDateIncurred] = useState("");

  useEffect(() => {
    fetchAllowableExpenses();
  }, []);

  async function fetchAllowableExpenses() {
    try {
      const id = params.id;
      const DBallowableExpenses = await GetMonthlyAllowableExpenses(id);
      SetAllowableExpenses(DBallowableExpenses);
    } catch (error) {
      console.error(error);
    }
  }

  function reverseDate(date: any) {
    const parts = date.split("-");
    return [parts[2], parts[1], parts[0]].join("-");
  }

  // async function SendExpense(expensedata){
  //     try {
  //         const recordexpense = await

  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const AllowableExpenseDate = reverseDate(
      e.target.elements.dateIncurred.value
    );
    const id = params.id;

    const allowableExpense = {
      allowableExpenseDescription: e.target.elements.description.value,
      allowableExpenseAmount: e.target.elements.amount.value,
      expenseIncurred: AllowableExpenseDate,
      periodId: itemId,
      propertyID: id,
    };

    try {
      const responseExpenses: any = await AddpropertyAllowableExpense(
        allowableExpense
      );

      if (responseExpenses.status === 201) {
        SetAllowableExpenses((prev: any) => [...prev, responseExpenses.data]);
      } else {
        console.log(responseExpenses.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      {/* <h1>allowableExpenses</h1> */}
      {showAllowableExpenses.map((expense: any) => {
        if (expense.PeriodId === itemId) {
          return (
            <div key={expense.id}>
              <ul>
                <li>
                  {expense.Description} cost {expense.Amount}
                </li>
              </ul>
            </div>
          );
        }
      })}

      <button
        style={{ width: "100%" }}
        className="btn"
        onClick={() => setShowForm(!showForm)}
      >
        Add Allowable Expense
      </button>
      {showForm && (
        <form className="form-submit" onSubmit={handleSubmit}>
          <div className="inputname">
            <label className="inputlabel">Description:</label>
            <input
              className="inputbarvalue"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="inputname">
            <label className="inputlabel">Amount:</label>
            <input
              className="inputbarvalue"
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="inputname">
            <label className="inputlabel">Date Incurred:</label>
            <input
              className="inputbar"
              type="date"
              name="dateIncurred"
              value={dateIncurred}
              onChange={(e) => setDateIncurred(e.target.value)}
            />
          </div>
          <input
            className="btn"
            type="submit"
            value="Submit"
            style={{ width: "100%", marginTop: "20px" }}
          />
        </form>
      )}
    </div>
  );
}

export default AllowableExpenses;
