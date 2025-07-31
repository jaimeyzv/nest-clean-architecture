import { Inject, Injectable } from '@nestjs/common';
import { IRequirementRepository } from 'src/domain/repositories/requirement-repository/requirement-repository.interface';

@Injectable()
export class DeleteRequirementUsecase {
  constructor(
    @Inject('IRequirementRepository')
    private readonly requirementRepository: IRequirementRepository,
  ) {}

  async execute(requirementId: number): Promise<void> {
    await this.requirementRepository.delete(requirementId);
  }
}
