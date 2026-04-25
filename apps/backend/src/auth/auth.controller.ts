import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthControllerDoc } from './docs/auth.controller.doc';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController extends AuthControllerDoc {
  constructor(private readonly authService: AuthService) {
    super();
  }

  @Post('register')
  override register(@Body() dto: RegisterDto): Promise<AuthResponseDto> {
    return this.authService.register(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  override login(@Body() dto: LoginDto): Promise<AuthResponseDto> {
    return this.authService.login(dto);
  }
}
