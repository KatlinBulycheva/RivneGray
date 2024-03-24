import { useSelector } from "react-redux";
import { ButtonWhite } from "../../../ButtonWhite/ButtonWhite";
import { ButtonYellow } from "../../../ButtonYellow/ButtonYellow";
import styles from "./CartTotal.module.css";
import { getTokenSelector } from "../../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../../redux/slices/cartSlice";
import { shoppingCartApi } from "../../../../api/shoppingCartAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getQueryKeyGetCart } from "../../../../utils/helpers/getQueryKeys";

export const CartTotal = ({ products }) => {
  const client = useQueryClient();
  const dispatch = useDispatch();
  const token = useSelector(getTokenSelector);

  let finalPriceCart = 0;
  let finalCountCart = 0;

  products.forEach((product) => {
    finalPriceCart += product.productPrice * product.quantity;
    finalCountCart += product.quantity;
  });

  const {
    mutateAsync: clearCartWithToken,
    isError,
    error,
  } = useMutation({
    mutationFn: () => shoppingCartApi.clearCart(token),
    onSuccess: () => {client.invalidateQueries({ queryKey: getQueryKeyGetCart() });}
  });

  const clearCartWithoutToken = () => {
    dispatch(clearCart());
  };

  return (
    <aside className={styles.cartTotal}>
      <section className={styles.orderingSection}>
        <h2 className={styles.countCartTitle}>
          В кошику <span>Товарів - {finalCountCart}</span>
        </h2>
        <h2 className={styles.priceCartTitle}>
          {finalPriceCart}
          <span>₴</span>
        </h2>
        <ButtonYellow>Перейти до оформлення</ButtonYellow>
      </section>
      <ButtonWhite
        onClickHandler={token ? clearCartWithToken : clearCartWithoutToken}
      >
        Очистити кошик
      </ButtonWhite>
      {isError && <p className="error">{error.message}</p>}
    </aside>
  );
};
