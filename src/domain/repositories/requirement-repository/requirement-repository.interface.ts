import { Requirement } from 'src/domain/entities/requirement/requirement';

export interface IRequirementRepository {
  findAllByGroupActivityId(groupActivityId: number): Promise<Requirement[]>;
  save(domain: Requirement): Promise<Requirement>;
  delete(requirementId: number): Promise<void>;
}
