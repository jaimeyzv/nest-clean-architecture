import { MemberDomain } from '../entities/member.domain';

export interface IMemberRepository {
  //findAll(): Promise<User[]>;
  findById(id: number): Promise<MemberDomain | null>;
  save(domain: MemberDomain): Promise<MemberDomain>;
  //update(id: number, data: Partial<User>): Promise<User>;
  //delete(id: number): Promise<void>;
}
