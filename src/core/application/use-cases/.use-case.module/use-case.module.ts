import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrasctructure/persistence/.database.module/database.module';
import { CreateMemberHandler } from '../member/create-member/create-member.handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [DatabaseModule, CqrsModule],
  providers: [CreateMemberHandler],
  exports: [CreateMemberHandler],
})
export class UseCaseModule {}
