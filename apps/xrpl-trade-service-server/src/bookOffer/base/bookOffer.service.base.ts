/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BookOffer as PrismaBookOffer } from "@prisma/client";
import { BookOfferDto } from "../BookOfferDto";

export class BookOfferServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BookOfferCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bookOffer.count(args);
  }

  async bookOffers<T extends Prisma.BookOfferFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookOfferFindManyArgs>
  ): Promise<PrismaBookOffer[]> {
    return this.prisma.bookOffer.findMany<Prisma.BookOfferFindManyArgs>(args);
  }
  async bookOffer<T extends Prisma.BookOfferFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookOfferFindUniqueArgs>
  ): Promise<PrismaBookOffer | null> {
    return this.prisma.bookOffer.findUnique(args);
  }
  async createBookOffer<T extends Prisma.BookOfferCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookOfferCreateArgs>
  ): Promise<PrismaBookOffer> {
    return this.prisma.bookOffer.create<T>(args);
  }
  async updateBookOffer<T extends Prisma.BookOfferUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookOfferUpdateArgs>
  ): Promise<PrismaBookOffer> {
    return this.prisma.bookOffer.update<T>(args);
  }
  async deleteBookOffer<T extends Prisma.BookOfferDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookOfferDeleteArgs>
  ): Promise<PrismaBookOffer> {
    return this.prisma.bookOffer.delete(args);
  }
  async FetchBookOffers(args: string): Promise<BookOfferDto[]> {
    throw new Error("Not implemented");
  }
  async GetBookOffers(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
