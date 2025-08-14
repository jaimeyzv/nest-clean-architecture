import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMemberCommand } from 'src/core/application/use-cases/member/create-member/create-member.command';
import { CreateMemberRequest } from 'src/core/application/use-cases/member/create-member/create-member.request';

@Controller('members')
export class MemberController {
  constructor(
    private readonly commands: CommandBus,
    private readonly queries: QueryBus,
  ) {}

  @Post()
  async create(
    @Body()
    dto: CreateMemberRequest,
  ) {
    return this.commands.execute(new CreateMemberCommand(dto));
  }
}
