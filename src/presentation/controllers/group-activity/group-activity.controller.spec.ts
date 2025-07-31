import { Test, TestingModule } from '@nestjs/testing';
import { GroupActivityController } from './group-activity.controller';

describe('GroupActivityController', () => {
  let controller: GroupActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupActivityController],
    }).compile();

    controller = module.get<GroupActivityController>(GroupActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
