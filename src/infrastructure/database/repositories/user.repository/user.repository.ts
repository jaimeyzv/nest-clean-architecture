import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/domain/entities/user/user';
import { IUserRepository } from 'src/domain/repositories/user-repository/user-repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repo: Repository<UserEntity>,
  ) {}

  async save(user: User): Promise<User> {
    const userEntity = this.repo.create({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
    });

    const saved = await this.repo.save(userEntity);
    return new User(
      saved.userId,
      saved.firstName,
      saved.lastName,
      saved.age,
      saved.gender,
    );
  }

  async findAll(): Promise<User[]> {
    const rows = await this.repo.find();
    return rows.map(
      (row) =>
        new User(row.userId, row.firstName, row.lastName, row.age, row.gender),
    );
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.repo.findOne({ where: { userId: id } });
    if (!user) return null;
    return new User(
      user.userId,
      user.firstName,
      user.lastName,
      user.age,
      user.gender,
    );
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    const user = await this.repo.findOne({ where: { userId: id } });
    if (!user) throw new NotFoundException('User not found');

    const updated = this.repo.merge(user, data);
    return this.repo.save(updated);
  }

  async delete(id: number): Promise<void> {
    const user = await this.repo.findOne({ where: { userId: id } });
    if (!user) throw new NotFoundException('User not found');

    await this.repo.remove(user);
  }
}
