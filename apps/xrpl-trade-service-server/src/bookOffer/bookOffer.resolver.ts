import * as graphql from "@nestjs/graphql";
import { BookOfferResolverBase } from "./base/bookOffer.resolver.base";
import { BookOffer } from "./base/BookOffer";
import { BookOfferService } from "./bookOffer.service";

@graphql.Resolver(() => BookOffer)
export class BookOfferResolver extends BookOfferResolverBase {
  constructor(protected readonly service: BookOfferService) {
    super(service);
  }
}
