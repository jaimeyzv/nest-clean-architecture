import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrasctructure/persistence/.database.module/database.module';
import { UseCaseModule } from './application/use-cases/.use-case.module/use-case.module';
import { MemberController } from './presentation/member/member.controller';
import { typeOrmConfig } from './infrasctructure/persistence/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    DatabaseModule,
    UseCaseModule,
  ],
  controllers: [MemberController],
  providers: [],
})
export class AppModule {}
