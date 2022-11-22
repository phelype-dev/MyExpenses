import { AppError } from '@shared/errors/AppError';
import { dataSource } from '../typeorm';
import { app } from './app';

dataSource.initialize().then(async () => {
  try {
    const server = app.listen(process.env.PORT || 8080, () => {
      return console.info(
        `Server started on port ${process.env.PORT || 8080}! 🏆`,
      );
    });
  } catch (e) {
    throw new AppError('Erro encontrado: ', e);
  }
});
