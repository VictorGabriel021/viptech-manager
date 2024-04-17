import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Formik, Form } from "formik";

import { CircularProgress } from "@mui/material";

import { Container, ButtonsContainer } from "./styles";

import { AddressData, PersonalData, Representative } from "../components/Form";

import UserService from "service/user";
import { IUserResponse } from "service/user/interfaces";

import useModal from "shared/Hooks/useModal";

import AppModal from "shared/components/AppModal";
import ResourceFound from "shared/components/ResourceFound";
import { CustomButton } from "shared/components/Buttons";
import TitleBack from "shared/components/TitleBack";
import Loading from "shared/components/Loading";

import { getCustomFormValidationSchema } from "../components/Form/utils/ValidationSchemas/useFormValidationSchemas";

const { getUserById, updateUser } = UserService();

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, showModal, hideModal] = useModal();
  const [user, setUser] = useState<IUserResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const submitHandler = async (values: IUserResponse) => {
    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        updateUser(values);
        return resolve(true);
      }, 2000);
    });
    setIsLoading(false);
    showModal({
      title: "O usuário foi editado com sucesso!",
      image: "ok",
      showOnClose: false,
      buttons: [
        {
          text: "Usuários",
          onClick: () => {
            navigate("/users");
          },
        },
      ],
    });
  };

  useEffect(() => {
    setUser(getUserById(id!));
    setIsLoading(false);
  }, [id]);

  if (!user) {
    if (isLoading) {
      return <Loading />;
    }
    return <ResourceFound text="Usuário não encontrado!" />;
  }

  return (
    <div>
      <AppModal {...modal} onClose={hideModal} />

      <div>
        <TitleBack title="Editar" />

        <Formik
          initialValues={user as IUserResponse}
          validationSchema={getCustomFormValidationSchema()}
          enableReinitialize
          onSubmit={async (values: IUserResponse) => {
            await submitHandler(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Container>
                <PersonalData setFieldValue={setFieldValue} />
                <AddressData
                  values={values}
                  setFieldValue={setFieldValue}
                  isEdit
                />
                <Representative values={values} setFieldValue={setFieldValue} />
              </Container>

              <ButtonsContainer>
                <CustomButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={
                    isLoading && <CircularProgress color="inherit" size={18} />
                  }
                  disabled={isLoading}
                >
                  Salvar
                </CustomButton>
              </ButtonsContainer>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Update;
