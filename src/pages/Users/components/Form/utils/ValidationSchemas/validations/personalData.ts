import * as Yup from "yup";

import { getPersonalInputsFormInformation } from "../../InputsModel";

import { validCpf, validCpfProp } from "shared/utils/functions/validation";

export const getPersonalDataValidationForm = () => {
  const { name, lastname, cpf, email, password } =
    getPersonalInputsFormInformation();

  return Yup.object().shape({
    [name.name]: Yup.string().nullable().required(name.requiredErrorMsg),
    [lastname.name]: Yup.string()
      .nullable()
      .required(lastname.requiredErrorMsg),
    [cpf.name]: Yup.string()
      .nullable()
      .required(cpf.requiredErrorMsg)
      .test("isValid", "Insira um CPF válido!", (strCPF: validCpfProp) =>
        validCpf(strCPF)
      ),
    [email.name]: Yup.string()
      .nullable()
      .required(email.requiredErrorMsg)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9\s]).{8,}$/,
        "E-mail inválido"
      ),
    [password.name]: Yup.string()
      .nullable()
      .required(password.requiredErrorMsg)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[%?$*&@#!_.,-]).{8,}$/,
        "Insira uma combinação de 8 dígitos ou mais contendo pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial: (-_!@#$%&*.,?)"
      ),
  });
};
