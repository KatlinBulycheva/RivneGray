import { useEffect, useMemo, useState } from "react";
import { Hr } from "../Hr/Hr";
import styles from "./Sorting.module.css";
import vectorIconDown from "../../icons/vectorDown.svg";
import classNames from "classnames";
import { getSortValueSelector, selectSortValue } from "../../redux/slices/sortSlice";
import { SortingItem } from "./SortingItem/SortingItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Sorting = () => {
  const valuesSorting = useMemo(() => [
    ["за релевантністю", 'NAME_DESC'],
    ["нові надходження", 'NEWEST'],
    ["від дешевих до дорогих", 'PRICE_ASC'],
    ["від дорогих до дешевих", 'PRICE_DESC'],
  ], []);

  const dispatch = useDispatch();

  const sortValue = useSelector(getSortValueSelector);

  const [isActive, setIsActive] = useState(false);

  const dropdownHandler = () => {
    setIsActive(!isActive);
  };

  const selectValueHandler = (valueSorting) => {
    dispatch(selectSortValue(valueSorting));
    setIsActive(false);
  };

  useEffect(() => {
    if (!sortValue) dispatch(selectSortValue(valuesSorting[0]));
  }, [dispatch, sortValue, valuesSorting]);

  return (
    <aside
      className={classNames({
        [styles.sortingContainerActive]: isActive,
        [styles.sortingContainer]: true,
      })}
    >
      <Hr />
      <div className={styles.sorting}>
        <span>Сортувати за:</span>
        <div className={styles.dropdown}>
          <div className={styles.dropdownBtn} onClick={dropdownHandler}>
            <img
              className={classNames({
                [styles.vectorImg]: true,
                [styles.vectorImgActive]: isActive,
              })}
              src={vectorIconDown}
              alt=""
            />
            {sortValue[0]}
          </div>

          {isActive && (
            <div className={styles.dropdownContent}>
              {valuesSorting.map((doubleValue) => (
                <SortingItem
                  value={doubleValue}
                  key={doubleValue[1]}
                  selectValueHandler={selectValueHandler}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Hr />
    </aside>
  );
};
