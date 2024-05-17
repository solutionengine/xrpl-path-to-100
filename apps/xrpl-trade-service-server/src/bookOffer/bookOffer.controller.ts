import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BookOfferService } from "./bookOffer.service";
import { BookOfferControllerBase } from "./base/bookOffer.controller.base";

@swagger.ApiTags("bookOffers")
@common.Controller("bookOffers")
export class BookOfferController extends BookOfferControllerBase {
  constructor(protected readonly service: BookOfferService) {
    super(service);
  }
}
