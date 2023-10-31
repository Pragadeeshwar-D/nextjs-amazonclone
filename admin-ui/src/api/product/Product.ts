import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  categories?: Array<Category>;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: JsonValue;
  id: string;
  images: string | null;
  order?: Order | null;
  reviews?: Array<Review>;
  title: string;
  titleprice: number;
  updatedAt: Date;
  variants: JsonValue;
};
