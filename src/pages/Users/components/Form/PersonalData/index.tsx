import { InputContainer } from "../styles/styles";

import { InputTextFormik } from "shared/components/InputTextFormik";

import { formatCPF } from "shared/utils/functions/formatters";

import {
  SetUserFormFieldValues,
  getPersonalInputsFormInformation,
} from "../utils/InputsModel";

interface IPersonalData {
  setFieldValue: SetUserFormFieldValues;
  isDisable?: boolean;
}

const PersonalData = ({ setFieldValue, isDisable }: IPersonalData) => {
  const formField = getPersonalInputsFormInformation();

  const changeCpfHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b/./-]+$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setFieldValue(formField.cpf.name, formatCPF(event.target.value));
    }
  };

  return (
    <div>
      <h3>Dados pessoais</h3>

      <InputContainer>
        <InputTextFormik
          name={formField.name.name}
          label={formField.name.label}
          disabled={isDisable}
        />
        <InputTextFormik
          name={formField.lastname.name}
          label={formField.lastname.label}
          disabled={isDisable}
        />
        <InputTextFormik
          name={formField.cpf.name}
          label={formField.cpf.label}
          disabled={isDisable}
          onChange={changeCpfHandler}
        />
        <InputTextFormik
          name={formField.email.name}
          label={formField.email.label}
          blockEmptySpaces
          disabled={isDisable}
          autoComplete="username"
        />
        <InputTextFormik
          name={formField.password.name}
          label={formField.password.label}
          disabled={isDisable}
          type="password"
          autoComplete="current-password"
        />
      </InputContainer>
    </div>
  );
};

export default PersonalData;
