import styles from "./CartItem.module.css";
import { ReactComponent as TrashIcon } from '../../../../icons/trash.svg';
import { ReactComponent as FavoritesIcon } from '../../../../icons/bookmark.svg';
import { Hr } from "../../../Hr/Hr";

export const CartItem = ({ product }) => {



  return (
    <li className={styles.cartItemLi}>
      <div className={styles.containerLeft}>
        <figure className={styles.containerImg}>
          <img src={product.productImageURLs[0]} alt="" />
        </figure>
        <div className={styles.title}>
          <h3>{product.productName}</h3>
          <span>{`Код товара ${product.productCode}`}</span>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.containerCounter}>
          <button>-</button>
          <div className={styles.containerCounterNumber}>
            <span>1 шт</span>
            <Hr color='#333333' />
          </div>
          <button>+</button>
        </div>
        <h3>{product.productPrice} <span>₴</span></h3>
        <div className={styles.containerButtons}>
          <FavoritesIcon className={styles.icon} title="додати в обране"/>
          <TrashIcon className={styles.icon} title="видалити з кошика"/>
        </div>
      </div>
    </li>
  );
};
