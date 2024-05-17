import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BookOfferWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  offerId?: StringNullableFilter;
  price?: FloatNullableFilter;
};
