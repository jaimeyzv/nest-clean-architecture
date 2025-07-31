import { CreateUserUseCase } from '../user/create-user/create-user.usecase';
import { GetUsersUseCase } from '../user/get-user/get-user.usecase';
import { Module } from '@nestjs/common';
import { UpdateUserUseCase } from '../user/update-user/update-user.usecase';
import { DeleteUserUseCase } from '../user/delete-user/delete-user.usecase';
import { GetUserByIdUseCase } from '../user/get-user-by-id/get-user-by-id.usecase';
import { CreateGroupActivityUsecase } from '../group-activity/create-group-activity/create-group-activity.usecase';
import { GetGroupActivitiesByUserUsecase } from '../group-activity/get-group-activities-by-user/get-group-activities-by-user.usecase';
import { CreateRequirementUsecase } from '../requirement/create-requirement/create-requirement.usecase';
import { DeleteRequirementUsecase } from '../requirement/delete-requirement/delete-requirement.usecase';
import { GetRequirementByGroupActivityUsecase } from '../requirement/get-requirement-by-group-activity/get-requirement-by-group-activity.usecase';
import { DatabaseModule } from 'src/infrastructure/database/.database.module/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    GetUsersUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    GetUserByIdUseCase,
    CreateGroupActivityUsecase,
    GetGroupActivitiesByUserUsecase,
    CreateRequirementUsecase,
    DeleteRequirementUsecase,
    GetRequirementByGroupActivityUsecase,
  ],
  exports: [
    GetUsersUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    GetUserByIdUseCase,
    CreateGroupActivityUsecase,
    GetGroupActivitiesByUserUsecase,
    CreateRequirementUsecase,
    DeleteRequirementUsecase,
    GetRequirementByGroupActivityUsecase,
  ],
})
export class UseCaseModule {}
