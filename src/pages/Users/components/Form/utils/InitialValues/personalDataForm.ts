export interface PersonalDataFormValues {
  name: string;
  lastname: string;
  cpf: string;
  email: string;
  password: string;
}

export const getPersonalDataFormInitialValues = (): PersonalDataFormValues => {
  return {
    name: "",
    lastname: "",
    cpf: "",
    email: "",
    password: "",
  };
};
