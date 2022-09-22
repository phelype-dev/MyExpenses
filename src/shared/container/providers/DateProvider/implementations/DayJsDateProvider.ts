import { IDateProvider } from '../IDateProvider';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

class DayJsDateProvider implements IDateProvider {
  convertToUTC(data: Date): string {
    return dayjs(data).format('YYYY-MM-DD').toString();
  }
}

export { DayJsDateProvider };
