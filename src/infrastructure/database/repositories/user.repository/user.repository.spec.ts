import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  it('should be defined', () => {
    // Provide a mock for the repository dependency
    const mockRepo = {} as any;
    expect(new UserRepository(mockRepo)).toBeDefined();
  });
});
