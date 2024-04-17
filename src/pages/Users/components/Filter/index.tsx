import { Form, Formik } from "formik";

import { ButtonContainer, InputContainer } from "./styles";

import { InputTextFormik, SelectCustom } from "shared/components/Inputs";

import { CustomButton } from "shared/components/Buttons";

import { brazilianStatesOptions } from "shared/constants/user";

export interface IUserFilterForm {
  name: string;
  uf: string;
}

interface IUserFilterProps {
  onFilterHandler: (values: IUserFilterForm) => void;
}

const UserFilter = ({ onFilterHandler }: IUserFilterProps) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", uf: "" }}
        enableReinitialize
        onSubmit={(values) => {
          onFilterHandler(values);
        }}
      >
        {() => (
          <Form>
            <InputContainer>
              <InputTextFormik name={"name"} label={"Nome"} />
              <SelectCustom
                name="uf"
                label="Estado"
                options={brazilianStatesOptions}
              />
            </InputContainer>

            <ButtonContainer>
              <CustomButton variant="contained" color="primary" type="submit">
                Filtrar
              </CustomButton>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserFilter;
