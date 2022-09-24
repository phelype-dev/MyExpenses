import { IDateProvider } from '../IDateProvider';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.locale('pt-BR');

class DayJsDateProvider implements IDateProvider {
  convertToTimestamp(data: Date): Date {
    return dayjs(data).toDate();
  }
  convertToUTC(data: Date): string {
    return dayjs(data).utc().format('YYYY-MM-DD').toString();
  }
}

export { DayJsDateProvider };
