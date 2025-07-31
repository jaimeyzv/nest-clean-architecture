import { GroupActivity } from 'src/domain/entities/group-activity/group-activity';

export interface IGroupActivityRepository {
  findAllByUserId(userId: number): Promise<GroupActivity[]>;
  save(user: GroupActivity): Promise<GroupActivity>;
  delete(id: number): Promise<void>;
}
