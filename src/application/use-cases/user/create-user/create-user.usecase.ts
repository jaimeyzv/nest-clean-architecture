import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user/user';
import { IUserRepository } from 'src/domain/repositories/user-repository/user-repository.interface';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(data: {
    userId: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
  }): Promise<User> {
    const newUser = new User(
      data.userId,
      data.firstName,
      data.lastName,
      data.age,
      data.gender,
    );
    return this.userRepository.save(newUser);
  }
}
