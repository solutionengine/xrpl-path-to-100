/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CalculateXrpWhereUniqueInput } from "./CalculateXrpWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CalculateXrpUpdateInput } from "./CalculateXrpUpdateInput";

@ArgsType()
class UpdateCalculateXrpArgs {
  @ApiProperty({
    required: true,
    type: () => CalculateXrpWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CalculateXrpWhereUniqueInput)
  @Field(() => CalculateXrpWhereUniqueInput, { nullable: false })
  where!: CalculateXrpWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CalculateXrpUpdateInput,
  })
  @ValidateNested()
  @Type(() => CalculateXrpUpdateInput)
  @Field(() => CalculateXrpUpdateInput, { nullable: false })
  data!: CalculateXrpUpdateInput;
}

export { UpdateCalculateXrpArgs as UpdateCalculateXrpArgs };
