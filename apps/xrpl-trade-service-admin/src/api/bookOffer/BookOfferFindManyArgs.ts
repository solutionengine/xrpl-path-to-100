import { BookOfferWhereInput } from "./BookOfferWhereInput";
import { BookOfferOrderByInput } from "./BookOfferOrderByInput";

export type BookOfferFindManyArgs = {
  where?: BookOfferWhereInput;
  orderBy?: Array<BookOfferOrderByInput>;
  skip?: number;
  take?: number;
};
