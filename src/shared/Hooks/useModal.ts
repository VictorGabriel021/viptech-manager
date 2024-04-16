import { useReducer, useCallback } from "react";
import { CommonModalImages } from "shared/components/AppModal";
import { IModalButtonsProps } from "shared/components/AppModal/components/Modal/index";

const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";
const LOADING_MODAL = "LOADING_MODAL";
const STOP_LOADING_MODAL = "STOP_LOADING_MODAL";

type UseModal = [
  typeof INIT_STATE,
  (props: ShowModalProps) => void,
  () => void,
  () => void,
  () => void
];

const INIT_STATE = {
  title: "",
  description: "",
  open: false,
  showOnClose: true,
  isLoadingModal: false,
  image: "sally10" as CommonModalImages,
  buttons: [] as IModalButtonsProps[],
};

export interface ShowModalProps {
  title: string;
  image?: CommonModalImages;
  isLoadingModal?: boolean;
  description?: string;
  showOnClose?: boolean;
  buttons?: IModalButtonsProps[];
}

const showModalAction = (
  props: ShowModalProps
): { type: typeof SHOW_MODAL; modal: ShowModalProps } => ({
  type: SHOW_MODAL,
  modal: props,
});

const hideModalAction = (): { type: typeof HIDE_MODAL } => ({
  type: HIDE_MODAL,
});

const loadingModalAction = (): { type: typeof LOADING_MODAL } => ({
  type: LOADING_MODAL,
});

const stopLoadingModalAction = (): { type: typeof STOP_LOADING_MODAL } => ({
  type: STOP_LOADING_MODAL,
});

const modalReducer = (
  state = INIT_STATE,
  action:
    | ReturnType<typeof showModalAction>
    | ReturnType<typeof hideModalAction>
    | ReturnType<typeof loadingModalAction>
    | ReturnType<typeof stopLoadingModalAction>
): typeof INIT_STATE => {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        ...action.modal,
        open: true,
      };
    }
    case HIDE_MODAL: {
      return {
        ...state,
        open: false,
        isLoadingModal: false,
      };
    }
    case LOADING_MODAL: {
      return {
        ...state,
        isLoadingModal: true,
      };
    }
    case STOP_LOADING_MODAL: {
      return {
        ...state,
        isLoadingModal: false,
      };
    }
    default: {
      return INIT_STATE;
    }
  }
};

const useModal = (): UseModal => {
  const [state, dispatch] = useReducer(modalReducer, INIT_STATE);

  const showModal = useCallback(
    (props: ShowModalProps) => dispatch(showModalAction(props)),
    []
  );
  const hideModal = useCallback(() => dispatch(hideModalAction()), []);
  const loadingModal = useCallback(() => dispatch(loadingModalAction()), []);
  const stopLoadingModal = useCallback(
    () => dispatch(stopLoadingModalAction()),
    []
  );

  return [state, showModal, hideModal, loadingModal, stopLoadingModal];
};

export default useModal;
