import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrasctructure/persistence/.database.module/database.module';
import { UseCaseModule } from './core/application/use-cases/.use-case.module/use-case.module';
import { MemberController } from './presentation/controllers/member.controller';
import { typeOrmConfig } from './infrasctructure/persistence/typeorm.config';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CqrsModule,
    DatabaseModule,
    UseCaseModule,
  ],
  controllers: [MemberController],
  providers: [],
})
export class AppModule {}
