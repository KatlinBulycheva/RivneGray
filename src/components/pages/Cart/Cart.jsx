import { useSelector } from "react-redux";
import { getTokenSelector } from "../../../redux/slices/userSlice";
import { useQuery } from "@tanstack/react-query";
import { boardgameApi } from "../../../api/boardgameAPI";
import {
  getQueryKeyBoardgamesCartByIds,
  getQueryKeyGetCart,
  getQueryKeySetBoardgamesCartByIds,
} from "../../../utils/helpers/getQueryKeys";
import { getShoppingCartSelector } from "../../../redux/slices/cartSlice";
import { CartInner } from "./CartInner";
import { shoppingCartApi } from "../../../api/shoppingCartAPI";

export const Cart = function () {
  const cart = useSelector(getShoppingCartSelector);
  const ids = cart.map((product) => product.id);
  const token = useSelector(getTokenSelector);

  // token does not exist
  const {
    data: dataWithoutToken,
    isFetching: isFetchingWithoutToken,
    isError: isErrorWithoutToken,
    error: errorWithoutToken,
    refetch: refetchWithoutToken,
  } = useQuery({
    queryKey: getQueryKeyBoardgamesCartByIds(ids),
    queryFn: () => boardgameApi.getBoardgamesByIds(ids),
    enabled: !token,
  });

  // token exist
  const {
    data: setDataWithToken,
    isFetching: setIsFetchingWithToken,
    isError: setIsErrorWithToken,
    error: setErrorWithToken,
    refetch: setRefetchWithToken,
  } = useQuery({
    queryKey: getQueryKeySetBoardgamesCartByIds(ids),
    queryFn: () => shoppingCartApi.addProductsToCart(ids, token),
    enabled: !!token,
  });

  const {
    data: preDataWithToken,
    isFetching: preIsFetchingWithToken,
    isError: preIsErrorWithToken,
    error: preErrorWithToken,
    refetch: preRefetchWithToken,
  } = useQuery({
    queryKey: getQueryKeyGetCart(),
    queryFn: () => shoppingCartApi.getCart(token),
    enabled: !!token && !!setDataWithToken,
  });

  console.log(preDataWithToken);

  const idsCartFromFetch = preDataWithToken
    ? preDataWithToken.map((productCart) => productCart.productId)
    : undefined;

  const {
    data: dataWithToken,
    isFetching: isFetchingWithToken,
    isError: isErrorWithToken,
    error: errorWithToken,
    refetch: refetchWithToken,
  } = useQuery({
    queryKey: getQueryKeyBoardgamesCartByIds(idsCartFromFetch),
    queryFn: () => boardgameApi.getBoardgamesByIds(idsCartFromFetch),
    enabled: !!token && !!idsCartFromFetch,
  });

  const combineDataCart = () => {
    if (token) {
      return dataWithToken && preDataWithToken
        ? dataWithToken.map((el, i) => ({
          quantity: preDataWithToken[i].quantity,
          ...el,
        }))
        : [];
    } else {
      return dataWithoutToken
        ? dataWithoutToken.map((el, i) => ({ ...el, ...cart[i] }))
        : [];
    }
  };

  return (
    <CartInner
      data={combineDataCart()}
      isLoading={
        isFetchingWithoutToken ||
        setIsFetchingWithToken ||
        preIsFetchingWithToken ||
        isFetchingWithToken
      }
      isError={
        isErrorWithoutToken ||
        setIsErrorWithToken ||
        preIsErrorWithToken ||
        isErrorWithToken
      }
      error={
        errorWithoutToken ||
        setErrorWithToken ||
        preErrorWithToken ||
        errorWithToken
      }
      refetch={
        refetchWithoutToken ||
        setRefetchWithToken ||
        preRefetchWithToken ||
        refetchWithToken
      }
    />
  );
};
