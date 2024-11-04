import request from "../config";

// Obter informações do usuário logado
export const getUserInfo = () => request.get("/user");

// Registrar um novo usuário
export const registerUser = (userData: {
  name: string;
  email: string;
  password: string;
}) => request.post("/user/register", userData);

// Login de usuário
export const loginUser = (loginData: { email: string; password: string }) =>
  request.post("/user/login", loginData);
