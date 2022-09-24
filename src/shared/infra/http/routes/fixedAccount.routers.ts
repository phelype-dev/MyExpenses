import { FixedAccountController } from '@modules/accounts/useCase/fixedAccount/fixedAccountController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const fixedAccountRoutes = Router();

const fixedAccountController = new FixedAccountController();

fixedAccountRoutes.post(
  '/fixed',
  ensureAuthenticated,
  fixedAccountController.handle,
);

export { fixedAccountRoutes };
