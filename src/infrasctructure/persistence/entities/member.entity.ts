import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Members')
export class MemberEntity {
  @PrimaryGeneratedColumn('increment', { name: 'MemberId' })
  memberId: number;

  @Column({ name: 'FirstName' })
  firstName: string;

  @Column({ name: 'LastName' })
  lastName: string;

  @Column({ name: 'Element' })
  element: string;

  @Column({ name: 'Role' })
  role: string;

  @Column({ name: 'BirthDate' })
  birthDate: Date;
}
