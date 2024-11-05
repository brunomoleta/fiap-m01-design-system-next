import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserRepository } from "$/server/repositories/user.repository";
import { connectMongoDB } from "$/server/libs/mongoDB";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    connectMongoDB();
    this.userRepository = new UserRepository();
  }

  createUser = async (user: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      return await this.userRepository.create(user);
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  };

  login = async ({ email, password }: { email: string; password: string }) => {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Credenciais inválidas.");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Credenciais inválidas.");
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET || "privateKey",
      { expiresIn: "20d" }
    );

    return { token: token, name: user.name };
  };

  updateUser = async (
    id: string,
    data: { name?: string; email?: string; password?: string }
  ) => {
    try {
      return await this.userRepository.update(id, data);
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  };

  getUserById = async (id: string) => {
    try {
      const user = await this.userRepository.findById(id);
      if (!user) {
        throw new Error("Usuário não encontrado.");
      }
      return user;
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  };
}
