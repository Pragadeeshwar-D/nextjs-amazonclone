import { CategoryCreateNestedManyWithoutProductsInput } from "./CategoryCreateNestedManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  categories?: CategoryCreateNestedManyWithoutProductsInput;
  colors: InputJsonValue;
  description: InputJsonValue;
  discountedPrice: InputJsonValue;
  images?: string | null;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  title: string;
  titleprice: number;
  variants: InputJsonValue;
};
