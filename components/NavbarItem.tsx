import styles from "@/styles/navbaritem.module.css";
const NavbarItem = ({ text }: { text: string }) => {
  return <div className={styles.item}>{text}</div>;
};

export default NavbarItem;
