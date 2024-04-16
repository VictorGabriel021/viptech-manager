interface IRepresentativeData {
  name: string;
  degreeOfKinship: string;
  rg: string;
  cellphone: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  lastname: string;
  cpf: string;
  email: string;
  password: string;
  cep: string;
  city: string;
  uf: string;
  street: string;
  number: string;
  representative: IRepresentativeData[];
}

export interface IUserService {
  getUsers: () => IUserResponse[];
  getUserById: (id: string) => IUserResponse | undefined;
  createUser: (data: IUserResponse) => void;
  updateUser: (data: IUserResponse) => void;
  deleteUser: (id: string) => void;
}
