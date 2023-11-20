import request from "supertest";
import express from "express";
import controllers from "./controllers/controllers";
import routes from "./router/router";

const app = express();
app.use(express.json());
app.use(routes);

import {
  propertyData,
  allowableExpensesData,
  disallowableExpensesData,
} from "./controllers/controller";

describe("Test API routes", () => {
  let propertyId: string;
  let propertyName = "jest-test";

  beforeAll(async () => {
    const propertyData = {
      PropertyName: propertyName,
    };
    const response = await request(app).post("/addProperty").send(propertyData);
    propertyId = response.body.ID;
  });

  it("should record rental income", async () => {
    const rentalIncomeData: propertyData = {
      PropertyID: propertyId,
      Rental: 1000,
      CapitalRepayment: 0,
      StartPeriod: "2022-01-01",
      EndPeriod: "2022-12-31",
    };
    const response = await request(app)
      .post(`/summary/${propertyId}/RecordRents`)
      .send(rentalIncomeData);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should record interest expense", async () => {
    const interestExpenseData: propertyData = {
      PropertyID: propertyId,
      Rental: 0,
      CapitalRepayment: 0,
      InterestExpense: 500,
      StartPeriod: "2022-01-01",
      EndPeriod: "2022-12-31",
    };
    const response = await request(app)
      .post(`/summary/${propertyId}/RecordInterestExpense`)
      .send(interestExpenseData);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should record capital repayment", async () => {
    const capitalRepaymentData: propertyData = {
      PropertyID: propertyId,
      Rental: 0,
      CapitalRepayment: 2000,
      StartPeriod: "2022-01-01",
      EndPeriod: "2022-12-31",
      CapitalRepaid: 100,
    };
    const response = await request(app)
      .post(`/summary/${propertyId}/RecordCapitalRepayment`)
      .send(capitalRepaymentData);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should get monthly rents", async () => {
    const response = await request(app).get(
      `/summary/${propertyId}/GetMonthlyRents`
    );
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should get monthly interest expense", async () => {
    const response = await request(app).get(
      `/summary/${propertyId}/GetMonthlyInterestExpense`
    );
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should get monthly capital repayments", async () => {
    const response = await request(app).get(
      `/summary/${propertyId}/GetMonthlyCapitalRepayments`
    );
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should record allowable expense", async () => {
    const allowableExpenseData: allowableExpensesData = {
      Description: "Test Expense",
      Amount: 100,
      PropertyID: propertyId,
      DateIncurred: "2022-01-01",
    };
    const response = await request(app)
      .post(`/summary/${propertyId}/AddAllowableExpense`)
      .send(allowableExpenseData);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should record disallowable expense", async () => {
    const disallowableExpenseData: disallowableExpensesData = {
      Description: "Test Expense",
      Amount: 50,
      PropertyID: propertyId,
      DateIncurred: "2022-01-01",
    };
    const response = await request(app)
      .post(`/summary/${propertyId}/AddDisallowableExpense`)
      .send(disallowableExpenseData);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should get monthly allowable expenses", async () => {
    const response = await request(app).get(
      `/summary/${propertyId}/GetMonthlyAllowableExpenses`
    );
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should get monthly disallowable expenses", async () => {
    const response = await request(app).get(
      `/summary/${propertyId}/GetMonthlyDisallowableExpenses`
    );
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
