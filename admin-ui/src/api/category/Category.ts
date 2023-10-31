import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  id: string;
  name: string;
  product?: Array<Product>;
  updatedAt: Date;
};
