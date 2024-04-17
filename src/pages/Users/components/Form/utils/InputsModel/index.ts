import type { PersonalDataFormParams } from "./personalDataForm";
import type { AddressDataFormParams } from "./addressDataForm";
import type { RepresentativeFormParams } from "./representativeDataForm";

interface FormModelInterface
  extends PersonalDataFormParams,
    AddressDataFormParams,
    RepresentativeFormParams {}

export interface FreeFormFieldContent<TFormModel = FormModelInterface> {
  name: keyof TFormModel;
  label: string;
  requiredErrorMsg: string;
}

export type SetUserFormFieldValues<TFieldModel = FormModelInterface> = <
  R = keyof TFieldModel
>(
  field: keyof TFieldModel,
  value: R,
  shouldValidate?: boolean | undefined
) => void;

export { getPersonalInputsFormInformation } from "./personalDataForm";
export { getAddressInputsFormInformation } from "./addressDataForm";
export { getRepresentativeInputsFormInformation } from "./representativeDataForm";

export type { PersonalDataFormParams } from "./personalDataForm";
export type { AddressDataFormParams } from "./addressDataForm";
export type { RepresentativeFormParams } from "./representativeDataForm";
