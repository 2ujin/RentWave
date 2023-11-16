import {
  allowableExpensesData,
  disallowableExpensesData,
  propertyData,
} from "../controllers/controller";
import { PrismaClient } from "../../prisma/generated/client";

const prisma = new PrismaClient();

async function addProperty(property: { name: string }) {
  try {
    const data = await prisma.propertyListing.create({
      data: {
        PropertyName: property.name,
      },
    });
    return data;
  } catch (error) {
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

async function addRentalIncome(propertydata: propertyData) {
  try {
    const rentalData = await prisma.rentalIncome.create({
      data: {
        StartPeriod: propertydata.startDate,
        EndPeriod: propertydata.endDate,
        Rental: propertydata.Rental,
        PropertyID: propertydata.PropertyID,
      },
    });
    return rentalData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addInterestExpense(propertydata: propertyData) {
  try {
    const interestExpenseData = await prisma.interestExpense.create({
      data: {
        StartPeriod: propertydata.startDate,
        EndPeriod: propertydata.endDate,
        InterestExpense: propertydata.InterestPayable,
        PropertyID: propertydata.PropertyID,
      },
    });
    return interestExpenseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addCapitalRepayment(propertydata: propertyData) {
  try {
    const capitalRepaymentData = await prisma.capitalRepayments.create({
      data: {
        StartPeriod: propertydata.startDate,
        EndPeriod: propertydata.endDate,
        CapitalRepaid: propertydata.CapitalRepayment,
        PropertyID: propertydata.PropertyID,
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

async function addAllowableExpense(data: allowableExpensesData) {
  try {
    const expenseData = await prisma.allowableExpenses.create({
      data: {
        Description: data.allowableExpenseDescription,
        Amount: data.allowableExpenseAmount,
        PropertyID: data.propertyID,
        DateIncurred: data.expenseIncurred,
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

async function addDisallowableExpense(data: disallowableExpensesData) {
  try {
    const expenseData = await prisma.disallowableExpenses.create({
      data: {
        Description: data.disallowableExpenseDescription,
        Amount: data.disallowableExpenseAmount,
        PropertyID: data.propertyID,
        DateIncurred: data.expenseIncurred,
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
  getPropertyListing,
  getPropertyName,
  addRentalIncome,
  addInterestExpense,
  addAllowableExpense,
  addDisallowableExpense,
  getAllowableExpenses,
  getDisallowableExpenses,
};
