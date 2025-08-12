import { Inject, Injectable } from '@nestjs/common';
import { MemberDomain } from 'src/core/domain/entities/member.domain';
import { IMemberRepository } from 'src/core/domain/repositories/member-repository.interface';
import { Role } from 'src/core/domain/valueObjects/role.valueobject';
import { Element } from 'src/core/domain/valueObjects/element.valueobject';

@Injectable()
export class CreateMemberUsecase {
  constructor(
    @Inject('IMemberRepository')
    private readonly memberRepository: IMemberRepository,
  ) {}

  async execute(data: {
    firstName: string;
    lastName: string;
    element: Element;
    role: Role;
    birthDate: Date;
  }): Promise<MemberDomain> {
    const newMember = new MemberDomain(
      0, // Assuming ID is auto-generated
      data.firstName,
      data.lastName,
      data.element,
      data.role,
      data.birthDate,
    );
    return this.memberRepository.save(newMember);
  }
}
