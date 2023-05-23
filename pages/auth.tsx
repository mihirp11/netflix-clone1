import styles from "../styles/auth.module.css";
import { InputBox } from "@/components/InputBox";
import "@/styles/globals.css";
const Auth = () => {
  return (
    <div className={styles.fullPage}>
      <nav className={styles.navbar}>
        <img className={styles.logo} src={"/images/logo.png"} />
      </nav>
      <div className={styles.signInContainer}>
        <div className={styles.signInBox}>
          <h2 className={styles.signInHeader}>Sign In</h2>
          <div className={styles.inputContainer}>
            <InputBox label={"Email or phone number"} />
            <InputBox label={"Password"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
