import { MonthlyExpensesController } from '@modules/accounts/MonthlyExpenses/UseCase/CreateMonthlyExpenses/MonthlyExpensesController';
import { ListMonthlyExpensesController } from '@modules/accounts/MonthlyExpenses/UseCase/ListMonthlyExpenses/ListMonthlyExpensesController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const monthlyExpensesRoutes = Router();

const monthlyIncomeController = new MonthlyExpensesController();
const listMonthlyExpensesController = new ListMonthlyExpensesController();

monthlyExpensesRoutes.post(
  '/monthlyexpenses',
  celebrate({
    [Segments.BODY]: {
      fixedAccountsId: Joi.string().required(),
      loginId: Joi.string(),
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

monthlyExpensesRoutes.get(
  '/list',
  ensureAuthenticated,
  listMonthlyExpensesController.handle,
);

export { monthlyExpensesRoutes };
