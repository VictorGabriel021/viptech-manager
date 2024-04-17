import React from "react";

import { ModalContainer } from "./styles";

import { Box, CircularProgress, Dialog } from "@mui/material";

import { CustomButton } from "shared/components/Buttons";

export interface IModalButtonsProps {
  text: string;
  onClick: () => void;
  color?: "primary" | "secondary";
  outlined?: boolean;
  disabled?: boolean;
  loadingButton?: boolean;
}

export interface IModalProps {
  title?: string;
  description?: string;
  isLoadingModal?: boolean;
  open: boolean;
  buttons: IModalButtonsProps[];
  onClose: () => void;
  showOnClose?: boolean;
  image?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  title,
  description,
  isLoadingModal,
  open,
  buttons,
  showOnClose = true,
  onClose,
  image,
}) => {
  return (
    <Dialog open={open}>
      <ModalContainer>
        {isLoadingModal ? (
          <CircularProgress />
        ) : (
          <>
            <Box component="h2" fontWeight={"bold"} textAlign="center">
              {title}
            </Box>

            {image && <>{image}</>}

            {description && <Box component="p">{description}</Box>}

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="nowrap"
            >
              {buttons.map(
                (
                  { text, onClick, color = "primary", outlined = false },
                  index
                ) => (
                  <CustomButton
                    key={`modal_button_${index}`}
                    variant={outlined ? "outlined" : "contained"}
                    color={color}
                    onClick={onClick}
                  >
                    {text}
                  </CustomButton>
                )
              )}
              {showOnClose && (
                <CustomButton variant="text" onClick={onClose} color="primary">
                  Fechar
                </CustomButton>
              )}
            </Box>
          </>
        )}
      </ModalContainer>
    </Dialog>
  );
};

export default Modal;
