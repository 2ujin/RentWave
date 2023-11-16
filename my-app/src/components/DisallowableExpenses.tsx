import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AddpropertyDisAllowableExpense,
  GetMonthlyDisallowableExpenses,
} from "../ApiServices/AddExpenses";

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

  // async function SendExpense(expensedata){
  //     try {
  //         const recordexpense = await

  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const DisAllowableExpenseDate = reverseDate(
      e.target.elements.dateIncurred.value
    );
    const id = params.id;

    const DisAllowableExpense = {
      disallowableExpenseDescription: e.target.elements.description.value,
      disallowableExpenseAmount: e.target.elements.amount.value,
      expenseIncurred: DisAllowableExpenseDate,
      PeriodId: itemId,
      propertyID: id,
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
    <div>
      <h1>DisAllowableExpenses</h1>

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

      <button onClick={() => setShowForm(!showForm)}>
        Add Disallowable Expense
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <label>
            Date Incurred:
            <input
              type="date"
              name="dateIncurred"
              value={dateIncurred}
              onChange={(e) => setDateIncurred(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
}

export default DisallowableExpenses;
