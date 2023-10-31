import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name: string;
  product?: ProductCreateNestedManyWithoutCategoriesInput;
};
