import moment from "moment";
import AllowableExpenses from "./AllowableExpenses";
import DisallowableExpenses from "./DisallowableExpenses";
import calendar from "../images/calendar.png";
import rental from "../images/rental.png";

function Monthly({
  showAllowableExpenses,
  SetAllowableExpenses,
  showDisallowableExpenses,
  SetDisallowableExpenses,
  showRentalIncome,
  SetRentalIncome,
  showInterestExpense,
  SetRentalExpense,
  showCapitalRepayment,
  SetCapitalRepayment,
}: any) {
  const totalRental = Array.isArray(showRentalIncome)
    ? showRentalIncome.reduce((total, item) => total + Number(item.Rental), 0)
    : 0;

  const totalAllowableExpenses = Array.isArray(showAllowableExpenses)
    ? showAllowableExpenses.reduce(
        (total, item) => total + Number(item.Amount),
        0
      )
    : 0;
  const totalDisallowableExpenses = Array.isArray(showDisallowableExpenses)
    ? showDisallowableExpenses.reduce(
        (total, item) => total + Number(item.Amount),
        0
      )
    : 0;
  const totalInterestExpense = Array.isArray(showInterestExpense)
    ? showInterestExpense.reduce(
        (total, item) => total + Number(item.InterestExpense),
        0
      )
    : 0;
  const totalCapitalRepayment = Array.isArray(showCapitalRepayment)
    ? showCapitalRepayment.reduce(
        (total, item) => total + Number(item.CapitalRepaid),
        0
      )
    : 0;
  const netIncome =
    totalRental -
    totalAllowableExpenses -
    totalDisallowableExpenses -
    totalInterestExpense -
    totalCapitalRepayment;
  showRentalIncome = [
    {
      id: 1,
      StartPeriod: "2023-11-12",
      EndPeriod: "2023-11-18",
      Rental: "2023-11-17",
    },
  ];

  showAllowableExpenses = [
    {
      id: 1,
      StartPeriod: "2023-11-12",
      EndPeriod: "2023-11-18",
      Rental: "2023-11-17",
    },
  ];

  showDisallowableExpenses = [];
  showInterestExpense = [];
  showCapitalRepayment = [];

  return (
    <div>
      <div className="summary-wrapper">
        <h3>Total rental income: {totalRental}</h3>
        <h3>Allowable expense: {totalAllowableExpenses}</h3>
        <h3>Disallowable expenses: {totalDisallowableExpenses} </h3>
        <h3>Loan interest: {totalInterestExpense}</h3>
        <h3>Capital repayment: {totalCapitalRepayment}</h3>
        <h3>Net Income: {netIncome}</h3>
      </div>

      {showRentalIncome.map((item: any) => {
        return (
          <div key={item.id}>
            <div className="rental-income">
              <img src={calendar} />
              <h1 className="date">
                Date | {moment(item.StartPeriod).format("DD-MM-YYYY")} ~{" "}
                {moment(item.EndPeriod).format("DD-MM-YYYY")}
              </h1>
            </div>
            <div className="rental-income">
              <img src={rental} />
              <h1 className="date">Rental Received | {item.Rental}</h1>
            </div>
            {/* <h1>
              Interest expense Breakdown{" "}
              {showInterestExpense.map((interest: any) => {
                if (item.StartPeriod === interest.StartPeriod) {
                  return (
                    <div key={interest.id}>
                      <ul>
                        <li>Interest repayment {interest.InterestExpense}</li>
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </h1> */}

            {/* <h1>
              Capital Repayment{" "}
              {showCapitalRepayment.map((repayment: any) => {
                if (item.StartPeriod === repayment.StartPeriod) {
                  return (
                    <div key={repayment.id}>
                      <ul>
                        <li>{repayment.CapitalRepaid}</li>
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </h1> */}

            <AllowableExpenses
              itemId={item.id}
              showAllowableExpenses={showAllowableExpenses}
              SetAllowableExpenses={SetAllowableExpenses}
            />

            <DisallowableExpenses
              itemId={item.id}
              showDisallowableExpenses={showDisallowableExpenses}
              SetDisallowableExpenses={SetDisallowableExpenses}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Monthly;
