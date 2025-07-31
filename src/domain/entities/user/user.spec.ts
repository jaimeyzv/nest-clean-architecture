import { UserEntity } from './user';

describe('User', () => {
  it('should be defined', () => {
    expect(new UserEntity()).toBeDefined();
  });
});
