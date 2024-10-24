import UserModel from '../models/user.model';

export class UserRepository {
  private readonly model;

  constructor () {
    this.model = UserModel;
  }

  async create(data: {email: string, password: string, name: string}) {
    return this.model.create(data);
  }
}