import { IDateProvider } from '../IDateProvider';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.locale('pt-BR');

class DayJsDateProvider implements IDateProvider {
  CheckStartDateAndEndDate(StartDate: Date, EndDate: Date): boolean {
    const dateInitial = dayjs(StartDate).format('YYYY-MM-DD').toString();
    const dateEnd = dayjs(EndDate).format('YYYY-MM-DD').toString();
    if (dateEnd < dateInitial) {
      return false;
    }
    console.log(dateInitial, dateEnd);

    return true;
  }
  VerifyDateToDate(initial_date: Date): boolean {
    const dateNow = new Date();
    const newDate = dayjs(dateNow).format('YYYY-MM-DD').toString();
    const dataInitial = dayjs(initial_date).format('YYYY-MM-DD').toString();
    if (newDate > dataInitial) {
      return false;
    }
    return true;
  }
  convertToTimestamp(data: Date): Date {
    return dayjs(data).toDate();
  }
  convertToUTC(data: Date): string {
    return dayjs(data).utc().format('YYYY-MM-DD').toString();
  }
}

export { DayJsDateProvider };
