import { Body, Controller, Post } from '@nestjs/common';
import { CreateMemberUsecase } from 'src/application/use-cases/member/create-member/create-member.usecase';
import { Element } from 'src/core/domain/valueObjects/element.valueobject';
import { Role } from 'src/core/domain/valueObjects/role.valueobject';

@Controller('members')
export class MemberController {
  constructor(private readonly createMemberUsecase: CreateMemberUsecase) {}

  @Post()
  async create(
    @Body()
    dto: {
      firstName: string;
      lastName: string;
      element: Element;
      role: Role;
      birthDate: Date;
    },
  ) {
    return this.createMemberUsecase.execute(dto);
  }
}
