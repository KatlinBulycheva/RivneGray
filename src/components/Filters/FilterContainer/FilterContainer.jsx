import classNames from "classnames";
import { FilterItem } from "../FilterItem/FilterItem";
import styles from "./FilterContainer.module.css";

export const FilterContainer = ({ category, nameCategoryDev }) => {

  return (
    <div className={styles.overflowContainer}>
      <p className={styles.titleList}>{category.nameCategory}</p>
      <ul className={classNames({
        [styles.overflowList]: true,
        // if the number of checkboxes in the container is more than 7, then scroll
        [styles.overflowListScroll]: category.nameFilters.length > 7,
      })}>
        {category.nameFilters.map(nameFilter => (
          <FilterItem
            key={nameFilter}
            nameCategoryDev={nameCategoryDev}
            nameFilterUI={nameFilter}
          />
        ))}
      </ul>
    </div>
  );
};
