import Router from "./routes";

import { CardContainer, CardContent } from "shared/styles/Card/styles";

import Navbar from "shared/components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div>
        <CardContainer>
          <CardContent>
            <Router />
          </CardContent>
        </CardContainer>
      </div>
    </>
  );
}

export default App;
