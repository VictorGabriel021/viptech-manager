import { Route, Routes } from "react-router-dom";

import { Home, NotFound } from "pages";

import { CreateUser, UpdateUser, ListUser } from "pages/Users";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users" element={<ListUser />} />
      <Route path="users/create" element={<CreateUser />} />
      <Route path="users/update/:id" element={<UpdateUser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
