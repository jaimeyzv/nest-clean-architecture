import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IMemberRepository } from 'src/core/domain/repositories/member-repository.interface';
import { Repository } from 'typeorm';
import { MemberEntity } from '../entities/member.entity';
import { MemberDomain } from 'src/core/domain/entities/member.domain';

@Injectable()
export class MemberRepository implements IMemberRepository {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly repo: Repository<MemberEntity>,
  ) {}

  async save(domain: MemberDomain): Promise<MemberDomain> {
    const entity = this.repo.create({
      firstName: domain.lastName,
      lastName: domain.lastName,
      element: domain.element,
      role: domain.role,
      birthDate: domain.birthDate,
    });

    const saved = await this.repo.save(entity);
    return new MemberDomain(
      saved.memberId,
      saved.firstName,
      saved.lastName,
      //saved.element as unknown as Element,
      null,
      //saved.role,
      null,
      saved.birthDate,
    );
  }

  async findById(id: number): Promise<MemberDomain | null> {
    const member = await this.repo.findOne({ where: { memberId: id } });
    if (!member) return null;

    return new MemberDomain(
      member.memberId,
      member.firstName,
      member.lastName,
      //saved.element as unknown as Element,
      null,
      //saved.role,
      null,
      member.birthDate,
    );
  }
}
