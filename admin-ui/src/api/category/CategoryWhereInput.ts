import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  product?: ProductListRelationFilter;
};
