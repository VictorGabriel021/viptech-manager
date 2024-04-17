export interface AddressDataFormValues {
  cep: string;
  city: string;
  uf: string;
  street: string;
  number: string;
}

export const getAddressDataFormInitialValues = (): AddressDataFormValues => {
  return {
    cep: "",
    city: "",
    uf: "",
    street: "",
    number: "",
  };
};
