//App e responsavel pelas chamadas principais da aplicação
//Nela está contida as chamadas das Rotas e chamadas do express
import dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from '../../errors/AppError';
import { router } from './routes';
import '../../container';
import { errors } from 'celebrate';

const app = express();

//Responsável por habilitar JSON na aplicação//
app.use(express.json());

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
