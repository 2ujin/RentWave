export interface newPropertyInfo {
  PropertyName: string;
}

export interface AxiosResponse {
  data: any;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  error?: any | undefined;
}

export interface allowableExpensesData {
  Description: string;
  Amount: number;
  PropertyID: string;
  PeriodId?: string | any;
  DateIncurred: string;
}

export interface propertyData {
  StartPeriod: string;
  EndPeriod: string;
  Rental?: number;
  LoanInterest?: number;
  InterestExpense?: number | any;
  CapitalRepayment?: number;
  InterestPayable?: string;
  Capitalrepayment?: string;
  PropertyID?: string | any;
  CapitalRepaid?: number | any;
}

export interface disallowableExpensesData {
  disallowableExpenseDescription: string;
  disallowableExpenseAmount: string;
  propertyID: string;
  expenseIncurred: string;
}
