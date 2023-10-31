import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="PAYMENTINTENT" source="paymentintent" />
        <BooleanField label="PAYMENTSTATUSFIELD" source="paymentstatusfield" />
        <TextField label="PRICE" source="price" />
        <TextField label="STATUS" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="USER" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Product"
          target="orderId"
          label="Products"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
