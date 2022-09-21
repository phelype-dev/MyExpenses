import { CreateDataUsersController } from '@modules/accounts/useCases/createDataUsers/createDataUsersController';
//import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const dataUsers = Router();

const dataUserController = new CreateDataUsersController();

dataUsers.post('/profile', ensureAuthenticated, dataUserController.handle);

export { dataUsers };
