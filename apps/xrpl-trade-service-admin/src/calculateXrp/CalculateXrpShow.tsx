import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CalculateXrpShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentPrice" source="currentPrice" />
        <TextField label="ID" source="id" />
        <TextField label="requiredXRPAmount" source="requiredXrpAmount" />
        <TextField label="targetPrice" source="targetPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
