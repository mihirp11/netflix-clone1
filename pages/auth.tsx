import styles from "../styles/auth.module.css";
import { InputBox } from "@/components/InputBox";
import "@/styles/globals.css";
import { useState } from "react";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.fullPage}>
      <nav className={styles.navbar}>
        <img className={styles.logo} src={"/images/logo.png"} />
      </nav>
      <div className={styles.signInContainer}>
        <div className={styles.signInBox}>
          <h2 className={styles.signInHeader}>Sign In</h2>
          <div className={styles.inputContainer}>
            <InputBox
              label={"Username"}
              value={userName}
              onChange={(a) => setUserName(a.target.value)}
              id={"username"}
              type={"username"}
            />
            <InputBox
              label={"Email"}
              onChange={(a) => setEmail(a.target.value)}
              id={"email"}
              type={"email"}
              value={email}
            />
            <InputBox
              label={"Password"}
              onChange={(event) => setPassword(event.target.value)}
              id={"password"}
              type={"password"}
              value={password}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
