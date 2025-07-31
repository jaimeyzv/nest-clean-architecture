import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user/user';
import { IUserRepository } from 'src/domain/repositories/user-repository/user-repository.interface';

@Injectable()
export class GetUsersUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
