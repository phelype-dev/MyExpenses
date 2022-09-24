import { AuthenticateLoginController } from '@modules/Users/useCases/authenticateLogin/authenticateLoginController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

const authenticationRoutes = Router();

const authenticateLoginUseCase = new AuthenticateLoginController();

authenticationRoutes.post(
  '/authentication',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  authenticateLoginUseCase.handle,
);

export { authenticationRoutes };
