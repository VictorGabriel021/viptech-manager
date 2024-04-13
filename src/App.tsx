import Navbar from "./shared/components/Navbar";

import Router from "./routes";

import { CardContainer, CardContent } from "./shared/styles/Card/styles";

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
