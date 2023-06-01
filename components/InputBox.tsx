import styles from "../styles/inputbox.module.css";
import React, { useState } from "react";

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
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className={styles.container} tabIndex={1}>
      <input
        onChange={onChange}
        type={isHidden ? "text" : type}
        value={value}
        id={id}
        placeholder={" "}
      />
      <label id="label" className={styles.label} htmlFor={id}>
        {label}
      </label>
      {!(type === "username" || type === "email") && (
        <label
          onClick={() => setIsHidden(!isHidden)}
          className={styles.showButton}
          htmlFor={id}
        >
          {isHidden ? "HIDE" : "SHOW"}
        </label>
      )}
    </div>
  );
};
