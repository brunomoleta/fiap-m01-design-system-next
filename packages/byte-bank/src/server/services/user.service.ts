import {UserRepository} from '$/server/repositories/user.repository';
import {connectMongoDB} from "$/server/libs/mongoDB";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    connectMongoDB();
    this.userRepository = new UserRepository();
  }

  createUser = async (user: { name: string, email: string, password: string }) => {
    try {
      return await this.userRepository.create(user);
    } catch (e) {
      let errorMessage = "An error occurred.";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      throw new Error(errorMessage);
    }
  }
}