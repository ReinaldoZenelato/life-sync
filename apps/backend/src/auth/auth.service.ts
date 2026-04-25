import { Injectable } from '@nestjs/common';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  async register(dto: RegisterDto): Promise<AuthResponseDto> {
    return {
      accessToken: 'jwt-placeholder-token',
      name: dto.name,
      email: dto.email,
    };
  }

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    return {
      accessToken: 'jwt-placeholder-token',
      name: 'RZ Developer',
      email: dto.email,
    };
  }
}
