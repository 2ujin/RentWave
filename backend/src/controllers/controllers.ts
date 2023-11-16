import models from "../models/models";

import { Request, Response } from "express";

async function addProperty(request: Request, response: Response) {
  try {
    const data = await models.addProperty(request.body);
    response.status(201).send(data);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

async function getPropertyListing(request: Request, response: Response) {
  try {
    const listing = await models.getPropertyListing();
    response.send(listing);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

async function getPropertyDetails(request: Request, response: Response) {
  try {
    const params = request.params;
    const data = await models.getPropertyName(params.id);
    response.send(data);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

///controllers for posting rental income,interest expense,loan repayment

async function recordRentalIncome(request: Request, response: Response) {
  try {
    const data = await models.addRentalIncome(request.body);
    response.send(data);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

async function recordInterestExpense(request: Request, response: Response) {
  try {
    const data = await models.addInterestExpense(request.body);
    response.send(data);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

async function recordCapitalRepayment(request: Request, response: Response) {
  try {
    const data = await models.addCapitalRepayment(request.body);
    response.send(data);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

////controllers for getting rental income, interest expense and loan repayment

async function getPropertyMonthlyRents(request: Request, response: Response) {
  try {
    const PropertyID = request.params;
    const MonthlyRents = await models.getPropertyMonthlyRentals(PropertyID.id);
    response.send(MonthlyRents);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

async function getMonthlyInterest(request: Request, response: Response) {
  try {
    const PropertyID = request.params;
    const MonthlyInterestExpense =
      await models.getPropertyMonthlyInterestExpense(PropertyID.id);
    response.send(MonthlyInterestExpense);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

async function getMonthlyCapitalRepayments(
  request: Request,
  response: Response
) {
  try {
    const PropertyID = request.params;
    const MonthlyInterestExpense = await models.getPropertyCapitalrepayments(
      PropertyID.id
    );
    response.send(MonthlyInterestExpense);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

///controllers for posting allowable and disallowable expense

async function recordAllowableExpense(request: Request, response: Response) {
  try {
    const dataExpenses = await models.addAllowableExpense(request.body);
    response.send(dataExpenses);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

async function recordDisallowableExpense(request: Request, response: Response) {
  try {
    const data = await models.addDisallowableExpense(request.body);
    response.send(data);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

///controllers for getting allowable and disallowable expense

async function getPropertyAllowableExpenses(
  request: Request,
  response: Response
) {
  try {
    const PropertyID = request.params;
    const MonthlyAllowableExpenses = await models.getAllowableExpenses(
      PropertyID.id
    );
    response.send(MonthlyAllowableExpenses);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

async function getPropertyDisallowableExpenses(
  request: Request,
  response: Response
) {
  try {
    const PropertyID = request.params;
    const MonthlyDisallowableExpenses = await models.getDisallowableExpenses(
      PropertyID.id
    );
    response.send(MonthlyDisallowableExpenses);
  } catch (error) {
    response.status(500).send(`${error}`);
  }
}

export default {
  recordDisallowableExpense,
  recordAllowableExpense,
  getPropertyMonthlyRents,
  getMonthlyCapitalRepayments,
  recordInterestExpense,
  recordCapitalRepayment,
  addProperty,
  getPropertyListing,
  getPropertyDetails,
  recordRentalIncome,
  getMonthlyInterest,
  getPropertyDisallowableExpenses,
  getPropertyAllowableExpenses,
};
