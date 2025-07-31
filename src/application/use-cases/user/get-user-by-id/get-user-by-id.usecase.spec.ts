import { GetUserByIdUsecase } from './get-user-by-id.usecase';

describe('GetUserByIdUsecase', () => {
  it('should be defined', () => {
    expect(new GetUserByIdUsecase()).toBeDefined();
  });
});
