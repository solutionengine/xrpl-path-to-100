import { BookOffer as TBookOffer } from "../api/bookOffer/BookOffer";

export const BOOKOFFER_TITLE_FIELD = "offerId";

export const BookOfferTitle = (record: TBookOffer): string => {
  return record.offerId?.toString() || String(record.id);
};
