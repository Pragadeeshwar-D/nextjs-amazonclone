import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string;
  product?: ProductUpdateManyWithoutCategoriesInput;
};
