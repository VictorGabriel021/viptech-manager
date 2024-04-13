import { Route, Routes } from "react-router-dom";

import { Home, Users } from "pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
};

export default Router;
