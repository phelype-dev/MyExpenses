import { AppError } from '@shared/errors/AppError';
import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { LoginRepository } from '@modules/Users/infra/typeorm/repositories/LoginRespository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('Token is missing authorization header', 401);
  }
  const [, token] = authHeader.split(' ');
  try {
    const { sub: loginId } = verify(token, process.env.SECRET_KEY) as IPayload;
    const loginRepository = new LoginRepository();
    const login = await loginRepository.findById(loginId);
    if (!login) {
      throw new AppError('user does not exist', 401);
    }
    request.login = {
      loginId: loginId,
    };
    next();
  } catch {
    throw new AppError(' Invalid token', 401);
  }
}
