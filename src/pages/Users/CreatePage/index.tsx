import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getUserDataFormCreate,
  setUserDataFormCreate,
  clearUserDataFormCreate,
} from "context/reducers/User";
import { RootState } from "context/store";

import { Form, Formik } from "formik";

import { ButtonsContainer } from "./styles";

import HorizontalLinearStepper, {
  handleBack,
  handleNext,
} from "shared/components/Stepper";
import AppModal from "shared/components/AppModal";
import CustomButton from "shared/components/CustomButton";
import TitleBack from "shared/components/TitleBack";

import {
  PersonalData,
  AddressData,
  Representative,
  ViewData,
} from "../components/Form";

import { getCustomFormValidationSchema } from "../components/Form/utils/ValidationSchemas/useFormValidationSchemas";

import useModal from "shared/Hooks/useModal";

import UserService from "service/user";
import { IUserResponse } from "service/user/interfaces";

const { createUser } = UserService();

const steps = [
  "Dados Pessoais",
  "Endereço",
  "Dados do Representante",
  "Visualizar Formulário",
];

const Create = () => {
  const [modal, showModal, hideModal, loadingModal] = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialReduxValues = useSelector<RootState, RootState["user"]>(
    ({ user }) => user
  );
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  const showModalSuccess = () => {
    showModal({
      title: "O usuário foi cadastrado com sucesso!",
      image: "ok",
      showOnClose: false,
      buttons: [
        {
          text: "Usuários",
          onClick: () => {
            dispatch(clearUserDataFormCreate());
            navigate("/users");
          },
        },
      ],
    });
  };

  const submitHandler = (values: IUserResponse) => {
    if (isLastStep) {
      showModal({
        title: "Os dados estão corretos?",
        image: "pantless",
        showOnClose: true,
        buttons: [
          {
            text: "Confirmar",
            onClick: async () => {
              loadingModal();
              dispatch(setUserDataFormCreate(values));
              await new Promise((resolve) => {
                setTimeout(() => {
                  createUser(values);
                  hideModal();
                  showModalSuccess();
                  return resolve(true);
                }, 2000);
              });
            },
          },
        ],
      });
    } else {
      dispatch(setUserDataFormCreate(values));
      handleNext(activeStep, setActiveStep, steps);
    }
  };

  useEffect(() => {
    dispatch(getUserDataFormCreate());
  }, [dispatch]);

  return (
    <>
      <AppModal {...modal} onClose={hideModal} />

      <TitleBack title="Cadastrar" />

      <HorizontalLinearStepper steps={steps} activeStep={activeStep}>
        <Formik
          initialValues={initialReduxValues}
          validationSchema={getCustomFormValidationSchema(activeStep)}
          enableReinitialize
          onSubmit={(values) => {
            submitHandler(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {activeStep === 0 && (
                <PersonalData setFieldValue={setFieldValue} />
              )}

              {activeStep === 1 && (
                <AddressData values={values} setFieldValue={setFieldValue} />
              )}

              {activeStep === 2 && (
                <Representative values={values} setFieldValue={setFieldValue} />
              )}

              {activeStep === 3 && (
                <ViewData values={values} setFieldValue={setFieldValue} />
              )}

              <ButtonsContainer>
                {activeStep > 0 && (
                  <CustomButton
                    variant="outlined"
                    onClick={() => handleBack(setActiveStep)}
                    color="primary"
                  >
                    Anterior
                  </CustomButton>
                )}

                <CustomButton type="submit" variant="contained" color="primary">
                  {isLastStep ? "Enviar" : "Próximo"}
                </CustomButton>
              </ButtonsContainer>
            </Form>
          )}
        </Formik>
      </HorizontalLinearStepper>
    </>
  );
};

export default Create;
