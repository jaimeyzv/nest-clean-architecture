import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { RequirementEntity } from './requirement.entity';

@Entity('GroupActivities')
export class GroupActivityEntity {
  @PrimaryGeneratedColumn('increment', { name: 'GroupActivityId' })
  groupActivityId: number;

  @Column({ name: 'Name' })
  name: string;

  @Column({ name: 'Description' })
  description: string;

  @Column({ name: 'Date' })
  date: Date;

  @Column({ name: 'Place' })
  place: string;

  @Column({ name: 'UserId' })
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.groupActivities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'UserId' })
  user: UserEntity;

  @OneToMany(() => RequirementEntity, (req) => req.groupActivity)
  requirements: RequirementEntity[];
}
