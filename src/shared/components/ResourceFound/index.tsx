import { Link } from "react-router-dom";

import { Alert } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import { CustomButton } from "shared/components/Buttons";

import { Container, ButtonContainer } from "./styles";
interface IResourceFound {
  text: string;
  color?: "error" | "info" | "success" | "warning";
}

const ResourceFound = ({ text, color = "error" }: IResourceFound) => {
  return (
    <Container>
      <SentimentVeryDissatisfiedIcon color={color} style={{ fontSize: 180 }} />

      <Alert variant="filled" severity={color}>
        {text}
      </Alert>

      <Link to="/">
        <ButtonContainer>
          <CustomButton variant="contained" color="primary">
            Voltar para Home
          </CustomButton>
        </ButtonContainer>
      </Link>
    </Container>
  );
};

export default ResourceFound;
