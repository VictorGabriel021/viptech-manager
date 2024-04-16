import uuid from "react-uuid";

import { IUserService, IUserResponse } from "./interfaces";

const UserService = (): IUserService => {
  const getUsers = (): IUserResponse[] => {
    const users = localStorage.getItem("users");

    if (users) {
      return JSON.parse(users);
    }

    return [];
  };

  const getUserById = (id: string): IUserResponse | undefined => {
    const users = localStorage.getItem("users");

    if (users) {
      const usersArray: IUserResponse[] = JSON.parse(users);

      return usersArray.find((item) => item.id === id);
    }

    return undefined;
  };

  const createUser = (data: IUserResponse): void => {
    const users = localStorage.getItem("users");

    if (users) {
      const usersArray: IUserResponse[] = JSON.parse(users);

      usersArray.push({ ...data, id: uuid() });

      localStorage.setItem("users", JSON.stringify(usersArray));
    } else {
      localStorage.setItem("users", JSON.stringify([data]));
    }
  };

  const updateUser = (data: IUserResponse): void => {
    const users = localStorage.getItem("users");

    if (users) {
      const usersArray: IUserResponse[] = JSON.parse(users);

      usersArray.splice(
        usersArray.findIndex(({ id: itemId }) => itemId === data.id),
        1,
        data
      );
      localStorage.setItem("users", JSON.stringify(usersArray));
    }
  };

  const deleteUser = (id: string): void => {
    const users = localStorage.getItem("users");

    if (users) {
      const usersArray: IUserResponse[] = JSON.parse(users);

      usersArray.splice(
        usersArray.findIndex(({ id: itemId }) => itemId === id),
        1
      );

      localStorage.setItem("users", JSON.stringify(usersArray));
    }
  };

  return {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
};

export default UserService;
