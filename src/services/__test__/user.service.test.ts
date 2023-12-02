import { IUserRepository } from '../../interface/userRepository.interface';
import { MockUserRepository } from '../../repository/mockUser.repository';
import { UserService } from '../user.service';

describe('userService', () => {
  let repository: IUserRepository;

  beforeEach(() => {
    repository = new MockUserRepository();
  });

  afterEach(() => {
    repository = {} as MockUserRepository;
  });

  describe('createOneUser', () => {
    test('should create user', async () => {
      const service = new UserService(repository);
      // continue tomorrow
      // const result = await
    });

    test('should throw error user with user allready exist', () => {
      const a = 10;
      expect(a).toEqual(10);
    });
  });
});
