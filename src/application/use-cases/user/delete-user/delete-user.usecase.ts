import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/repositories/user-repository/user-repository.interface';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
