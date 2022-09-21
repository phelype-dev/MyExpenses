// eslint-disable-next-line @typescript-eslint/no-namespace
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace
declare namespace Express {
  export interface Request {
    login: {
      loginId: string;
    };
  }
}
