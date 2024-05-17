import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CalculateXrpService } from "./calculateXrp.service";
import { CalculateXrpControllerBase } from "./base/calculateXrp.controller.base";

@swagger.ApiTags("calculateXrps")
@common.Controller("calculateXrps")
export class CalculateXrpController extends CalculateXrpControllerBase {
  constructor(protected readonly service: CalculateXrpService) {
    super(service);
  }
}
