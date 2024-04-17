import { FreeFormFieldContent } from ".";

import type { IRepresentativeDataFormValues } from "../InitialValues/representativeDataForm";

export type RepresentativeFormParams = {
  [key in keyof IRepresentativeDataFormValues]: FreeFormFieldContent<RepresentativeFormParams>;
};

export const getRepresentativeInputsFormInformation =
  (): RepresentativeFormParams => {
    return {
      representative: {
        name: "representative",
        label: "",
        requiredErrorMsg: "",
      },
    };
  };
