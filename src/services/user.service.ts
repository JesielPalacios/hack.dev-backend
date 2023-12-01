import { IUserRepository } from '../interface/userRepository.interface';

export class UserService {
  private _repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  login(input: any) {}

  createUser(input: any) {}
}
