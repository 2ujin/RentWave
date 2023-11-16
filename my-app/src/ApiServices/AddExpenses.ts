const URL = "http://localhost:3001";

async function AddpropertyAllowableExpense(expense: any) {
  try {
    const ID = expense.propertyID;
    const data = await fetch(`${URL}/summary/${ID}/AddAllowableExpense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(expense),
    });
    const response = await data.json();
    console.log(response);

    if (data.ok) {
      return { status: 201, data: response };
    } else {
      return { status: 400, error: response };
    }
  } catch (error) {
    console.log(error);
  }
}

async function GetMonthlyAllowableExpenses(id: any) {
  try {
    const response = await fetch(
      `${URL}/summary/${id}/GetMonthlyAllowableExpenses`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function AddpropertyDisAllowableExpense(expense: any) {
  try {
    const ID = expense.propertyID;
    const data = await fetch(`${URL}/summary/${ID}/AddDisallowableExpense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(expense),
    });
    const response = await data.json();
    if (data.ok) {
      return { status: 201, data: response };
    } else {
      return { status: 400, error: response };
    }
  } catch (error) {
    console.log(error);
  }
}

async function GetMonthlyDisallowableExpenses(id: any) {
  try {
    const response = await fetch(
      `${URL}/summary/${id}/GetMonthlyDisallowableExpenses`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export {
  AddpropertyAllowableExpense,
  AddpropertyDisAllowableExpense,
  GetMonthlyAllowableExpenses,
  GetMonthlyDisallowableExpenses,
};
