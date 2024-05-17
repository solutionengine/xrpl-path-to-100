import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BookOfferServiceBase } from "./base/bookOffer.service.base";

@Injectable()
export class BookOfferService extends BookOfferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
