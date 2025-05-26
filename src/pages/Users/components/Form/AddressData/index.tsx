import { useState } from "react";

import { CircularProgress, InputAdornment } from "@mui/material";

import { InputContainer } from "../styles/styles";

import { InputTextFormik, SelectCustom } from "shared/components/Inputs";

import { brazilianStatesOptions } from "shared/constants/user";

import CepService from "service/cep";

import { WarningAlert } from "shared/Hooks/ToastAlerts";

import { formatCEP } from "shared/utils/functions/formatters";

import { AddressDataFormValues } from "../utils/InitialValues/addressDataForm";
import {
  SetUserFormFieldValues,
  getAddressInputsFormInformation,
} from "../utils/InputsModel";

interface IAddressData {
  values: AddressDataFormValues;
  setFieldValue: SetUserFormFieldValues;
  isDisable?: boolean;
  isEdit?: boolean;
}

const AddressData = ({
  values,
  setFieldValue,
  isDisable,
  isEdit = false,
}: IAddressData) => {
  const formField = getAddressInputsFormInformation();
  const [isLoadingAdress, setIsLoadingAdress] = useState(false);
  const [disabledField, setDisabledField] = useState({
    street: false || isEdit,
    city: false || isEdit,
    uf: false || isEdit,
  });

  const addressNotFoundHandler = () => {
    setDisabledField({
      street: false,
      city: false,
      uf: false,
    });
    setFieldValue(formField.cep.name, "");
    WarningAlert({
      label: "Endereço não encontrado!",
    });
  };

  const onBlurCep = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep.length !== 8) return;

    setIsLoadingAdress(true);

    try {
      const { getCepInfo } = CepService(cep);

      const data = await getCepInfo(cep);

      if (data.erro) {
        setIsLoadingAdress(false);
        addressNotFoundHandler();
        return;
      }

      setFieldValue(formField.street.name, data.logradouro);
      setFieldValue(formField.city.name, data.localidade);
      setFieldValue(formField.uf.name, data.uf);
      setDisabledField({
        street: data.logradouro !== "",
        city: data.localidade !== "",
        uf: data.uf !== "",
      });
    } catch (error) {
      addressNotFoundHandler();
    }

    setIsLoadingAdress(false);
  };

  const changeCepHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b/-]+$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setFieldValue(formField.cep.name, formatCEP(event.target.value));
    }

    await onBlurCep(event);
  };

  return (
    <div>
      <h3>Endereço</h3>

      <InputContainer>
        <InputTextFormik
          className="cep-input"
          name={formField.cep.name}
          label={formField.cep.label}
          disabled={isDisable}
          variant="outlined"
          onChange={changeCepHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {isLoadingAdress && <CircularProgress size={15} />}
              </InputAdornment>
            ),
            inputProps: {
              maxLength: 9,
            },
          }}
        />
        <InputTextFormik
          name={formField.city.name}
          label={formField.city.label}
          disabled={disabledField.city || isDisable}
        />
        <SelectCustom
          name={formField.uf.name}
          label={formField.uf.label}
          disabled={disabledField.uf || isDisable}
          options={brazilianStatesOptions}
        />
        <InputTextFormik
          name={formField.street.name}
          label={formField.street.label}
          disabled={disabledField.street || isDisable}
        />
        <InputTextFormik
          name={formField.number.name}
          label={formField.number.label}
          disabled={isDisable}
        />
      </InputContainer>
    </div>
  );
};

export default AddressData;
