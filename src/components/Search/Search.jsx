import styles from "./Search.module.css";
// import searchIcon from "../../icons/search.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

export const Search = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(setSearchValue(value));
  }, []);

  const dispatch = useDispatch();

  const changeValueHandler = (event) => {
    setValue(event.target.value);
  };

  const setValueHandlerEnter = (event) => {
    if (event.keyCode === 13) dispatch(setSearchValue(value));
  };

  const setValueHandlerClick = () => {
    dispatch(setSearchValue(value));
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Пошук по товарах"
        className={styles.inputSearch}
        value={value}
        onChange={changeValueHandler}
        onKeyDown={setValueHandlerEnter}
      />
      <div className={styles.loupeIconContainer}>
        <SearchIcon
          onClick={setValueHandlerClick}
          className={styles.loupeIcon}
        />
      </div>
    </div>
  );
};
