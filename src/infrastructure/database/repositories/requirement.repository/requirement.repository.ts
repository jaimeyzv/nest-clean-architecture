import { InjectRepository } from '@nestjs/typeorm';
import { IRequirementRepository } from 'src/domain/repositories/requirement-repository/requirement-repository.interface';
import { RequirementEntity } from '../../entities/requirement.entity';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Requirement } from 'src/domain/entities/requirement/requirement';

@Injectable()
export class RequirementRepository implements IRequirementRepository {
  constructor(
    @InjectRepository(RequirementEntity)
    private readonly repo: Repository<RequirementEntity>,
  ) {}

  async findAllByGroupActivityId(
    groupActivityId: number,
  ): Promise<Requirement[]> {
    const requirements = await this.repo.find({
      where: { groupActivityId: groupActivityId },
    });

    return requirements.map(
      (row) =>
        new Requirement(row.requirementId, row.name, row.groupActivityId),
    );
  }

  async save(domain: Requirement): Promise<Requirement> {
    const entity = this.repo.create({
      requirementId: domain.RequirementId,
      name: domain.Name,
      groupActivityId: domain.GroupActivityId,
    });

    const saved = await this.repo.save(entity);

    return new Requirement(
      saved.requirementId,
      saved.name,
      saved.groupActivityId,
    );
  }

  async delete(requirementId: number): Promise<void> {
    const entity = await this.repo.findOne({
      where: { requirementId: requirementId },
    });

    if (!entity) {
      throw new NotFoundException('Requirement not found');
    }

    await this.repo.remove(entity);
  }
}
