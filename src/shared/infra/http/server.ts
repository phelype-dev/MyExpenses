import { AppError } from '@shared/errors/AppError';
import { dataSource } from '../typeorm';
import { app } from './app';

dataSource.initialize().then(async () => {
  try {
    const server = app.listen(3000, () => {
      return console.log('Server started on port 3000! 🏆');
    });
  } catch (e) {
    throw new AppError('Erro encontrado: ', e);
  }
});
