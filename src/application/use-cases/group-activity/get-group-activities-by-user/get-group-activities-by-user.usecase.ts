import { Inject, Injectable } from '@nestjs/common';
import { GroupActivity } from 'src/domain/entities/group-activity/group-activity';
import { IGroupActivityRepository } from 'src/domain/repositories/group-activity-repository/group-activity-repository.interface';

@Injectable()
export class GetGroupActivitiesByUserUsecase {
  constructor(
    @Inject('IGroupActivityRepository')
    private readonly groupActivityRepository: IGroupActivityRepository,
  ) {}

  async execute(userId: number): Promise<GroupActivity[] | null> {
    return await this.groupActivityRepository.findAllByUserId(userId);
  }
}
