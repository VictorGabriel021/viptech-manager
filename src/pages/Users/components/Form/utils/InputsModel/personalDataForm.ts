import { FreeFormFieldContent } from ".";

import type { PersonalDataFormValues } from "../InitialValues/personalDataForm";

export type PersonalDataFormParams = {
  [key in keyof PersonalDataFormValues]: FreeFormFieldContent<PersonalDataFormParams>;
};

export const getPersonalInputsFormInformation = (): PersonalDataFormParams => {
  return {
    name: {
      name: "name",
      label: "Nome*",
      requiredErrorMsg: "Nome é obrigatório",
    },
    lastname: {
      name: "lastname",
      label: "Sobrenome*",
      requiredErrorMsg: "Sobrenome é obrigatório",
    },
    cpf: {
      name: "cpf",
      label: "CPF*",
      requiredErrorMsg: "CPF é obrigatório",
    },
    email: {
      name: "email",
      label: "Email*",
      requiredErrorMsg: "Email é obrigatório",
    },
    password: {
      name: "password",
      label: "Senha*",
      requiredErrorMsg: "Senha é obrigatória",
    },
  };
};
