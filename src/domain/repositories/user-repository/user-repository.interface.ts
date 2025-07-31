import { User } from 'src/domain/entities/user/user';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  findById(id: number): Promise<User | null>;
  update(id: number, data: Partial<User>): Promise<User>;
  delete(id: number): Promise<void>;
}
