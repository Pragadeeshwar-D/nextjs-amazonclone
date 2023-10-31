import { CategoryUpdateManyWithoutProductsInput } from "./CategoryUpdateManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  categories?: CategoryUpdateManyWithoutProductsInput;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedPrice?: InputJsonValue;
  images?: string | null;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  title?: string;
  titleprice?: number;
  variants?: InputJsonValue;
};
