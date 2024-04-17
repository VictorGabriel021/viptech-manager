import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Router from "./routes";

import { CardContainer, CardContent } from "shared/styles/Card/styles";

import Navbar from "shared/components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <CardContainer>
        <CardContent>
          <Router />
        </CardContent>
      </CardContainer>

      <ToastContainer />
    </>
  );
}

export default App;
