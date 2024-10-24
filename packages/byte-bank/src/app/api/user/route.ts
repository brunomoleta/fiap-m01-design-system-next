import { NextApiResponse, NextApiRequest } from 'next';
import { UserService } from "$/server/services/user.service";

export default async function registerUser(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'POST'){
    res.status(405).json({ message: 'Only POST request is supported' });
    return;
  }
  const {name, email, password} = req.body;
  if (!email || !password || !name) {
    res.status(400).json({ error: "São necessários os campos: name, email e password." });
    return;
  }

  const userService = new UserService();

  try {
    const newUser = await userService.createUser({name, email, password});
    res.status(201).json({
      message: 'Usuário criado com sucesso',
      user: newUser
    });
  } catch (e) {
    let errorMessage = "An error occurred.";
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    throw new Error(errorMessage);
  }
}