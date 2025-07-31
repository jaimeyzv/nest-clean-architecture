import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateRequirementUsecase } from 'src/application/use-cases/requirement/create-requirement/create-requirement.usecase';
import { DeleteRequirementUsecase } from 'src/application/use-cases/requirement/delete-requirement/delete-requirement.usecase';
import { GetRequirementByGroupActivityUsecase } from 'src/application/use-cases/requirement/get-requirement-by-group-activity/get-requirement-by-group-activity.usecase';

@Controller('requirements')
export class RequirementController {
  constructor(
    private readonly createRequirementUsecase: CreateRequirementUsecase,
    private readonly deleteRequirementUsecase: DeleteRequirementUsecase,
    private readonly getRequirementByGroupActivityUsecase: GetRequirementByGroupActivityUsecase,
  ) {}

  @Post()
  async create(
    @Body()
    dto: {
      requirementId: number;
      groupActivityId: number;
      name: string;
    },
  ) {
    return this.createRequirementUsecase.execute(dto);
  }

  @Get(':groupActivityId')
  getById(@Param('groupActivityId', ParseIntPipe) groupActivityId: number) {
    return this.getRequirementByGroupActivityUsecase.execute(groupActivityId);
  }

  @Delete(':requirementId')
  delete(@Param('requirementId', ParseIntPipe) requirementId: number) {
    return this.deleteRequirementUsecase.execute(requirementId);
  }
}
