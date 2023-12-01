import { User } from '../models/user.model';

export interface IUserRepository {
  loin(data: { email: string; password: string }): Promise<any>;
  register(data: User): Promise<User>;
}
