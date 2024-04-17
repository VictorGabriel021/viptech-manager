import { Alert } from "@mui/material";

import { Container, AlertContainer } from "./styles";

import { AddressData, PersonalData, Representative } from "..";

import { IUserResponse } from "service/user/interfaces";

import { SetUserFormFieldValues } from "../utils/InputsModel";

interface IViewDataProps {
  values: IUserResponse;
  setFieldValue: SetUserFormFieldValues;
}

const ViewData = ({ values, setFieldValue }: IViewDataProps) => {
  return (
    <>
      <AlertContainer>
        <Alert variant="filled" severity="warning">
          Confirme se os dados estão corretos!
        </Alert>
      </AlertContainer>
      <Container>
        <PersonalData setFieldValue={setFieldValue} isDisable />
        <AddressData values={values} setFieldValue={setFieldValue} isDisable />
        <Representative
          values={values}
          setFieldValue={setFieldValue}
          isDisable
        />
      </Container>
    </>
  );
};

export default ViewData;
