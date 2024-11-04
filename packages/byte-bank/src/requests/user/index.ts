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

// Obter informações do usuário logado
export const getUserById = (id: string) => request.get("/user/" + id);

// Atualizar informações do usuário
export const updateUser = (
  id: string,
  userData: { name: string; email: string; password?: string }
) => request.patch(`/user/${id}`, userData);
