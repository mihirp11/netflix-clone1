import styles from "../styles/auth.module.css";
import { InputBox } from "@/components/InputBox";
import "@/styles/globals.css";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import googleLogo from "../public/images/google.png";
import githubLogo from "../public/images/github.png";
import { mockProviders } from "next-auth/client/__tests__/helpers/mocks";

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registerMode, setRegisterMode] = useState(false);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        userName,
        password,
      });

      await login();
    } catch (error) {
      console.log(error);
    }
  }, [email, userName, password, login]);

  return (
    <div className={styles.fullPage}>
      <nav className={styles.navbar}>
        <img className={styles.logo} src={"/images/logo.png"} />
      </nav>
      <div className={styles.signInContainer}>
        <div className={styles.signInBox}>
          <h2 className={styles.signInHeader}>Sign In</h2>
          <div className={styles.inputContainer}>
            {registerMode && (
              <InputBox
                label={"Username"}
                onChange={(a) => setUserName(a.target.value)}
                id={"username"}
                type={"username"}
                value={userName}
              />
            )}
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
            <button
              onClick={registerMode ? register : login}
              className={styles.loginButton}
            >
              {registerMode ? "Sign Up" : "Login"}
            </button>
            <span className={styles.signInOptions}>
              <Image
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className={styles.Image}
                src={googleLogo}
                alt={"Google"}
              />
              <Image
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className={styles.Image}
                src={githubLogo}
                alt={"Github"}
              />
            </span>
            <div className={styles.signInLink}>
              <p style={{ display: "inline" }}>
                {registerMode ? "Already have an account?" : "New to Netflix?"}
              </p>
              <div onClick={() => setRegisterMode(!registerMode)}>
                {registerMode ? "Sign in" : "Create an Account"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
