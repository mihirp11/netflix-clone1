import styles from "@/styles/dropdownmenu.module.css";

const DropdownMenu = ({
  style,
  children,
}: {
  style: any;
}) => {
  return (
    <div style={{ ...style }} className={styles.menu}>
      {children}
    </div>
  );
};

export default DropdownMenu;
