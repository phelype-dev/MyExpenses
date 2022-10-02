interface ICreateFixedAccountsDTO {
  fixedAccountsId?: string;
  userDataId: string;
  nameAccount: string;
  descriptionAcoount: string;
  accountValues: number;
  initialDate: Date;
  finalDate: Date;
  isActive: boolean;
}

export { ICreateFixedAccountsDTO };
