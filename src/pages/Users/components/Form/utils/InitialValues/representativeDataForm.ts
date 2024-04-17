interface RepresentativeData {
  name: string;
  degreeOfKinship: string;
  rg: string;
  cellphone: string;
}

export interface IRepresentativeDataFormValues {
  representative: RepresentativeData[];
}

export const getRepresentativeDataFormInitialValues =
  (): IRepresentativeDataFormValues => {
    return {
      representative: [
        { name: "", degreeOfKinship: "", rg: "", cellphone: "" },
      ],
    };
  };
