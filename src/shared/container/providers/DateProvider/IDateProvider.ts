interface IDateProvider {
  convertToUTC(data: Date): string;
  convertToTimestamp(data: Date): Date;
}

export { IDateProvider };
