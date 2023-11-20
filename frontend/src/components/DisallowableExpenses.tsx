import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GetMonthlyDisallowableExpenses,
  AddpropertyDisAllowableExpense,
} from "../api/apiService";

function DisallowableExpenses({
  itemId,
  showDisallowableExpenses,
  SetDisallowableExpenses,
}: any) {
  const params = useParams();
  const [showForm, setShowForm] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [dateIncurred, setDateIncurred] = useState("");

  useEffect(() => {
    fetchDisllowableExpenses();
  }, []);

  async function fetchDisllowableExpenses() {
    try {
      const id = params.id;
      const DBDisallowableExpenses = await GetMonthlyDisallowableExpenses(id);
      SetDisallowableExpenses(DBDisallowableExpenses);
    } catch (error) {
      console.error(error);
    }
  }

  function reverseDate(date: any) {
    const parts = date.split("-");
    return [parts[2], parts[1], parts[0]].join("-");
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const DisAllowableExpenseDate = reverseDate(
      e.target.elements.dateIncurred.value
    );
    const id = params.id;

    const DisAllowableExpense = {
      Description: e.target.elements.description.value,
      Amount: Number(e.target.elements.amount.value),
      DateIncurred: DisAllowableExpenseDate,
      PeriodId: itemId,
      PropertyID: id,
    };

    try {
      const responseExpenses: any = await AddpropertyDisAllowableExpense(
        DisAllowableExpense
      );

      if (responseExpenses.status === 201) {
        SetDisallowableExpenses((prev: any) => [
          ...prev,
          responseExpenses.data,
        ]);
      } else {
        console.log(responseExpenses.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {/* <h1>DisAllowableExpenses</h1> */}

      {showDisallowableExpenses.map((expense: any) => {
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
        Add Disallowable Expense
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
              className="inputbarvalue"
              type="date"
              name="dateIncurred"
              value={dateIncurred}
              onChange={(e) => setDateIncurred(e.target.value)}
            />
          </div>
          <input className="btn" type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
}

export default DisallowableExpenses;
