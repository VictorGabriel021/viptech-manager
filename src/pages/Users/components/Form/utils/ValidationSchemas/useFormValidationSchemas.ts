import {
  getPersonalDataValidationForm,
  getAddressDataValidationForm,
  getRepresentativeDataValidationForm,
} from "./index";

import * as Yup from "yup";

export const getCustomFormValidationSchema = (activeStep?: number) => {
  switch (activeStep) {
    case 0:
      return getPersonalDataValidationForm();
    case 1:
      return getAddressDataValidationForm();
    case 2:
      return getRepresentativeDataValidationForm();
    default:
      return Yup.object().shape({
        ...getPersonalDataValidationForm().fields,
        ...getAddressDataValidationForm().fields,
        ...getRepresentativeDataValidationForm().fields,
      });
  }
};
