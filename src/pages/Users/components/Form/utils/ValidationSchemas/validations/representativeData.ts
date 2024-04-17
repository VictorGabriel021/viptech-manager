import * as Yup from "yup";

import { getRepresentativeInputsFormInformation } from "../../InputsModel";

export const getRepresentativeDataValidationForm = () => {
  const { representative } = getRepresentativeInputsFormInformation();

  return Yup.object().shape({
    [representative.name]: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().nullable().required("O Nome é obrigatório"),
          degreeOfKinship: Yup.string()
            .nullable()
            .required("O Grau de parentesco é obrigatório"),
          rg: Yup.string()
            .nullable()
            .min(12, "RG inválido")
            .required("O RG é obrigatório"),
          cellphone: Yup.string()
            .nullable()
            .min(15, "Celular inválido")
            .required("O Celular é obrigatório"),
        })
      )
      .nullable()
      .min(1, "Você deve adicionar pelo menos 1 representante"),
  });
};
