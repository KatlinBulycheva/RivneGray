import stylesCartList from "../../Cart/CartList/CartList.module.css";
import { FavoritesItem } from "../FavoritesItem/FavoritesItem";

export const FavoritesList = () => {
  return (
    <ul className={stylesCartList.cartList}>
      <FavoritesItem />
      <FavoritesItem />
      <FavoritesItem />
      <FavoritesItem />
      <FavoritesItem />
      <FavoritesItem />
      <FavoritesItem />
      <FavoritesItem />
    </ul>
  );
};