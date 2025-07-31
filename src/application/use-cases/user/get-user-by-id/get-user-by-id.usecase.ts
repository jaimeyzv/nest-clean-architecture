import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user/user';
import { IUserRepository } from 'src/domain/repositories/user-repository/user-repository.interface';

@Injectable()
export class GetUserByIdUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: number): Promise<User | null> {
    return await this.userRepository.findById(id);
  }
}
