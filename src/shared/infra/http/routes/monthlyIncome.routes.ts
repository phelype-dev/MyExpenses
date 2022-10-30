import { MonthlyIncomeController } from '@modules/accounts/MonthlyIncome/useCase/monthlyIncomeController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const monthlyIncomeRoutes = Router();

const monthlyIncomeController = new MonthlyIncomeController();

monthlyIncomeRoutes.post(
  '/monthlyincome',
  celebrate({
    [Segments.BODY]: {
      loginId: Joi.string(),
      valueIncome: Joi.number(),
    },
  }),
  ensureAuthenticated,
  monthlyIncomeController.handle,
);

export { monthlyIncomeRoutes };
