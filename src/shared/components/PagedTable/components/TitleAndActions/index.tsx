import { Container } from "./styles";

import { CustomButton } from "shared/components/Buttons";

interface ITitleAndActionsProps {
  title: string;
  onCreateHandler: () => void;
}

const TitleAndActions = ({ title, onCreateHandler }: ITitleAndActionsProps) => {
  return (
    <Container>
      <h1>{title}</h1>

      <CustomButton
        variant="contained"
        color="primary"
        onClick={onCreateHandler}
      >
        Cadastrar
      </CustomButton>
    </Container>
  );
};

export default TitleAndActions;
