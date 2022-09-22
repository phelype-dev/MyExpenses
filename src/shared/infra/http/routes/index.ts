import { Router } from 'express';
import { authenticationRoutes } from './authentication.routers';
import { loginsRoutes } from './login.routers';
import { dataUsers } from './dataUser.routers';

const router = Router();

router.use('/registration', loginsRoutes);
router.use('/myuser', dataUsers);
router.use(authenticationRoutes);

export { router };
