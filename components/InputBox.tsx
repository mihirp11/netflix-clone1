import styles from "../styles/inputbox.module.css";
export const InputBox = ({ id, label, onChange, value, type }) => {
  return (
    <div>
      <input id="input" className={styles.input} placeholder={" "} />
      <label className={styles.label} htmlFor="input" />
    </div>
  );
};
