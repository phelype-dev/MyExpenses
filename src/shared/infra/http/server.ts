import { dataSource } from '../typeorm';
import { app } from './app';

dataSource
  .initialize()
  .then(async () => {
    const server = app.listen(3000, () => {
      return console.log('Server started on port 3000! 🏆');
    });
  })
  .catch(error => console.log('An internal error has occurred: ', error));
