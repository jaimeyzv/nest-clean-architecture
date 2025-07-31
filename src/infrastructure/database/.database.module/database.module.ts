import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository/user.repository';
import { UserEntity } from '../entities/user.entity';
import { GroupActivityRepository } from '../repositories/group-activity.repository/group-activity.repository';
import { GroupActivityEntity } from '../entities/group-activity.entity';
import { RequirementEntity } from '../entities/requirement.entity';
import { RequirementRepository } from '../repositories/requirement.repository/requirement.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      GroupActivityEntity,
      RequirementEntity,
    ]),
  ],
  providers: [
    UserRepository,
    {
      provide: 'IUserRepository', // la interfaz como token
      useClass: UserRepository, // implementación concreta
    },
    GroupActivityRepository,
    {
      provide: 'IGroupActivityRepository', // la interfaz como token
      useClass: GroupActivityRepository, // implementación concreta
    },
    RequirementRepository,
    {
      provide: 'IRequirementRepository', // la interfaz como token
      useClass: RequirementRepository, // implementación concreta
    },
  ],
  exports: [
    'IUserRepository',
    'IGroupActivityRepository',
    'IRequirementRepository',
  ],
})
export class DatabaseModule {}
