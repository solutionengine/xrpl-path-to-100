import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CalculateXrpWhereInput = {
  currentPrice?: FloatNullableFilter;
  id?: StringFilter;
  requiredXrpAmount?: FloatNullableFilter;
  targetPrice?: FloatNullableFilter;
};
