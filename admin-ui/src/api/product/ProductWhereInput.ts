import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type ProductWhereInput = {
  categories?: CategoryListRelationFilter;
  colors?: JsonFilter;
  description?: JsonFilter;
  discountedPrice?: JsonFilter;
  id?: StringFilter;
  images?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
  title?: StringFilter;
  titleprice?: FloatFilter;
  variants?: JsonFilter;
};
