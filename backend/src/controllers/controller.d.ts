export interface propertyData {
  startDate: string;
  endDate: string;
  InterestPayable: string;
  Capitalrepayment: string;
  PropertyID: string;
  CapitalRepayment: string;
  Rental: string;
}

export interface allowableExpensesData {
  allowableExpenseDescription: string;
  allowableExpenseAmount: string;
  propertyID: string;
  expenseIncurred: string;
}

export interface disallowableExpensesData {
  disallowableExpenseDescription: string;
  disallowableExpenseAmount: string;
  propertyID: string;
  expenseIncurred: string;
}
