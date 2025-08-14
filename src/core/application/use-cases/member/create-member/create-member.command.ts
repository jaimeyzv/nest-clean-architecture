import { CreateMemberRequest } from './create-member.request';

export class CreateMemberCommand {
  constructor(public readonly request: CreateMemberRequest) {}
}
