export interface newPropertyInfo {
  PropertyName: string;
}

export interface propertyData {
  StartPeriod: string;
  EndPeriod: string;
  Rental: string;
  LoanInterest: number;
  CapitalRepayment: number;
  InterestPayable?: string;
  Capitalrepayment?: string;
  PropertyID?: string;
  InterestExpense?: number | any;
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
