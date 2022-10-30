interface ICreateFixedAccountsDTO {
  fixedAccountsId?: string;
  loginId: string;
  nameAccount: string;
  descriptionAcoount: string;
  accountValues: number;
  initialDate: Date;
  finalDate: Date;
  isActive: boolean;
}

export { ICreateFixedAccountsDTO };
