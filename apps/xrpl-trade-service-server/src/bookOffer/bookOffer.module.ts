import { Module } from "@nestjs/common";
import { BookOfferModuleBase } from "./base/bookOffer.module.base";
import { BookOfferService } from "./bookOffer.service";
import { BookOfferController } from "./bookOffer.controller";
import { BookOfferResolver } from "./bookOffer.resolver";

@Module({
  imports: [BookOfferModuleBase],
  controllers: [BookOfferController],
  providers: [BookOfferService, BookOfferResolver],
  exports: [BookOfferService],
})
export class BookOfferModule {}
