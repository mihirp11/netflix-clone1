import styles from "@/styles/navbaritem.module.css";
const NavbarItem = ({ text, icon, style }: { text: string; icon?: string }) => {
  if (!icon) {
    return <div className={styles.item}>{text}</div>;
  }
  return (
    <div style={{ ...style }} className={styles.item}>
      <img src={icon} className={styles.image} />
      {text}
    </div>
  );
};

export default NavbarItem;
