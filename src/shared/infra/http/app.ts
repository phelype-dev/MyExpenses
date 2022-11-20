//App e responsavel pelas chamadas principais da aplicação
//Nela está contida as chamadas das Rotas e chamadas do express
import dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../../swagger.json';
import { AppError } from '../../errors/AppError';
import { router } from './routes';
import '../../container';
import { errors } from 'celebrate';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

//Chamada para Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//Chamada das rotas
app.use(router);

app.use(errors());
//Caso ocorra algum erro na aplicação será chamada esse metodo para informar qual erro
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

export { app };
