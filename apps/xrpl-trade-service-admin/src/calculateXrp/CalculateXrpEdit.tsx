import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CalculateXrpEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="currentPrice" source="currentPrice" />
        <NumberInput label="requiredXRPAmount" source="requiredXrpAmount" />
        <NumberInput label="targetPrice" source="targetPrice" />
      </SimpleForm>
    </Edit>
  );
};
