import styles from "@/styles/dropdownmenu.module.css";
import { AiFillCaretUp } from "react-icons/ai";

const DropdownMenu = ({
  style,
  children,
  display,
  setInMenu,
  arrowSpacing,
}: {
  style?: any;
  display: boolean;
  setInMenu?: (inMenu: boolean) => void;
  arrowSpacing?: string;
}) => {
  if (!display) {
    return null;
  }
  return (
    <div
      onMouseLeave={setInMenu ? () => setInMenu(false) : undefined}
      style={{ top: !arrowSpacing ? "3rem" : "2.5rem", ...style }}
      className={styles.container}
    >
      {arrowSpacing && (
        <AiFillCaretUp
          className={styles.upArrow}
          style={{ paddingRight: arrowSpacing }}
        />
      )}
      <div className={styles.menu}>{children}</div>
    </div>
  );
};

export default DropdownMenu;
