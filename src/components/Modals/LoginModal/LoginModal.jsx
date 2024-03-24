import { useState, useEffect } from "react";
import { Modal } from "../../ModalRoot/Modal";
import style from "./LoginModal.module.css";
import classNames from "classnames";
import { Hr } from "../../Hr/Hr";
import { RemembererForm } from "../../Forms/RemembererForm/RemembererForm";
import { CombineForms } from "./CombineForms/CombineForms";

export const LoginModal = ({ isOpenLoginModal, closeLoginModalHandler }) => {
  const [isActiveSignin, setIsActiveSignin] = useState(true);
  const [isOpenRememberer, setIsOpenRememberer] = useState(false);

  useEffect(() => {
    if (!isOpenLoginModal) setIsOpenRememberer(false);
  }, [isOpenLoginModal]);

  return (
    <Modal isOpen={isOpenLoginModal} closeHandler={closeLoginModalHandler}>
      <article className={style.loginModal}>
        <div className={style.containerBtns}>
          {!isOpenRememberer ? (
            <>
              <button
                className={classNames(style.btn, {
                  [style.notActive]: !isActiveSignin,
                })}
                onClick={() => setIsActiveSignin(true)}
              >
                Авторизувати
              </button>
              <button
                className={classNames(style.btn, {
                  [style.notActive]: isActiveSignin,
                })}
                onClick={() => setIsActiveSignin(false)}
              >
                Зареєструватися
              </button>
            </>
          ) : (
            <button className={style.btn} style={{ cursor: 'auto' }}>Забули пароль?</button>
          )}
        </div>
        <Hr />
        {isOpenRememberer ? (
          <RemembererForm />
        ) : (
          <CombineForms
            setIsOpenRememberer={setIsOpenRememberer}
            isActiveSignin={isActiveSignin}
            closeLoginModalHandler={closeLoginModalHandler}
          />
        )}
        <Hr />
      </article>
    </Modal>
  );
};
