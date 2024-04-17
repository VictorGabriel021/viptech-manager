import { Link } from "react-router-dom";

import { Alert } from "@mui/material";

import { CustomButton } from "shared/components/Buttons";

import { ButtonContainer } from "./styles";

interface IResourceFound {
  text: string;
  color?: "error" | "info" | "success" | "warning";
}

const ResourceFound = ({ text, color = "error" }: IResourceFound) => {
  return (
    <div>
      <Alert variant="filled" severity={color}>
        {text}
      </Alert>

      <Link to="/users">
        <ButtonContainer>
          <CustomButton variant="contained" color="primary">
            Voltar para Home
          </CustomButton>
        </ButtonContainer>
      </Link>
    </div>
  );
};

export default ResourceFound;
