import { useDispatch } from "react-redux";
import {
  deleteFilter,
  getFiltersSelector,
  selectFilter,
} from "../../../redux/slices/filtersSlice";
import styles from "./FilterItem.module.css";
import { useSelector } from "react-redux";
import classNames from "classnames";
import checkIcon from "../../../icons/checkMark.svg";
import { useRef, useState } from "react";

export const FilterItem = (props) => {
  const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams();

  const nameFilter = props.nameFilterUI;
  const nameCategoryDev = props.nameCategoryDev;

  // const currentValueFromParams = searchParams.get(nameCategoryDev);

  // const setQueryParametr = (newValue) => {
  //   const prevValue = currentValueFromParams;
  //   if (prevValue) return prevValue + "-" + newValue;
  //   return newValue;
  // };

  // const removeQueryParametr = (removedValue) => {
  //   const prevValue = currentValueFromParams;
  //   return prevValue
  //     .split("-")
  //     .filter((parametr) => parametr !== removedValue)
  //     .join("-");
  // };

  const filters = useSelector(getFiltersSelector);
  const arrayItemsCategory = filters[nameCategoryDev];
  const isConsistInFilters = arrayItemsCategory?.includes(nameFilter);
  // const isConsistInParams = currentValueFromParams
  //   ? currentValueFromParams.includes(nameFilter)
  //   : false;

  const filterHandler = () => {
    if (!isConsistInFilters) {
      dispatch(selectFilter(props));
      // setSearchParams({
      //   ...Object.fromEntries(searchParams.entries()),
      //   [nameCategoryDev]: setQueryParametr(nameFilter),
      // });

      return;
    }

    dispatch(deleteFilter(props));
    // setSearchParams({
    //   ...Object.fromEntries(searchParams.entries()),
    //   [nameCategoryDev]: removeQueryParametr(nameFilter),
    // });
  };

  // show title for long filterItem
  const [title, setTitle] = useState(null);
  const refTitle = useRef();
  const mouseMoveHandler = () => {
    const width = refTitle.current.getBoundingClientRect().width;
    if (width >= 172) setTitle(nameFilter);
  };
  //

  return (
    <li className={styles.li}>
      <input
        type="checkbox"
        className={styles.input}
        id={nameCategoryDev + nameFilter}
        onChange={filterHandler}
      />

      <label className={styles.label} htmlFor={nameCategoryDev + nameFilter}>
        <div
          className={classNames([styles.checkbox], {
            [styles.chacked]: isConsistInFilters,
          })}
        >
          {isConsistInFilters && <img src={checkIcon} alt=""/>}
        </div>

        <span onMouseMove={mouseMoveHandler} ref={refTitle} title={title}>{nameFilter}</span>
      </label>
    </li>
  );
};
