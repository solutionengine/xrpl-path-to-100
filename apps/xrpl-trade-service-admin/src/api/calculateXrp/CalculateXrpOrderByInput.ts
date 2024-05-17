import { SortOrder } from "../../util/SortOrder";

export type CalculateXrpOrderByInput = {
  createdAt?: SortOrder;
  currentPrice?: SortOrder;
  id?: SortOrder;
  requiredXrpAmount?: SortOrder;
  targetPrice?: SortOrder;
  updatedAt?: SortOrder;
};
