import { getPersonalDataFormInitialValues } from "./personalDataForm";
import { getAddressDataFormInitialValues } from "./addressDataForm";
import { getRepresentativeDataFormInitialValues } from "./representativeDataForm";

export const getFormInitialValues = () => {
  return {
    ...getPersonalDataFormInitialValues(),
    ...getAddressDataFormInitialValues(),
    ...getRepresentativeDataFormInitialValues(),
  };
};
