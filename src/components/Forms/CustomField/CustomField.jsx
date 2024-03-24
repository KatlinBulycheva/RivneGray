import { useField } from "formik";
import styles from "./CustomField.module.css";
import classNames from "classnames";
import { InputMask } from "primereact/inputmask";
import eyeIcon from "../../../icons/eye.svg";
import eyeOffIcon from "../../../icons/eyeOff.svg";

export const CustomField = ({ icon, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  const eyeHandler = (e) => {
    e.preventDefault();
    props.setIsPasswordHidden(!props.isPasswordHidden);
  };

  return (
    <div>
      <label htmlFor={props.name} className={styles.containerField}>
        <img src={icon} alt="" className={styles.icon} />
        <div className={styles.vertical} />
        <div className={styles.wrapperField}>
          {props.name === "phone" ? (
            <InputMask
              mask="+380 (99) 999-99-99"
              {...field}
              type={props.type}
              className={styles.input}
              id={props.name}
            />
          ) : (
            <input
              {...field}
              type={props.type}
              className={styles.input}
              id={props.name}
            />
          )}
          <span
            className={classNames(styles.placeholder, {
              [styles.isSetValue]: !!field.value,
            })}
          >
            {placeholder}
          </span>
          {props.name === "password" ? (
            <span className={styles.eyeContainer}>
              {props.isPasswordHidden ? (
                <img
                  src={eyeOffIcon}
                  alt=""
                  onClick={eyeHandler}
                />
              ) : (
                <img
                  src={eyeIcon}
                  alt=""
                  onClick={eyeHandler}
                />
              )}
            </span>
          ) : null}
        </div>
      </label>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};
