import { FixedAccountController } from '@modules/accounts/FixedAccounts/useCase/fixedAccount/fixedAccountController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const fixedAccountRoutes = Router();

const fixedAccountController = new FixedAccountController();

fixedAccountRoutes.post(
  '/fixed',
  celebrate({
    [Segments.BODY]: {
      userDataId: Joi.string(),
      nameAccount: Joi.string().required(),
      descriptionAcoount: Joi.string(),
      accountValues: Joi.number(),
      initialDate: Joi.date().required(),
      finalDate: Joi.date().required(),
      isActive: Joi.boolean().required(),
    },
  }),
  ensureAuthenticated,
  fixedAccountController.handle,
);

export { fixedAccountRoutes };
