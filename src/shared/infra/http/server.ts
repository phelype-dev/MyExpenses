import { AppError } from '@shared/errors/AppError';
import { dataSource } from '../typeorm';
import { app } from './app';

const port = process.env.PORT || '3000';
console.log(port);
dataSource.initialize().then(async () => {
  try {
    const server = app.listen(() => {
      return console.info(`Server started on port ${port}! 🏆`);
    });
  } catch (e) {
    throw new AppError('Erro encontrado: ', e);
  }
});
