/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CalculateXrpService } from "../calculateXrp.service";
import { CalculateXrpCreateInput } from "./CalculateXrpCreateInput";
import { CalculateXrp } from "./CalculateXrp";
import { CalculateXrpFindManyArgs } from "./CalculateXrpFindManyArgs";
import { CalculateXrpWhereUniqueInput } from "./CalculateXrpWhereUniqueInput";
import { CalculateXrpUpdateInput } from "./CalculateXrpUpdateInput";
import { CalculateXrpDto } from "../CalculateXrpDto";

export class CalculateXrpControllerBase {
  constructor(protected readonly service: CalculateXrpService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CalculateXrp })
  async createCalculateXrp(
    @common.Body() data: CalculateXrpCreateInput
  ): Promise<CalculateXrp> {
    return await this.service.createCalculateXrp({
      data: data,
      select: {
        createdAt: true,
        currentPrice: true,
        id: true,
        requiredXrpAmount: true,
        targetPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CalculateXrp] })
  @ApiNestedQuery(CalculateXrpFindManyArgs)
  async calculateXrps(@common.Req() request: Request): Promise<CalculateXrp[]> {
    const args = plainToClass(CalculateXrpFindManyArgs, request.query);
    return this.service.calculateXrps({
      ...args,
      select: {
        createdAt: true,
        currentPrice: true,
        id: true,
        requiredXrpAmount: true,
        targetPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CalculateXrp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async calculateXrp(
    @common.Param() params: CalculateXrpWhereUniqueInput
  ): Promise<CalculateXrp | null> {
    const result = await this.service.calculateXrp({
      where: params,
      select: {
        createdAt: true,
        currentPrice: true,
        id: true,
        requiredXrpAmount: true,
        targetPrice: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CalculateXrp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCalculateXrp(
    @common.Param() params: CalculateXrpWhereUniqueInput,
    @common.Body() data: CalculateXrpUpdateInput
  ): Promise<CalculateXrp | null> {
    try {
      return await this.service.updateCalculateXrp({
        where: params,
        data: data,
        select: {
          createdAt: true,
          currentPrice: true,
          id: true,
          requiredXrpAmount: true,
          targetPrice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CalculateXrp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCalculateXrp(
    @common.Param() params: CalculateXrpWhereUniqueInput
  ): Promise<CalculateXrp | null> {
    try {
      return await this.service.deleteCalculateXrp({
        where: params,
        select: {
          createdAt: true,
          currentPrice: true,
          id: true,
          requiredXrpAmount: true,
          targetPrice: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/calculate-xrp-amount")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CalculateXrpAmount(
    @common.Body()
    body: CalculateXrpDto
  ): Promise<string> {
    return this.service.CalculateXrpAmount(body);
  }

  @common.Post("/calculate-xrp")
  @swagger.ApiOkResponse({
    type: CalculateXrpDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CalculateXrpValue(
    @common.Body()
    body: CalculateXrpDto
  ): Promise<CalculateXrpDto> {
    return this.service.CalculateXrpValue(body);
  }
}
