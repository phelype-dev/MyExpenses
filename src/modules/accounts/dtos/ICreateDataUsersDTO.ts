interface ICreateDataUsersDTO {
  userDataId?: string;
  loginId?: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  cellNumber: number;
}

export { ICreateDataUsersDTO };
