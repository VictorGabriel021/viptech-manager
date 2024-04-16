import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PagedTable from "shared/components/PagedTable";
import AppModal from "shared/components/AppModal";

import useModal from "shared/Hooks/useModal";

import UserService from "service/user";
import { IColumnsPage } from "service/user/types";
import { IUserResponse } from "service/user/interfaces";

import UserFilter, { IUserFilterForm } from "../components/Filter";

const columns: IColumnsPage[] = [
  { id: "name", label: "Nome" },
  { id: "lastname", label: "Sobrenome" },
  { id: "email", label: "Email" },
  { id: "uf", label: "Estado" },
];

const { getUsers, deleteUser } = UserService();

const Users = () => {
  const navigate = useNavigate();
  const [modal, showModal, hideModal, loadingModal, stopLoadingModal] =
    useModal();
  const [users, setUsers] = useState<IUserResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onFilterHandler = (values: IUserFilterForm) => {
    if (!values.name.length && !values.uf.length) {
      setUsers(getUsers());
      return;
    }

    setUsers(
      getUsers().filter((item) => {
        const filterByState = values.uf.length && item.uf === values.uf;
        const fullName = `${item.name} ${item.lastname}`;
        const filterByName =
          values.name &&
          fullName.toLowerCase().includes(values.name.toLowerCase());

        return (
          (filterByName && filterByState) ||
          (filterByName && !values.uf.length) ||
          (filterByState && !values.name.length)
        );
      })
    );
  };

  const onCreateHandler = () => {
    navigate("/users/create");
  };

  const onEditHandler = (id: number) => {
    navigate(`/users/update/${id}`);
  };

  const onDeleteHandler = (data: any) => {
    showModal({
      title: `Você realmente deseja excluir o usuário ${data.name}?`,
      description: "Essa ação não poderá ser revertida",
      showOnClose: true,
      image: "trash",
      buttons: [
        {
          text: "Confirmar",
          color: "primary",
          async onClick() {
            loadingModal();

            await new Promise((resolve) => {
              setTimeout(() => {
                deleteUser(data.id);
                return resolve(true);
              }, 2000);
            });
            getUsersCallback();
            stopLoadingModal();
            onDeleteSuccessHandler();
          },
        },
      ],
    });
  };

  const onDeleteSuccessHandler = () => {
    showModal({
      title: `Usuário deletado com sucesso`,
      description: "",
      showOnClose: true,
      image: "ok",
      buttons: [],
    });
  };

  const getUsersCallback = useCallback(async () => {
    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        setUsers(getUsers());
        return resolve(true);
      }, 2000);
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getUsersCallback();
  }, [getUsersCallback]);

  return (
    <div>
      <AppModal {...modal} onClose={hideModal} />

      <PagedTable
        title="Usuários"
        notFoundText="Usuários não encontrados!"
        isLoading={isLoading}
        filter={<UserFilter onFilterHandler={onFilterHandler} />}
        onCreateHandler={onCreateHandler}
        columns={columns}
        rows={users}
        onEditHandler={onEditHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};

export default Users;
