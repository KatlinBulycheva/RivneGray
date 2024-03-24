import { Banner } from "../../Banner/Banner";
import { Novelty } from "../../Novelty/Novelty";
import { Catalog } from "../Catalog/Catalog";

export const Home = function() {
  return (
    <>
      <Banner />
      <Novelty />
      <Catalog />
    </>
  );
};