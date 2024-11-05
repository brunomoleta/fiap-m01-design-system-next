import bcrypt from "bcrypt";
import UserModel from "../models/user.model";

export class UserRepository {
  private readonly model;

  constructor() {
    this.model = UserModel;
  }

  async create(data: { email: string; password: string; name: string }) {
    const saltRounds = 10;
    data.password = await bcrypt.hash(data.password, saltRounds);

    return this.model.create(data);
  }

  async findByEmail(email: string) {
    return this.model.findOne({ email });
  }

  async update(
    id: string,
    data: { name?: string; email?: string; password?: string }
  ) {
    if (data.password) {
      const saltRounds = 10;
      data.password = await bcrypt.hash(data.password, saltRounds);
    }

    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async findById(id: string) {
    return this.model.findById(id);
  }
}
