import { useOutletContext } from "react-router-dom";
import { Hr } from "../../../Hr/Hr";
import styles from "./UserContacts.module.css";
import { UserContactsItem } from "./UserContactsItem/UserContactsItem";
import { userApi } from "../../../../api/userAPI";
import { useMutation } from "@tanstack/react-query";

export const UserContacts = () => {
  const [data] = useOutletContext();

  const {
    mutate: mutateAsyncPhone,
    error: errorPhone,
    isError: isErrorPhone,
    isLoading: isLoadingPhone,
  } = useMutation({
    mutationFn: (valueObj) => userApi.changePhone(valueObj),
  });

  const {
    mutate: mutateAsyncEmail,
    error: errorEmail,
    isError: isErrorEmail,
    isLoading: isLoadingEmail,
  } = useMutation({
    mutationFn: (valueObj) => userApi.changeEmail(valueObj),
  });

  return (
    <article className={styles.leftSection}>
      <h3>Контактні дані</h3>
      <Hr />
      <div className={styles.content}>
        <UserContactsItem initValue={data.firstName} title={"Фамілія, Ім’я"} />
        <UserContactsItem
          initValue={data.phone}
          title={"Контактний телефон"}
          mutateAsync={mutateAsyncPhone}
          isLoading={isLoadingPhone}
          isError={isErrorPhone}
          name='phone'
        />
        {isErrorPhone && <p className={styles.error}>{errorPhone.message}</p>}
        <UserContactsItem 
          initValue={data.email} 
          title={"E-mail"} 
          mutateAsync={mutateAsyncEmail}
          isLoading={isLoadingEmail}
          isError={isErrorEmail}
          name='email'
        />
        {isErrorEmail && <p className={styles.error}>{errorEmail.message}</p>}
      </div>
    </article>
  );
};
