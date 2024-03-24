import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useEffect } from "react";
import { ReactComponent as CloseCrossIcon } from "../../icons/closeCross.svg";



export const Modal = ({ isOpen, closeHandler, children }) => {
  if (!isOpen) return null;

  const closeModalByClickWr = (e) => {
    if (e.target === e.currentTarget) closeHandler();
  };

  return ReactDOM.createPortal(
    <div className={styles.modalWr} onMouseUp={closeModalByClickWr}>
      <ModalInner closeHandler={closeHandler}>{children}</ModalInner>
    </div>,
    document.getElementById("root-modal")
  );
};


function ModalInner({ closeHandler, children }) {
  const closeModalByButton = () => closeHandler();

  useEffect(() => {
    const closeModalByEscape = (e) => {
      if (e.key === "Escape") closeHandler();
    };

    document.addEventListener("keydown", closeModalByEscape);

    return () => {
      document.removeEventListener("keydown", closeModalByEscape);
    };
  }, []);

  return <div className={styles.modalInner}>
    <button className={styles.btnCloseIcon} onMouseUp={closeModalByButton}>
      <CloseCrossIcon className={styles.closeIcon} />
    </button>
    {children}
  </div>;
}
