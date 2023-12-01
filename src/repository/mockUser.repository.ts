import { IUserRepository } from '../interface/userRepository.interface';
import { User } from '../models/user.model';

export class MockUserRepository implements IUserRepository {
  loin(data: { email: string; password: string }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  register(data: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
