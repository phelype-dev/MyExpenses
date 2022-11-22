import { AppError } from '@shared/errors/AppError';
import { dataSource } from '../typeorm';
import { app } from './app';

const port = process.env.PORT || '3000';
dataSource.initialize().then(async () => {
  try {
    const server = app.listen(3000, () => {
      return console.info(`Server started on port ${port}! 🏆`);
    });
  } catch (e) {
    throw new AppError('Erro encontrado: ', e);
  }
});
