import { Inject, Injectable } from '@nestjs/common';
import { GroupActivity } from 'src/domain/entities/group-activity/group-activity';
import { IGroupActivityRepository } from 'src/domain/repositories/group-activity-repository/group-activity-repository.interface';

@Injectable()
export class CreateGroupActivityUsecase {
  constructor(
    @Inject('IGroupActivityRepository')
    private readonly groupActivityRepository: IGroupActivityRepository,
  ) {}

  async execute(data: {
    groupActivityId: number;
    name: string;
    description: string;
    date: Date;
    place: string;
    userId: number;
  }): Promise<GroupActivity> {
    const newGroupActivity = new GroupActivity(
      data.groupActivityId,
      data.name,
      data.description,
      data.date,
      data.place,
      data.userId,
    );
    return this.groupActivityRepository.save(newGroupActivity);
  }
}
