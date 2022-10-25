interface IDateProvider {
  convertToUTC(data: Date): string;
  convertToTimestamp(data: Date): Date;
  VerifyDateToDate(initial_date: Date): boolean;
  CheckStartDateAndEndDate(StartDate: Date, EndDate: Date): boolean;
}

export { IDateProvider };
