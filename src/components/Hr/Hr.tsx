import { FC } from "react";
import styles from "./Hr.module.css";

type Props = {
    color?: string;
};

export const Hr: FC<Props> = ({ color }) => {
  return (
    <div className={styles.hr} style={color ? { background: color } : {}}/>
  );
};
