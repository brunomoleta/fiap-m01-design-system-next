import jwt, {JwtPayload as DefaultJwtPayload} from 'jsonwebtoken';
import { NextRequest } from "next/server";

interface JwtPayload extends DefaultJwtPayload {
  _id: string;
  name: string;
}

export const verifyToken = (token: string): JwtPayload | null => {
  const secret: string = 'a6.-hN;Gwp+#3V8'

  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (e) {
    let errorMessage = "An error occurred.";
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    throw new Error(errorMessage);
  }
};

export const verifyBearerToken = (req: NextRequest) => {
  const authorization = req.headers.get('authorization');

  if (!authorization) {
    throw new Error('Token not found. Please log in.');
  }

  const token: string = authorization.split(' ')[1];

  return verifyToken(token);
};