import styles from "@/styles/mobilemenu.module.css";
import NavbarItem from "@/components/NavbarItem";

const MobileMenu = ({ display, style }: { display: boolean; style: any }) => {
  if (!display) {
    return null;
  }
  return (
    <div style={{ ...style }} className={styles.menu}>
      <NavbarItem text={"Home"} />
      <NavbarItem text={"TV shows"} />
      <NavbarItem text={"Movies"} />
      <NavbarItem text={"New & Popular"} />
      <NavbarItem text={"My List"} />
      <NavbarItem text={"Browse by Languages"} />
    </div>
  );
};

export default MobileMenu;
