import { useSelector } from "react-redux";
import { ButtonWhite } from "../../ButtonWhite/ButtonWhite";
import {
  getPaginationValueSelector,
  selectPaginationValue,
} from "../../../redux/slices/paginationSlice";
import { LEFT_PAGE, RIGHT_PAGE } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { ReactComponent as VectorRightIcon } from "../../../icons/vectorRight.svg";
import { ReactComponent as VectorLeftIcon } from "../../../icons/vectorLeft.svg";

export const PaginationItem = ({ pageItem }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(getPaginationValueSelector);
  const isActive = useMemo(
    () => pageItem === currentPage,
    [currentPage, pageItem]
  );

  const onClickHandler = () => {
    if (pageItem === LEFT_PAGE) {
      dispatch(selectPaginationValue(currentPage - 1));
    } else if (pageItem === RIGHT_PAGE) {
      dispatch(selectPaginationValue(currentPage + 1));
    } else dispatch(selectPaginationValue(pageItem));
  };

  const ownStyles = {
    width: "auto",
    paddingLeft: "10px",
    paddingRight: "10px",
    border: isActive
      ? "1.5px solid var(--color-blue)"
      : "1.5px solid var(--color-yellow)",
  };

  const returnJSX = () => {
    if (pageItem === LEFT_PAGE) return <VectorLeftIcon />;
    else if (pageItem === RIGHT_PAGE) return <VectorRightIcon />;
    else return pageItem;
  };

  return (
    <ButtonWhite onClickHandler={onClickHandler} ownStyles={ownStyles}>
      {returnJSX()}
    </ButtonWhite>
  );
};
