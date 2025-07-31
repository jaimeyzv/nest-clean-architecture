import { Module } from '@nestjs/common';
import { UserController } from './presentation/controllers/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrastructure/database/.database.module/database.module';
import { typeOrmConfig } from './infrastructure/database/typeorm.config';
import { UseCaseModule } from './application/use-cases/.use-case.module/use-case.module';
import { GroupActivityController } from './presentation/controllers/group-activity/group-activity.controller';
import { RequirementController } from './presentation/controllers/requirement/requirement.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    DatabaseModule,
    UseCaseModule,
  ],
  controllers: [UserController, GroupActivityController, RequirementController],
  providers: [],
})
export class AppModule {}
