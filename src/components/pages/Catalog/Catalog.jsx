import { useQuery } from "@tanstack/react-query";
import styles from "./Catalog.module.css";
import { getQueryKeyFilters } from "../../../utils/helpers/getQueryKeys";
import { boardgameApi } from "../../../api/boardgameAPI";
import { CatalogBody } from "./CatalogBody";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/slices/filtersSlice";
import { useEffect } from "react";

export const Catalog = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, error, refetch, data } = useQuery({
    queryKey: getQueryKeyFilters(),
    queryFn: () => boardgameApi.getFilters(),
  });

  useEffect(() => {
    dispatch(setFilters(data ? Object.keys(data.filters) : []));
  }, [data, dispatch]);

  return (
    <section className={styles.catalog}>
      <h1>КАТАЛОГ</h1>
      <CatalogBody
        filters={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        refetch={refetch}
      />
    </section>
  );
};
