import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="COLORS" source="colors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DESCRIPTION" source="description" />
        <TextField label="DISCOUNTED PRICE" source="discountedPrice" />
        <TextField label="ID" source="id" />
        <TextField label="IMAGES" source="images" />
        <ReferenceField label="orders" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TITLE" source="title" />
        <TextField label="TITLEPRICE" source="titleprice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VARIANTS" source="variants" />
      </Datagrid>
    </List>
  );
};
