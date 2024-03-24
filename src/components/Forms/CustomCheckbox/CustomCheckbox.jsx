import styles from "./CustomCheckbox.module.css";
import checkIcon from "../../../icons/checkMark.svg";
import { useField } from "formik";

export const CustomCheckbox = ({ children, ...props }) => {

  const [field, meta] = useField(props);
  return (
    <div>
      <input
        type="checkbox"
        className={styles.input}
        id={field.name}
        {...field}
        {...props}
      />

      <label className={styles.label} htmlFor={field.name}>
        <div
          className={styles.checkbox}
        >
          {field.value && <img src={checkIcon} alt="" />}
        </div>

        <span>{children}</span>
      </label>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </ div>
  );
};
