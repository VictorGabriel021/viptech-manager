import React from "react";

import { createPortal } from "react-dom";

import Modal, { IModalProps } from "./components/Modal/index";

import { AppModalImage } from "./styles";

export const commonModalImages = {
  pantless: "old_man_holding_notebook.svg",
  ok: "arm.svg",
  trash: "trash.svg",
};

export type CommonModalImagesKeys = keyof typeof commonModalImages;

export type CommonModalImages = CommonModalImagesKeys;

interface IAppModalProps extends IModalProps {
  image?: CommonModalImages;
}

const AppModal: React.FC<IAppModalProps> = ({
  open,
  title,
  description,
  isLoadingModal,
  buttons,
  image,
  showOnClose = true,
  onClose,
}) => {
  const ImageComponent = image ? (
    <AppModalImage
      src={`/assets/svgs/${commonModalImages[image]}`}
      alt={image}
    />
  ) : (
    <></>
  );

  return (
    <>
      {createPortal(
        <Modal
          open={open}
          title={title}
          description={description}
          isLoadingModal={isLoadingModal}
          buttons={buttons}
          image={ImageComponent}
          showOnClose={showOnClose}
          onClose={onClose}
        />,
        document.body
      )}
    </>
  );
};

export default AppModal;
