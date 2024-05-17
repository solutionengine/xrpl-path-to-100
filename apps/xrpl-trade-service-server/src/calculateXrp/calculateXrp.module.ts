import { Module } from "@nestjs/common";
import { CalculateXrpModuleBase } from "./base/calculateXrp.module.base";
import { CalculateXrpService } from "./calculateXrp.service";
import { CalculateXrpController } from "./calculateXrp.controller";
import { CalculateXrpResolver } from "./calculateXrp.resolver";

@Module({
  imports: [CalculateXrpModuleBase],
  controllers: [CalculateXrpController],
  providers: [CalculateXrpService, CalculateXrpResolver],
  exports: [CalculateXrpService],
})
export class CalculateXrpModule {}
