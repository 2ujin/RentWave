import {
  allowableExpensesData,
  newPropertyInfo,
  propertyData,
} from "../types/types";

const url = "http://localhost:3000";

function GetPropertysummary(id: any) {
  return fetch(`${url}/summary/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

async function AddpropertyAllowableExpense(expense: allowableExpensesData) {
  try {
    const ID = expense.PropertyID;
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

async function GetMonthlyAllowableExpenses(id: string) {
  try {
    const response = await fetch(
      `${url}/summary/${id}/GetMonthlyAllowableExpenses`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function AddpropertyDisAllowableExpense(expense: allowableExpensesData) {
  try {
    const ID = expense.PropertyID;
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

async function GetMonthlyDisallowableExpenses(id: string) {
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

async function AddNewProperty(property: newPropertyInfo) {
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

async function AddpropertyRents(rentalBreakdown: propertyData) {
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

async function MonthlyInterest(interest: propertyData) {
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

async function MonthlyCapital(CapitalRepayment: propertyData) {
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

async function GetMonthlyRents(id: string) {
  try {
    const response = await fetch(`${url}/summary/${id}/GetMonthlyRents`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function GetMonthlyCapitalRepayments(id: string) {
  try {
    const response = await fetch(
      `${url}/summary/${id}/GetMonthlyCapitalRepayments`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function GetMonthlyInterestExpense(id: string) {
  try {
    const response = await fetch(
      `${url}/summary/${id}/GetMonthlyInterestExpense`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function DeleteProperty(id: string) {
  try {
    const data = await fetch(`${url}/deleteProperty/${id}`, {
      method: "DELETE",
    });
    const response = await data;
    if (data.ok) {
      return { status: 200, data: response };
    } else {
      return { status: 400, error: response };
    }
  } catch (error) {
    console.log(error);
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
  DeleteProperty,
};
