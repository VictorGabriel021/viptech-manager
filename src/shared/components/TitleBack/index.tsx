import { Link } from "react-router-dom";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Container, SpanContainer } from "./styles";

interface ITitleBack {
  title: string;
}

const TitleBack = ({ title }: ITitleBack) => {
  return (
    <Container>
      <Link to={"/users"}>
        <SpanContainer>
          <ArrowBackIosNewIcon />
          <h1>{title}</h1>
        </SpanContainer>
      </Link>
    </Container>
  );
};

export default TitleBack;
