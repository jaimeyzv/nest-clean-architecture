import { Injectable, Inject } from '@nestjs/common';
import { Requirement } from 'src/domain/entities/requirement/requirement';
import { IRequirementRepository } from 'src/domain/repositories/requirement-repository/requirement-repository.interface';

@Injectable()
export class CreateRequirementUsecase {
  constructor(
    @Inject('IRequirementRepository')
    private readonly requirementRepository: IRequirementRepository,
  ) {}

  async execute(data: {
    requirementId: number;
    name: string;
    groupActivityId: number;
  }): Promise<Requirement> {
    const newRequirement = new Requirement(
      data.requirementId,
      data.name,
      data.groupActivityId,
    );
    return this.requirementRepository.save(newRequirement);
  }
}
