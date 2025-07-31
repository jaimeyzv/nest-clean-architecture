import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GroupActivityEntity } from './group-activity.entity';

@Entity('GroupActivityRequirements')
export class RequirementEntity {
  @PrimaryGeneratedColumn('increment', { name: 'GroupActivityRequirementId' })
  requirementId: number;

  @Column({ name: 'Name' })
  name: string;

  @Column({ name: 'GroupActivityId' })
  groupActivityId: number;

  @ManyToOne(() => GroupActivityEntity, (entity) => entity.requirements, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'GroupActivityId' })
  groupActivity: GroupActivityEntity;
}
