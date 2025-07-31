import { Inject, Injectable } from '@nestjs/common';
import { Requirement } from 'src/domain/entities/requirement/requirement';
import { IRequirementRepository } from 'src/domain/repositories/requirement-repository/requirement-repository.interface';

@Injectable()
export class GetRequirementByGroupActivityUsecase {
  constructor(
    @Inject('IRequirementRepository')
    private readonly requirementRepository: IRequirementRepository,
  ) {}

  async execute(groupActivityId: number): Promise<Requirement[] | null> {
    return await this.requirementRepository.findAllByGroupActivityId(
      groupActivityId,
    );
  }
}
