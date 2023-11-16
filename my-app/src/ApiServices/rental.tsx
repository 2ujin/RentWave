const URL = "http://localhost:3001";

///posts the capital repayment, interest expense, and rental to the backend

async function AddpropertyRents(rentalBreakdown: any) {
  try {
    const ID = rentalBreakdown.PropertyID;
    const data = await fetch(`${URL}/summary/${ID}/RecordRents`, {
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
    const data = await fetch(`${URL}/summary/${ID}/RecordInterestExpense`, {
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
    const data = await fetch(`${URL}/summary/${ID}/RecordCapitalRepayment`, {
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
    const response = await fetch(`${URL}/summary/${id}/GetMonthlyRents`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function GetMonthlyCapitalRepayments(id: any) {
  try {
    const response = await fetch(
      `${URL}/summary/${id}/GetMonthlyCapitalRepayments`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function GetMonthlyInterestExpense(id: any) {
  try {
    const response = await fetch(
      `${URL}/summary/${id}/GetMonthlyInterestExpense`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export {
  AddpropertyRents,
  MonthlyInterest,
  MonthlyCapital,
  GetMonthlyInterestExpense,
  GetMonthlyCapitalRepayments,
  GetMonthlyRents,
};
