import { Router } from 'express';
import { authenticationRoutes } from './authentication.routers';
import { dataUsers } from './dataUser.routers';
import { loginsRoutes } from './login.routers';

const router = Router();

router.use('/registration', loginsRoutes);
router.use('/sessions', authenticationRoutes);
router.use('/myuser', dataUsers);
router.use(authenticationRoutes);

export { router };
