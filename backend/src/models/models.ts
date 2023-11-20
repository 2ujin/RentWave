import {
  allowableExpensesData,
  disallowableExpensesData,
  propertyData,
} from "../controllers/controller";
import { PrismaClient } from "../../prisma/generated/client";

const prisma = new PrismaClient();

async function addProperty(PropertyName: string) {
  try {
    const data = await prisma.propertyListing.create({
      data: {
        PropertyName,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteProperty(id: string) {
  try {
    await prisma.propertyListing.delete({
      where: { ID: id },
    });
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}

async function getPropertyListing() {
  try {
    const data = await prisma.propertyListing.findMany();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getPropertyName(id: string) {
  try {
    const data = await prisma.propertyListing.findUnique({
      where: {
        ID: id,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addRentalIncome({
  StartPeriod,
  EndPeriod,
  Rental,
  PropertyID,
}: propertyData) {
  try {
    const rentalData = await prisma.rentalIncome.create({
      data: {
        StartPeriod,
        EndPeriod,
        Rental,
        PropertyID: PropertyID,
      },
    });
    return rentalData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addInterestExpense({
  StartPeriod,
  EndPeriod,
  InterestExpense,
  PropertyID,
}: propertyData) {
  try {
    const interestExpenseData = await prisma.interestExpense.create({
      data: {
        StartPeriod,
        EndPeriod,
        InterestExpense: InterestExpense || 0,
        PropertyID,
      },
    });
    return interestExpenseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addCapitalRepayment({
  StartPeriod,
  EndPeriod,
  CapitalRepaid,
  PropertyID,
}: propertyData) {
  try {
    console.log(StartPeriod, EndPeriod, CapitalRepaid, PropertyID);
    const capitalRepaymentData = await prisma.capitalRepayments.create({
      data: {
        StartPeriod,
        EndPeriod,
        CapitalRepaid,
        PropertyID,
      },
    });
    return capitalRepaymentData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getPropertyMonthlyRentals(id: string) {
  try {
    const data = await prisma.rentalIncome.findMany({
      where: { PropertyID: id },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getPropertyMonthlyInterestExpense(id: string) {
  try {
    const data = await prisma.interestExpense.findMany({
      where: { PropertyID: id },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getPropertyCapitalrepayments(id: string) {
  try {
    const data = await prisma.capitalRepayments.findMany({
      where: { PropertyID: id },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addAllowableExpense({
  Description,
  Amount,
  PropertyID,
  DateIncurred,
}: allowableExpensesData) {
  try {
    const expenseData = await prisma.allowableExpenses.create({
      data: {
        Description,
        Amount,
        PropertyID,
        DateIncurred,
      },
    });
    return expenseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllowableExpenses(id: string) {
  try {
    const data = await prisma.allowableExpenses.findMany({
      where: { PropertyID: id },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addDisallowableExpense({
  Description,
  Amount,
  PropertyID,
  DateIncurred,
}: disallowableExpensesData) {
  try {
    const expenseData = await prisma.disallowableExpenses.create({
      data: {
        Description,
        Amount,
        PropertyID,
        DateIncurred,
      },
    });
    return expenseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getDisallowableExpenses(id: string) {
  try {
    const data = await prisma.disallowableExpenses.findMany({
      where: { PropertyID: id },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default {
  getPropertyCapitalrepayments,
  getPropertyMonthlyInterestExpense,
  getPropertyMonthlyRentals,
  addCapitalRepayment,
  addProperty,
  deleteProperty,
  getPropertyListing,
  getPropertyName,
  addRentalIncome,
  addInterestExpense,
  addAllowableExpense,
  addDisallowableExpense,
  getAllowableExpenses,
  getDisallowableExpenses,
};
