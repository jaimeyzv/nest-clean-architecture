import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateGroupActivityUsecase } from 'src/application/use-cases/group-activity/create-group-activity/create-group-activity.usecase';
import { GetGroupActivitiesByUserUsecase } from 'src/application/use-cases/group-activity/get-group-activities-by-user/get-group-activities-by-user.usecase';

@Controller('group-activities')
export class GroupActivityController {
  constructor(
    private readonly createGroupActivityUsecase: CreateGroupActivityUsecase,
    private readonly getGroupActivitiesByUserUsecase: GetGroupActivitiesByUserUsecase,
  ) {}

  @Post()
  async create(
    @Body()
    dto: {
      groupActivityId: number;
      name: string;
      description: string;
      date: Date;
      place: string;
      userId: number;
    },
  ) {
    return this.createGroupActivityUsecase.execute(dto);
  }

  @Get(':userId')
  getById(@Param('userId', ParseIntPipe) userId: number) {
    return this.getGroupActivitiesByUserUsecase.execute(userId);
  }
}
