import { CreateLoginController } from '../../../../modules/accounts/useCases/createLogin/createLoginController';
import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

const loginsRoutes = Router();

const createLoginController = new CreateLoginController();

loginsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      userActive: Joi.bool().default(true),
    },
  }),
  createLoginController.handle,
);

export { loginsRoutes };
