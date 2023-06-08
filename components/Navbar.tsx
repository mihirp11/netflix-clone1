import { inspect } from "util";
import styles from "@/styles/navbar.module.css";
import NavbarItem from "@/components/NavbarItem";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { useWindowSize } from "react-use";
import { BsChevronDown, BsBell } from "react-icons/bs";
import MobileMenu from "@/components/MobileMenu";
import SearchBar from "@/components/SearchBar";

const Navbar = (userImage: string) => {
  const { width } = useWindowSize();
  const [focus, setFocus] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searching, setSearching] = useState(false);
  const lgScreen = width > 900;
  return (
    <nav className={styles.container}>
      <div className={styles.leftItems}>
        <img className={styles.logo} src={"/images/logo.png"} />
        {lgScreen ? (
          <>
            <NavbarItem text={"Home"} />
            <NavbarItem text={"TV shows"} />
            <NavbarItem text={"Movies"} />
            <NavbarItem text={"New & Popular"} />
            <NavbarItem text={"My List"} />
            <NavbarItem text={"Browse by Languages"} />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              onClick={() => setMobileMenu(!mobileMenu)} //TODO close on click outside component https://www.robinwieruch.de/react-hook-detect-click-outside-component/
              style={{
                display: "flex",
                gap: "0.35rem",
                cursor: "pointer",
                alignSelf: "center",
              }}
            >
              <NavbarItem text={"Browse"} />
              <BsChevronDown
                className={styles.downArrow}
                style={{
                  transform: mobileMenu ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </div>
            <MobileMenu
              display={mobileMenu}
              style={{ position: "absolute", transform: "translateY(1.5rem)" }}
            />
          </div>
        )}
      </div>

      <div className={styles.rightItems}>
        <SearchBar />
        <BsBell
          className={styles.bellIcon}
          style={{ color: "white", cursor: "pointer" }}
        />
        <div
          className={styles.accountButton}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
        >
          <img className={styles.logo} src={"/images/profile-blue.png"} />
          <AiFillCaretDown
            className={styles.downArrow}
            style={{ transform: focus ? "rotate(180deg)" : "rotate(0)" }}
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
