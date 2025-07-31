import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/user/create-user/create-user.usecase';
import { DeleteUserUseCase } from 'src/application/use-cases/user/delete-user/delete-user.usecase';
import { GetUserByIdUseCase } from 'src/application/use-cases/user/get-user-by-id/get-user-by-id.usecase';
import { GetUsersUseCase } from 'src/application/use-cases/user/get-user/get-user.usecase';
import { UpdateUserUseCase } from 'src/application/use-cases/user/update-user/update-user.usecase';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUsecase: GetUsersUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
  ) {}

  @Post()
  async create(
    @Body()
    dto: {
      userId: number;
      firstName: string;
      lastName: string;
      age: number;
      gender: string;
    },
  ) {
    return this.createUserUseCase.execute(dto);
  }

  @Get()
  async findAll() {
    return await this.getUserUsecase.execute();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.getUserByIdUseCase.execute(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    dto: {
      userId: number;
      firstName: string;
      lastName: string;
      age: number;
      gender: string;
    },
  ) {
    return this.updateUserUseCase.execute(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteUserUseCase.execute(id);
  }
}
