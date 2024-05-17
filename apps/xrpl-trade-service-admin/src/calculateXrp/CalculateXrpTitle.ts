import { CalculateXrp as TCalculateXrp } from "../api/calculateXrp/CalculateXrp";

export const CALCULATEXRP_TITLE_FIELD = "id";

export const CalculateXrpTitle = (record: TCalculateXrp): string => {
  return record.id?.toString() || String(record.id);
};
