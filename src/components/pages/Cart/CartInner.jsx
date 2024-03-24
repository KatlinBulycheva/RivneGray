import { Link } from "react-router-dom";
import { withQuery } from "../../HOCs/withQuery";
import styles from "./Cart.module.css";
import { CartList } from "./CartList/CartList";
import { CartTotal } from "./CartTotal/CartTotal";
import { ButtonWhite } from "../../ButtonWhite/ButtonWhite";
import { ButtonYellow } from "../../ButtonYellow/ButtonYellow";

export const CartInner = withQuery(({ data: products }) => {
  const jsxCart = () => {
    if (products.length)
      return (
        <>
          <CartList products={products} />
          <CartTotal products={products} />
        </>
      );
    return (
      <div className={styles.emptyCartContainer}>
        <h2>Кошик порожній</h2>
        <p className={styles.bodyEmptyCart}>
                Перегляньте пропозиції на 
          <Link to="/"> головній сторінці</Link>, скористайтесь 
          <Link to="/catalog"> каталогом</Link> або пошуком
        </p>
        <div className={styles.btnContainer}>
          <Link to="/">
            <ButtonWhite>На головну</ButtonWhite>
          </Link>
          <Link to="/catalog">
            <ButtonYellow>До каталогу</ButtonYellow>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.cartSection}>
      <h1>КОШИК</h1>
      {jsxCart()}
    </section>
  );
});
