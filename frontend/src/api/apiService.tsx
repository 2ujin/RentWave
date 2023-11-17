const url = "http://localhost:3000";

function GetPropertysummary(id: any) {
  return fetch(`${url}/summary/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

async function AddpropertyAllowableExpense(expense: any) {
  try {
    const ID = expense.propertyID;
    const data = await fetch(`${url}/summary/${ID}/AddAllowableExpense`, {
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

async function GetMonthlyAllowableExpenses(id: any) {
  try {
    const response = await fetch(
      `${url}/summary/${id}/GetMonthlyAllowableExpenses`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function AddpropertyDisAllowableExpense(expense: any) {
  try {
    const ID = expense.propertyID;
    const data = await fetch(`${url}/summary/${ID}/AddDisallowableExpense`, {
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
      `${url}/summary/${id}/GetMonthlyDisallowableExpenses`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
function GetProperties() {
  return fetch(`${url}/propertylistings`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

async function AddNewProperty(property: any) {
  try {
    const data = await fetch(`${url}/addProperty`, {
      method: "Post",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(property),
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

async function AddpropertyRents(rentalBreakdown: any) {
  try {
    const ID = rentalBreakdown.PropertyID;
    const data = await fetch(`${url}/summary/${ID}/RecordRents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(rentalBreakdown),
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

async function MonthlyInterest(interest: any) {
  try {
    const ID = interest.PropertyID;
    const data = await fetch(`${url}/summary/${ID}/RecordInterestExpense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(interest),
    });
    const response = await data.json();
    if (data.ok) {
      console.log("Interest fine");
      return { status: 201, data: response };
    } else {
      return { status: 400, error: response };
    }
  } catch (error) {
    console.log(error);
  }
}

async function MonthlyCapital(CapitalRepayment: any) {
  try {
    const ID = CapitalRepayment.PropertyID;
    const data = await fetch(`${url}/summary/${ID}/RecordCapitalRepayment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(CapitalRepayment),
    });
    const response = await data.json();
    if (data.ok) {
      console.log("capital fine");
      return { status: 201, data: response };
    } else {
      return { status: 400, error: response };
    }
  } catch (error) {
    console.log(error);
  }
}

///gets the capital repayment, interest expense, and rental to the backend

async function GetMonthlyRents(id: any) {
  try {
    const response = await fetch(`${url}/summary/${id}/GetMonthlyRents`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function GetMonthlyCapitalRepayments(id: any) {
  try {
    const response = await fetch(
      `${url}/summary/${id}/GetMonthlyCapitalRepayments`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function GetMonthlyInterestExpense(id: any) {
  try {
    const response = await fetch(
      `${url}/summary/${id}/GetMonthlyInterestExpense`
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
  GetPropertysummary,
  AddpropertyRents,
  MonthlyInterest,
  MonthlyCapital,
  GetMonthlyInterestExpense,
  GetMonthlyCapitalRepayments,
  GetMonthlyRents,
  GetProperties,
  AddNewProperty,
};
