import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CalculateXrpServiceBase } from "./base/calculateXrp.service.base";

@Injectable()
export class CalculateXrpService extends CalculateXrpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
