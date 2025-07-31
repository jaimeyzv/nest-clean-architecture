import { Repository } from 'typeorm';
import { GroupActivityEntity } from '../../entities/group-activity.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IGroupActivityRepository } from 'src/domain/repositories/group-activity-repository/group-activity-repository.interface';
import { GroupActivity } from 'src/domain/entities/group-activity/group-activity';

@Injectable()
export class GroupActivityRepository implements IGroupActivityRepository {
  constructor(
    @InjectRepository(GroupActivityEntity)
    private readonly repo: Repository<GroupActivityEntity>,
  ) {}

  async findAllByUserId(userId: number): Promise<GroupActivity[]> {
    const activities = await this.repo.find({
      where: { user: { userId: userId } },
    });

    return activities.map(
      (row) =>
        new GroupActivity(
          row.groupActivityId,
          row.name,
          row.description,
          row.date,
          row.place,
          row.userId,
        ),
    );
  }

  async save(domain: GroupActivity): Promise<GroupActivity> {
    const groupActivityEntity = this.repo.create({
      groupActivityId: domain.GroupActivityId,
      name: domain.Name,
      description: domain.Description,
      date: domain.Date,
      place: domain.Place,
      userId: domain.UserId,
    });

    const saved = await this.repo.save(groupActivityEntity);
    return new GroupActivity(
      saved.groupActivityId,
      saved.name,
      saved.description,
      saved.date,
      saved.place,
      saved.userId,
    );
  }

  async delete(id: number): Promise<void> {
    const groupActivityEntity = await this.repo.findOne({
      where: { groupActivityId: id },
    });

    if (!groupActivityEntity)
      throw new NotFoundException('GroupActivity not found');

    await this.repo.remove(groupActivityEntity);
  }
}
