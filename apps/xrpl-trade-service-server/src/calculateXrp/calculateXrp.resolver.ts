import * as graphql from "@nestjs/graphql";
import { CalculateXrpResolverBase } from "./base/calculateXrp.resolver.base";
import { CalculateXrp } from "./base/CalculateXrp";
import { CalculateXrpService } from "./calculateXrp.service";

@graphql.Resolver(() => CalculateXrp)
export class CalculateXrpResolver extends CalculateXrpResolverBase {
  constructor(protected readonly service: CalculateXrpService) {
    super(service);
  }
}
