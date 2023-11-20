export interface propertyData {
  StartPeriod: string;
  EndPeriod: string;
  Rental: number;
  LoanInterest?: number;
  InterestExpense?: number | any;
  CapitalRepayment: number;
  InterestPayable?: string;
  Capitalrepayment?: string;
  PropertyID?: string | any;
  CapitalRepaid?: number | any;
}

export interface allowableExpensesData {
  Description: string;
  Amount: int;
  PropertyID: string;
  PeriodId?: string | any;
  DateIncurred: string;
}

export interface disallowableExpensesData {
  Description: string;
  Amount: int;
  PropertyID: string;
  DateIncurred: string;
}
