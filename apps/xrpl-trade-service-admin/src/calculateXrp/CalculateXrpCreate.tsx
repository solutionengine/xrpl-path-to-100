import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CalculateXrpCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="currentPrice" source="currentPrice" />
        <NumberInput label="requiredXRPAmount" source="requiredXrpAmount" />
        <NumberInput label="targetPrice" source="targetPrice" />
      </SimpleForm>
    </Create>
  );
};
