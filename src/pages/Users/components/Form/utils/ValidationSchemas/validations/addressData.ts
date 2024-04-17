import * as Yup from "yup";

import { getAddressInputsFormInformation } from "../../InputsModel";

export const getAddressDataValidationForm = () => {
  const { cep, city, uf, street, number } = getAddressInputsFormInformation();

  return Yup.object().shape({
    [cep.name]: Yup.string().nullable().required(cep.requiredErrorMsg),
    [city.name]: Yup.string().nullable().required(city.requiredErrorMsg),
    [uf.name]: Yup.string().nullable().required(uf.requiredErrorMsg),
    [street.name]: Yup.string().nullable().required(street.requiredErrorMsg),
    [number.name]: Yup.string()
      .nullable()
      .required(number.requiredErrorMsg)
      .matches(/^\d/, "O número residencial deve começar com um dígito"),
  });
};
