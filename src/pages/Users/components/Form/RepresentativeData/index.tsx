import { ErrorMessage, FieldArray } from "formik";

import { Container, RepresentativeContainer, ButtonContainer } from "./styles";
import { InputContainer } from "../styles/styles";
import { TextError } from "shared/styles/Error/styles";
import { DeleteIconCustom } from "shared/styles/Icons/styles";

import CustomButton from "shared/components/CustomButton";
import SelectCustom from "shared/components/SelectCustom";
import { InputTextFormik } from "shared/components/InputTextFormik";

import { formatPhone, formatRG } from "shared/utils/functions/formatters";

import { IRepresentativeDataFormValues } from "../utils/InitialValues/representativeDataForm";
import {
  SetUserFormFieldValues,
  getRepresentativeInputsFormInformation,
} from "../utils/InputsModel";

import { degreeOfKinshipOptions } from "shared/constants/user";

interface IRepresentativeData {
  values: IRepresentativeDataFormValues;
  setFieldValue: SetUserFormFieldValues;
  isDisable?: boolean;
}

const RepresentativeData = ({
  values,
  setFieldValue,
  isDisable,
}: IRepresentativeData) => {
  const formField = getRepresentativeInputsFormInformation();

  const changeCellPhoneHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const regex = /^[0-9]{0,11}$/;

    const phoneNumber = event.target.value.replace(/[^\d]/g, "");

    if (phoneNumber === "" || regex.test(phoneNumber)) {
      setFieldValue(
        `${formField.representative.name}.${index}.cellphone` as any,
        formatPhone(phoneNumber)
      );
    }
  };

  const changeRgHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const regex = /^[A-Za-z0-9\b/./-]+$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setFieldValue(
        `${formField.representative.name}.${index}.rg` as any,
        formatRG(event.target.value)
      );
    }
  };

  return (
    <div>
      <h3>Dados do representante</h3>

      <FieldArray name={formField.representative.name}>
        {({ remove, push }) => (
          <Container>
            <ButtonContainer>
              {!values.representative.length && (
                <ErrorMessage name={`${formField.representative.name}`}>
                  {(msg) => <TextError>{msg}</TextError>}
                </ErrorMessage>
              )}

              {!isDisable && (
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    push({
                      name: "",
                      degreeOfKinship: "",
                      rg: "",
                      cellphone: "",
                    })
                  }
                >
                  Adicionar
                </CustomButton>
              )}
            </ButtonContainer>

            {values.representative.length > 0 && (
              <RepresentativeContainer>
                {values.representative.map((_, index) => (
                  <div key={index}>
                    {!isDisable && index !== 0 && (
                      <DeleteIconCustom onClick={() => remove(index)} />
                    )}
                    <InputContainer>
                      <InputTextFormik
                        name={`${formField.representative.name}.${index}.name`}
                        label={"Nome"}
                        disabled={isDisable}
                      />
                      <SelectCustom
                        name={`${formField.representative.name}.${index}.degreeOfKinship`}
                        label={"Grau de parentesco"}
                        options={degreeOfKinshipOptions}
                        disabled={isDisable}
                      />

                      <InputTextFormik
                        name={`${formField.representative.name}.${index}.rg`}
                        label={"RG"}
                        disabled={isDisable}
                        inputProps={{
                          maxLength: 12,
                        }}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => changeRgHandler(event, index)}
                      />
                      <InputTextFormik
                        name={`${formField.representative.name}.${index}.cellphone`}
                        label={"Celular"}
                        disabled={isDisable}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => changeCellPhoneHandler(event, index)}
                      />
                    </InputContainer>
                  </div>
                ))}
              </RepresentativeContainer>
            )}
          </Container>
        )}
      </FieldArray>
    </div>
  );
};

export default RepresentativeData;
