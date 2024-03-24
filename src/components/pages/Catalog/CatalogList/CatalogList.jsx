import { withQuery } from "../../../HOCs/withQuery";
import { ProductCard } from "../../../ProductCard/ProductCard";
import styles from "./CatalogList.module.css";

export const CatalogList = withQuery(({ data: boardgames, cartServer }) => {
  console.log(cartServer);
  return (
    <>
      {boardgames.length ? (
        <article className={styles.catalogList}>
          {boardgames
            ? boardgames.map((boardgame) => (
              <ProductCard
                key={boardgame.id}
                productName={boardgame.productName}
                productPrice={boardgame.productPrice}
                productQuantityInStock={boardgame.productQuantityInStock}
                productImageURL={boardgame.productImageURL}
                id={boardgame.id}
                cartServer={cartServer}
              />
            ))
            : []}
        </article>
      ) : (
        <article className={styles.emptyCatalog}>
          <p>За вашим запитом товари не знайдені</p>
        </article>
      )}
    </>
  );
});
