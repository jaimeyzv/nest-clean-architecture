import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user/user';
import { IUserRepository } from 'src/domain/repositories/user-repository/user-repository.interface';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: number, data: Partial<User>): Promise<User> {
    return this.userRepository.update(id, data);
  }
}
