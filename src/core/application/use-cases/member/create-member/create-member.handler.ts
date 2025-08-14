import { MemberDomain } from 'src/core/domain/entities/member.domain';
import { IMemberRepository } from 'src/core/domain/repositories/member-repository.interface';
import { CreateMemberCommand } from './create-member.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { toDomainElement, toDomainRole } from './create-member.mapper';
import { Inject } from '@nestjs/common';

@CommandHandler(CreateMemberCommand)
export class CreateMemberHandler
  implements ICommandHandler<CreateMemberCommand>
{
  constructor(
    @Inject('IMemberRepository')
    private readonly memberRepository: IMemberRepository,
  ) {}

  async execute({ request }: CreateMemberCommand) {
    const member = new MemberDomain(
      0, // id will be set by persistence
      request.firstName,
      request.lastName,
      toDomainElement(request.element),
      toDomainRole(request.role),
      new Date(request.birthDate),
    );

    const saved = await this.memberRepository.save(member);
    return saved;
  }
}
