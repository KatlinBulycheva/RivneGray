import styles from "./RangePrice.module.css";
import stylesFilterContainer from "../FilterContainer/FilterContainer.module.css";
import { useDispatch } from "react-redux";
import {
  getMaxProductPriceSelector,
  getMinProductPriceSelector,
  setMaxPrice,
  setMinPrice,
} from "../../../redux/slices/filtersSlice";
import { useSelector } from "react-redux";
import ReactSlider from "react-slider";
import { useEffect } from "react";


export const RangePrice = ({ minPriceData, maxPriceData }) => {
  const dispatch = useDispatch();

  const minPriceBound = Math.floor(minPriceData);
  const maxPriceBound = Math.ceil(maxPriceData);

  const minPriceFromState = useSelector(getMinProductPriceSelector);
  const maxPriceFromState = useSelector(getMaxProductPriceSelector);

  useEffect(() => {
    if (!minPriceFromState || !maxPriceFromState) {
      dispatch(setMinPrice(minPriceBound));
      dispatch(setMaxPrice(maxPriceBound));
    }
  }, [dispatch, minPriceBound, maxPriceBound, minPriceFromState, maxPriceFromState]);

  const sliderHandler = (arrValues) => {
    dispatch(setMinPrice(arrValues[0]));
    dispatch(setMaxPrice(arrValues[1]));
  };

  return (
    <div className={stylesFilterContainer.overflowContainer}>
      <p className={stylesFilterContainer.titleList}>Ціна:</p>
      <div className={styles.inputsContainer}>
        <input
          type="text"
          value={minPriceFromState + " ₴"}
          className={styles.inputs}
          // onChange={minPriceHandler}
          disabled
        />
        <span className={styles.delimiter} />
        <input
          type="text"
          value={maxPriceFromState + " ₴"}
          className={styles.inputs}
          // onChange={maxPriceHandler}
          disabled
        />
      </div>
      <ReactSlider
        onChange={sliderHandler}
        value={[minPriceFromState, maxPriceFromState]}
        min={minPriceBound}
        max={maxPriceBound}
        // step={100}
      />
    </div>
  );
};
