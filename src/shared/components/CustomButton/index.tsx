import { ReactNode } from "react";

import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Colors } from "../../constants/color";

interface IButtonProps {
  children: ReactNode;
  variant: string;
}

interface IButtonTextProps {
  children: ReactNode;
}

interface IButtonIconProps {
  children: ReactNode;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(Colors.primary),
  backgroundColor: Colors.primary,
  "&:hover": {
    backgroundColor: Colors.secondary,
  },
}));

function CustomizedButton({ children, ...rest }: IButtonProps) {
  return (
    <Stack spacing={2} direction="row" {...rest}>
      {children}
    </Stack>
  );
}

function ButtonText({ children }: IButtonTextProps) {
  return <ColorButton>{children}</ColorButton>;
}

function ButtonIcon({ children }: IButtonIconProps) {
  return <>{children}</>;
}

CustomizedButton.Text = ButtonText;
CustomizedButton.Icon = ButtonIcon;

export { CustomizedButton };
