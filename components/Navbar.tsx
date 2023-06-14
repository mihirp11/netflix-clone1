import { inspect } from "util";
import styles from "@/styles/navbar.module.css";
import NavbarItem from "@/components/NavbarItem";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { BsChevronDown, BsBell } from "react-icons/bs";
import MobileMenu from "@/components/MobileMenu";
import SearchBar from "@/components/SearchBar";
import DropdownMenu from "@/components/DropdownMenu";

const Navbar = (userImage: string) => {
  const { width } = useWindowSize();
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [inMenu, setInMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 65) {
        setShowBackground(false);
      } else setShowBackground(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lgScreen = width > 900;
  return (
    <nav
      className={styles.container}
      style={{
        background: !showBackground
          ? "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.0)"
          : "#141414",
        transition: showBackground
          ? "background-color 0.2s ease-in"
          : "background-color 0.2s ease-in",
      }}
    >
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
              height: "inherit",
              justifyContent: "center",
            }}
          >
            <div
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} //TODO close on click outside component https://www.robinwieruch.de/react-hook-detect-click-outside-component/
              style={{
                display: "flex",
                gap: "0.35rem",
                cursor: "pointer",
              }}
            >
              <NavbarItem text={"Browse"} />
              <BsChevronDown
                className={styles.downArrow}
                style={{
                  transform: mobileMenuOpen ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </div>

            <DropdownMenu display={mobileMenuOpen} style={{ left: "10rem" }}>
              <NavbarItem text={"Home"} />
              <NavbarItem text={"TV shows"} />
              <NavbarItem text={"Movies"} />
              <NavbarItem text={"New & Popular"} />
              <NavbarItem text={"My List"} />
              <NavbarItem text={"Browse by Languages"} />
            </DropdownMenu>
          </div>
        )}
      </div>

      <div className={styles.rightItems}>
        <SearchBar />
        <div className={styles.dropdownIconsContainer}>
          <div
            className={styles.accountButton}
            onMouseOver={() => {
              setInMenu(true);
              setNotificationsOpen(true);
            }}
            onMouseLeave={() => setNotificationsOpen(false)}
          >
            <BsBell
              className={styles.bellIcon}
              style={{ color: "white", cursor: "pointer" }}
            />

            <DropdownMenu
              setInMenu={() => setInMenu(inMenu)}
              display={notificationsOpen}
              style={{ right: "5rem" }}
              arrowSpacing={"0.65rem"}
            >
              <NavbarItem text={"Profile2"} icon={"/images/profile-blue.png"} />
              <NavbarItem text={"Profile2"} />
            </DropdownMenu>
          </div>
          <div
            className={styles.accountButton}
            onMouseEnter={() => {
              setInMenu(true);
              setAccountMenuOpen(true);
            }}
            onMouseLeave={() => setAccountMenuOpen(false)}
          >
            <div style={{ cursor: "pointer" }} className={styles.accountButton}>
              <img className={styles.logo} src={"/images/profile-blue.png"} />
              <AiFillCaretDown
                className={styles.downArrow}
                style={{
                  transform: accountMenuOpen ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </div>
            <DropdownMenu
              setInMenu={() => setInMenu(inMenu)}
              display={accountMenuOpen}
              style={{ right: "2rem" }}
              arrowSpacing={"1.2rem"}
            >
              <NavbarItem text={"Profile2"} icon={"/images/profile-blue.png"} />
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
