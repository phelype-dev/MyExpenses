import { ILoginsRepository } from '@modules/accounts/repositories/ILoginRepository';
import { AppError } from '@shared/errors/AppError';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  loginUser: {
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateLoginUseCase {
  constructor(
    @inject('LoginRepository')
    private loginRepository: ILoginsRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const loginInfo = await this.loginRepository.findbyEmail(email);

    if (loginInfo === null) {
      throw new AppError('Email or password incorrect');
    }

    if (!email) {
      throw new AppError('Email or password incorrect');
    }

    if (loginInfo.userActive == false || loginInfo.userActive == null) {
      throw new AppError(
        'Usuário bloquedo, contacte o Administrador do sistema.',
      );
    }

    //A partir daqui será verificação da senha
    const passwordMatch = await compare(password, loginInfo.password);
    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }

    const token = sign({}, '2faa974066a3083a145f300fd3f07f01', {
      subject: loginInfo.loginId,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      loginUser: {
        email: loginInfo.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateLoginUseCase };
