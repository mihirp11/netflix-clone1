import styles from "../styles/inputbox.module.css";
import React from "react";

type InputBoxProps = {
  id: string;
  label: string;
  onChange: unknown;
  value: string;
  type?: string;
};
export const InputBox = ({
  id,
  label,
  onChange,
  value,
  type,
}: InputBoxProps) => {
  return (
    <div className={styles.container} tabIndex={1}>
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        placeholder={" "}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
