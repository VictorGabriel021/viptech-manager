import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { ButtonContainer, ButtonContent, ButtonIconContent } from "./styles";

interface IButtonIconProps {
  text: string;
}

const ButtonIcon = ({ text }: IButtonIconProps) => {
  return (
    <ButtonContainer>
      <ButtonContent variant="contained">
        <h5>{text}</h5>
      </ButtonContent>
      <ButtonIconContent>
        <ArrowForwardIosIcon />
      </ButtonIconContent>
    </ButtonContainer>
  );
};

export default ButtonIcon;
