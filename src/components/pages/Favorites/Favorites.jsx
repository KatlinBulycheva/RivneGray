import classNames from "classnames";
import stylesCart from "../Cart/Cart.module.css";
import styles from "./Favorites.module.css";
import { FavoritesTotal } from "./FavoritesTotal/FavoritesTotal";
import { FavoritesList } from "./FavoritesList/FavoritesList";

export const Favorites = function() {
  return (
    <section className={classNames(stylesCart.cartSection, styles.favoritesSection)}>
      <h1>ОБРАНI</h1>
      <FavoritesTotal />
      <FavoritesList />
    </section>

  );
};
