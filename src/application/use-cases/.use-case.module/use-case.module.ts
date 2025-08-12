import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrasctructure/persistence/.database.module/database.module';
import { CreateMemberUsecase } from '../member/create-member/create-member.usecase';

@Module({
  imports: [DatabaseModule],
  providers: [CreateMemberUsecase],
  exports: [CreateMemberUsecase],
})
export class UseCaseModule {}
