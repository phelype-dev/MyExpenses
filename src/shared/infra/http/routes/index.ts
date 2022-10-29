import { Router } from 'express';
import { authenticationRoutes } from './authentication.routers';
import { loginsRoutes } from './login.routers';
import { dataUsers } from './dataUser.routers';
import { fixedAccountRoutes } from './fixedAccount.routers';
import { monthlyIncomeRoutes } from './monthlyIncome.routes';

const router = Router();

router.use('/registration', loginsRoutes);
router.use('/myuser', dataUsers);
router.use('/add', fixedAccountRoutes);
router.use('/account', monthlyIncomeRoutes);
router.use(authenticationRoutes);

export { router };
