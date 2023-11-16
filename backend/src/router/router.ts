import controllers from "../controllers/controllers";
import express from "express";
const router = express.Router();

router.post("/addProperty", controllers.addProperty);
router.get("/propertylistings", controllers.getPropertyListing);
router.get("/summary/:id", controllers.getPropertyDetails);

///routes for submitting rental income,interest expense,loan repayment

router.post("/summary/:id/RecordRents", controllers.recordRentalIncome);
router.post(
  "/summary/:id/RecordInterestExpense",
  controllers.recordInterestExpense
);
router.post(
  "/summary/:id/RecordCapitalRepayment",
  controllers.recordCapitalRepayment
);

//routes for getting rental income, interest expense and capital repayments

router.get("/summary/:id/GetMonthlyRents", controllers.getPropertyMonthlyRents);
router.get(
  "/summary/:id/GetMonthlyInterestExpense",
  controllers.getMonthlyInterest
);
router.get(
  "/summary/:id/GetMonthlyCapitalRepayments",
  controllers.getMonthlyCapitalRepayments
);

//routes for posting allowable and disallowable expenses

router.post(
  "/summary/:id/AddAllowableExpense",
  controllers.recordAllowableExpense
);
router.post(
  "/summary/:id/AddDisallowableExpense",
  controllers.recordDisallowableExpense
);

router.get(
  "/summary/:id/GetMonthlyAllowableExpenses",
  controllers.getPropertyAllowableExpenses
);
router.get(
  "/summary/:id/GetMonthlyDisallowableExpenses",
  controllers.getPropertyDisallowableExpenses
);

export default router;
