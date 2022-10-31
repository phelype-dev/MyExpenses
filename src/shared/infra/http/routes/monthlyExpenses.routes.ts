import { MonthlyExpensesController } from '@modules/accounts/MonthlyExpenses/UseCase/MonthlyExpensesController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const monthlyExpensesRoutes = Router();

const monthlyIncomeController = new MonthlyExpensesController();

monthlyExpensesRoutes.post(
  '/monthlyexpenses',
  celebrate({
    [Segments.BODY]: {
      fixedAccountsId: Joi.string().required(),
      loginId: Joi.string().required(),
      monthReference: Joi.number().required(),
      nameAccount: Joi.string().required(),
      descriptionAcoount: Joi.string(),
      dateExpense: Joi.date().required(),
      expenseAmount: Joi.number().required(),
      amountInInstallment: Joi.boolean().required(),
    },
  }),
  ensureAuthenticated,
  monthlyIncomeController.handle,
);

export { monthlyExpensesRoutes };
