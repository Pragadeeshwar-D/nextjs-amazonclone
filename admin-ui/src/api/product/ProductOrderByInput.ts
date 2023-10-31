import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountedPrice?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  orderId?: SortOrder;
  title?: SortOrder;
  titleprice?: SortOrder;
  updatedAt?: SortOrder;
  variants?: SortOrder;
};
