import { FreeFormFieldContent } from ".";

import type { AddressDataFormValues } from "../InitialValues/addressDataForm";

export type AddressDataFormParams = {
  [key in keyof AddressDataFormValues]: FreeFormFieldContent<AddressDataFormParams>;
};

export const getAddressInputsFormInformation = (): AddressDataFormParams => {
  return {
    cep: {
      name: "cep",
      label: "CEP*",
      requiredErrorMsg: "CEP é obrigatório",
    },
    city: {
      name: "city",
      label: "Cidade*",
      requiredErrorMsg: "Cidade é obrigatório",
    },
    uf: {
      name: "uf",
      label: "Estado*",
      requiredErrorMsg: "Estado é obrigatório",
    },
    street: {
      name: "street",
      label: "Rua*",
      requiredErrorMsg: "Rua é obrigatório",
    },
    number: {
      name: "number",
      label: "Número*",
      requiredErrorMsg: "Número é obrigatório",
    },
  };
};
