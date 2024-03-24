import { ButtonYellow } from "../../ButtonYellow/ButtonYellow";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomField } from "../CustomField/CustomField";
import emailFormIcon from "../../../icons/emailForm.svg";
import passwordFormIcon from "../../../icons/passwordForm.svg";
import phoneFormIcon from "../../../icons/phoneForm.svg";
import userFormIcon from "../../../icons/userForm.svg";
import styles from "../SigninForm/SigninForm.module.css";
import { CustomCheckbox } from "../CustomCheckbox/CustomCheckbox";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { userApi } from "../../../api/userAPI";
import { prepareDataSignup } from "../../../utils/helpers/prepareDataSignup";
import { useDispatch } from "react-redux";
import { setTokenUser } from "../../../redux/slices/userSlice";

export const SignupForm = ({ closeLoginModalHandler }) => {
  const dispatch = useDispatch();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: (values) => userApi.signup(values),
  });

  const disableHandler = (values) => {
    return !values.confirmConsent || isLoading;
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        phone: "",
        firstName: "",
        lastName: "",
        confirmConsent: true,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Неправильна адреса електронної пошти")
          .required("Введіть адресу електронної пошти"),
        password: Yup.string()
          .min(8, "Пароль може містити щонайменше 8 символів")
          .matches(/[a-z]/g, "Пароль повинен містити малі латинські літери")
          .matches(/[A-Z]/g, "Пароль повинен містити великі латинські літери")
          .matches(/[0-9]/g, "Пароль має містити цифрии")
          .matches(/[!?@#$%^&*]/g, "пароль має містити символи !?@#$%^&*")
          .required("Введіть пароль"),
        phone: Yup.string().required("Введіть номер телефону"),
        firstName: Yup.string().required("Введіть прізвище"),
        lastName: Yup.string().required("Введіть ім'я"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const prepareValues = prepareDataSignup(values);
        const result = await mutateAsync(prepareValues);
        dispatch(setTokenUser(result.tokenValue));
        closeLoginModalHandler();
        setSubmitting(false);
      }}
    >
      {({ values }) => (
        <Form className={styles.form}>
          <CustomField
            icon={emailFormIcon}
            name="email"
            type="email"
            placeholder="Електронна пошта"
          />

          <CustomField
            icon={passwordFormIcon}
            name="password"
            type={isPasswordHidden ? "password" : "text"}
            placeholder="Пароль"
            isPasswordHidden={isPasswordHidden}
            setIsPasswordHidden={setIsPasswordHidden}
          />

          <CustomField
            icon={phoneFormIcon}
            name="phone"
            type="phone"
            placeholder="Номер телефону"
          />

          <CustomField
            icon={userFormIcon}
            name="firstName"
            type="text"
            placeholder="Прізвище"
          />

          <CustomField
            icon={userFormIcon}
            name="lastName"
            type="text"
            placeholder="Iм'я"
          />

          <CustomCheckbox name="confirmConsent">
            Я згоден з політикою конфіденційності та умовами надання послуг
          </CustomCheckbox>

          <ButtonYellow type="submit" disabled={disableHandler(values)}>
            Зареєструватися
          </ButtonYellow>
          {isError && <p className={styles.error}>{error.message}</p>}
        </Form>
      )}
    </Formik>
  );
};
