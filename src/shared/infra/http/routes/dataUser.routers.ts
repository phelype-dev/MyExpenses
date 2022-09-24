import { CreateDataUsersController } from '@modules/Users/useCases/createDataUsers/createDataUsersController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const dataUsers = Router();

const dataUserController = new CreateDataUsersController();

dataUsers.post(
  '/profile',
  celebrate({
    [Segments.BODY]: {
      loginId: Joi.string(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      birthDate: Joi.date(),
      cellNumber: Joi.number(),
    },
  }),
  ensureAuthenticated,
  dataUserController.handle,
);

export { dataUsers };
