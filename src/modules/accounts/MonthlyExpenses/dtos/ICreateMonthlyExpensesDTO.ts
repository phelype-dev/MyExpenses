interface ICreateMonthlyExpensesDTO {
  fixedAccountsId: string;
  loginId: string;
  monthReference: number;
  nameAccount: string;
  descriptionAcoount: string;
  dateExpense: Date;
  expenseAmount: number;
  amountInInstallment: boolean;
}

export { ICreateMonthlyExpensesDTO };
