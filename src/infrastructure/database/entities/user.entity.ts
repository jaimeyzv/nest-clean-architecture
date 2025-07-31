import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { GroupActivityEntity } from './group-activity.entity';

@Entity('Users')
export class UserEntity {
  @PrimaryGeneratedColumn('increment', { name: 'UserId' })
  userId: number;

  @Column({ name: 'FirstName' })
  firstName: string;

  @Column({ name: 'LastName' })
  lastName: string;

  @Column({ name: 'Age' })
  age: number;

  @Column({ name: 'Gender' })
  gender: string;

  @OneToMany(() => GroupActivityEntity, (activity) => activity.user)
  groupActivities: GroupActivityEntity[];
}
