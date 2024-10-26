import jwt, {JwtPayload as DefaultJwtPayload} from 'jsonwebtoken';
import {NextApiRequest, NextApiResponse} from 'next';

interface JwtPayload extends DefaultJwtPayload {
  _id: string;
}

export const verifyToken = async (req: NextApiRequest, res: NextApiResponse): Promise<JwtPayload | null> => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    res.status(401).json({ message: 'Token not found. Please log in.' });
    return null;
  }

  const token = authHeader.split(' ')[1];

  try {
    return jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;

  } catch (err) {
    // Invalid token
    res.status(403).json({ message: 'Invalid or expired token.' });
    return null;
  }
};