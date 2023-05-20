import styles from "../styles/auth.module.css";
import logo from "../public/images/logo.png";
import Image from "next/image";
import autoprefixer from "autoprefixer";
const Auth = () => {
  return (
    <div className={styles.fullpage}>
      <div className={styles.overlay}>
        <nav className={styles.navbar}>
          <img src={logo} />
        </nav>
      </div>
    </div>
  );
};
export default Auth;
