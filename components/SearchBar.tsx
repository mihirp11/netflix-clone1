import styles from "@/styles/searchbar.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const SearchBar = () => {
  const [searching, setSearching] = useState(false);
  return (
    <div
      className={styles.container}
      onClick={() => setSearching(true)}
      onBlur={() => setSearching(false)}
    >
      {searching ? (
        <div className={styles.searchBar}>
          <BsSearch style={{ height: "inherit", padding: "0rem 0.5rem" }} />
          <input
            placeholder={"Titles, people, genres"}
            autoFocus={true}
            className={styles.input}
          />
        </div>
      ) : (
        <BsSearch className={styles.search} />
      )}
    </div>
  );
};

export default SearchBar;
